// ---------------part1------------------

let city: string;
city = 'Київ';
city = 'Львів';
let address: string = city;
console.log(address);

// ---------------part2------------------

// let prm : string | number = prompt('Напишіть число');
// prm =Number(prm);

// let evenOrOdd: string = (prm%2==0) ? 'Число парне' :'Число непарне';
// let allEvenOrOdd: string = (prm ===0) ? 'Число 0' :evenOrOdd;
// console.log(allEvenOrOdd);

// ---------------part3------------------

function maxNum(...numbers: Array<number>): number {
    return Math.max(...numbers);
}

console.log(maxNum(10, 5, -10, 17));

// ---------------part4------------------

function getSqrt(num): string {
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









