import React from "react";

import { DataContext } from "../../context/DataContext";
import Modal from "../../components/Modal";
import Quotes from "../../shared/Quotes";

import generateGridPositions from "./generateGridPositions";

const AboutMe = () => {
  const gridSize = 9;
  const [visibleTraits, setVisibleTraits] = React.useState([]);
  const [positions, setPositions] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  const { traits } = React.useContext(DataContext);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
        }, index * 500);
      });
    }
  }, [traits, gridSize]);

  return (
    <div className="relative h-fit p-28 pb-48">
      <h2 className="text-3xl font-bold text-blue-500 my-4 text-shadow">
        Why I am a good fit for your team
      </h2>
      <p className="text-orange-600 mb-6 text-lg">Some of my traits</p>
      {visibleTraits.map((trait, index) => (
        <div
          key={index}
          className="absolute text-white text-lg font-bold p-4 bg-gray-800 rounded-lg shadow-lg transition-opacity duration-500 break-words text-center w-64"
          style={{
            ...positions[index],
            opacity: visibleTraits.includes(trait) ? 1 : 0,
          }}
        >
          {trait}
        </div>
      ))}

      {showButton && (
        <div className="fixed top-20 left-0 right-0 flex justify-center z-10">
          <button
            onClick={handleButtonClick}
            className="bg-blue-900 hover:bg-gray-700 text-white font-bold py-4 px-6 text-lg rounded-lg"
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
