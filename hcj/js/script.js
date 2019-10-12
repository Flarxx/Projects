function sayHello(name) {
    alert("Hi, " + name);
}

sayHello("Andrew");
sayHello("David");
sayHello("Sarah");
function yeah(name, age) {
    document.write( name + " is " + age + " years old. <br/>");
}
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}
var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age + "<br/>"); // Outputs 42
document.write(p2.name + "<br/>"); // Outputs "Amy"
yeah("John", 20)
var user = prompt("Please enter your name");
alert(user);
document.write(user + "<br/>")
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}
var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

document.write(courses[2] + "<br/>");
document.write(Math.PI + "<br/>");
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);
function myAlert() {
    alert("Hi");
}
document.write(Date())
setInterval(myAlert, 3000);
