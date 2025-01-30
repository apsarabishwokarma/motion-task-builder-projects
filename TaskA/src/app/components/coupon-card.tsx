import React from "react";

interface CouponCardProps {
  title: string;
  subtitle: string;
  number: number;
  onClick: () => void;
}

const CouponCard: React.FC<CouponCardProps> = ({
  title,
  subtitle,
  number,
  onClick,
}) => {
  return (
    <div
      className="bg-[#f9ebec] text-[#c33241] w-[280px] h-[461px] rounded-[32px] p-4 cursor-pointer flex flex-col justify-evenly gap-4"
      onClick={onClick}
    >
      <div className="flex flex-col items-center rotate-[270deg] p-4">
        <p className="text-lg font-extrabold text-center">{title}</p>
        <p className="text-sm font-normal text-center">{subtitle}</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-8xl text-[150px] font-bold">{number}</h1>
          <p className="text-2xl font-bold ml-2">+</p>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
