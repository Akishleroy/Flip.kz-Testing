class Developer{
    private name: string;
    private salary:number;

    constructor(name: string,salary: number){
        this.name=name;
        this.salary=salary;
    }

    getName():string{
        return this.name;
    }

    getSalary():number{
        return this.salary;
    }

    drinkCoffee(): void {
        console.log("im drinking coffee");
    }
}

class Qaeng extends Developer{
    testing(): void {
        console.log("im testing");
    }
}

let jun = new Qaeng('Alibek',200);
jun.drinkCoffee()
jun.testing()