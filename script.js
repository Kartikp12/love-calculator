
let name1 = document.querySelector(".name1")
let name2 = document.querySelector(".name2")
let submit = document.querySelector(".submit")
let result = document.querySelector(".box")

submit.addEventListener("click", myfun)



function myfun(){

if(name1.value == ""){
    result.innerHTML = "invaid input"
}

else if(name2.value == ""){
    result.innerHTML = "invaid input";
}

else{
const a = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
console.log(`Random value between is ${a}`);
result.innerHTML = a;
}
}