export class Hello {
  public sayHello(name: string): string {
    return `hello, ${name || 'world'}!`;
  }

  public sayGoodbye() {
    return 'see you next time!';
  }
}