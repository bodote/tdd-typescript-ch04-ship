import {Point} from "./point.model";

export class Planet {
  constructor(private max: Point, private obstacles: Point[]) {

  }

  getMax():Point {
    return this.max;
  }

  getObstacles():Point[] {
    return this.obstacles;
  }
}
