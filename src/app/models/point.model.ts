export class Point {
  getY(): any {
    return this.y;
  }
  getX(): any {
    return this.x;
  }
  constructor(private x: number, private y: number) {}
}
