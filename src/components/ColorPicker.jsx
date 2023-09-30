import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import State from "../store/State";

const ColorPicker = () => {
	const snap = useSnapshot(State);
	return (
		<div className="absolute left-full ml-3">
			<SketchPicker
				color={snap.color}
				disableAlpha
				onChange={(color) => {
					State.color = color.hex;
				}}
				//presetColors={("#fff", "#ccc")}
			/>
		</div>
	);
};

export default ColorPicker;
