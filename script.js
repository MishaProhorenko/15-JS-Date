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
    let currentDate = +new Date();
    let dateBorn = +new Date(year, month, date);
    let quantityYearInMs = Math.abs(dateBorn - currentDate);
    let quantityYear = quantityYearInMs / 31536000000;
    let nearestAnniversary;
    for (let i = (Math.floor(quantityYear));; i++) {
        if (i % 10 === 0) {
            nearestAnniversary = i
            break;
        }
    }
    let yearsBeforeAnniversary = nearestAnniversary - quantityYear;
    let mathFloorYearsBeforeAnniversary;
    let residue;
    let residueDay;
    if (yearsBeforeAnniversary < 1) {
        mathFloorYearsBeforeAnniversary = 0;
        residueDay = yearsBeforeAnniversary * 365.2425;
    } else {
        mathFloorYearsBeforeAnniversary = Math.floor(yearsBeforeAnniversary);
        residue = yearsBeforeAnniversary % mathFloorYearsBeforeAnniversary;
        residueDay = residue * 365.2425;
    }
    return `${mathFloorYearsBeforeAnniversary} years, ${Math.round(residueDay)} days`;
}
console.log(getTimeBeforeAnniversary(1996, 3, 23));


//===========================================================================