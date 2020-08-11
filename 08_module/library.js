//export匯出
export function playWith(obj) {
    obj.makeSound();
}

export class Animal {
    constructor(weightValue = 1) {
        this.weight = weightValue;
    }
    makeSound() {
        alert("Animal: ...");
    }
}
//export default,dog at "main.js" can put at {} outside
export default class Dog extends Animal {
    constructor(location = "Earth", weightValue) {
        super(weightValue);
        this.location = location;
    }
    makeSound() {
        alert("Won! Won!");
    }
}
