import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container pt-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile/:name" element={<Profile />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
