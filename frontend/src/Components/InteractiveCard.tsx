import React, { useRef, useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

const InteractiveCard = ({ title, description, image }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (cardRef.current == null) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPos({ x, y });
    };
    if (cardRef.current == null) return;
    const card = cardRef.current;
    card.addEventListener("mousemove", handleMouseMove);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Tilt
      tiltMaxAngleX={1}
      tiltMaxAngleY={1.5}
      transitionSpeed={1500}
      className="w-5/6 "
    >
      <section
        ref={cardRef}
        className="overflow-hidden rounded-3 mb-3 md:mb-5 rounded-3xl bg-gray-800 border-2 border-gray-600"
        data-catalyst=""
        data-perspective="700"
        style={{
          perspective: "800px",
        }}
      >
        <div
          className="md:flex  relative justify-between z-10 flex-row"
          style={{
            background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 100, 0, 0.3), transparent 70%)`,
            zIndex: -1,
          }}
        >
          <div className="md:flex p-16 flex-col w-1/2 flex-1 justify-between">
            <p className="text-gray-400 text-2xl mb-4">
              <b className="font-semibold text-white">{title}</b> {description}
            </p>

            <div>
              <a
                className="font-semibold text-2xl flex items-center text-white py-1"
                href="/features/actions"
              >
                Discover {title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="octicon arrow-symbol-mktg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="overflow-hidden w-1/2 flex items-end justify-end rounded-e-3xl">
            <picture className="w-full h-5/6 ">
              <img
                className="object-cover rounded-ss-3xl"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src={image}
              />
            </picture>
          </div>

          <div
            data-target="card-skew.shine"
            className="position-absolute bottom-0 right-0 events-none z-10"
          ></div>
        </div>
      </section>
    </Tilt>
  );
};

export default InteractiveCard;
