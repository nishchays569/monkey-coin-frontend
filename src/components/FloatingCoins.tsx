import bg from "@/assets/bg.svg";
const FloatingCoins = () => {

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* {coins.map((coin, index) => ( */}
        <img

          src={bg}
          alt={""}
          className={`w-full h-full`}
        />
      {/* ))} */}
    </div>
  );
};

export default FloatingCoins;
