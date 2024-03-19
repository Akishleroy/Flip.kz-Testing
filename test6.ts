abstract class Shape{
  public color: string;

  constructor(color: string) {
      this.color = color;
  }
    abstract calculateArea(): void;
    abstract display(): void;
}
  
  
  
  class Rectangle extends Shape{
    public width:number
    public height:number

    constructor(width:number,height:number,color:string){
      super(color)
      this.width=width
      this.height=height
    }
  
    calculateArea(): number{
      return (this.width*this.height)
    };

    display():string{
      return (`its ${this.color} rectangle`)
    };
  
  }


  class Circle extends Shape{
    public radius:number
    

    constructor(radius:number,color:string){
      super(color)
      this.radius=radius
    }
  
    calculateArea(): number{
      return (this.radius*this.radius*Math.PI)
    };

    display():string{
      return (`its ${this.color} circle`)
    };
  
  }

let rectangle1=new Rectangle(10,20,"green")
let circle1= new Circle(12,"yellow")

// console.log(rectangle1.calculateArea())
// console.log(rectangle1.display())

// console.log(circle1.calculateArea())
// console.log(circle1.display())



let shapes: Shape[] = [new Rectangle(10,20,"green"), new Circle(12,"yellow")];

shapes.forEach(shape => {console.log(shape.calculateArea()),console.log(shape.display())});