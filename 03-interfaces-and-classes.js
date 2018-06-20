// classes implement interfaces implicitly
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    return Student;
}());
// ...but you can also use the `implements` keyword to be explicit
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
function printPerson(p) {
    console.log(p.name);
}
var haskellEnthusiast = new User("Sönke", 15);
printPerson(haskellEnthusiast);
var newbie = new Student("Henry");
printPerson(newbie);
