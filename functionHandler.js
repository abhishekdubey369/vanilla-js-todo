export function saveData(item) {
  console.log("Saved Successfully");
  localStorage.setItem('Task',JSON.stringify(item))
}

export function deleteData(item){
  console.log("Deleted Successfully");
  
}

export function getData(){
  console.log("Recieved Successfully");
  return JSON.parse(localStorage.getItem('Task'));
}

export function updateData(item){
  console.log("Updated Successfully");
}

export function renderData(holder,element) {
  console.log("Data Rendered Successfully");
    const li = document.createElement("li");
    li.setAttribute("task-id",element.id);
    li.innerHTML = `
<span>
  ${element.text}
</span>
<button>
  delete
</button>
`
  holder.appendChild(li);
}

