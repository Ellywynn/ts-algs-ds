import { describe } from "mocha";
import { expect } from "chai";
import LinkedList from "../src/data-structures/linkedList";
import Stack from "../src/data-structures/stack";

describe("Linked List", () => {
  it("head and tail sould be null", () => {
    const list = new LinkedList<number>();
    expect(list.first).to.be.null;
    expect(list.last).to.be.null;
  });

  it("size should be equal to 4", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(10);
    list.push(13);
    list.push(15);
    expect(list.size).to.be.eq(4);
  });

  it("list display", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(10);
    list.push(13);
    list.push(15);
    expect(list.display()).to.be.eq("10 - 10 - 13 - 15");
  });

  it("head and tail sould be equal to 10 and 15", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(10);
    list.push(13);
    list.push(15);
    expect(list.first).to.be.eq(10);
    expect(list.last).to.be.eq(15);
  });

  it("adding new values", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(10);
    list.push(13);
    list.push(15);
    list.push(3);
    list.push(2);
    expect(list.display()).to.be.eq("10 - 10 - 13 - 15 - 3 - 2");
  });

  it("removing the head ", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(10);
    list.push(13);
    list.push(15);
    list.push(3);
    list.push(2);
    list.remove(10);
    expect(list.display()).to.be.eq("10 - 13 - 15 - 3 - 2");
    expect(list.size).to.be.eq(5);
  });

  it("removing value in the middle", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(10);
    list.push(13);
    list.push(15);
    list.push(3);
    list.push(2);
    list.remove(10);
    list.remove(3);
    expect(list.display()).to.be.eq("10 - 13 - 15 - 2");
    expect(list.size).to.be.eq(4);
  });

  it("removing the tail", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(10);
    list.push(13);
    list.push(15);
    list.push(3);
    list.push(2);
    list.remove(10);
    list.remove(3);
    list.remove(2);
    expect(list.display()).to.be.eq("10 - 13 - 15");
    expect(list.size).to.be.eq(3);
  });
});

describe("Stack", () => {
  it("shoud be empty", () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).to.be.true;
  });

  it("pushing values", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(3);
    stack.push(100);
    stack.push(5);
    expect(stack.display()).to.be.eq("5 100 3 1");
  });

  it("pop value", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(3);
    const value = stack.pop();
    expect(value).to.be.eq(3);
  });

  it("checking top value", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(3);
    expect(stack.top()).to.be.eq(3);
  });

  it("checking size", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(3);
    expect(stack.size).to.be.eq(2);
  });
});
