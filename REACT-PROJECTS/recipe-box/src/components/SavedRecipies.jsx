import { useEffect, useState } from "react";

export const SavedRecipies = () => {
  const [myRecipies, setMyRecipies] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("recipeBoxUsers")) || [];
    const currentUser = JSON.parse(
      localStorage.getItem("recipeBoxCurrentUser"),
    );
    const loggedUser = users.find((user) => user.id === currentUser);
    if (!loggedUser) {
      return;
    }
    const recipies = loggedUser.recipies;
    console.log(recipies);

    setMyRecipies(recipies);
  }, []);
  return (
    <>
      <h1>My recipies</h1>
      <div className="flex flex-wrap">
        {myRecipies.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="border w-58 h-58 flex flex-col items-center m-2 justify-center p-2"
          >
            <p>Name : {recipe.strMeal}</p>
            <img src={recipe.strMealThumb} className="size-28" />
            <p>Category : {recipe.strCategory}</p>
            <p>Country : {recipe.strCountry}</p>
          </div>
        ))}
      </div>
    </>
  );
};
