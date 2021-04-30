'use strict';

//==============================================================================

// 1 . Напишите функцию, которая принимает в качестве параметра год и месяц
// выбранного года в виде числа, и возвращает массив объектов дат все выходный дней
// этого месяца (суббота, воскресенье).
// Пример работы функции:
// getHolidays(2020, 4) => [массив выходных за апрель 2020-го года]
// getHolidays(2021 , 1 ) => [массив выходных за январь 2021 -го года]


// let getHolidays = (year, month) => {
//     Date.prototype.daysInMonth = function () {
//         return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
//     };
//     month = month - 1;
//     let arr = [];
//     let maxDaysinMonth = new Date(year, month).daysInMonth();
//     let setValue = new Date(year, month);
//     for (let i = 0; i < maxDaysinMonth; i++) {
//         setValue.setDate(i + 1);
//         let indexDays = setValue.getDay();
//         if (indexDays === 0 || indexDays === 6) {
//             let getDateSetValue = setValue.getDate();
//             arr.push(new Date(year, month, getDateSetValue));
//         }
//     }
//     return arr;
// }

// console.log(getHolidays(2021, 1));
// console.log(getHolidays(2020, 4));

//===========================================================================

// 2. Напишите функцию, которая проводит следующие операции:
// - принимает в параметры либо одиночный объект, либо массив объектов произвольной
// структуры
// - присваивает всем объектам свойство displayDate, значение которого будут равно
// текущей дате, переданной в виде строки в формате "день.месяц.год".
// -возвращает обновленный объект или массив объектов
// Пример работы функции:
// setDisplayDate({}) => { displayDate: '27.04.2021 ' }
// setDisplayDate([{}, {}]) => [ { displayDate: '27.04.2021 ' }, { displayDate: '27.04.2021 ' } ]



// let setDisplayDate = function (value) {
//     let arr = [];
//     const currentDate = new Date();
//     const getYear = currentDate.getFullYear();
//     const getMonth = currentDate.getMonth();
//     const getDate = currentDate.getDate();
//     let typeOfDateString;
//     if (getMonth > 0 && getMonth < 9) {
//         typeOfDateString = `${getDate}.0${getMonth + 1}.${getYear}`;
//         if (getDate > 0 && getDate < 10) {
//             typeOfDateString = `0${getDate}.0${getMonth + 1}.${getYear}`;
//         } else {
//             typeOfDateString = `${getDate}.0${getMonth + 1}.${getYear}`;
//         }
//     } else {
//         typeOfDateString = `${getDate}.${getMonth + 1}.${getYear}`;
//         if (getDate > 0 && getDate < 10) {
//             typeOfDateString = `0${getDate}.${getMonth + 1}.${getYear}`;
//         } else {
//             typeOfDateString = `${getDate}.${getMonth + 1}.${getYear}`;
//         }
//     }

//     if (Array.isArray(value)) {
//         for (let i = 0; i < value.length; i++) {
//             value[i].displayDate = typeOfDateString;
//             let obj = Object.assign({}, value[i]);
//             arr.push(obj);
//         }
//         return arr;
//     }
//     if (typeof value === 'object') {
//         value.displayDate = typeOfDateString;
//         return value;
//     }
// }
// console.log(setDisplayDate({}));
// console.log(setDisplayDate([{}, {}, {}, {}, {}, {}, {}, {}, {}]));


//===========================================================================



// 3.Напишите функцию, которая принимает в качестве параметров год, месяц и дату
// рождения человека в виде числа, и возвращает данные в виде строки, которая
// указывает, сколько лет и дней осталось до его ближайшего юбилея (возраста, кратного
// десяти).
// Пример работы функции:
// getTimeBeforeAnniversary(1 987, 3, 11 ) => '5 years, 305 days'



let getTimeBeforeAnniversary = (year, month, date) => {
    month = month - 1;
    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]

    let dateBorn = +new Date(year, month, date);
    let currentDate = +new Date();

    let result = Math.abs(currentDate - dateBorn);
    let msInYear = result / 31536000000;
    let msInDate = result / 86400000;
    let yearNew;
    for (let i = 0; i < arr.length; i++) {
        if (Math.ceil((msInYear + 1) / 10) * 10 === arr[i]) {
            yearNew = arr[i] - msInYear;
        }
    }
    let a = msInYear + yearNew
    let b = year + a
    console.log(b)
    console.log(a)
    let c = +new Date(year, month, date).setYear(b)
    console.log(c)
    let n = Math.abs(c - dateBorn)
    let p = n / 86400000;
    console.log(p)
    return `До юбилея осталось ${yearNew}`
}
console.log(getTimeBeforeAnniversary(1996, 3, 23));







// let getDaysDifference = () => {
//     let dateOne = +new Date(firstDate);
//     let dateTwo = +new Date();
//     let result = Math.abs(dateTwo - dateOne)

//     let a = result / 86400000
//     return a

// }

// console.log(getDaysDifference('2012-03-10', '2012-04-10'))

//===========================================================================