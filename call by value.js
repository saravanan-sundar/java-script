console.log("call by value.....................");
var classname1= "b15";
var classname2=classname1;
classname2="b16";
console.log(classname1);
console.log(classname2);

console.log("call by reference......................");
let obj1={
 name:"saravanan"   
}
let obj2=obj1;
console.log(obj1);
console.log(obj2);