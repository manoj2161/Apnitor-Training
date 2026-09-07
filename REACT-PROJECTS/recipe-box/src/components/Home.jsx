import homeImage from "../assets/home.jpg";
import dish from "../assets/dish.png";
import { Header } from "./Header";
export const Home = () => {
  return (
    <>
      <div
        className="h-screen w-full  bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="h-screen">
          <Header />
          <div className="flex justify-center lg:gap-128 gap-78 items-center text-white mt-28">
            <div className="">
              <p className="lg:text-[80px] text-green-950 md:text-[40px] font-bold font-[jost]">
                Good Food <br />
                Brings People <br />
                Together
              </p>
            </div>
            <div>
              <img
                src={dish}
                alt=""
                className="lg:size-148 size-70 md:128 mt-36"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
