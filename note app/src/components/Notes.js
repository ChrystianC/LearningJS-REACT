import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
function Notes(props) {
	//show or hide note
	const [isHover, setIsHover] = useState(true);

	const handleMouseEnter = () => {
		setIsHover(1);
	};
	const handleMouseLeave = () => {
		setIsHover(0);
	};

	const noteElements = props.newNote.map((note, index) => {
		return (
			<section key={note.id} className="m-4 ">
				{/* props from currentNote and sending index(note.id) */}
				<aside className="btn btn-dark " key={note.id} onClick={() => props.selected(note.id)}>
					Note {index + 1}
					{note.on && (
						// props from delete note and sending index(note.id)
						<i key={"Icon" + note.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => props.delete(note.id)}>
							<Icon.TrashFill />
						</i>
					)}
				</aside>

				{note.on && (
					<textarea
						className="position-absolute bottom-0 end-0 w-75 textarea-height m-1"
						key={"text" + note.id}
						name="text"
						//onchange updating a note and send value to body in parent function update
						value={note.text}
						onChange={(e) => {
							props.updateNote(note.id, e.target.value);
						}}
					/>
				)}
			</section>
		);
	});
	//returning an array
	return noteElements;
}
export default Notes;
