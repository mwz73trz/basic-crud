import peopleAPI from "../api/peopleAPI";
import { useNavigate } from "react-router-dom";

function AddPersonPage(props) {
  const navigate = useNavigate();

  const handleAddPerson = async (evt) => {
    evt.preventDefault();

    const personData = {
      name: evt.target.elements["name"].value,
      birthdate: evt.target.elements["birthdate"].value,
      favorite_color: evt.target.elements["favorite_color"].value,
    };

    const data = await peopleAPI.addPerson(personData);
    if (data) {
      navigate(`/peoples/${data.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleAddPerson} method="POST">
        <label>Add New Person: </label>
        <input name="name" placeholder="enter name" />
        <input name="birthdate" placeholder="yyyy-mm-dd" />
        <input name="favorite_color" placeholder="favorite color" />
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
}

export default AddPersonPage;
