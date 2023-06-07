import { useEffect, useState } from "react";
import { Person } from "../../models/Person";
import DetailsPerson from "./details-person";
import { useNavigate } from "react-router-dom";

export function ShowAllPersons() {
	const navigate = useNavigate();
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5283/api/people")
			.then((response) => response.json())
			.then((data) => setPersons(data));
	}, []);

	return (
		<>
			<h1>Persons</h1>
			<p>Here is a list of all persons</p>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Operations</th>
					</tr>
				</thead>
				<tbody>
					{persons.map((person: Person, i: number) => (
						<tr key={person.id}>
							<td>{i + 1}</td>
							<td>{person.name}</td>
							<td>
								<button onClick={() => navigate(`/persons/details/${person.id}`)}>Details</button> |{" "}
								<button>Edit</button> | <button>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
