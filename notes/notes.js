
const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    })

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {

        localStorage.setItem("notes", JSON.stringify(data));
    }
}

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = ` <div class="tool">
    <i class="fas fa-save ad"></i>
    <i class="fas fa-trash del"></i>
</div>
<textarea >${text}</textarea>`;

    note.querySelector(".del").addEventListener("click", function () {
        note.remove();
        saveNotes();
    })

    note.querySelector(".ad").addEventListener("click", function () {
        saveNotes();
    })

    note.querySelector("textarea").addEventListener("focusout", function () {
        saveNotes();
    })

    main.appendChild(note);
    saveNotes();
}

addBtn.addEventListener("click", function () {
    addNote();
});

    (function () {
            const lsnotes = JSON.parse(localStorage.getItem("notes"));

            if (lsnotes === null) {
                addNote();
            } else {
                lsnotes.forEach((lsnote) => {
                    addNote(lsnote);
                }
                )
            }
        }
    )();
