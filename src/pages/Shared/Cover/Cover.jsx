const Cover = ({ img, title, msg }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{backgroundImage: `url("${img}")`}}
      >
      <div className="hero-content text-center text-neutral-content w-fit h-48 hero-overlay bg-opacity-60 mt-36">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;