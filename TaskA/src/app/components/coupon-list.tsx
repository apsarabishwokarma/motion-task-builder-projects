"use client";
import React, { useState } from "react";
import CouponBanner from "./coupon-banner";
import CouponCard from "./coupon-card";

const initialCoupons = [
  {
    title: "All Courses",
    subtitle: "Courses you're powering through right now.",
    number: 23,
  },
  {
    title: "Upcoming Courses",
    subtitle: "Exciting new courses waiting to boost your skills.",
    number: 5,
  },
  {
    title: "Ongoing Courses",
    subtitle: "Currently happening—don’t miss out on the action!",
    number: 10,
  },
];

const CouponsList: React.FC = () => {
  const [bannerCoupon, setBannerCoupon] = useState(initialCoupons[0]);
  const [smallCoupons, setSmallCoupons] = useState(initialCoupons.slice(1));

  const handleSwap = (index: number) => {
    const newBanner = smallCoupons[index];
    const newSmallCoupons = [...smallCoupons];
    newSmallCoupons[index] = bannerCoupon;
    setBannerCoupon(newBanner);
    setSmallCoupons(newSmallCoupons);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <CouponBanner
        title={bannerCoupon.title}
        subtitle={bannerCoupon.subtitle}
        number={bannerCoupon.number}
        onClick={() => handleSwap(0)}
      />
      <div className="flex gap-4">
        {smallCoupons.map((coupon, index) => (
          <CouponCard
            key={index}
            title={coupon.title}
            subtitle={coupon.subtitle}
            number={coupon.number}
            onClick={() => handleSwap(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CouponsList;
