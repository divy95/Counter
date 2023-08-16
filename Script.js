let number1=document.getElementById('demo')
let number2=document.getElementById('previousEntry')
let count=0
function increase(){
    count++
    number1.innerHTML=count;
}
function save(){
    let number3=count+"-";
    number2.innerHTML+=number3;
   
}
function reset(){
    count=0
   number1.innerHTML=count
}