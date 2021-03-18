// Object in Javascript ===> {...}

const obj = {
  firstName: "Memet", // firrstNAme is keyword or properity //"Memet" => value
  lastName: "Piri",
  age: 33,
  marry: false,
  friends: ["Ahmad", "mostafa", "MuRAT"],
  Adress: {
    city: "Germany",
    street: "Hamburg",
    plz: 22087,
  },
  greating: function () {
    console.log(
      `Hello, I am ${this.firstName} ${this.lastName} & I am ${this.age} age`
    );
  },
  getFullAddress: () => {
    // this belong to function itselves
    return `${this.Adress.city} - ${this.Adress.street} -${this.Adress.plz}`; // error
  },
};

//console.log(obj);

// anotherway of define properties to object
const obj1 = {};
obj1.name = "Mostafa";
obj1.whatever = "whatever";
obj1.please = " please";
// console.log(obj1);

obj.greating();
console.log(obj.getFullAddress());
