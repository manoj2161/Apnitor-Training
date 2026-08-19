import { SearchBar } from "./components/SearchBar";
import { ProfileCard } from "./components/ProfileCard";
import { useEffect, useState } from "react";
import { getGitHubUser } from "../api";
import { getGitRepos } from "../api";
import "./App/css";
function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErrors] = useState("");
  useEffect(() => {
    if (!user) {
      return;
    }
    const getUser = async () => {
      try {
        setErrors("");
        setUserData(null);
        setRepo([]);
        setLoading(true);
        const response = await getGitHubUser(user);
        const repoResponse = await getGitRepos(user);
        setUserData(response);
        setUser(user);
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
    getUser();
  }, [user]);
  return (
    <>
      <SearchBar setUser={setUser}></SearchBar>
      <ProfileCard
        user={user}
        repo={repo}
        error={error}
        loading={loading}
        userData={userData}
      ></ProfileCard>
    </>
  );
}

export default App;
