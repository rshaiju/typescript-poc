import {ShapeBase} from './Common/ShapeBase'

        class Cube extends ShapeBase {
            constructor(public side:number) {
                super();
            }
            getArea(): number {
                return this.side *this.side * this.side;
            }
            protected getShapeName(): string {
                return "Cube";
            }
        }
    export{Cube}
