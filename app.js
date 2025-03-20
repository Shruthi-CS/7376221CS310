function CalculateAverage() {
    const numbersInput = document.getElementById("numbers").value;
    const numbersArray = numbersInput.split(',').map(num => parseFloat(num.trim()));
    if (numbersArray.length === 0 || numbersArray.some(isNaN)) {
        document.getElementById("Result").innerText = "Please enter valid numbers!";
        return;
    }
    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    const average = sum / numbersArray.length;
    document.getElementById("Result").innerText = `Average: ${average.toFixed(2)}`;
}