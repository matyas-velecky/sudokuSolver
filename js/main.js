let sudokuGrid = [[], [], [], [], [], [], [], [], []];
const columns = [
    document.getElementById("row1"),
    document.getElementById("row2"),
    document.getElementById("row3"),
    document.getElementById("row4"),
    document.getElementById("row5"),
    document.getElementById("row6"),
    document.getElementById("row7"),
    document.getElementById("row8"),
    document.getElementById("row9"),
];
const submitButton = document.getElementById("submit");
function fillGrid(){
    sudokuGrid = [[], [], [], [], [], [], [], [], []];

    columns.forEach((column, colIndex)=>{
        let colVal = column.value.split(",").map(Number);

        if(colVal.length !== 9){
            alert(`Column ${colIndex + 1} must have 9 numbers`);
        }

        colVal.forEach((value, rowIndex) => {
            sudokuGrid[colIndex][rowIndex] = value;
        });
    });
}
submitButton.addEventListener("click", ()=>{
    fillGrid();
    console.log(sudokuGrid);
});
