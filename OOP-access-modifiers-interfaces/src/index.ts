


// modifiers

// private

class User {
    private password: string;
    constructor(public username: string, password: string){
        this.password = password
    }
    private hashPassword(password: string): string{
        return `hashed_${password}`
    }

    public verifyPassword(password: string): boolean{
        return this.hashPassword(password) === this.password
    }

    public changePassword(oldpassword: string, newPassword: string): boolean{
        if(this.verifyPassword(oldpassword)){
            this.password = this.hashPassword(newPassword)
            return true;
        }
        return false
    }

}




// readonly

class Config{
    readonly apiURL: string
    readonly maxRetries: number = 3

    constructor(apiURL: string) {
        this.apiURL = apiURL
    }

}

const config = new Config("hello.com")

console.log(config.apiURL)

// read only arrays

class teams{
    readonly members: readonly string[]
    readonly config: Readonly<{name: string, maxSize: number}>

    constructor(name: string, maxSize: number){
        this.members = []
        this.config = {name, maxSize}
    }

    public addMember(member: string): void{

        (this as any).members = [...this.members, member]
    }

}


// applying interfaces

import Dog from './models/animal'


const dog = new Dog("Jabba", "Golden Retriever")

dog.move(10)

dog.bark()

// vehicle interfaces
import Car from './models/vehicles';
const car = new Car("Toyota", 2024, "Camry")

// shape interface with super

