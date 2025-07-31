const SkillCard = ({ skill }) => {
  return (
    <div className="p-2 mb-2 mx-36 rounded-lg bg-gray-700 text-white shadow-md">
      <p>{skill}</p>
    </div>
  );
};

export default SkillCard;
