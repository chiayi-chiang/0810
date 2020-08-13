//import匯入{......}from"......"
import Dog, { playWith as play, Animal } from "./library.js";

let obj = new Dog(undefined, 3);//---
console.log(obj.weight, obj.location);//顯示在網路上
play(obj);
