import { FC } from "react";
import TextPressure from "./TextPressure";

interface TextPressureComponentProps {
  text: string;
  enabled?: boolean;
}

const TextPressureComponent: FC<TextPressureComponentProps> = ({
  text,
  enabled = true,
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
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
          minFontSizeDesktop={10}
          minFontSizeMobile={24}
          minFontSizeTablet={52}
          enabled={enabled}
        />
      </div>
    </div>
  );
};

export default TextPressureComponent;
