import { useEffect, useState } from "react";
import { Person } from "../../models/Person";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailsPerson() {
	const navigate = useNavigate();

	const [person, setPerson] = useState<Person | null>(null);
	const { userId } = useParams();

	useEffect(() => {
		fetch(`http://localhost:5283/api/people/${userId}`)
			.then((response) => response.json())
			.then((data) => setPerson(data));
	}, [userId]);

	if (person === null) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<h1>Details for {person.name}</h1>
			<table>
				<tbody>
					<tr>
						<th>Id</th>
						<td>{person.id}</td>
					</tr>
					<tr>
						<th>Name</th>
						<td>{person.name}</td>
					</tr>
					<tr>
						<th>Date of birth</th>
						<td>{person.dateOfBirth}</td>
					</tr>
				</tbody>
			</table>

			<button
				onClick={() => {
					navigate("/persons");
				}}>
				Back
			</button>
		</>
	);
}
