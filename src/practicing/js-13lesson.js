//! ПРАКТИКА-13 (Урок-13_JS)
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Деструктуризувати наступні об’єкти:
// user
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

const { name, age, email, } = user;

console.log("name: ", name);

console.log("age: ", age);

console.log("email: ", email);

// car
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    features: ['power windows', 'rear camera', 'navigation'],
    safety: {
        airbags: true,
        antilockBrakes: true,
        stabilityControl: true
    },
};

const {
    make,
    model,
    year,
    features: [
        feature1,
        feature2,
        feature3
    ],
    safety: {
        airbags,
        antilockBrakes,
        stabilityControl
    }
} = car;

console.log("make: ", make);

console.log("model: ", model);

console.log("year: ", year);

console.log("feature1: ", feature1);

console.log("feature2: ", feature2);

console.log("feature3: ", feature3);

console.log("airbags: ", airbags);

console.log("antilockBrakes: ", antilockBrakes);

console.log("stabilityControl: ", stabilityControl);

// movie
const movie = {
    title: 'The Shawshank Redemption',
    director: {
        name: 'Frank Darabont',
        nationality: 'American'
    },
    actors: ['Tim Robbins', 'Morgan Freeman'],
    releaseYear: 1994,
    ratings: {
        imdb: 9.3,
        rottenTomatoes: 90
    },
};

// books
const books = {
    count: 3,
    list: [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        }
    ],
};
//! Код виконаного завдання

console.log("--------------------------------------------");