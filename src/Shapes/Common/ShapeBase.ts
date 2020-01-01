namespace Shapes.Common{
    export abstract class ShapeBase implements IShape,IPrintable {

        constructor(){
            console.log("Creating a new instance of shape")
        }

        abstract getArea(): number;

        protected abstract getShapeName():string;

        print(): void {
            console.log(`You have created a ${ this.getShapeName()} with an area of ${ this.getArea()} units`);
        }
       
    }
}