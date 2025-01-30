import Image from "next/image";
import React from "react";

interface CouponBannerProps {
  title: string;
  subtitle: string;
  number: number;
  onClick: () => void;
}

const CouponBanner: React.FC<CouponBannerProps> = ({
  title,
  subtitle,
  number,
  onClick,
}) => {
  return (
    <div className="p-5 rounded-lg text-center">
      <div
        className="bg-[#c33241] text-[#f9ebec] w-[592px] h-[461px] rounded-[32px]"
        onClick={onClick}
      >
        <p className="font-outfit text-[18px] font-semibold p-6 text-end">
          View all Courses →
        </p>
        <div>
          <div className="flex justify-center items-center gap-4 py-14">
            <Image
              src="/assets/Frame.png"
              alt="React"
              width={105}
              height={105}
              className="rotate-[16.67deg]"
            ></Image>
            <Image
              src="/assets/Frame-1.png"
              width={105}
              height={105}
              alt="Image 2"
              className="rotate-[-7.22deg]"
            />
            <Image
              src="/assets/Group.png"
              alt="Image 3"
              width={105}
              height={105}
              className="rotate-[8.97deg]"
            />
            <Image
              src="/assets/Group-1.png"
              alt="Image 4"
              width={105}
              height={105}
              className="rotate-[-12.61deg]"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 px-[75px]">
          <div className="flex items-start gap-2">
            <h1 className="text-6xl font-bold text-[150px]">{number}</h1>
            <p className="text-3xl font-bold text-[64px] ">+</p>
          </div>

          <div className="flex flex-col font-outfit justify-center gap-2 ">
            <p className="font-bold text-[32px]">{title}</p>
            <p className="text-sm font-normal text-[18px] text-left">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponBanner;
