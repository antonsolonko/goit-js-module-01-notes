// # План занятия

// - switch

// const amount = 5;
// let price;

// switch(amount) {
//     case 1:
//     case 2:
//         price = 'cheap';
//         break;
//     case 3:
//     case 4:
//         price = 'expencive';
//         break;
//     default:
//         price = 'no deal';
//     }
// console.log(price);

// - цикл for
// for (let i=-10;i<10;i+=1){
//     console.log(i);
// }

// // Pre-increment & Post-increment
// i++ - post increment - Значение переменной изменится после выражения присваивания или другой комманды


// - Задачи

// сумма зарплат работников , зп случайная
// const amountOfEmployee = 10;
// let totalSalary = 0;
// const minSalary = 500;
// const maxSalary = 5000;

// for(let i = 1; i < amountOfEmployee + 1; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary}`);
//     totalSalary += salary;
// }
// console.log('Общая зарплата:',totalSalary,'usd');

// сумма всех четных чисел в диапазоне
// const min = 6;
// const max = 19;
// let total = 0;

// for(let i = min; i <= max; i += 1){
//     if ( i % 2 !== 0) {
//         console.log(`Не четное%:`, i);
//         continue;
//     }
//         total += i;
//         console.log(`четное: `,i);
// }
// console.log(total);


// - Codewars


// - DOM - document object model
// document - это обьект который хранит ссылку на весь наш html документ,
// у него внутри есть метод querySelector, в аргумент мы передаем CSS селектор нашего документа

const btnAdd = document.querySelector('button[data-add]');  //Выбираю баттон с селектором атрибута data-add
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

// btnAdd.textContent='Прибавить JS';

//Вывел в консоль текстовый контент этого обьекта
// console.dir(btnAdd.textContent); 
// console.log(btnAdd);


// Вызываю метод, Добавляю слушателя события, туда передается два аргумента:
// Первый тип события, второй это функция 
let total = 0;

btnAdd.addEventListener('click', function() {
    //тут будет код который будет выполняться при клике 
    console.log('click hehehe');
    
    const  value = Number(valueInput.value); //prompt всегда возвращает строку, по этому значение нужно преобразовывать в число

    console.log(value);

    total += value;
    outputEl.textContent = total;
    console.log('total: ',total);

    valueInput.value = ''; //после клика очищаю поле ввода
} );
