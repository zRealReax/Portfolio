"use client";
import { throttle } from "lodash";
import { useRef } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import Tilt from "react-parallax-tilt";

const img = "/TwitterClone.png";

const template = ({
  rotateY,
  rotateX,
}: {
  rotateY: number;
  rotateX: number;
}) => {
  return `perspective(500px) rotateX(${rotateX}) rotateY(${rotateY}) `;
};

function Test() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const controls = useAnimation();
  const imgAnimation = useAnimation();

  const handleMouseMove = throttle((e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const imageElement = imgRef.current;

    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      const offsetX = rect.left + rect.width / 2;
      const offsetY = rect.top + rect.height / 2;

      const moveX = clientX - offsetX;
      const moveY = clientY - offsetY;
      const offsetFactor = 15;

      const animate = () => {
        imgAnimation.start({
          x: moveX / offsetFactor,
          y: moveY / offsetFactor,
        });
        animationFrameRef.current = null;
      };

      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    }
  }, 50);

  const handlePan = (_: any, info: PanInfo) => {
    controls.set({
      rotateY: info.offset.x / 2,
      rotateX: -info.offset.y / 2,
    });
  };

  const handlePanEnd = () => {
    controls.start({
      rotateY: 0,
      rotateX: 0,
    });
  };
  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col gap-10 py-10">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="px-8 py-4 rounded-full bg-red-500 text-white font-bold"
        >
          Hello
        </motion.button>
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          className="rounded-full py-6 px-12 bg-orange-500"
          dragElastic={0.5}
        />
        <motion.div whileTap={{ scale: 1.5 }} initial={{ opacity: 1 }}>
          <motion.button className="px-8 py-4 rounded-xl w-full h-full bg-gray-500 hover:bg-gray-600 text-white font-bold">
            {" "}
            Hello{" "}
          </motion.button>
        </motion.div>

        <motion.div
          className="rounded-full py-5 px-10 bg-orange-500"
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          animate={controls}
          transformTemplate={template}
        >
          Hallo
        </motion.div>
        <div className="relative">
          <motion.img
            animate={imgAnimation}
            ref={imgRef}
            onMouseMove={(e) => {
              handleMouseMove(e);
            }}
            src={img}
            alt="Woman in a red dress"
            className="rounded-3xl"
          />
          <div className="-z-10 rounded-3xl absolute top-0 left-0 h-full w-full bg-gray-800"></div>
        </div>
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
          <div className="border-2 border-black rounded-lg bg-gray-800 text-white flex items-center justify-center w-52 aspect-square">
            <h1>React Parallax Tilt 👀</h1>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Test;
