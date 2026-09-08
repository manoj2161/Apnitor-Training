import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { X, DicesIcon } from "lucide-react";
export const SearchResult = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [random, setRandom] = useState(null);
  const [newSearch, setNewSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const query = location.state?.query;
  const navigate = useNavigate();
  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchRecipies() {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      );
      const recipies = response.data.meals;
      setRecipes(recipies);
      setError("");
    }

    fetchRecipies();
  }, [query]);
  useEffect(() => {
    if (!searchQuery.trim()) {
      return;
    }

    async function fetchNewRecipies() {
      setRandom(null);

      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
      );

      const recipies = response.data.meals || [];

      if (recipies.length === 0) {
        setError("No recipe Found");
        setRecipes([]);
      } else {
        setError("");
        setRecipes(recipies);
      }
    }

    fetchNewRecipies();
  }, [searchQuery]);
  async function fetchFullRecipe(id) {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const recipe = response.data.meals?.[0];
    console.log(recipe);

    if (!recipe) {
      console.log("recipe not found");
      return;
    }
    setRecipe(recipe.strInstructions);
  }

  async function handleRandom() {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php",
    );
    console.log(response.data.meals[0]);
    setRandom(response.data.meals[0]);
  }

  function saveRecipe(recipeToSave) {
    const currentUser = JSON.parse(
      localStorage.getItem("recipeBoxCurrentUser"),
    );

    if (!currentUser) {
      sessionStorage.setItem("pendingRecipe", JSON.stringify(recipeToSave));
      navigate("/login");

      return;
    }

    const users = JSON.parse(localStorage.getItem("recipeBoxUsers")) || [];

    const loggedUser = users.find((user) => user.id === currentUser);

    if (!loggedUser) {
      sessionStorage.setItem("pendingRecipe", JSON.stringify(recipeToSave));

      navigate("/login");

      return;
    }

    loggedUser.recipies = loggedUser.recipies || [];

    const existingRecipe = loggedUser.recipies.find(
      (recipe) => recipe.idMeal === recipeToSave.idMeal,
    );

    if (existingRecipe) {
      console.log("Recipe already exists");
      return;
    }

    loggedUser.recipies.push(recipeToSave);
    localStorage.setItem("recipeBoxUsers", JSON.stringify(users));

    console.log("Recipe saved successfully");
  }
  function handleLogout() {
    localStorage.removeItem("recipeBoxCurrentUser");
    navigate("/");
  }
  return (
    <div className="flex relative">
      {/* <aside className="shadow bg-lime-100 rounded h-screen w-[20%]">
      </aside> */}
      <main className="h-screen w-[80%]">
        <header>
          <button onClick={handleLogout}>LogOut</button>
          <input
            type="text"
            value={newSearch}
            onChange={(e) => setNewSearch(e.target.value)}
          />
          <button onClick={() => setSearchQuery(newSearch)}>Search</button>
          <div className=" bottom-38 left-28">
            <button
              onClick={handleRandom}
              className="border rounded-full p-2 border-3"
            >
              <DicesIcon className="size-9 z-100 text-black" />
            </button>
            <span>Surprise Me !</span>
          </div>

          <button onClick={() => navigate("/myrecipies")}>My recipies</button>
        </header>
        <section></section>
        <section className="flex justify-center gap-4 flex-wrap">
          {recipe !== null && (
            <div className="w-[50%] h-auto border rounded p-4 absolute z-50 bg-white">
              <X onClick={() => setRecipe(null)} />
              <p>{recipe}</p>
            </div>
          )}
          {error !== null && <p>{error}</p>}
          {random !== null ? (
            <div key={random.idMeal} className="border rounded p-4">
              <button
                onClick={() => saveRecipe(random)}
                className="border p-2 rounded-xl bg-gray-900 text-white"
              >
                Save Recipe
              </button>
              <button
                className="border p-2 rounded-xl bg-gray-900 text-white"
                onClick={() => fetchFullRecipe(random.idMeal)}
              >
                Get Full Recipe
              </button>
              <p>Name :{random.strMeal}</p>
              <p>Category : {random.strCategory}</p>
              <img src={random.strMealThumb} alt="" className="size-32" />
            </div>
          ) : (
            recipes.map((recipe) => (
              <div key={recipe.idMeal} className="border rounded p-4">
                <button
                  onClick={() => {
                    saveRecipe(recipe);
                  }}
                  className="border p-2 rounded-xl bg-gray-900 text-white"
                >
                  Save Recipe
                </button>
                <button
                  className="border p-2 rounded-xl bg-gray-900 text-white"
                  onClick={() => fetchFullRecipe(recipe.idMeal)}
                >
                  Get Full Recipe
                </button>
                <p>Name :{recipe.strMeal}</p>
                <p>Category : {recipe.strCategory}</p>
                <img src={recipe.strMealThumb} alt="" className="size-32" />
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
};
