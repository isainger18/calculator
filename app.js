let inputText= document.getElementById("inputText")
let items=""
let buttonText= document.querySelectorAll('button')

for(numbers of buttonText){
  let inputTxt= numbers.addEventListener("click", codeforCalc)
}

function codeforCalc(e) {
  let  btnTxt=e.target.innerText
  if(btnTxt=="x"){
   btnTxt="*"
   items += btnTxt
   inputText.value= items
  }
  else if(btnTxt=="Ac"){
    items="";
    inputText.value= items
  }
  else if(btnTxt=="="){
    inputText.value= eval(items)
  }
  else if(btnTxt=="Del"){
  items=items.slice(0, -1); 
  inputText.value= items
  }
  else{
    items += btnTxt
    inputText.value= items
  }
//   items=""
  
}