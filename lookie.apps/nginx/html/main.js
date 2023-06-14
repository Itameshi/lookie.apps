const tasksTableBodyElement = document.getElementById('tasks-table-body')
const taskTitleInputElement = document.getElementById('task-title-input')
const taskAddButtonElement = document.getElementById('task-add-button')

const apiEndpoint = 'http://localhost:8001/api/tasks'

/*
async function loadTasks() {
	const response = await fetch('/api/tasks')
	const responseBody = await response.json()
	
	const tasks = responseBody.tasks

	// 追加ボタンを押したタイミングでタスク欄に表示されるようにする
	while (tasksTableBodyElement.firstChild) {
		tasksTableBodyElement.removeChild(tasksTableBodyElement.firstChild)
	}

	tasks.forEach((task) => {
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
	await fetch('/api/tasks', {
		method: 'POST',
		body: JSON.stringify(requestBody)
	})

	await loadTasks()
}
*/

// jsonの取得テスト
async function TasksLoadTest(){
  //const response = await fetch('/api/tasks')
  const response = await fetch(`${apiEndpoint}`);
  //console.log(`${apiEndpoint}/api/tasks`)
  //console.log(response)
  //const responseBody = await response.json()
  /*
  const responseBody = await response.json()

  const tasks = responseBody.tasks

  tasks.forEach((task) => {
    const titleTdElement = document.createElement('td')
    titleTdElement.innerText = task.title

    const createdAtTdElement = document.createElement('td')
    createAtTdElement.innerText = task.createdAt

    const trElement = document.createElement('tr')
    trElement.appendChild(titleTdElement)
    trElement.appendChild(createAtTdElement)

    tasksTableBodyElement.appendChild(trElement)
  })
  */
}

async function main(){
  TasksLoadTest()
	//taskAddButtonElement.addEventListener('click', registerTask)
	//await loadTasks()

}

main()
