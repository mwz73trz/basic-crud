import { useEffect, useState } from "react";
import peopleAPI from "../api/peopleAPI";
import Person from "../components/Person";
import { useParams } from "react-router-dom";

function PersonPage(props) {
  const [person, setPerson] = useState(null);
  const params = useParams();

  useEffect(() => {
    const loadPerson = async () => {
      let data = await peopleAPI.getPerson(params.id);
      setPerson(data);
    };
    loadPerson();
  }, [params.id]);

  const renderPerson = () => {
    if (!person) {
      return null;
    }
    return <Person person={person} />;
  };
  return (
    <div>
      <h1>Person Information</h1>
      {renderPerson()}
    </div>
  );
}

export default PersonPage;
