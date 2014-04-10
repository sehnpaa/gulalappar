/*jshint indent: 4, undef: false */

// Manually test if jshint runs:
// eval();

test("sanity check", function () {
    equal(4, 4);
});

test("module.initBoard", function () {
    equal(module.cells[0][0].state, "empty", "module.cells[0][0] is empty");
});

test("module.isValidGameState()", function () {
    equal(module.isValidGameState("randomstring"), false, "'randomstring' is not a valid state");
    equal(module.isValidGameState("whiteSelectCell"), true, "'whiteSelectCell' is a valid state");
});

test("module.setCellState() and module.getCellState()", function () {
    module.setCellState(0, 0, "white");
    equal(module.getCellState(0, 0), "white", "{set,get}CellState");
    module.cells[2][1].state = "14mar2";
    equal(module.getCellState(2, 1), "14mar2", "Set directly then getCellState()");
});

test("module.setAllCellState()", function () {
    module.setAllCellState("black");
    equal(module.getCellState(0, 0), "black", "getCellState(0,0)");
    equal(module.getCellState(5, 1), "black", "getCellState(5,1)");
    equal(module.getCellState(4, 3), "black", "getCellState(4,3)");
    equal(module.getCellState(2, 2), "black", "getCellState(2,2)");
});

test("module.clickCell()", function () {
    module.initBoard();
    module.setGameStateTo("whiteSelectCell");
    module.clickCell(2,0);
    equal(module.getGameState(), "whiteRotateCells", "Change module.gamestate by clicking");
});





