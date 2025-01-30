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
      className="bg-red-100 text-red-600 w-[180px] h-[250px] rounded-[20px] p-4 flex flex-col justify-between items-center cursor-pointer transform hover:scale-105 transition"
      onClick={onClick}
    >
      <p className="text-lg font-bold rotate-90">{title}</p>
      <p className="text-sm rotate-90">{subtitle}</p>
      <div className="flex items-center">
        <h1 className="text-5xl font-bold">{number}</h1>
        <p className="text-2xl font-bold">+</p>
      </div>
    </div>
  );
};

export default CouponCard;
