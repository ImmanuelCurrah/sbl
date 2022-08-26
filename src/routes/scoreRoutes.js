import { api } from "../config";

export const getAllScores = async () => {
  try {
    const res = api.get("/games?date=2022-05-12&priority_order=true");
    return (await res).data.data;
  } catch (error) {
    console.log("could not fetch the scores");
  }
};

export const filterDate = async (date) => {
  try {
    const res = api.get(date);
    return (await res).data.data;
  } catch (error) {
    alert("Please enter a valid date");
    console.log("invalid date entered could not fetch the data");
    return getAllScores();
  }
};
