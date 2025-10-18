import { FC } from "react";
import TextPressure from "../TextPressure";

interface TextPressureComponentProps {
  text: string;
}

const TextPressureComponent: FC<TextPressureComponentProps> = ({ text }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center h-screen">
      <div className="w-full text-center relative">
        <TextPressure
          text={text}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          strokeColor="#ff0000"
          minFontSizeDesktop={150}
          minFontSizeMobile={24}
          minFontSizeTablet={52}
        />
      </div>
    </div>
  );
};

export default TextPressureComponent;
