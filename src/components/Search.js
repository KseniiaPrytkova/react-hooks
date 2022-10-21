import { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Search = () => {
	const [value, setValue] = useState("");
	const { show } = useContext(AlertContext);

	const onSubmit = (event) => {
		if (event.key !== "Enter") {
			return;
		}

		if (value.trim()) {
			console.log("Make request with: ", value);
		} else {
			show("You forgot to enter username!");
		}
	};

	return (
		<div className="mb-4">
			<input
				type="text"
				className="form-control"
				placeholder="Enter username..."
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onKeyDown={onSubmit}
			/>
		</div>
	);
};
