class Stack<T> {
  private stack: Array<T> = [];

  top(): T {
    return this.stack[this.lastIndex()];
  }

  push(value: T): void {
    this.stack.push(value);
  }

  pop(): T {
    const value: T = this.top();
    this.stack.splice(this.lastIndex(), 1);
    return value;
  }

  display(): void {
    const temp: Array<T> = Object.create(this.stack);
    console.log("Stack values:");
    for (const value of temp.reverse()) {
      console.log(value);
    }
  }

  private lastIndex(): number {
    return this.stack.length - 1;
  }
}

const stack = new Stack<number>();

stack.push(10);
stack.push(13);
stack.push(14);
stack.push(15);
stack.push(1123213);

stack.display();
console.log("Top:", stack.top());
const v1 = stack.pop();
const v2 = stack.pop();
console.log("Popped:", v1, v2);
console.log("After pop:");
stack.display();

// Stack values:
// 1123213
// 15
// 14
// 13
// 10
// Top: 1123213
// Popped: 1123213 15
// After pop:
// Stack values:
// 14
// 13
// 10
