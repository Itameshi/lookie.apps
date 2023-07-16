const tasksTableBodyElement = document.getElementById('tasks-table-body')
const taskTitleInputElement = document.getElementById('task-title-input')
const taskAddButtonElement = document.getElementById('task-add-button')

const apiEndpoint = 'http://localhost:8001/api/tasks'

async function loadTasks() {
  const response = await fetch(`${apiEndpoint}`) 
  const responseBody = await response.json()

  // 追加ボタンを押したタイミングでタスク欄に表示されるようにする
  while (tasksTableBodyElement.firstChild) {
    tasksTableBodyElement.removeChild(tasksTableBodyElement.firstChild)
  }

  responseBody.forEach((task) => {
    const titleTdElement = document.createElement('td')
    titleTdElement.innerText = task.title

    const createdAtTdElement = document.createElement('td')
    createdAtTdElement.innerText = task.createdAt

    const trElement = document.createElement('tr')
    trElement.appendChild(titleTdElement)
    trElement.appendChild(createdAtTdElement)

    tasksTableBodyElement.appendChild(trElement)
  })
}

async function registerTask() {
  const title = taskTitleInputElement.value

  const requestBody = {
  	title: title
  }
  console.log(JSON.stringify(requestBody))
  await fetch(`${apiEndpoint}`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  })
  console.log('===========================================================')

	await loadTasks()
}


async function main(){
  //TasksLoadTest()
	taskAddButtonElement.addEventListener('click', registerTask)
	await loadTasks()
}

main()
