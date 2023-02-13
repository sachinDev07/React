import React from "react";

const SliderShimmer = () => {
  return (
    <div className="mt-5 px-44 py-2 flex justify-between">
      {Array(4)
        .fill(" ")
        .map((item, index) => (
          <div key={index} className="w-64 h-64 bg-slate-200 rounded-lg overflow-hidden relative bg-gradient-to-r from-transparent via-rose-100/10 to-transparent shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-300 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent">
          <div className="bg-slate-400 h-full rounded-md"></div>
          </div>
        ))}
    </div>
  );
};

export default SliderShimmer;
