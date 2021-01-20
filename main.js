// DOM ELEMENTS

const createButton = document.getElementById('create');
const notesContainer = document.querySelector('.notes-container');


// add events

createButton.addEventListener('click', createNote);


function createNote() {

    let form = document.createElement('form');
    form.classList.add('form-elements');

    form.innerHTML = `
      <textarea></textarea>
      <button type="submit>Add</button>
    `;
}


const formEement = document.querySelector('.form-elements');

formEement.addEventListener('submit', addNote);


function addNote(e) {

    // preventDefault form behaviour

    e.preventDefault();

    let notes = document.createElement('div');

    notes.innerHTML = `
      
    `;
}