import homeImage from "../assets/home.png";
import tabletHomeImage from "../assets/tablethome.png";
import mobileHomeImage from "../assets/mobileHome.png";
import { Header } from "./Header";
export const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage: `url(${homeImage})`,
        }}
      />

      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block lg:hidden"
        style={{
          backgroundImage: `url(${tabletHomeImage})`,
        }}
      />

      <div
        className="absolute inset-0 block bg-cover bg-top bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${mobileHomeImage})`,
        }}
      />

      <div className="relative z-10 h-[20%]">
        <Header />
      </div>
    </main>
  );
};
