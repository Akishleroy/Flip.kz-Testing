abstract class Animal{

    abstract makeSound(): void;
  
  }
  
  
  
  class Dog extends Animal{
    public name:string
    public surname:string
  
    makeSound(): void {
  
      console.log(`${this.name} barks`);
  
    }
  
  }


class Cat extends Animal {

    makeSound(): void {

        console.log('Cat meows');

    }

}



let animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => animal.makeSound());