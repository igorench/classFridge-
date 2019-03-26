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
        // Иетод slice позволяет легко скопировать массив 
        return food.slice();
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье