import { SearchBar } from "./components/SearchBar";
import { ProfileCard } from "./components/ProfileCard";
import { useState } from "react";
import { getGitHubUser } from "../api";
import { getGitRepos } from "../api";
import "./App.css";
function App() {
  const [userData, setUserData] = useState(null);
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErrors] = useState("");
  const getUser = async (user) => {
    try {
      setErrors("");
      setUserData(null);
      setRepo([]);
      setLoading(true);
      const [response, repoResponse] = await Promise.all([
        getGitHubUser(user),
        getGitRepos(user),
      ]);
      setUserData(response);
      setRepo(repoResponse);
    } catch (error) {
      if (error.response?.status === 404) {
        return setErrors("User not found");
      } else if (error.response?.status === 500) {
        return setErrors("Server Error");
      } else {
        return setErrors(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SearchBar getUser={getUser}></SearchBar>
      <ProfileCard
        repo={repo}
        error={error}
        loading={loading}
        userData={userData}
      ></ProfileCard>
    </>
  );
}

export default App;
