import { Link } from "react-router-dom";

export const Navbar = () => (
	<nav className="navbar navbar-dark bg-primary navbar-expand-sm">
		<div className="container-fluid">
			<div className="navbar-brand">GitHub Search</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/info" className="nav-link">
						Info
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);
