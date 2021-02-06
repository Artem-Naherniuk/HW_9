let city;
city = 'Київ';
city = 'Львів';
let address = city;
console.log(address);
function maxNum(...numbers) {
    return Math.max(...numbers);
}
console.log(maxNum(10, 5, -10, 17));
function getSqrt(num) {
    if (num == null) {
        return 'Будь ласка, введіть число!';
    }
    else if (num < 0) {
        return 'Введіть додатнє число';
    }
    else if (num >= 0) {
        return `Квадратний корінь з ${num} дорівнює ${Math.pow(num, 2)}`;
    }
    else {
        return 'Повинно бути числове значення';
    }
}
console.log(getSqrt(3));
console.log(getSqrt(-2));
console.log(getSqrt('Hello'));
console.log(getSqrt(null));
//# sourceMappingURL=main.js.map