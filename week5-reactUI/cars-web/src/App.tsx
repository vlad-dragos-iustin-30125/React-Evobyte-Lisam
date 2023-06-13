import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Choose where to go to:</p>
      <Link to="/cars">Cars</Link>
    </>
  );
}

export default App;
