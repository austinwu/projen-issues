export class Kitchen {
  public assembleSandwich(...ingredients: string[]) {
    return ["bread", ...ingredients, "bread"];
  }

  public bakeBread(dough: string) {
    return dough.toUpperCase();
  }
}
