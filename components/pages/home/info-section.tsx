/** make a slogan for shop flower */
function InfoSection() {
  return (
    <div className="flex bg-gradient-to-b from-pink-50 via-white to-rose-50 text-light justify-center items-center flex-col relative bg-transparent">
      <div className="text-[#FFF5EC] justify-center flex  absolute font-semibold text-[10rem] left-0 right-0 bottom-0 top-0">
        Beautiful Flowers
      </div>
      <div className="flex flex-col justify-center items-center max-w-7xl py-20 px-6 z-10 text-center gap-4">
        <h2 className="font-bold text-[4rem]">
          Ready to find your perfect bouquet?
        </h2>
        <p className="text-lg text-center max-w-xl">
          Explore our exquisite collection of flowers and arrangements to
          brighten your day or make someone's moment special.
        </p>
        <h2 className="mt-8 px-6 py-3 btn-secondary scale-125 rounded-full cursor-pointer">
          Shop Now
        </h2>
      </div>
    </div>
  );
}

export default InfoSection;
