//? Напиши клас User для створення користувача
//? з наступними властивостями:
//? name - рядок
//? age - число
//? followers - число
//? Додай метод getInfo(), який, виводить рядок:
//? User ${ім'я} is ${вік} years old and has ${кількість фоловерів}

class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    };
    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
     };
};

const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});

console.log("mango: ", mango);

console.log(mango.getInfo());