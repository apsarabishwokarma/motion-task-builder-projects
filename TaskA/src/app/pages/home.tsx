import React from "react";
import CouponsList from "../components/coupon-list";

const Home: React.FC = () => {
  return (
    <div className="p-10">
      <p className="text-lg text-gray-600">
        Explore our classes and master trending skills!
      </p>
      <h1 className="text-2xl font-bold">
        Dive Into{" "}
        <span className="text-green-500 font-bold">What’s Hot Right Now!</span>{" "}
        🔥
      </h1>
      <CouponsList />
    </div>
  );
};

export default Home;
