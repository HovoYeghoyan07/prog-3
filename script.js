var socket = io();

var side = 30;
function setup() {
    createCanvas(20 * side, 20 * side);
    background("brown");

}
function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")


            }
            else if(matrix[y][x] == 4){
                fill("blue")
            }
            else if (matrix[y][x] == 5) {
                fill("brown");
            }
            
            rect(x * side, y * side, side, side);
        }
    }

setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)}

       
 


// function kill() {
//     socket.emit("kill")
// }
// function addGrass() {
//     socket.emit("add grass")
// }
// function addGrassEater() {
//     socket.emit("add grassEater")
// }
// function addMushroom(){
//     socket.emit("add mushroom")
// }