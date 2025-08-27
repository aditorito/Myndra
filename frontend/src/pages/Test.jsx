import React from "react";
import { motion } from "motion/react"

export default function Test() {
  return (
     <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-white">
      <motion.div
        className="absolute bg-[#075056]"
        initial={{ width: 40, height: 40, borderRadius: "50%", y: 0 }}
        animate={{
          y: [0, -60, 0], // bounce
          width: ["40px", "80px", "100px", "200px", "400vw"], // grows huge
          height: ["40px", "80px", "100px", "200px", "400vw"], // grows huge
          borderRadius: ["50%", "50%", "50%", "50%", "0 0 50% 50%"], // ends as semi-circle
          bottom: 0, // stick to bottom
          left: "50%",
          x: "-50%", // center horizontally
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.7, 1],
        }}
      />
    </div>
  );
}
