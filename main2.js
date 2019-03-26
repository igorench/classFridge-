"use strict";

function Machine(power) {
    this._power = power;
    this._enabled = false;

    this.enable = function () {
        this._enabled = true;
    };

    this.disable = function () {
        this._enabled = false;
    };
}

// food - массив еды
function Fridge(power) {
    Machine.call(this, power);
    var food = [];
    var MAXIMUM_FOOD = power / 100;


    this.addFood = function () {
        if (!this._enabled) {
            throw new Error("Когда холодильник выключен вы не можете добавлять еду!");
        }

        [].forEach.call(arguments, function(item) {
            if (food.length >= MAXIMUM_FOOD) {
                throw new Error("Холодильник заполнен!");
            }
            food.push(item);
        });
    };

    this.getFood = function () {
        // Метод slice позволяет легко скопировать массив
        return food.slice();
    };

    this.filterFood = function(func) {
        return food.filter(func);
    };

    this.removeFood = function(item) {
        food.forEach(function(el, i) {
            if (el.title === item) {
                food.splice(i, 1);
            }
        })
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("варенье");
console.log(fridge.getFood());
fridge.removeFood("зелень");
console.log(fridge.getFood());

console.log( fridge.filterFood(function(item) {
    if (item.calories < 50) {
        return true;
    }
}));


