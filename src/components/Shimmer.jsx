import React from "react";
import SliderShimmer from "./SliderShimmer";

const Shimmer = () => {
  return (
    <div data-testid="shimmer">
      <header className="px-44 py-4 flex justify-between items-center ">
        <div className="w-48 h-16  bg-gray-400 rounded-lg overflow-hidden relative bg-gradient-to-r from-transparent via-rose-100/10 to-transparent shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-300 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent"></div>
        <div className="flex gap-x-2 justify-between items-center">
          {Array(5)
            .fill("")
            .map((item, i) => (
              <div
                key={i}
                className="w-32 h-16 bg-gray-400 rounded-lg overflow-hidden relative bg-gradient-to-r from-transparent via-rose-100/10 to-transparent shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-300 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent"
              ></div>
            ))}
        </div>
      </header>

      <SliderShimmer />

      <div className="mt-8 px-44 py-4 flex justify-center items-center ">
        <div className="w-[700px] h-16 bg-slate-400 rounded-lg overflow-hidden relative bg-gradient-to-r from-transparent via-rose-100/10 to-transparent shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-300 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent"></div>
      </div>

      <div className="px-44 py-2 mt-8 flex gap-y-10 justify-between flex-wrap">
        {Array(16)
          .fill("")
          .map((item, i) => (
            <div
              key={i}
              className="w-[260px] h-84 bg-slate-200 rounded-lg p-4 overflow-hidden relative bg-gradient-to-r from-transparent via-rose-100/10 to-transparent shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-300 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent"
            >
              <div className="bg-slate-400 h-40 rounded-md"></div>
              <div className="bg-slate-400 w-32 h-8 mt-3 rounded-md"></div>
              <div className="bg-slate-400 h-8 mt-3 rounded-md"></div>
              <div className="bg-slate-400 h-12 mt-3 rounded-md"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
