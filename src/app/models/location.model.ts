import { Direction } from './direction.model';
import { Point } from './point.model';

export class Location {
  getDirection(): Direction {
    return this.direction;
  }
  getY(): number {
    return this.point.getY();
  }
  getX(): number {
    return this.point.getX();
  }
  constructor(private point: Point, private direction: Direction) {}
}
