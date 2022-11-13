/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var house = {
  areas: {
    livingRoom: {
      items: ["tv", "sofa"],
    },
    bedroomOne: {
      items: ["bed", "washing machine"],
      windows: 3,
    },
    bedroomTwo: {
      items: ["bed", "bed", "desk"],
      windows: 4,
    },
    kitchen: {
      items: ["fridge", "broken chair", "microwave"],
    },
  },
  garden: [true, "Red Rose"],
  garage: {
    car: {
      color: "red",
      wheels: 4,
      honk: function () {
        alert("Beep");
      },
    },
  },
};

/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.
house.areas.livingRoom.items.push("dining table");

// (2) Add a stove to the kitchen.

house.areas.kitchen.items.unshift("stove");

// (3) Remove the washing machine from bedroomOne.
house.areas.bedroomOne.items.pop("washing machine");

// (4) Change the color of the car to blue.
house.garage.car.color = "blue";

// (5) Add a another car to the garage with a honk function.
house.garage.carTwo = {
  honk: function () {
    alert("beep");
  },
};
console.log(house.garage.carTwo);

// (6) Make the new car honk
house.garage.carTwo.honk();
console.log(house.areas.garage.carTwo.honk());

//(7) If the house has a garden, console.log the name of the flower.
if (house.garden[0] === True) {
  console.log(house.garden[1]);
}

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function

var newChair = house.areas.kitchen.items[1];

newChair = house.areas.kitchen.items[1].replace("broken chair", "new chair");

console.log(newChair);

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.
var houseKeys = Object.keys(house.areas);
console.log(house.Keys.length);

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.
for (var index = 0; index < house.areas.lenght; index++) {
  for (var index = 0; index < items.lenght; index++)
    if (Object.values((house.areas[0] = items[0])));
}
console.log(house.areas);
