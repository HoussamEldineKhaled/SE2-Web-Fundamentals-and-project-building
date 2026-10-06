"use strict";
const user1 = {
    id: 5,
    username: "oni",
    email: "oni@gmail.com",
    age: 22
};
const product1 = {
    id: 1,
    name: "vase",
    price: 100,
    description: "antique case from ancient times"
};
const product2 = {
    id: 2,
    name: "vase",
    price: 100,
};
const config1 = {
    timeout: 4
};
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(3, 5));
console.log(multiply(5, 7));
const consoleLogger = {
    log(message) {
        console.log(`[LOG] ${message}`);
    },
    error(message) {
        console.error(`[ERROR] ${message}`);
    },
    warn(message) {
        console.warn(`[WARN] ${message}`);
    }
};
const postgres = {
    host: "localhost",
    port: 5505,
    dbName: "mydb",
    async connect() {
        console.log(`Connecting to ${this.dbName}`);
    },
    async disconnect() {
        console.log(`Disconnecting from ${this.dbName}`);
    },
    async query(sql) {
        consoleLogger.log(`Executing ${sql}`);
        return [];
    }
};
class SimpleTaskManager {
    counter = 0;
    taskStore;
    constructor() {
        this.taskStore = [];
    }
    addTask(task) {
        const newTask = { id: `${this.counter}`, ...task };
        this.taskStore.push(newTask);
        this.counter++;
        return newTask;
    }
    getTasks(filter) {
        if (filter === null) {
            return this.taskStore;
        }
        else {
            return this.taskStore.filter((store) => {
                if (store.completed !== filter?.completed) {
                    return false;
                }
                if (filter.priority && filter.priority !== store.priority) {
                    return false;
                }
                if (filter.searchText) {
                    const text = filter.searchText.toLowerCase();
                    if (!(store.title.toLowerCase().includes(text) || store.description.toLowerCase().includes(text))) {
                        return false;
                    }
                }
                return true;
            });
        }
    }
    updateTask(id, updates) {
        const index = this.taskStore.findIndex((store) => store.id === id);
        if (index === -1) {
            return null;
        }
        const updatedTask = { ...this.taskStore[index], ...updates, id };
        this.taskStore[index] = updatedTask;
        return updatedTask;
    }
    deleteTask(id) {
        const index = this.taskStore.findIndex((store) => store.id === id);
        if (index === -1) {
            return false;
        }
        this.taskStore.splice(index, 1);
        return true;
    }
}
const manager = new SimpleTaskManager();
// Add some tasks
const task1 = manager.addTask({
    title: "Learn TypeScript",
    description: "Complete OOP module",
    completed: false,
    priority: "high"
});
const task2 = manager.addTask({
    title: "Write code",
    description: "Practice interfaces",
    completed: false,
    priority: "medium",
    dueDate: new Date("2024-12-31")
});
console.log("All tasks:", manager.getTasks());
console.log("High priority tasks:", manager.getTasks({ priority: "high" }));
console.log("Completed tasks:", manager.getTasks({ completed: true }));
// Update a task
const updated = manager.updateTask(task2.id, { priority: "low" });
console.log("Updated task:", updated);
// Search for tasks
console.log("Search 'code':", manager.getTasks({ searchText: "code" }));
// Delete a task
const deleted = manager.deleteTask(task1.id);
console.log("Task deleted:", deleted);
console.log("Remaining tasks:", manager.getTasks());
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return " 3aou";
    }
}
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "nawwwwww";
    }
}
function petShow(animals) {
    for (const animal of animals) {
        console.log(`${animal.name} says: ${animal.makeSound()}`);
    }
}
const pets = [
    new Dog("Buddy"),
    new Cat("Whiskers")
];
petShow(pets);
class CreditCardProcessor {
    cardNumber;
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    async processPayment(amount) {
        await new Promise(resolve => { setTimeout(resolve, 2000); });
        return `Transferred ${amount} from ${this.cardNumber}`;
    }
}
class CheckoutService {
    static async processOrder(amount, processor) {
        console.log("Processing payment...");
        const result = await processor.processPayment(amount);
        console.log(result);
    }
}
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        console.log(`Drawing a rectangle ${this.width}x${this.height}`);
    }
}
class Triangle {
    base;
    height;
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    draw() {
        console.log(`Drawing a triangle with base ${this.base} and height ${this.height}`);
    }
}
// Polymorphic function accepts any Drawable
function renderShape(drawing) {
    console.log("Rendering shape...");
    drawing.draw();
    console.log("Drawn");
}
// Same function, different behaviors
renderShape(new Circle(5)); // Draws circle
renderShape(new Rectangle(4, 6)); // Draws rectangle
renderShape(new Triangle(3, 4)); // Draws triangle
class Car {
    start() {
        return "Car engine started";
    }
    stop() {
        return "Car engine stopped";
    }
}
class Motorcycle {
    start() {
        return "Motorcycle engine revved";
    }
    stop() {
        return "Motorcycle engine shut off";
    }
}
class Bicycle {
    start() {
        return "Started pedaling bicycle";
    }
    stop() {
        return "Stopped pedaling bicycle";
    }
}
function startAllVehicles(vehicles) {
    for (const vehicle of vehicles) {
        console.log(vehicle.start());
        console.log(vehicle.stop());
    }
}
const garage = [
    new Car(),
    new Bicycle,
    new Motorcycle()
];
startAllVehicles(garage);
