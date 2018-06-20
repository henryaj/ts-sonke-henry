// infinite types are allowed
type List = null | {head: number, rest: List}

function printList(list: List) {
  if (list == null) {
    console.log("nothin'");
  } else {
    console.log(list.head);
    printList(list.rest);
  }
}

let nothing: List = null

let something: List = {
  head: 1, rest: {
    head: 2, rest: {
      head: 3, rest: null
    }
  }
}

printList(nothing);
printList(something);
