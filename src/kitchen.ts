export class Kitchen {
  public assembleSandwich(...ingredients: string[]) {
    return ["bread", ...ingredients, "bread"];
  }
}
