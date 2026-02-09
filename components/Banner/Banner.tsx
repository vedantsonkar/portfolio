import { FC } from "react";
import LiquidEther from "../LiquidEther";
import TextPressureComponent from "../TextPressure/TextPressureComponent";

const Banner: FC = () => {
  return (
    <div className="px-4 -mt-32 sm:-mt-36 2xl:-mt-48 h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <LiquidEther />
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full gap-y-6 md:gap-y-8 select-none">
        <TextPressureComponent
          text="Building smooth experiences,"
          enabled={true}
        />

        <TextPressureComponent text="one pixel at a time." enabled={true} />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-36 pointer-events-none bg-gradient-to-t from-[#fff] dark:from-[#0a0a0a] to-transparent"></div>
    </div>
  );
};

export default Banner;
