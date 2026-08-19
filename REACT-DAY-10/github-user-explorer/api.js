import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export const getGitHubUser = async (userName) => {
  const response = await axios.get(`${url}/${userName}`);
  return response.data;
};

export const getGitRepos = async (userName) => {
  const response = await axios.get(`${url}/${userName}/repos`);
  return response.data;
};
