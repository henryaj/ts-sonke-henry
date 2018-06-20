interface Person {
  name: string;
}

// classes implement interfaces implicitly
class Student {
  constructor(public name: string) {}
}

// ...but you can also use the `implements` keyword to be explicit
class User implements Person {
  constructor(public name: string, public age: number) {}
}

function printPerson(p: Person) {
  console.log(p.name);
}

let haskellEnthusiast: User = new User("Sönke", 15)
printPerson(haskellEnthusiast);

let newbie: Student = new Student("Henry")
printPerson(newbie);

