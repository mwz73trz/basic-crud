import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import peopleAPI from "../api/peopleAPI";
import PeopleList from "../components/PeopleList";

function HomePage() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    loadPeopleList();
  }, []);

  const loadPeopleList = async () => {
    const data = await peopleAPI.getPeopleList();
    setPeoples(data ? data : []);
  };

  const renderPeopleList = () => {
    return peoples.map((people, index) => {
      return <PeopleList people={people} />;
    });
  };
  return (
    <div>
      <h1>Home Page</h1>
      {renderPeopleList()}
      <br />
      <Link to="peoples/add/">Add Person</Link>
    </div>
  );
}

export default HomePage;
