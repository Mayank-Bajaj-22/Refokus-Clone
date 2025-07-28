import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-44 px-6 py-3 bg-zinc-100 text-black rounded-full flex items-center justify-between cursor-pointer overflow-hidden group">
      <div className="relative h-[20px] w-full overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col"
        >
          <span className="text-sm font-medium">{title}</span>
          <span className="text-sm font-medium">{title}</span>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
        className="text-lg"
      >
        <MdSubdirectoryArrowRight />
      </motion.div>
    </div>
  );
}

export default Button;
