import {Direction} from './direction.model';
import {Point} from './point.model';

export class Location {
  constructor(private point: Point, private direction: Direction) {
  }

  getDirection(): Direction {
    return this.direction;
  }

  getY(): number {
    return this.point.getY();
  }

  getX(): number {
    return this.point.getX();
  }


  forward(max: Point, obstacles: Point[]): void {
    switch (this.direction) {
      case Direction.NORTH:
        this.point.setY(this.point.getY() - 1);
        return;
      case Direction.SOUTH:
        this.point.setY(this.point.getY() + 1);
        return;
      case Direction.WEST:
        this.point.setX(this.point.getX() - 1);
        return;
      case Direction.EAST:
        this.point.setX(this.point.getX() + 1);
        return;
      default:
        throw new Error("undefined forward with direction " + this.direction.toString());
    }
  }

  setDirection(direction: Direction) {
    this.direction = direction;

  }

  backward(max: Point, obstacles: Point[]) {
    switch (this.direction) {
      case Direction.NORTH:
        this.point.setY(this.point.getY() + 1);
        return;
      case Direction.SOUTH:
        this.point.setY(this.point.getY() -1 );
        return;
      case Direction.WEST:
        this.point.setX(this.point.getX() + 1);
        return;
      case Direction.EAST:
        this.point.setX(this.point.getX() - 1);
        return;
      default:
        throw new Error("undefined forward with direction " + this.direction.toString());
    }
  }

  turnLeft() {

  }

  turnRight() {

  }

  equals(location: any) {

  }

  getPoint():Point {
    throw new Error("undefined");
  }

  copy():Location {
    return new Location(new Point(this.point.getX(),this.point.getY()),this.direction);
  }
}
