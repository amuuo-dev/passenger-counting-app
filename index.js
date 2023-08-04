//document.getElementById("count-el").innerText=5
let countEL = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(countEL)
let count = 0
function increment(){
    count=count+1
    countEL.textContent=count
    console.log(count)
}
function save(){
    let countstring =count+" - "
    saveEl.textContent +=countstring
    countEL.textContent=0
    count=0 
}


