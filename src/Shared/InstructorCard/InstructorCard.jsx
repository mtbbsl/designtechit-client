const InstructorCard = ({ inst }) => {
  const { instructor, photo, email, name } = inst;
  return (
    <div className="card card-side bg-base-200 shadow-xl mx-auto">
      <figure>
        <img src={photo} className="object-cover w-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Instructor: {instructor}</h2>
        <p>Email: {email}</p>
        <p>Class Name: {name}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
