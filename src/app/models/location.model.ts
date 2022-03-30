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

  private move(current: number,  max: number,down_right:boolean) {
    if (down_right) {
      if (current >= max)
        return 1;
      return current + 1
    } else {
      if (current <= 1)
        return max;
      return current - 1
    }

  }

  forward(max: Point, obstacles: Point[]): boolean {
    switch (this.direction) {
      case Direction.NORTH:
        let newY = this.move(this.point.getY(), max.getY(),false)
        if (this.checkObstracles(new Point(this.point.getX(),newY),obstacles)){
          this.point.setY(newY);
          return true;
        } else {
          return false;
        }
      case Direction.SOUTH:
        this.point.setY(this.move(this.point.getY(), max.getY(),true));
        return true;
      case Direction.WEST:
        this.point.setX(this.move(this.point.getX(), max.getX(),false));
        return true;
      case Direction.EAST:
        let newX = this.move(this.point.getX(), max.getX(),true);
        if (this.checkObstracles(new Point(newX,this.point.getY()),obstacles)) {
          this.point.setX(newX);
          return true;
        } else {
          return false;
        }
      default:
        throw new Error("undefined forward with direction " + this.direction.toString());
    }
  }

  private checkObstracles(testPoint:Point, obstacles: Point[]):boolean {
    for (let obs of obstacles) {
      if (testPoint.equals(obs)) return false
    }
    return true;
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
        let newX = this.move(this.point.getX(), max.getX(),false);
        if (this.checkObstracles(new Point(newX,this.point.getY()),obstacles)) {
          this.point.setX(newX);
          return true;
        } else {
          return false;
        }
      default:
        throw new Error("undefined forward with direction " + this.direction.toString());
    }
  }

  turnLeft() {
    this.direction = this.direction.turnLeft();
  }

  turnRight() {
    this.direction = this.direction.turnRight();
  }

  equals(location: Location):boolean {
    if (location.getPoint().equals(this.getPoint())) {
      if (location.direction == this.direction){
        return true;
      }
    }
    return false;
  }

  getPoint():Point {
    return this.point;
  }

  copy():Location {
    return new Location(new Point(this.point.getX(),this.point.getY()),this.direction);
  }
}
