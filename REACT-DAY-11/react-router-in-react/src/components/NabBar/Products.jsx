import { useSearchParams } from "react-router-dom";
export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <>
      <h1>Category : {category}</h1>
    </>
  );
};
