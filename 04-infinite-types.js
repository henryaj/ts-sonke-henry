function printList(list) {
    if (list == null) {
        console.log("nothin'");
    }
    else {
        console.log(list.head);
        printList(list.rest);
    }
}
var nothing = null;
var something = {
    head: 1, rest: {
        head: 2, rest: {
            head: 3, rest: null
        }
    }
};
printList(nothing);
printList(something);
