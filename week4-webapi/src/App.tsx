import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ShowAllPersons } from "./components/person/show-all-persons";
import { Link } from "react-router-dom";

function App() {
	return (
		<>
			<h1>Home page</h1>
			<p>Choose where to go to:</p>
			<Link to="/persons">Persons</Link>
		</>
	);
}

export default App;
