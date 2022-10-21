import { Link } from "react-router-dom";

export const Card = ({ user }) => (
	// <div className="card ">
	// 	<img
	// 		src={user.avatar_url}
	// 		alt={user.login}
	// 		className="card-img-top"
	// 	></img>
	// 	<div className="card-body">
	// 		<h5 className="card-title">{user.login}</h5>
	// 		<Link to={"/profile/" + user.login} className="btn btn-primary">
	// 			Open
	// 		</Link>
	// 	</div>
	// </div>
	<div className="card">
		<img src={user.avatar_url} className="card-img-top" alt={user.login} />
		<div className="card-body">
			<h5 className="card-title">{user.login}</h5>
			{/* <p className="card-text">
				Some quick example text to build on the card title and make up
				the bulk of the card's content.
			</p> */}
			<Link to={"/profile/" + user.login} className="btn btn-primary">
				More info
			</Link>
		</div>
	</div>
);
