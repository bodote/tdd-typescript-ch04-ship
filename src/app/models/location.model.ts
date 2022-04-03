import {Direction} from './direction.model';
import {Point} from './point.model';

enum ForwardBackward {
  Forward = 1,
  Backward = -1,
}
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

  forward(max: Point, obstacles: Point[]):boolean{
    return this.move (max, obstacles,ForwardBackward.Forward);
  }
  backward(max: Point, obstacles: Point[]):boolean{
    return this.move (max, obstacles,ForwardBackward.Backward);
  }
  private warp(coord:number, max:number, forward:number):   number {
    if (forward==ForwardBackward.Forward){
      if (coord>max){
        return  1 ;
      }
    } else {
      if (coord<1){
        return max;
      }
    }
    return coord; //no change
  }
  move (max: Point, obstacles: Point[],forwBackw:ForwardBackward): boolean {
    let newY:number;
    let newX:number;
    switch (this.direction) {
      case Direction.NORTH:
      case Direction.SOUTH:
        newX = this.point.getX();
        newY = this.point.getY()+(this.direction.forwareBackward*forwBackw);// +1 or -1
        newY = this.warp(newY,max.getY(),this.direction.forwareBackward*forwBackw);
        break;
      case Direction.WEST:
      case Direction.EAST:
        newY = this.point.getY()
        newX = this.point.getX()+(this.direction.forwareBackward*forwBackw);// +1 or -1
        newX = this.warp(newX,max.getX(),this.direction.forwareBackward*forwBackw);
        break;
      default:
        throw new Error("undefined forward with direction " + this.direction.toString());
    }
    let newPoint = new Point(newX,newY)
    if (this.checkObstacles(newPoint,obstacles)) {
      this.point= newPoint;
      return true;
    } else {
      return false;
    }
  }

  private checkObstacles(testPoint:Point, obstacles: Point[]):boolean {
    for (let obs of obstacles) {
      if (testPoint.equals(obs)) return false
    }
    return true;
  }

  setDirection(direction: Direction) {
    this.direction = direction;
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
