const matrix: number[][] = [[3, 4, 5], [1, 2, 3]]
console.log(matrix[0][1])

type StudentRecord = {
    name: string,
    grade: number,
    isGraduated: boolean
}


const studentRecord : Readonly<StudentRecord> = {
    name: "john",
    grade: 89,
    isGraduated: false
}


const studentRecord2 : StudentRecord = {
    name: "bob",
    grade: 60,
    isGraduated: false
}


const t: [string, number, boolean] = ["john", 0, false]




const colors = {
    red: "#rrr",
    green: "#ggg",
    blue: "#bbb"
}


console.log(colors.green)


const fetchData: (url:string) => Promise<StudentRecord> = async (url) => {
    const d = await fetch(url);
    const data = await d.json()
    return {
        name: data.name,
        grade: data.grade,
        isGraduated: data.isGraduated
    }
}



// any data type

let value: any = 43

value = "John"


// unknown data type

let something: unknown = "hello unknown"

if(typeof(something) === "string"){
    console.log(something)
}

// void data type

function area(length: number, width: number): void{
    console.log(length * width)
}


// never data type

function fail(message: string): never{
    throw new Error(message)
}


function looping(): never{
    while(true){

    }
}

// typeof

const sample = {x: 1, y: "two"}
type SampleType = typeof sample
const sample2: SampleType = {x: 6, y:"three"}
console.log(sample2)


// keyof

type Person = {name: string, age: number, active?: boolean}

type PersonKeys = keyof Person

const random: Person = {
    name: "",
    age: 0
}

// union type: one or more data types

let fname: string|number = 67

fname = "Houssam"

function printId(id: string|number): void{
    console.log(`ID: ${id}`)
}

const  mixed: (string|number)[] = [4, "hello"]

//type narrowing

function resulting(value: string|number): void{
    if(typeof value === "string"){
        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed())
    }
}




interface Cat {name: string, meow(): void}
interface Dog {name: string, woof(): void}

function soundAnimal(animal: Cat|Dog): void{
    if("meow" in animal){
        console.log(animal.meow())
    } else {
        console.log(animal.woof())
    }
}

// literal types

type Direction = "up" | "down" | "left" | "right"

function move(direction: Direction): void{
    console.log(`Move: ${direction}`)
}

move("left")



// discriminated unions

interface Circle{
    kind:"circle"
    radius: number
}

interface Square{
    kind:"square"
    length:number
}

interface Triangle{
    kind:"triangle"
    base:number
    height:number
}


type Shape = Circle | Triangle | Square


function calculateArea(shape: Shape): number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        
        case "triangle":
            return shape.base * shape.height
        case "square":
            return shape.length ** 2
        default:
            const _exhaustive: never = shape;
            return _exhaustive
        
    }
}


// aliases

type ID = string|number
type Status = "pending"|"approved|rejected"

interface User{
    id: ID
    name:string
    status:Status
}

// basic function type


let greet: (name: string) => string;

greet = function(name: string): string {
    return `${name}`
}

console.log(greet("houssam"))


let getMessage: (message: string) => string

getMessage = function(message: string): string{
    return "Hello"
}

// function types with objects


let createUser: (name:string, age:number) => {name:string, age: number}

createUser = function(name: string, age:number): {name:string, age: number}{
    return {name, age}
}

const user = createUser("John", 33)

console.log(user)


let displayUser: (user: {name: string, age:number}) => void




displayUser = function(user: {name: string, age:number}): void{
    console.log(`${user.name} ${user.age}`)
}

displayUser(user)

// aliases


type Operation= (a: number, b: number) => number

const addition: Operation = (a, b) => a + b




