var sum = function (a, b) {
    return a + b;
};
// types
var isCool = true;
var age = 56;
var eyeColor = 'brown';
var pets = ['cat', 'dog', 'pig'];
// the other way
var pets2 = ['lion', 'dragon', 'lizard'];
var wizard = {
    a: 'John'
};
// tuple
var basket;
basket = ['basketball', 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
})(Size || (Size = {}));
//Any
var whatever = 'aaaaaaaahhhhhhhh nooooooooo!'; // when can change this because it can be any type
// void
var sing = function () {
    console.log('something');
};
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT!");
};
var dog = {}; // asserting the object
dog.count;
// function
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAWWWRRRR!');
lion.sing;
// Union
var confused = 'hello'; // 'hello' or 5
