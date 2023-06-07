import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShowAllPersons } from "./components/person/show-all-persons.tsx";
import DetailsPerson from "./components/person/details-person.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/persons",
		element: <ShowAllPersons />,
	},
	{
		path: "/persons/details/:userId",
		element: <DetailsPerson />,
	},
	{
		path: "/persons/update/:userId",
		element: <div>to do update</div>,
	},
	{
		path: "/persons/delete/:userId",
		element: <div>to do delete</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
