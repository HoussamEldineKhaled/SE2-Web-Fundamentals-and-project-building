class Vehicle{
    constructor(public brand: string, public year: number){
        console.log("vehicle constructor called")
    }
}




export default class Car extends Vehicle{
    constructor(brand: string, year: number, public model: string){
        super(brand, year)
        console.log("Car constructor called")
    }
}






