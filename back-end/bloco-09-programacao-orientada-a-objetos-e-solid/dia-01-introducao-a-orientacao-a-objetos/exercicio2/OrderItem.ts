export default class OrderItem {
  private _name: string = String();

  private _price: number = Number();

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('Nome do produto não pode ter menos de 3 caracteres.');
    }
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    if (value < 0) {
      throw new Error('O preço do produto deve ser positivo.');
    }
    this._price = value;
  }
}
