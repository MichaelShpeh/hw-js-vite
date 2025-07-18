let groundCoffee;
let hotWater;
let coffee;

//! 1 - функція "Приготування меленої кави"
function makesGroundCoffee() {
    console.log("1. makesGroundCoffee");
    groundCoffee = "30 грам";
    console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
    return groundCoffee;
};

//! 2 - функція "Приготування окропу (гарячої води)".
function makesHotWater() {
    console.log("2. makesHotWater");
    hotWater = "250 мілілітрів";
    console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
    return hotWater;
};

//! 3 - функція "Приготування кави"
function makingCoffee() { 
    console.log("3. makingCoffee");
    // makesGroundCoffee();
    // if (groundCoffee === undefined) {
    //     return "Нам потрібна мелена кава";
    // };
    if (!(makesGroundCoffee())) {
        return "Потрібна мелена кава!";
    };
    // makesHotWater();
    // if (hotWater === undefined) {
    //     return "Нам потрібен окріп";
    // };
    if (!(makesHotWater())) {
        return "Потрібна гаряча вода!";
    };
    coffee = groundCoffee + hotWater;
    // coffee = "✅ Кава готова!"
    return coffee;
};

// makingCoffee()
console.log(makingCoffee());


// const isInfant = function (age) {
//     //todo: var.1
//     // if (age <= 1) {
//     //     return true;
//     // } else {
//     //     return false;
//     // };
//     //todo: var.2
//     return (age <= 1);
// };
// console.log("isInfant(1);", isInfant(1)); //! true
// console.log("isInfant(3);", isInfant(3)); //! false


