"use strict";

function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

// food - массив еды
function Fridge(power) {
    Machine.call(this, power);
    var food = [];


    this.addFood = function(item) {
        if (!this._enabled) {
            throw new Error("Когда холодильник выключен вы не можете добавлять еду!");
        }
        food = food.concat(arguments);
    };
    this.getFood = function() {
        return food;
    }
}

var fridge = new Fridge(200);
fridge.enable();
fridge.addFood("котлета", "сыр"); // ошибка, холодильник выключен
console.log(fridge.getFood());