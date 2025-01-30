import React from "react";
import CouponsList from "../components/coupon-list";

const Home: React.FC = () => {
  return (
    <div className="text-center px-[112px] py-[60px]">
      <div className="flex flex-col items-start gap-4">
        <p className="font-outfit text-[24px] font-normal leading-[28.8px] text-left text-[#414141]">
          Explore our classes and master trending skills!
        </p>
        <h1 className="font-nohemi text-[32px] font-bold leading-[38.4px] text-left text-[#2b2b2b]">
          Dive Into{" "}
          <span className="font-nohemi text-[32px] font-bold leading-[38.4px] text-left text-[#1DA077]">
            What’s Hot Right Now!
          </span>{" "}
          🔥
        </h1>
        <CouponsList />
      </div>
    </div>
  );
};

export default Home;
