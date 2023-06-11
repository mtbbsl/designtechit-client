
const InstructorProfile = ({ inst }) => {
    const { photo, name, email } = inst;
    return (
      <div
        className="flex items-center space-x-6 bg-base-200 shadow-xl pr-24 w-full mx-auto"
        style={{ borderRadius: "50px 0 50px 0" }}
      >
        <img
          src={photo}
          className="w-[150px] rounded-full"
          style={{ borderRadius: "50px 0 50px 0" }}
        />
        <div>
          <h3 className="text-xl font-bold">Name: {name}</h3>
          <p>Email: {email}</p>
        </div>
      </div>
    );
};

export default InstructorProfile;