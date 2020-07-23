function liveADay() {
    let food = 'cheese'; // Declare `food`
    function eat() {
        console.log(food + ' is good'); // Read `food`
    }
    eat();
}
liveADay();

var collection = [2, 'alive', 4];

Object.freeze(collection);

collection[0] = 6;


console.log(collection); // [ 2, 'alive', 4 ] <-- collection at index 0 cannot bec changed