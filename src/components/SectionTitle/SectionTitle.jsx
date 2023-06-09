
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center border-y-2 md:w-3/12 mt-12 mb-12">
      <h3 className="text-4xl uppercase my-2">{heading}</h3>
      <p className="text-yellow-600 my-2">--- {subHeading} ---</p>
    </div>
  );
};

export default SectionTitle;