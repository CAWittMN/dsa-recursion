const { makeBoard, find } = require("./boggle");

describe("makeBoard", function () {
  it("should return a 2D array with the given number of rows and columns", function () {
    let board = makeBoard(2, 3);
    expect(board.length).toEqual(2);
    expect(board[0].length).toEqual(3);
    expect(board[1].length).toEqual(3);
  });
});

describe("find", function () {
  it("should return true if the word is found in the board", function () {
    let board = makeBoard(`N C A N E
                          O U I O P
                          Z Q Z O N
                          F A D P L
                          E D E A Z`);
    expect(find(board, "NOON")).toEqual(true);
    expect(find(board, "YES")).toEqual(false);
  });
});
