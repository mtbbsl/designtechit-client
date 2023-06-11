const InstructorCard = ({ inst }) => {
  const { instructor, photo, email, name } = inst;
  return (
    <div className="flex items-center space-x-6 bg-base-200 shadow-xl pr-6 w-full" style={{borderRadius: '50px 0 50px 0'}}>
      <img src={photo} className="w-[150px] rounded-full" style={{borderRadius: '50px 0 50px 0'}} />
      <div>
        <h3 className="text-xl font-bold">{instructor}</h3>
        <p>{email}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
