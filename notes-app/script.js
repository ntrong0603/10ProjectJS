
const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
    notes.forEach(note => {
        addNewNote(note);
    });
}

addBtn.addEventListener('click', () =>
{
    addNewNote();
});

function addNewNote(note = '')
{
    const noteEl = document.createElement('div');
    noteEl.classList.add('notes');
    noteEl.innerHTML = `
            <div class="tools">
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="main ${note ? '' : 'hidden'}">
            </div>
            <textarea class="${note ? 'hidden' : ''}"></textarea>
    `;

    const editBtn = noteEl.querySelector(".edit");
    const deleteBtn = noteEl.querySelector(".delete");

    const main = noteEl.querySelector('.main');
    const textArea = noteEl.querySelector('textarea');

    textArea.value = note;
    main.innerHTML = marked(note);

    editBtn.addEventListener('click', () =>
    {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', () =>
    {
        localStorage.setItem('notes', JSON.stringify(notes.filter(id => id !== textArea.value)));
        noteEl.remove();
    });

    textArea.addEventListener('input', (e) =>
    {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(noteEl);

}

function updateLS()
{
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note =>
    {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}