// DOM ELEMENTS

const createButton = document.getElementById('create');
const notesContainer = document.querySelector('.notes-container');
const notesContent = document.getElementById('notes-content');


// add events

createButton.addEventListener('click', createNote);


var form = document.createElement('form');

function createNote() {
    form.classList.add('form-elements');

    form.innerHTML = `
      <input placeholder="Title" id="input" />
      <textarea placeholder="Add Note" id="text"></textarea>
      <button id="add">Add</button>
    `;


    notesContainer.appendChild(form);
}

// form elements
const input = document.getElementById('input');
const text = document.getElementById('text');
const addButton = document.getElementById('add');

console.log(form);


form.addEventListener('submit', addNote);

function addNote(e) {

    e.preventDefault();

    let note = document.createElement('div');
    note.classList.add('note-text');

    note.innerHTML = `
        <
    `;
}