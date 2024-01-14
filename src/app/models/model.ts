export class Model {
  constructor(
    public id: number,
    public brandId: number,
    public name: string,
    public release: Date,
    public engine: string,
    public horsePower: number,
    public imagePath: string
  ) {
  }
}
