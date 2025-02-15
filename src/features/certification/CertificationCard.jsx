import React from "react";

import Modal from "../../components/Modal";

const CertificationCard = ({ course }) => {
  const [showModal, setShowModal] = React.useState(false);

  const imageUrl = `${process.env.PUBLIC_URL}/${course.image}`;

  return (
    <div className="certification-course-card">
      <div className="course-image-container">
        <img
          src={imageUrl}
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
          <img src={imageUrl} alt={course.title} style={{ width: "80%" }} />
        </Modal>
      )}
    </div>
  );
};

export default CertificationCard;
