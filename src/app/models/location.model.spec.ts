import {Direction} from './direction.model';
import {Location} from './location.model';
import {Point} from './point.model';



describe('Location', () => {
  let max: Point;
  let location: Location;

  let x: number = 12;
  let y: number = 32;
  let direction: Direction = Direction.NORTH;

  //private List<Point> obstacles;
  let obstacles: Point[];

  function assertNotSame(expected: any, actual: any) {
    expect(expected).not.toEqual(actual);
  }
  function assertEquals(expected: any, actual: any) {
    expect(expected).toEqual(actual);
  }

  function assertTrue(expected: any) {
    expect(expected).toBeTrue();
  }


  function assertFalse(expected: any) {
    expect(expected).toBeFalse();
  }

  beforeEach(async () => {
    max = new Point(50, 50);
    location = new Location(new Point(x, y), direction);
    obstacles = [];
  });

  it('whenInstantiatedThenXIsStored', () => {
    expect(location.getX()).toEqual(x);
  });

  it('whenInstantiatedThenYIsStored ', () => {
    expect(location.getY()).toEqual(y);
  });

  it('whenInstantiatedThenDirectionIsStored ', () => {
    expect(location.getDirection()).toEqual(direction);
  });

  it('givenDirectionNWhenForwardThenYDecreases ', () => {
    location.forward(max, obstacles);
    expect(location.getY()).toEqual(y - 1);
  });


  it('givenDirectionSWhenForwardThenYIncreases ', () => {
    location.setDirection(Direction.SOUTH);
    location.forward(max, obstacles);
    expect(location.getY()).toEqual(y + 1);
  });
  it('givenDirectionEWhenForwardThenXIncreases ', () => {
    location.setDirection(Direction.EAST);
    location.forward(max, obstacles);
    expect(location.getX()).toEqual(x + 1);
  });
  it('givenDirectionWWhenForwardThenXDecreases ', () => {
    location.setDirection(Direction.WEST);
    location.forward(max, obstacles);
    expect(location.getX()).toEqual(x - 1);
  });
  it('givenDirectionNWhenBackwardThenYIncreases ', () => {
    location.setDirection(Direction.NORTH);
    location.backward(max, obstacles);
    expect(location.getY()).toEqual(y + 1);
  });
  it('givenDirectionSWhenBackwardThenYDecreases ', () => {
    location.setDirection(Direction.SOUTH);
    location.backward(max, obstacles);
    expect(location.getY()).toEqual(y - 1);
  });
  it('givenDirectionEWhenBackwardThenXDecreases ', () => {
    location.setDirection(Direction.EAST);
    location.backward(max, obstacles);
    expect(location.getX()).toEqual(x - 1);
  });
  it('givenDirectionWWhenBackwardThenXIncreases ', () => {
    location.setDirection(Direction.WEST);
    location.backward(max, obstacles);
    expect(location.getX()).toEqual(x + 1);
  });


  it('whenTurnLeftThenDirectionIsSet', () => {
    location.turnLeft();
    assertEquals(location.getDirection(), Direction.WEST);
  });

  it('whenTurnRightThenDirectionIsSet', () => {
    location.turnRight();
    assertEquals(location.getDirection(), Direction.EAST);
  });

  it('givenSameObjectsWhenEqualsThenTrue', () => {
    assertTrue(location.equals(location));
  });

  // it('givenDifferentObjectWhenEqualsThenFalse', () => {
  //   assertFalse(location.equals("bla"));
  // });

  it('givenDifferentXWhenEqualsThenFalse', () => {
    let locationCopy:Location = new Location(new Point(999, location.getY()), location.getDirection());
    assertFalse(location.equals(locationCopy));
  });

  it('givenDifferentYWhenEqualsThenFalse', () => {
    let locationCopy:Location = new Location(new Point(location.getX(), 999), location.getDirection());
    assertFalse(location.equals(locationCopy));
  });

  it('givenDifferentDirectionWhenEqualsThenFalse', () => {
    let locationCopy:Location = new Location(location.getPoint(), Direction.SOUTH);
    assertFalse(location.equals(locationCopy));
  });

  it('givenSameXYDirectionWhenEqualsThenTrue', () => {
    let locationCopy:Location = new Location(location.getPoint(), location.getDirection());
    assertTrue(location.equals(locationCopy));
  });

  it('whenCopyThenDifferentObject', () => {
    let copy:Location = location.copy();
    copy.turnRight();
    assertNotSame(location, copy);
  });

  it('whenCopyThenEquals', () => {
    let copy:Location = location.copy();
    assertEquals(copy, location);
  });

  it('givenDirectionEAndXEqualsMaxXWhenForwardThen1', () => {
    location.setDirection(Direction.EAST);
    location.getPoint().setX(max.getX());
    location.forward(max, obstacles);
    assertEquals(location.getX(), 1);
  });

  it('givenDirectionWAndXEquals1WhenForwardThenMaxX', () => {
    location.setDirection(Direction.WEST);
    location.getPoint().setX(1);
    location.forward(max, obstacles);
    assertEquals(location.getX(), max.getX());
  });

  it('givenDirectionNAndYEquals1WhenForwardThenMaxY', () => {
    location.setDirection(Direction.NORTH);
    location.getPoint().setY(1);
    location.forward(max, obstacles);
    assertEquals(location.getY(), max.getY());
  });

  it('givenDirectionSAndYEqualsMaxYWhenForwardThen1', () => {
    location.setDirection(Direction.SOUTH);
    location.getPoint().setY(max.getY());
    location.forward(max, obstacles);
    assertEquals(location.getY(), 1);
  });

  it('givenObstacleWhenForwardThenReturnFalse', () => {
    location.setDirection(Direction.EAST);
    obstacles.push(new Point(x + 1, y));
    assertFalse(location.forward(max, obstacles));
  });

  it('givenObstacleWhenBackwardThenReturnFalse', () => {
    location.setDirection(Direction.EAST);
    obstacles.push(new Point(x - 1, y));
    assertFalse(location.backward(max, obstacles));
  });
});
