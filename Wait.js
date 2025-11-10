const information= (23,[
"TAKE",
"TAKE",
"SERVE",
"TAKE",
"SERVE",
"SERVE",
"CLOSE",
"TAKE",
"TAKE",
"TAKE",
"SERVE",
"CLOSE",
"TAKE",
"SERVE",
"TAKE",
"SERVE",
"TAKE",
"TAKE",
"TAKE",
"TAKE",
"TAKE",
"TAKE",
"SERVE",
"CLOSE",//first is how many takes between close. Second is how many takes betweeb close - serves between close. Third is 23 + all of the takes from all days
"EOF"]);
//for (let i = 0; i < list.length; i++) {
let taken = 0;
let serven = 0;
let closen = 23;
function waitForService(information) {
    for (let x= 0 ; x< information.length; x++){

    while (x != EOF) {//run
        if (x == TAKE) {
            taken = taken + 1;
            closen = closen + 1;
        }
        if (x == SERVE) {
            serven = serven + 1;
        }
        if (x == CLOSE) {
            console.log(taken)
            console.log(taken - serven)
            console.log(closen)
            taken = 0;
            serven = 0; }
    }} }
waitForService(information);