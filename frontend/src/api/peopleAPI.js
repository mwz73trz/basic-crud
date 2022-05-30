import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

const peopleAPI = {};

peopleAPI.getPeopleList = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}peoples/`));
};

peopleAPI.getPerson = async (peopleId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}peoples/${peopleId}/`)
  );
};

peopleAPI.addPerson = async (personObject) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}peoples/`, personObject)
  );
};

peopleAPI.deletePerson = async (peopleId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}peoples/${peopleId}/`)
  );
};

peopleAPI.updatePerson = async (peopleId, personObject) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}peoples/${peopleId}/`, personObject)
  );
};

export default peopleAPI;
