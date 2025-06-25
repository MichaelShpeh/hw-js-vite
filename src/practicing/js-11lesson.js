const array = [2, 21, 34, 89, 144];

console.log("Array or масив: ", array);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i}: ${element}`);
};

//todo: Приклад-2: створення об'єкта:
let object = { 0: 2, 1: 21, 2: 34, 3: 89, 4: 144 };

console.log("Object: ", object);

//? Змінемо запис об'єкта не змінюючи його властивостей:
object = {
    0: 2,
    1: 21,
    2: 34,
    3: 89,
    4: 144
};

//? Замінемо "індекси"(властивості (properties)) на інші:
const object2 = {
    перший: 2,
    другий: 21,
    третій: 34,
    четвертий: 89,
    "п'ятий": 144,
    перший: 6765, //! ❓❓❓
};

console.log("Object2: ", object2);

//? Замінемо послідовність "індексів"(властивостей (properties))
//? та їх знаачень на іншу:
const object3 = {
    "п'ятий": 144,
    четвертий: 89,
    перший: 2,
    третій: 34,
    другий: 21
};

console.log("Object3: ", object3);

const object4 = {
    "п'ятий": 144,
    четвертий: "black",
    перший: "purple",
    третій: "red",
    другий: "blue"
};

console.log("Object4: ", object4);