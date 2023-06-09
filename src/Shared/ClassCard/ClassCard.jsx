const ClassCard = ({ perClass }) => {
  const { image, name, instructor, price } = perClass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image} className="object-cover w-96 h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {name}</h2>
        <p>Instructor: {instructor}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
