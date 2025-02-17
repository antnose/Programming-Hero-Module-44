import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex gap-2 items-center  ">
        <FaCheckCircle className="text-green-700" /> {feature}
      </p>
    </div>
  );
};

export default Feature;
