import { describe } from "mocha";
import { expect } from "chai";
import bubble from "../src/algorithms/bubble";
import selection from "../src/algorithms/selection";
import { qsort } from "../src/algorithms/qsort";

describe("bubble sort", () => {
  it("should return properly sorted number array", () => {
    const arr = [2, 4, 1, 5, 8, 7, -123, 5, 324];
    expect(bubble(arr).join()).to.be.eq(arr.sort((a, b) => a - b).join());
  });

  it("should return properly sorted string array", () => {
    const arr = [
      "a",
      "ds",
      "DSAW",
      "wDAW",
      "rqerWE",
      "123123",
      "adf324",
      "puk",
    ];
    expect(bubble(arr).join()).to.be.eq(arr.sort().join());
  });
});

describe("selection sort", () => {
  it("should return properly sorted number array", () => {
    const arr = [2, 4, 1, 5, 8, 7, -123, 5, 324];
    expect(selection(arr).join()).to.be.eq(arr.sort((a, b) => a - b).join());
  });

  it("should return properly sorted string array", () => {
    const arr = [
      "a",
      "ds",
      "DSAW",
      "wDAW",
      "rqerWE",
      "123123",
      "adf324",
      "puk",
    ];
    expect(selection(arr).join()).to.be.eq(arr.sort().join());
  });
});

describe("quick sort", () => {
  it("should return properly sorted number array", () => {
    const arr = [2, 4, 1, 5, 8, 7, -123, 5, 324];
    const sorted = Array.from(arr).sort((a, b) => a - b);
    expect(qsort(arr).join()).to.be.eq(sorted.join());
  });

  it("should return properly sorted string array", () => {
    const arr = [
      "a",
      "ds",
      "DSAW",
      "wDAW",
      "rqerWE",
      "123123",
      "adf324",
      "puk",
    ];

    const sorted = Array.from(arr).sort().join();

    expect(qsort(arr).join()).to.be.eq(sorted);
  });
});
