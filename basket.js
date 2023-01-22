let homeEl=document.getElementById("home-score");
let awayEl=document.getElementById("away-score");
function addone(passed){
    let passedInt= parseInt(passed.textContent);
    passedInt += 1;
    passed.textContent=passedInt; 
}
function addtwo(passed){
    let passedInt= parseInt(passed.textContent);
    passedInt += 2;
    passed.textContent=passedInt; 
}
function addthree(passed){
    let passedInt= parseInt(passed.textContent);
    passedInt += 3;
    passed.textContent=passedInt; 
}