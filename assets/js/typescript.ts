const sum =(a: number, b: number) => {
    return a + b;
}

// types

let isCool: boolean = true;
let age: number = 56;
let eyeColor: string = 'brown';

let pets: string[] = ['cat', 'dog', 'pig'];
// the other way
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

let wizard: object = {
    a: 'John'
}

// tuple
let basket: [string, number];
basket = ['basketball', 5];

// enum
enum Size { Small= 1}

//Any
let whatever: any = 'aaaaaaaahhhhhhhh nooooooooo!'; // when can change this because it can be any type

// void

let sing = (): void => { // void is just you saying that this function wont return anything
    console.log('something');
}

let error = (): never => {
    throw Error('ooops');
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string // may or may not have a magig property
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log("FIGHT!");
}

// Type assertions

interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy // asserting the object
dog.count

// function


// Classes
class Animal {
    sing: string = 'lalala'
    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAWWWRRRR!');
lion.sing

// Union
let confused: string | number = 'hello' // 'hello' or 5