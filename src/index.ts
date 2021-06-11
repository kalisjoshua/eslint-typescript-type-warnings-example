class Shape {
  public readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export default Shape;
