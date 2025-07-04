const dog1 = {
  name: "Mango",
  age: 3,
  isHappy: true,
};

const dogJSON1 = JSON.stringify(dog1);

console.log("dogJSON1:", dogJSON1);

const dog2 = JSON.parse(dogJSON1);