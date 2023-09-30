import React from "react";
import { useSnapshot } from "valtio";

import State from "../store/State";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
	const snap = useSnapshot(State);

	const activeStyles =
		isFilterTab && isActiveTab
			? { backgroundColor: snap.color, opacity: 0.5 }
			: { backgroundColor: "transparent", opacity: 1 };

	return (
		<div
			key={tab.name}
			className={`tab-btn ${
				isFilterTab ? "rounded-full glassmorhism" : "rouded-4"
			}`}
			onClick={handleClick}
		>
			<img
				src={tab.icon}
				alt={tab.name}
				className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12"}`}
			/>
		</div>
	);
};

export default Tab;
