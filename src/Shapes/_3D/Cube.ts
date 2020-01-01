namespace Shapes{
    export namespace _3D{
        export class Cube extends Shapes.Common.ShapeBase {
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
    }
}