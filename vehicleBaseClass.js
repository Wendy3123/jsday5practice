class Vehicle{
    constructor(color, brand, wheels, size, seatMaterial){
        this.color = color
        this.brand = brand
        this.wheels = wheels
        this.size = size
        this.seatMaterial = seatMaterial
    }
    TypeofSeatMaterial(){
        console.log(`This car has ${this.seatMaterial} seat material`)
    }

    ColorType(){
        console.log(`This car is wrapped ${this.color}`)
    }

    BrandType(){
        console.log(`This car is from ${this.brand}`)
    }

}

let x = new Vehicle('pink', 'Mercedes', 'bigWheels', 'sedan', 'leather')
x.TypeofSeatMaterial()
x.ColorType()
x.BrandType()