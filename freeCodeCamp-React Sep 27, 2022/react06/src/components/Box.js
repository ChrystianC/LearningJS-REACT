import { useState } from "react";
function Box(props) {
	const styles = {
		backgroundColor: props.On ? "#333333" : "aliceblue",
	};
	return <button className="box--isTrue" style={styles} onClick={() => props.handleClick(props.Id)}></button>;
}

export default Box;
