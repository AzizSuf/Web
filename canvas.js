let canvas = document.querySelector('canvas');



let c = canvas.getContext('2d');


const CELL_SIZE = 100 // px
const SPACING = 0

canvas.width = CELL_SIZE * 8;
canvas.height = CELL_SIZE * 8;

const COLOR_2 = 'rgba(209, 139, 71, 1.0)'
const COLOR_1 = 'rgba(255, 206, 158, 1.0)'


c.font = "30px serif";

// TODO
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


for(let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        c.fillStyle = (i+j) % 2 == 0 ? COLOR_1 : COLOR_2;
        c.fillRect(i*(CELL_SIZE + SPACING), j*(CELL_SIZE + SPACING), CELL_SIZE, CELL_SIZE);    
        
        c.fillStyle = 'rgba(15, 15, 15, 0.6)';
        if (i == 0) {
            let rowNumber = 8 - j;
            c.fillText(rowNumber, i*(CELL_SIZE + SPACING) + 3, j*(CELL_SIZE + SPACING) + 25)
        }
        if (j == 7) {
            let colLetter = letters[i]
            c.fillText(colLetter, i*(CELL_SIZE + SPACING) + 80, j*(CELL_SIZE + SPACING) + CELL_SIZE - 5)
        }
    }
}


console.log(canvas);
