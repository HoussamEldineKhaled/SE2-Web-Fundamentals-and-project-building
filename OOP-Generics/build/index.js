"use strict";
// generics
class Container {
    item;
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
}
const bookContainer = new Container("Harry Potter"); // Container<string>
const toolContainer = new Container(42); // Container<number>
const userContainer = new Container({ name: "Alice" }); // Container<User>
