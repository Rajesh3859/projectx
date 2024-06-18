
//javascript
document.getElementById("1").addEventListener("click", block);
document.getElementById("2").addEventListener("click", block);
document.getElementById("3").addEventListener("click", block);
document.getElementById("4").addEventListener("click", block);
document.getElementById("5").addEventListener("click", block);
document.getElementById("6").addEventListener("click", block);
document.getElementById("7").addEventListener("click", block);
document.getElementById("8").addEventListener("click", block);
document.getElementById("9").addEventListener("click", block);
document.getElementById("0").addEventListener("click", block);
document.getElementById("*").addEventListener("click", block);
document.getElementById("/").addEventListener("click", block);
document.getElementById("+").addEventListener("click", block);
document.getElementById("-").addEventListener("click", block);
document.getElementById("c").addEventListener("click", clear);
document.getElementById("=").addEventListener("click", result);

function block(){
    var val=this.value;
    document.getElementById("ans").value+=val;
}

function result(){
    let x = document.getElementById("ans").value;
    let y = eval(x);
    document.getElementById("ans").value=y;
}

function clear(){
    document.getElementById("ans").value="";
}