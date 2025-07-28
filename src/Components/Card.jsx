import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Card({ width, start, para, hoverClass }) {
  return (
    <motion.div
      whileHover={{
        // backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`${width} ${hoverClass} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>one heading</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading</h1>
      </div>
      <motion.div className="down w-full">
        {start && (
          <>
            <h1 className=" text-6xl font-semi-bold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Card;
