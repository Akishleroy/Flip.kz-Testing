class Car {

    private speed: number;



    constructor() {

        this.speed = 0;

    }



    accelerate(amount: number): void {

        this.speed = this.speed + amount;

    }



    getSpeed(): number {

        return this.speed;

    }

}



let myCar = new Car();

myCar.accelerate(50);

console.log(myCar.getSpeed()); // Выведет: 50