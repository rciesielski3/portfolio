import React, { useState } from "react";
import Modal from "../../components/modal/Modal";
import Quotes from "../../shared/Quotes";
import { DataContext } from "../../context/DataContext";

import generateGridPositions from "./generateGridPositions";

const AboutMe = () => {
  const gridSize = 9;
  const [visibleTraits, setVisibleTraits] = useState([]);
  const [positions, setPositions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const { traits } = useContext(DataContext);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
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
        I am
      </h2>

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
