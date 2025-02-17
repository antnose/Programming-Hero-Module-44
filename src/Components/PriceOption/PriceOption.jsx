import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features, id } = option;

  return (
    <div className="bg-blue-400 rounded-md p-4 text-black">
      <h2 className="text-center">
        <span className="text-7xl font-bold "> {price} </span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl text-center my-8 "> {name} </h4>

      {features.map((feature) => (
        <Feature key={id} feature={feature} />
      ))}
      <button className="btn mt-2 bg-green-700 w-full font-bold hover:bg-green-900 rounded-2xl border-0 ">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
