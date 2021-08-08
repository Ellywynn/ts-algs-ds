export default class Stack<T> {
  private stack: Array<T> = [];
  private stackSize: number = 0;

  top(): T {
    return this.stack[this.lastIndex()];
  }

  push(value: T): void {
    this.stack.push(value);
    this.stackSize++;
  }

  pop(): T {
    const value: T = this.top();
    this.stack.splice(this.lastIndex(), 1);
    this.stackSize--;
    return value;
  }

  display(): string {
    const temp: Array<T> = Array.from(this.stack);
    return temp.reverse().join(" ");
  }

  isEmpty(): boolean {
    return this.stackSize === 0;
  }

  get size(): number {
    return this.stackSize;
  }

  private lastIndex(): number {
    return this.stack.length - 1;
  }
}
