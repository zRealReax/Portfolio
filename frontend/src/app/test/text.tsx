import React, { useState } from 'react';

const COLORS = ['red', 'green', 'blue'] as const;

interface DotProps {
  color: typeof COLORS[number];
  index: number;
  handler: (index: number) => void;
}

const Dot: React.FC<DotProps> = ({ color, index, handler }) => (
  <div className="flex w-12 h-12 justify-center items-center">
    <button
      type="button"
      className={`w-8 h-8 rounded-full bg-${color}-500 hover:bg-${color}-600 focus:outline-none`}
      onClick={() => handler(index)}
    />
  </div>
);

interface CircleOutlineProps {
  selectedIndex: number;
}

const CircleOutline: React.FC<CircleOutlineProps> = ({ selectedIndex }) => (
  <div
    className={`absolute w-12 h-12 rounded-full border-4 border-white transition-all duration-200 ease-in-out`}
    style={{ left: `${selectedIndex * 3}rem`, top: '50%', transform: 'translateY(-50%)' }}
  />
);

const ThreeDotSelector: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex relative h-16 justify-center items-center">
      {COLORS.map((color, index) => (
        <Dot key={index} color={color} index={index} handler={handleClick} />
      ))}
      <CircleOutline selectedIndex={selectedIndex} />
    </div>
  );
};

export default ThreeDotSelector;
