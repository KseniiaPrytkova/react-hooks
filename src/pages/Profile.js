import { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";
import { Repos } from "../components/Repos";
import { GithubContext } from "../context/github/githubContext";

export const Profile = () => {
	const { getUser, getRepos, loading, user, repos } =
		useContext(GithubContext);
	const params = useParams();
	const urlName = params.name;

	useEffect(() => {
		getUser(urlName);
		getRepos(urlName);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (loading) {
		<Loader />;
	}

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
	} = user;

	return (
		<Fragment>
			<Link
				to="/"
				className="btn btn-link"
				style={{ textDecoration: "none" }}
			>
				Back Home
			</Link>

			<div className="card mb-4">
				<div className="card-body">
					<div className="row">
						<div className="col-sm-4 text-center">
							{/* <div className="col-sm-3 text-center"> */}
							<img
								src={avatar_url}
								alt={name}
								style={{ width: "80%" }}
							/>
							<h1>{name}</h1>
							{location && <p>Location: {location}</p>}
							{/* </div> */}
						</div>

						<div className="col-sm-8">
							{bio && (
								<Fragment>
									<h3>BIO</h3>
									<p>{bio}</p>
								</Fragment>
							)}
							<a
								href={html_url}
								target="_blank"
								className="btn btn-dark"
								rel="noreferrer"
							>
								Open profile
							</a>

							<ul className="list-group list-group-flush">
								{login && (
									<li className="list-group-item ps-0">
										<strong>Username: </strong> {login}
									</li>
								)}

								{company && (
									<li className="list-group-item ps-0">
										<strong>Company: </strong> {company}
									</li>
								)}

								{blog && (
									<li className="list-group-item ps-0">
										<strong>Website: </strong>

										<a
											href={blog}
											target="_blank"
											rel="noreferrer"
											style={{ textDecoration: "none" }}
										>
											{blog}
										</a>
									</li>
								)}
							</ul>

							{/* <ul>
								{login && (
									<li>
										<strong>Username: </strong> {login}
									</li>
								)}

								{company && (
									<li>
										<strong>Company: </strong> {company}
									</li>
								)}

								{blog && (
									<li>
										<strong>Website: </strong> {blog}
									</li>
								)}
							</ul> */}
							<span className="badge text-bg-primary me-2">
								Followers: {followers}
							</span>
							<span className="badge text-bg-success  me-2">
								Following: {following}
							</span>
							<span className="badge text-bg-warning  me-2">
								Repos: {public_repos}
							</span>
							<span className="badge text-bg-info">
								Gists: {public_gists}
							</span>
						</div>
					</div>
				</div>
			</div>

			<Repos repos={repos} />
		</Fragment>
	);
};
