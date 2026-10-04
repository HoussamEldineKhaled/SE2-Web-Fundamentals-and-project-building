class Animal{
    constructor(public name: string){

    }

    move(distance: number): void{
        console.log(`${this.name} moved ${distance} meters`)
    }

    makeSound(): void{
        console.log("Animal sounds")
    }

}





export default class Dog extends Animal{
    breed: string
    constructor(name: string, breed: string){
        super(name)
        this.breed = breed
    }

    bark(): void{
        console.log("3aou 3aou 3aou")
    }
}