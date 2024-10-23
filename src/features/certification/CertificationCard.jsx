import React, { useState } from "react";
import Modal from "../../components/modal/Modal";

const CertificationCard = ({ course }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="certification-course-card">
      <div className="course-image-container">
        <img
          src={course.image}
          alt={course.title}
          onClick={() => setShowModal(true)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <h3 className="course-title">{course.title}</h3>
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          title={course.title}
        >
          <img src={course.image} alt={course.title} style={{ width: "80%" }} />
        </Modal>
      )}
    </div>
  );
};

export default CertificationCard;
