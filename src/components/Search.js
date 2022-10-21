import { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { GithubContext } from "../context/github/githubContext";

export const Search = () => {
	const [value, setValue] = useState("");
	const alert = useContext(AlertContext);
	const github = useContext(GithubContext);

	const onSubmit = (event) => {
		if (event.key !== "Enter") {
			return;
		}

		github.clearUsers();

		if (value.trim()) {
			alert.hide();
			github.search(value.trim());
		} else {
			alert.show("You forgot to enter search parameters!");
		}
	};

	return (
		<div className="mb-4">
			<input
				type="text"
				className="form-control"
				placeholder="Search in Github..."
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onKeyDown={onSubmit}
			/>
		</div>
	);
};
