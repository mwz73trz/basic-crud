import { Link } from "react-router-dom";

function PeopleList(props) {
  return (
    <div>
      <Link to={`peoples/${props.people.id}`}>{props.people.name}</Link>
    </div>
  );
}

export default PeopleList;
