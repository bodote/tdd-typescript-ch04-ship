import { Direction } from './direction.model';

describe('Direction', () => {
  it('whenGetFromShortNameNThenReturnDirectionN', () => {
    let direction: Direction = Direction.getFromShortName('N');
    expect(direction).toEqual(Direction.NORTH);
  });

  it('whenGetFromShortNameWThenReturnDirectionW', () => {
    let direction: Direction = Direction.getFromShortName('W');
    expect(direction).toEqual(Direction.WEST);
  });
  it('whenGetFromShortNameEThenReturnDirectionE', () => {
    let direction: Direction = Direction.getFromShortName('E');
    expect(direction).toEqual(Direction.EAST);
  });

  it('whenGetFromShortNameSThenReturnDirectionS', () => {
    let direction: Direction = Direction.getFromShortName('S');
    expect(direction).toEqual(Direction.SOUTH);
  });

  it('whenGetFromShortNameBThenReturnNone', () => {
    let direction: Direction = Direction.getFromShortName('B');
    expect(direction).toEqual(Direction.NONE);
  });

  it('givenWWhenLeftThenS', () => {
    let direction: Direction = Direction.WEST;
    expect(direction.turnLeft()).toEqual(Direction.SOUTH);
  });
  it('givenNWhenLeftThenW', () => {
    let direction: Direction = Direction.NORTH;
    expect(direction.turnLeft()).toEqual(Direction.WEST);
  });

  it('givenNWhenRightThenW', () => {
    let direction: Direction = Direction.NORTH;
    expect(direction.turnRight()).toEqual(Direction.EAST);
  });

  it('givenWWhenRightThenN', () => {
    let direction: Direction = Direction.WEST;
    expect(direction.turnRight()).toEqual(Direction.NORTH);
  });
});
