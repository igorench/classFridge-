"use strict";

function Machine(power) {
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


    this.addFood = function (item) {
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
        return food;
    }
}

var fridge = new Fridge(300);
fridge.enable();
fridge.addFood("котлета", "сыр"); // ошибка, холодильник выключен
fridge.addFood("яблоко", "курица", "капуста");
console.log(fridge.getFood());