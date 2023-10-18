function closeModal() {
    document.getElementById('welcomeOverlay').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
    const diameterRange = document.getElementById("diameter");
    const diameterValue = document.getElementById("diameter-value");
    const toppingSelect = document.getElementById("topping");
    const pizzaImage = document.getElementById("pizza-img");
    const ingredientsList = document.getElementById("ingredients-list");
    const calculateButton = document.getElementById("calculate-button");
    const doughAmount = document.getElementById("dough-amount");
	
	
	
    // Оновлення значення діаметра піци на повзунку
    diameterRange.addEventListener("input", function() {
        diameterValue.textContent = `${diameterRange.value} см`;
    });

    // Обробник події кліку на кнопку "Розрахувати кількість інгредієнтів"
    calculateButton.addEventListener("click", function() {
        // Отримуємо обрані значення
        const selectedDiameter = parseFloat(diameterRange.value); // Перетворення в число з плаваючою комою
        const selectedTopping = toppingSelect.value;

        // Розрахунок кількості тіста
        const dough = (Math.PI * (Math.pow(selectedDiameter / 2, 2) * 0.01) * 175).toFixed(2); // Перетворення в грами


        // Очищаємо список інгредієнтів
        ingredientsList.innerHTML = "";

        // Додаємо інгредієнти в залежності від начинки
        if (selectedTopping === "pepperoni") {
            ingredientsList.innerHTML = `<li>Томатна паста - ${(dough * 0.02).toFixed(2)} г</li>
                                         <li>Моцарела - ${(dough * 0.005).toFixed(2)} г</li>
                                         <li>Салямі - ${(dough * 0.02).toFixed(2)} г</li>
                                         <li>Сир твердий - ${(dough * 0.005).toFixed(2)} г</li>`;
            pizzaImage.src = "папероні.png";
        } else if (selectedTopping === "four-cheese") {
            ingredientsList.innerHTML = `<li>Томатна паста або білий соус - ${(dough * 0.02).toFixed(2)} г</li>
                                         <li>Моцарела - ${(dough * 0.005).toFixed(2)} г</li>
                                         <li>Пармезан - ${(dough * 0.005).toFixed(2)} г</li>
                                         <li>Горгонзола - ${(dough * 0.005).toFixed(2)} г</li>
                                         <li>Твердий сир - ${(dough * 0.005).toFixed(2)} г</li>`;
            pizzaImage.src = "4сира.png";
        } else if (selectedTopping === "hawaiian") {
            ingredientsList.innerHTML = `<li>Томатна паста - ${(dough * 0.02).toFixed(2)} г</li>
                                         <li>Моцарела - ${(dough * 0.01).toFixed(2)} г</li>
                                         <li>Мясо курки - ${(dough * 0.016).toFixed(2)} г</li>
                                         <li>Кусочки ананасу - ${(dough * 0.015).toFixed(2)} г</li>`;
            pizzaImage.src = "гавайська.png";
        }
    });
});