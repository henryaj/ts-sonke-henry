// define some interfaces. All of them have a 'kind' property.
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
interface Rhombus {
  kind: "rhombus";
  height: number;
}

// We can create a type alias for a union over Square, Rectangle and Circle,
// all of which have 'kind' as a common property.
type Shape = Square | Rectangle | Circle

function area(s: Shape): number {
  switch (s.kind) {
      case "square": return s.size * s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
  }
}

let square: Shape = {kind: "square", size: 3}
console.log(area(square));

type Foursided = Square | Rectangle | Rhombus

// does not compile, as the function doesn't cover all variants of the union type Foursided.
// specifically, the return type ought to be `number | undefined`, not `number`.
function numSides(s: Foursided): number {
  switch (s.kind) {
    case "square": return 4;
    case "rectangle": return 4;
  }
}

// We could solve this by covering all the variants...
function numSidesCovered(s: Foursided): number {
  switch (s.kind) {
    case "square": return 4;
    case "rectangle": return 4;
    case "rhombus": return 4;
  }
}

// or by having a default case...
function numSidesDefault(s: Foursided): number {
  switch (s.kind) {
    case "square": return 4;
    case "rectangle": return 4;
  }

  return 0;
}

// or by having a union return type.
function numSidesUnion(s: Foursided): number | undefined {
  switch (s.kind) {
    case "square": return 4;
    case "rectangle": return 4;
  }
}