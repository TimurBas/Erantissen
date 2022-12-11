import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IconType } from "react-icons";

const Arrow = ({ Icon }: { Icon: IconType }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-10 h-10 p-2 rounded-full hover:cursor-pointer hover:bg-gray-200 transition-all">
      <Icon className="text-gray-800 w-6 h-6" />
    </div>
  );
};

const LeftArrow = ({
  handleClick,
}: {
  handleClick: (isLeftArrow: boolean) => void;
}) => {
  return (
    <div className="absolute ml-5" onClick={() => handleClick(true)}>
      <Arrow Icon={AiOutlineArrowLeft} />
    </div>
  );
};

const RightArrow = ({
  handleClick,
}: {
  handleClick: (isLeftArrow: boolean) => void;
}) => {
  return (
    <div className="absolute right-0 mr-5" onClick={() => handleClick(true)}>
      <Arrow Icon={AiOutlineArrowRight} />
    </div>
  );
};

export { LeftArrow, RightArrow };
