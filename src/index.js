const input = document.querySelector('#new-task-description')
const taskList = document.querySelector('#tasks')
const submitForm = document.querySelector('#create-task-form')
const delForm = document.querySelector('#delete-task-form')
const priorityBtn = document.querySelector('#priority-btn')
const taskArr = []


const sortTaskArr = (taskArr) =>{
taskList.innerHTML = ''
taskArr.map((element, index) => {  
const taskContnet = document.createElement('li')
const taskEditBtn = document.createElement('button')
taskEditBtn.value = 'click me'
console.log(element) 
if (element.priority == 'red'){
taskArr.splice(index,1)
taskArr.unshift(element)
taskContnet.classList.add('red')
taskContnet.innerText = element.value
taskContnet.append(taskEditBtn)
taskList.appendChild(taskContnet)
} else if (taskArr[index].priority == 'green'){
let tempTask = taskArr[index]
taskArr.splice(index,1)
taskArr.push(tempTask)
taskContnet.classList.add('green')
taskContnet.innerText = element.value
taskContnet.append(taskEditBtn)
taskList.appendChild(taskContnet)
} else if (taskArr[index].priority == 'yellow') {
taskContnet.classList.add('yellow')
taskContnet.innerText = element.value
taskContnet.append(taskEditBtn)
taskList.appendChild(taskContnet) 
}
  })
}
submitForm.addEventListener("submit", (e) => {
e.preventDefault();
let value = input.value
if (value == ''){
  alert('Please Type a note')
  return
}
let priorityValue = priorityBtn.value
let task = {
  value: `${value}`,
  priority: `${priorityValue}`,
}
task.priority = priorityValue
taskArr.push(task)
sortTaskArr(taskArr)
input.value = ""
})