import "./ProfileCard.css";
export const ProfileCard = ({ repo, error, loading, userData }) => {
  return (
    <>
      <div className="profileCard">
        <div className="loadingmsg">
          {loading && (
            <p className="loadMsg">
              <div className="w-screen h-screen flex justify-center items-center">
                <div className="border-4 w-14 h-14 rounded-full text-blue-500 animate-spin border-b-red-400 border-t-red-400"></div>
              </div>
            </p>
          )}
        </div>
        <div className="loadingmsg">
          {error && <p className="loadMsg">{error}</p>}
        </div>
        <div className="userData">
          {userData && (
            <div>
              <div className="profileHeader">
                <p>{userData.login}</p>
                <img
                  className="avatar"
                  src={userData.avatar_url}
                  alt="avatar"
                />
              </div>
              <div className="details">
                <div className="bioProfile">
                  <div className="profile">
                    <img src={userData.avatar_url} alt="avatar" />
                    <div className="names">
                      <h3>{userData.name}</h3>
                      <p className="loginName">{userData.login}</p>
                    </div>
                  </div>
                  <div className="bios">
                    {userData.bio && <p className="bioData">{userData.bio}</p>}
                    <p>Followers : {userData.followers}</p>
                    <p>Following : {userData.following}</p>
                    <p>Public Repos : {userData.public_repos}</p>
                  </div>
                </div>
                {
                  <div className="repos">
                    <h3>Public Repos</h3>
                    {repo.length === 0 ? (
                      <p>This user has no public repos</p>
                    ) : (
                      repo.map((repo) => (
                        <div key={repo.id} className="repoDetail">
                          <div className="repoName">
                            <h3 className="name">{repo.name} </h3>
                          </div>
                          <div className="repoViewing">
                            <span className="view">
                              {repo.owner.user_view_type.toUpperCase()}
                            </span>
                            <p className="language">
                              {(repo.language === "JavaScript" && (
                                <span>🟡</span>
                              )) ||
                                (repo.language === "CSS" && <span>🟣</span>) ||
                                (repo.language === "HTML" && <span>🟠</span>) ||
                                (repo.language === "Python" && <span>🔵</span>)}
                              {repo.language}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
