function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
var square = { kind: "square", size: 3 };
console.log(area(square));
// does not compile, as the function doesn't cover all variants of the union type Foursided.
// specifically, the return type ought to be `number | undefined`, not `number`.
function numSides(s) {
    switch (s.kind) {
        case "square": return 4;
        case "rectangle": return 4;
    }
}
// We could solve this by covering all the variants...
function numSidesCovered(s) {
    switch (s.kind) {
        case "square": return 4;
        case "rectangle": return 4;
        case "rhombus": return 4;
    }
}
// or by having a default case...
function numSidesDefault(s) {
    switch (s.kind) {
        case "square": return 4;
        case "rectangle": return 4;
    }
    return 0;
}
// or by having a union return type.
function numSidesUnion(s) {
    switch (s.kind) {
        case "square": return 4;
        case "rectangle": return 4;
    }
}
