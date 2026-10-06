interface User{
    id: number
    username: string
    email: string
    age: number
}


const user1 : User = {
    id: 5,
    username: "oni",
    email: "oni@gmail.com",
    age: 22
}


// optional properties

interface Product{
    id: number
    name: string
    price: number
    description?: string
}


const product1: Product = {
    id: 1,
    name: "vase",
    price: 100,
    description: "antique case from ancient times"
}


const product2: Product = {
    id: 2,
    name: "vase",
    price: 100,
}


// readonly proteries

interface Config{
    readonly apiKey: string
    readonly endpoint: string
    timeout: number
}

const config1 = {
    timeout: 4
}


// function interfaces

interface Calculator{
    (a: number, b: number): number
}


const add: Calculator = (a, b) => a + b


const multiply: Calculator = (a, b) => a * b


console.log(add(3, 5))

console.log(multiply(5, 7))

// interface with methods

interface Logger{
    log(message: string): void
    error(message: string): void
    warn(message: string): void
    
}

const consoleLogger: Logger= {
    log(message: string): void{
        console.log(`[LOG] ${message}`)
    },
    error(message: string): void{
        console.error(`[ERROR] ${message}`)
    },
    warn(message: string): void{
        console.warn(`[WARN] ${message}`)
    }
}

// properties, methods and promises

interface Database{
    host: string
    port: number
    readonly dbName: string

    connect(): Promise<void>
    disconnect(): Promise<void>
    query(sql: string): Promise<any[]>
}


const postgres: Database = {
    host: "localhost",
    port: 5505,
    dbName: "mydb",
    async connect(){
        console.log(`Connecting to ${this.dbName}`)
    },
    async disconnect() {
        console.log(`Disconnecting from ${this.dbName}`)
    },

    async query(sql: string) {
        consoleLogger.log(`Executing ${sql}`)
        return []
    }
}

// hands on

interface Task {
    id: string
    title: string
    description: string
    completed: boolean
    priority: "low" | "medium" | "high"
    dueDate?: Date
}

interface TaskFilter {
    completed?: boolean
    priority?: "low" | "medium" | "high"
    searchText?: string

}

interface TaskManager {
    addTask(task: Omit<Task, "id">): Task
    getTasks(filter?: TaskFilter): Task[]
    updateTask(id: string, updates: Partial<Task>): Task | null
    deleteTask(id:string): boolean
}


class SimpleTaskManager implements TaskManager{
    counter: number = 0
    private taskStore: Task[]

    constructor(){
        this.taskStore = []
    }

    addTask(task: Omit<Task, "id">): Task{
        
        const newTask: Task = {id: `${this.counter}`, ...task}
        this.taskStore.push(newTask)
        this.counter++
        return newTask
    }

    getTasks(filter?: TaskFilter): Task[]{
        if(filter === null){
            return this.taskStore
        } else {
            return this.taskStore.filter((store) => {
                if(store.completed !== filter?.completed){
                    return false
                }

                if(filter.priority && filter.priority !== store.priority){
                    return false
                }

                if(filter.searchText){
                    const text = filter.searchText.toLowerCase()
                    if(!(store.title.toLowerCase().includes(text) || store.description.toLowerCase().includes(text))){
                        return false
                    }
                }
                return true
            })
        }
        
    }

    updateTask(id: string, updates: Partial<Task>): Task | null {
        const index = this.taskStore.findIndex((store) => store.id === id)

        if(index === -1){
            return null
        }

        const updatedTask: Task = {...this.taskStore[index], ...updates, id}
        this.taskStore[index] = updatedTask

        return updatedTask
    }

    deleteTask(id: string): boolean {
        const index = this.taskStore.findIndex((store) => store.id === id)
        if(index === -1){
            return false
        }

        this.taskStore.splice(index, 1)
        return true

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
// polymorphism



interface Animal{
    name: string
    makeSound(): string
}


class Dog implements Animal{
    constructor(public name: string){}

    makeSound(): string {
        return " 3aou"
    }
}


class Cat implements Animal{
    constructor(public name: string){}

    makeSound(): string {
        return "nawwwwww"
    }
}



function petShow(animals: Animal[]){
    for(const animal of animals){
        console.log(`${animal.name} says: ${animal.makeSound()}`)
    }
}



const pets: Animal[] = [
    new Dog("Buddy"),
    new Cat("Whiskers")
]



petShow(pets)

interface PaymentProcessor{
    processPayment(amount: number): Promise<string>

}


class CreditCardProcessor implements PaymentProcessor{
    constructor(private cardNumber: number){}
    async processPayment(amount: number): Promise<string> {
        await new Promise(resolve => {setTimeout(resolve, 2000)})
        return `Transferred ${amount} from ${this.cardNumber}`
    }
}

class CheckoutService {
    static async processOrder(
        amount: number,
        processor: PaymentProcessor
    ): Promise<void>{
        console.log("Processing payment...")

        const result = await processor.processPayment(amount)

        console.log(result)

    }
}


// parameter polymorphism




interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  constructor(private radius: number) {}
  
  draw(): void {
    console.log(`Drawing a circle with radius ${this.radius}`);
  }
}

class Rectangle implements Drawable {
  constructor(private width: number, private height: number) {}
  
  draw(): void {
    console.log(`Drawing a rectangle ${this.width}x${this.height}`);
  }
}

class Triangle implements Drawable {
  constructor(private base: number, private height: number) {}
  
  draw(): void {
    console.log(`Drawing a triangle with base ${this.base} and height ${this.height}`);
  }
}

// Polymorphic function accepts any Drawable
function renderShape(drawing: Drawable): void{
    console.log("Rendering shape...")
    drawing.draw()
    console.log("Drawn")
} 

// Same function, different behaviors
renderShape(new Circle(5));        // Draws circle
renderShape(new Rectangle(4, 6));  // Draws rectangle
renderShape(new Triangle(3, 4));   // Draws triangle

// array of different types

interface Vehicle {
  start(): string;
  stop(): string;
}

class Car implements Vehicle {
  start(): string {
    return "Car engine started";
  }
  
  stop(): string {
    return "Car engine stopped";
  }
}

class Motorcycle implements Vehicle {
  start(): string {
    return "Motorcycle engine revved";
  }
  
  stop(): string {
    return "Motorcycle engine shut off";
  }
}

class Bicycle implements Vehicle {
  start(): string {
    return "Started pedaling bicycle";
  }
  
  stop(): string {
    return "Stopped pedaling bicycle";
  }
}


function startAllVehicles(vehicles: Vehicle[]){
    for(const vehicle of vehicles){
        console.log(vehicle.start())
        console.log(vehicle.stop())
    }
}


const garage: Vehicle[] = [
    new Car(),
    new Bicycle,
    new Motorcycle()
]



startAllVehicles(garage);

