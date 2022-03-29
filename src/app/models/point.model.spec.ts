import { Point } from './point.model';

describe('Point', () => {
  let x: number = 12;
  let y: number = 21;
  let point: Point;

  beforeEach(async () => {
    point = new Point(x, y);
  });

  it('whenInstantiatedThenXIsSet', () => {
    expect(point.getX()).toEqual(x);
  });
  it('whenInstantiatedThenYIsSet ', () => {
    expect(point.getY()).toEqual(y);
  });
});
