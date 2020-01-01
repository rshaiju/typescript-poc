import ShapeBase=Shapes.Common.ShapeBase;
namespace Shapes._2D{
    export class Rectangle extends ShapeBase{
        
        constructor(public length:number,public breadth:number){
            super();
        }

        protected getShapeName(): string {
            return "Rectangle";
        }

        getArea(): number {
            return this.length * this.breadth;
        }
        
        print(){
            console.log(`Length:${ this.length} units, Breadth:${this.breadth} units`);
            super.print();
        } 
    }
}