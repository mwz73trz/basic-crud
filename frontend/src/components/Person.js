import { Link } from "react-router-dom";

function Person(props) {
  return (
    <div>
      <h2>{props.person.name}</h2>
      <p>Birthdate: {props.person.birthdate}</p>
      <p>Favorite Color: {props.person.favorite_color}</p>
      <br />
      <Link to={`/peoples/${props.person.id}/delete/`}>
        <button>Delete Person</button>
      </Link>
    </div>
  );
}

export default Person;
