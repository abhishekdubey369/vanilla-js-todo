import {saveData , deleteData , getData , updateData , renderData} from "./functionHandler.js";

document.addEventListener('DOMContentLoaded',()=>{
const button = document.getElementById("todo");

const input = document.getElementById("prompt");

const listHolder = document.getElementById("olist");

let tasks = getData() || [];

tasks.forEach(element => {
renderData(listHolder,element);
});

//save(input);
button.addEventListener("click",()=>{
  console.log("click");
  if(input.value==="") return ;
    const newTask = {
id: Date.now(),
      text: input.value,
      completed:false,
    };
    tasks.push(newTask);
    input.value="";
  saveData(tasks);
  renderData(listHolder,newTask);
  })
})


