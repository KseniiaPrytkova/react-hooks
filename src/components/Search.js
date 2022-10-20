import { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Search = () => {
	const { show } = useContext(AlertContext);

	const onSubmit = (event) => {
		show("qqq");
	};

	return (
		<div className="mb-4">
			<input
				type="text"
				className="form-control"
				placeholder="Enter username..."
				onKeyUp={onSubmit}
			/>
		</div>
	);
};
