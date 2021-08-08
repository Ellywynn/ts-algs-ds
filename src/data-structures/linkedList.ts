class LLNode<T> {
  public next: LLNode<T> | null = null;
  public value: T | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

export default class LinkedList<T> {
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

  display(): string {
    if (this.head === null) {
      return "The list is empty.";
    }

    const values = new Array<T>();

    let node: LLNode<T> | null = this.head;
    while (node) {
      values.push(node.value!);
      node = node.next;
    }

    return values.join(" - ");
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
