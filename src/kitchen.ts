export class Sandwich {
  constructor(bread: string, ingredients: string[]) {
    return [bread, ...ingredients, bread];
  }
}
export class Kitchen {
  public assembleSandwich(ingredients: string[]): Sandwich {
    return new Sandwich('sourdough', ingredients);
  }

  public bakeBread(dough: string) {
    return dough.toUpperCase();
  }
}
