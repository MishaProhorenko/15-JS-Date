'use strict';


// 1 . Напишите функцию, которая принимает в качестве параметра год и месяц
// выбранного года в виде числа, и возвращает массив объектов дат все выходный дней
// этого месяца (суббота, воскресенье).
// Пример работы функции:
// getHolidays(2020, 4) => [массив выходных за апрель 2020-го года]
// getHolidays(2021 , 1 ) => [массив выходных за январь 2021 -го года]


let getHolidays = (year, month) => {
    Date.prototype.daysInMonth = function () {
        return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
    };
    month = month - 1;
    let arr = [];
    let maxDaysinMonth = new Date(year, month).daysInMonth();
    let setValue = new Date(year, month);
    for (let i = 0; i < maxDaysinMonth; i++) {
        setValue.setDate(i + 1);
        let indexDays = setValue.getDay();
        if (indexDays === 0 || indexDays === 6) {
            let getDateSetValue = setValue.getDate();
            arr.push(new Date(year, month, getDateSetValue));
        }
    }
    return arr;
}

console.log(getHolidays(2021, 10));








// let getCurrenDate = () => {
//     const currentDate = new Date();
//     console.log(currentDate)
//     const currendYear = currentDate.getFullYear();
//     console.log(currendYear)
//     const currendMonth = currentDate.getMonth();
//     console.log(currendMonth)
//     const currendDate = currentDate.getDate();
//     console.log(currendDate)
//     const weekDay = currentDate.getDay();
//     console.log(weekDay)
//     let day = ['ВСКР', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return `${currendDate}.${currendMonth + 1}.${currendYear} ${day[weekDay]}`
// }

// console.log(getCurrenDate())


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





//===========================================================================



// 3.Напишите функцию, которая принимает в качестве параметров год, месяц и дату
// рождения человека в виде числа, и возвращает данные в виде строки, которая
// указывает, сколько лет и дней осталось до его ближайшего юбилея (возраста, кратного
// десяти).
// Пример работы функции:
// getTimeBeforeAnniversary(1 987, 3, 11 ) => '5 years, 305 days'





//===========================================================================