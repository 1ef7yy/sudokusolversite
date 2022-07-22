function isValid(board, row, col, k) {
	for (let i = 0; i < 9; i++) {
		const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
		const n = 3 * Math.floor(col / 3) + i % 3;
		if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
			return false;
		}
	}
	return true;
}


// backtracking algorithm for solving sudoku
// https://stackoverflow.com/questions/42736648/sudoku-solver-in-js


function sudokuSolver(data) {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (data[i][j] == '.') {
				for (let k = 1; k <= 9; k++) {
					if (isValid(data, i, j, k)) {
						data[i][j] = `${k}`;
					if (sudokuSolver(data)) {
           				return true;
          			} else {
           				data[i][j] = '.';
          			}
         			}
       			}
       			return false;
     		}
   		}
 	}
 	return true;
}


function solve(){
	let inputs = document.getElementsByTagName('input');
	let _board = new Array();
	for (let input of inputs){
		// any other values other than 1-9 count as '.'
		if (isNumber(input.value) == true){
			_board.push(input.value)
		} else {
			_board.push('.')
		}

	}
	// breaking the big array of all values
	// into 9x9 arrays
	var size = 9; var arrayOfArrays = [];
	for (var i=0; i<_board.length; i+=size) {
    	arrayOfArrays.push(_board.slice(i,i+size));
	}
	sudokuSolver(arrayOfArrays);
	print_values(arrayOfArrays);
}


// printing values to the grid

function print_values(bo){
	for (let i=0; i<9; i++){
		let square = document.getElementsByClassName(`square-${i+1}`)[0];
		for (let j=0; j<9; j++){
			if (isNumber(bo[i][j]) == true){
			square.children[j].value = bo[i][j]
			} else {
				document.getElementById('error-msg').innerHTML = 'Invalid value in the matrix!'
				return;
			}
		}
	}
	
	console.log(bo)
	
}


// checking if input is a number in range 1-9

function isNumber(n){
	if (isNaN(parseInt(n)) || n == 0){
		return false;
	}
	return true;
}
