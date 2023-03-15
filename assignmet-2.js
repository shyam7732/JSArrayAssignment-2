
let array = [];
let input = document.querySelector("input");
let add = document.querySelector(".add");
let print = document.querySelector(".print");
let output = document.querySelector("p")

add.onclick = () => {
    array.push(input.value);
    console.log(array);
    input.value = ""; 
    input.focus();
}

print.onclick = () => {
   output.innerHTML = array.reverse();
}