import React from "react";

import generateGridPositions from "./generateGridPositions";

import { DataContext } from "../../context/DataContext";
import Modal from "../../components/Modal";
import Quotes from "../../shared/Quotes";

const AboutMe = () => {
  const gridSize = 9;
  const [visibleTraits, setVisibleTraits] = React.useState([]);
  const [positions, setPositions] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  const { traits } = React.useContext(DataContext);

  const handleButtonClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  React.useEffect(() => {
    if (traits.length > 0) {
      const initialPositions = generateGridPositions(gridSize, traits.length);
      setPositions(initialPositions);

      traits.forEach((trait, index) => {
        setTimeout(() => {
          setVisibleTraits((prev) => [...prev, trait]);
          if (index === traits.length - 1) {
            setShowButton(true);
          }
        }, index * 400);
      });
    }
  }, [traits, gridSize]);

  return (
    <div className="relative px-4 sm:px-10 md:px-20 pb-12">
      <h2 className="text-3xl font-bold text-blue-500 my-4 text-shadow text-center">
        I am
      </h2>
      <p className="text-orange-600 text-lg">Traits that describe me</p>

      <div className="block md:hidden my-6 space-y-4">
        {visibleTraits.map((trait, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white text-center text-sm font-semibold p-3 rounded-lg shadow-md"
          >
            {trait}
          </div>
        ))}
      </div>

      <div className="hidden md:grid grid grid-cols-3 grid-rows-3 gap-0.5 place-items-center min-h-[400px]">
        {visibleTraits.map((trait, index) => {
          const pos = positions[index];
          if (!pos) return null;

          return (
            <div
              key={index}
              className="bg-gray-700 text-white text-base font-semibold p-4 rounded-lg shadow-lg text-center w-52 transition-opacity duration-500"
              style={{
                gridRow: pos.row + 1,
                gridColumn: pos.col + 1,
                opacity: 1,
              }}
            >
              {trait}
            </div>
          );
        })}
      </div>

      {showButton && (
        <div className="flex justify-center w-full">
          <button
            onClick={handleButtonClick}
            className="bg-blue-700 hover:bg-blue-800 hover:scale-105 text-white font-bold py-4 px-6 text-lg rounded-lg"
          >
            Generate Quote for Today
          </button>
        </div>
      )}

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title="Quote of the Day"
      >
        <p className="text-gray-700">
          <Quotes />
        </p>
      </Modal>
    </div>
  );
};

export default AboutMe;
