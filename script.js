const input = document.querySelector('input');
const button = document.querySelector('button');
const todos = document.querySelector('.todos');


function addToList() { 
    let li = document.createElement('li');
    li.innerHTML = input.value;
    todos.appendChild(li)

    let img = document.createElement('img');
    img.src = './delete.png'
    li.appendChild(img);
    saveData()

    input.value = '';
}

button.addEventListener('click' , addToList)

// tick and untick 
todos.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        saveData()
    }
});


function saveData() {
    // todos.innerHTML
    localStorage.setItem('todolist' , todos.innerHTML)
}

function getData () {
    todos.innerHTML = localStorage.getItem('todolist')
}

getData()


function Enterkey () {
    if (event.key === 'Enter') {
        addToList()
    }
}