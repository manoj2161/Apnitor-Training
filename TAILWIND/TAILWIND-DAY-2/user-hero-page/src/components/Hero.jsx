export const Hero = () => {
  return (
    <>
      <section className="md:flex h-auto md:h-screen lg:h-screen sm:h-screen block justify-between items-center bg-[#040617]">
        <div className="p-8">
          <p className="text-[140px] text-white font-semibold -mb-8">I am</p>
          <p className="text-yellow-500 text-2xl ">Passionate Web Developer</p>
          <hr className="w-24 text-purple-500 mb-8" />
          <p className="text-gray-400 text-lg">
            I am a passionate Web Developer with over 5 years of experience in
            creating compelling visual designs.
          </p>
        </div>
        <div className>
          <img
            className="lg:h-screen md:h-212 md:w-full md:object-contain lg:object-contain px-8 pt-26 size-screen object-contain"
            src="../src/assets/womanHoldingTab.png"
            alt="woman"
          />
        </div>
      </section>
    </>
  );
};
