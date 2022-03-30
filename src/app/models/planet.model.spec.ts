import { Planet } from './planet.model';
import {Point} from "./point.model";

describe('Planet', () => {

  let planet:Planet;
  const max:Point = new Point(50,50);
  let obstacles:Point[]=[];

  beforeEach(async () => {

    obstacles.push(new Point(12, 13));
    obstacles.push(new Point(16, 32));
    planet = new Planet(max, obstacles);
  });

  it('whenInstantiatedThenMaxIsSet', () => {
    expect(planet.getMax()).toEqual( max);
  });
  it('whenInstantiatedThenObstaclesAreSet', () => {
    expect(planet.getObstacles()).toEqual( obstacles);
  });

});
