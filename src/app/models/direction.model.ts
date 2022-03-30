export class Direction {
  static NORTH = new Direction('N', 0);
  static EAST = new Direction('E', 1);
  static SOUTH = new Direction('S', 2);
  static WEST = new Direction('W', 3);
  static NONE = new Direction('X', 4);


  constructor(private shortname: string, private index: number) {

  }

  static getFromShortName(sname: string): Direction {
    switch (sname) {
      case Direction.NORTH.shortname:
        return Direction.NORTH;
      case 'W':
        return Direction.WEST;
      case 'E':
        return Direction.EAST;
      case 'S':
        return Direction.SOUTH;
      default:
        return Direction.NONE;
    }
  }

  static getFromIndexName(idx: number): Direction {
    switch (idx) {
      case Direction.NORTH.index:
        return Direction.NORTH;
      case Direction.WEST.index:
        return Direction.WEST;
      case Direction.EAST.index:
        return Direction.EAST;
      case Direction.SOUTH.index:
        return Direction.SOUTH;
      default:
        return Direction.NONE;
    }
  }

  turnLeft(): Direction {
    let newidx = this.index - 1;
    if (newidx < 0) {
      newidx = 3;
    }
    return Direction.getFromIndexName(newidx);
  }

  turnRight(): Direction {
    let newidx = this.index + 1;
    if (newidx > 3) {
      newidx = 0;
    }
    return Direction.getFromIndexName(newidx);
  }
}
