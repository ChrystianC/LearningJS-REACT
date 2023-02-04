import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Notes from "./Notes";
function Notepad() {
	//state containing single notes in array
	const [notes, setNotes] = useState([]);

	function addNote() {
		//screating note
		const note = {
			id: new Date().getTime(),
			text: "# Text Goes Here",
			on: false,
		};

		if (notes.length < 8) {
			setNotes((prevNote) => [note, ...prevNote]);
		}
	}
	// send to child component an function to find correct note by id and import text
	function updateNote(index, body) {
		setNotes((oldNotes) => {
			return oldNotes.map((note) => {
				if (note.id === index) {
					return { ...note, text: body };
				} else {
					return note;
				}
			});
		});
	}
	//send to child component which display on site by index
	function currentNote(index) {
		setNotes((currentNotes) => {
			return currentNotes.map((note) => {
				return note.id === index ? { ...note, on: true } : { ...note, on: false };
			});
		});
	}
	//send to child component which delete by index
	function deleteNote(index) {
		setNotes((oldNotes) => {
			const newNotes = [];
			oldNotes.filter((note) => {
				return note.id !== index ? newNotes.push(note) : "";
			});
			return newNotes;
		});
	}

	return (
		<div className="h-100">
			{notes.length > 0 ? (
				<div>
					<div className="card">
						<nav className="card-header shadow bg-white rounded">
							<button onClick={addNote} className="btn btn-outline-dark button-add-note-exists mt-3 ms-5">
								Add Note
							</button>
						</nav>
						<article>
							<section className="card-body position-relative">
								<h6 className="card-subtitle mb-2 text-muted">Make your own Notes</h6>
								<Notes newNote={notes} updateNote={updateNote} selected={currentNote} delete={deleteNote} />
							</section>
						</article>
					</div>
					<footer className="text-center p-3 footer position-absolute bottom-0 w-100">
						© 2020 Copyright
						<ProgressBar animated now={notes.length * 12.5} max={100} min={0} />
					</footer>
				</div>
			) : (
				<article className="h-100 d-flex align-items-center justify-content-center">
					<section className="d-flex flex-column">
						<label htmlFor="addNote" className="fs-1">
							There are no notes
						</label>
						<button id="addNote" onClick={addNote} className="btn btn-outline-primary">
							Add Note
						</button>
					</section>
				</article>
			)}
		</div>
	);
}

export default Notepad;
