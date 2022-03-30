export class Point {
  getY(): any {
    return this.y;
  }
  getX(): any {
    return this.x;
  }
  constructor(private x: number, private y: number) {}

  setY(y: number) {
    this.y=y;
  }

  setX(x: number) {
    this.x=x;

  }

  equals(point: Point):boolean {
    if ((point.getX() == this.x) && (point.getY() == this.y)){
      return true;
    }
    return false;
  }
}
