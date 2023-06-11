const InstructorCard = ({ inst }) => {
  const { instructor, photo, email, name } = inst;
  return (
    <div className="flex items-center space-x-6 bg-base-200 shadow-xl pr-24 w-full mx-auto" style={{borderRadius: '50px 0 50px 0'}}>
      <img src={photo} className="w-[150px] rounded-full" style={{borderRadius: '50px 0 50px 0'}} />
      <div>
        <h3>Instructor: {instructor}</h3>
        <p>Email: {email}</p>
        <p>Class: {name}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
