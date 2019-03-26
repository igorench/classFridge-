"use strict";

function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;
    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
}

// food - массив еды
function Fridge(power) {
    Machine.call(this, power);
    var food = [];
    var MAXIMUM_FOOD = power / 100;


    var parentDisable = this.disable;
    this.disable = function () {
        if (food.length) {
            throw new Error("Вы не можете выключить холодильник, т.к. в нем есть еда");
        }

        parentDisable();
    };

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
//fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
