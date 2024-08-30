import { httpAxios } from "@/helper/httpHelper";

export const addTask = async (task) => {
  try {
    const result = await httpAxios
      .post("/api/task", task)
      .then((res) => res.data);
    console.log(result);
    alert("Task added..!");
  } catch (error) {
    console.log("Axios Error in POST: ", error);
    alert("Error during adding task"); 
  }
};

