import { toast } from "react-toastify";
// add to db
export const addToDb = (id) => {
  let jobList = getFromDb();
  if (jobList.some((job) => job._id === id)) {
    toast.warn("Already applied");
  } else {
    const newJob = { _id: id };
    jobList = [...jobList, newJob];
    toast.success("Application received");
  }
  localStorage.setItem("job-list", JSON.stringify(jobList));
};

export const getFromDb = () => {
  const stroedJobs = localStorage.getItem("job-list");
  return stroedJobs ? JSON.parse(stroedJobs) : [];
};
