abstract class Shape{
    constructor(public color: string){

    }
    abstract area(): number
    abstract perimeter(): number

    describe(): string{
        return `A ${this.color} shape with area ${this.area()}`
    }
}


class Rectangle extends Shape{
    constructor(color: string,
        public width: number,
        public length: number
    ){super(color)}
    
    area(): number {
        return this.width * this.length;
    }

    perimeter(): number {
        return 2 * (this.length + this.width)
    }
}


class Circle extends Shape{
    constructor(
        color: string,
        public  radius: number
    ){super(color)}

    area(): number {
        return Math.PI * this.radius ** 2
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius
    }
}



