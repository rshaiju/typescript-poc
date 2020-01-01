import {ShapeBase} from './Common/ShapeBase'

    class Rectangle extends ShapeBase{
        
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

    export {Rectangle}
