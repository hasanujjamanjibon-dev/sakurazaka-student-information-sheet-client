import React from "react";

const Footer = () => {
  return (
    <div className="w-full rounded-[7px] border-[3px] border-[#252525] bg-[#fff7d8] px-3 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
      <p className="text-center text-[13px] font-semibold leading-5 text-black sm:text-[15px] md:text-base">
        <span className="font-bold">বিঃদ্রঃ</span> এই ফর্মটির সকল তথ্য অবশ্যই
        পূরণ করতে হবে। কোন কিছু না বুঝলে সংশ্লিষ্ট ব্যক্তির কাছে থেকে বুঝে নিতে
        হবে।
      </p>
    </div>
  );
};

export default Footer;
