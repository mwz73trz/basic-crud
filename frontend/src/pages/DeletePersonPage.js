import { useParams, useNavigate } from "react-router-dom";
import peopleAPI from "../api/peopleAPI";

function DeletePersonPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const deletePerson = async () => {
    const data = await peopleAPI.deletePerson(params.id);
    if (data) {
      navigate(`/`);
    }
  };

  return (
    <div>
      Are you sure you want to delete this person?
      <button onClick={deletePerson}>Yes</button>
      <button>No</button>
    </div>
  );
}

export default DeletePersonPage;
