//? Напиши цикл, який пропонує в prompt ввести число більше 100.
//? Якщо користувач ввів інше число
//? або не число – попросити ввести ще раз,
//? доти він не введе число, більше 100.

// do {
//     let input = prompt("Введіть число більше 100")
//     if (input == null) {
//         prompt("Введіть число більше 100")
//         continue
//     }

//     input = input.trim()

//     if (input === "") {
//         prompt("Введіть число більше 100")
//         continue
//     } 

//     input = Number(input)
//     Number.isNaN(input)

//     if (Number.isNaN(input)) {
//         prompt("Введіть число більше 100")
//         continue
//     }
// } while (input <= 100)
// alert("Вітаю!")
// console.log("Вітаю!")














while (true) {
    let input = prompt("Введіть число більше 100")

    if (input == null) {
        alert("Ви натиснули скасувати")
        break;
    }

    input = parseFloat(input)

    if (isNaN(input)) {
        alert("ви ввели не число")
    } else if (input > 100) {
        alert("ви ввели більше 100")
        break
    } else {
        alert("ви ввели менше 100")
    }
}
