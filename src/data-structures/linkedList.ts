class LLNode<T> {
  public next: LLNode<T> | null = null;
  public value: T | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: LLNode<T> | null = null;
  private tail: LLNode<T> | null = null;
  private listSize: number = 0;

  push(value: T): void {
    const newNode: LLNode<T> = new LLNode<T>(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.listSize++;
  }

  remove(value: T): void {
    if (this.size === 0) return;
    let node = this.head,
      prev = this.head;

    while (node) {
      if (node?.value === value) {
        if (node === this.head) {
          this.head = this.head.next;
        } else {
          prev!.next = node.next;
          node = null;
        }
        this.listSize--;
        return;
      }
      prev = node;
      node = node!.next;
    }
  }

  display(): void {
    if (this.head === null) {
      return console.log("The list is empty.");
    }

    const values = new Array<T>();

    let node: LLNode<T> | null = this.head;
    while (node) {
      values.push(node.value!);
      node = node.next;
    }

    console.log(values.join(" - "));
  }

  get size(): number {
    return this.listSize;
  }

  get last(): T | null {
    if (!this.tail) return null;
    return this.tail!.value;
  }

  get first(): T | null {
    if (!this.head) return null;
    return this.head!.value;
  }
}

const list = new LinkedList<number>();
console.log("Head", list.first);
console.log("Tail", list.last);
list.push(10);
list.push(10);
list.push(13);
list.push(15);
console.log("size:", list.size);
list.display();
console.log("Head", list.first);
console.log("Tail", list.last);
console.log("Removing 10");
list.remove(10);
list.display();
console.log("size:", list.size);
list.push(3);
list.push(2);
console.log("Adding new values:");
list.display();
console.log("Removing 3:");
list.remove(3);
list.display();
console.log("Removing 2:");
list.remove(2);
list.display();
