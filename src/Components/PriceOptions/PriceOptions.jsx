import PriceOption from "../PriceOption/PriceOption";

let priceOptions = [
  {
    id: 1,
    name: "Basic Plan",
    price: 29.99,
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Open gym hours only",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: 49.99,
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Group fitness classes",
    ],
  },
  {
    id: 3,
    name: "Premium Plan",
    price: 69.99,
    features: [
      "24/7 gym access",
      "Access to gym equipment",
      "Locker room access",
    ],
  },
  {
    id: 4,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    id: 5,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    id: 6,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    id: 7,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    id: 8,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    id: 9,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    id: 10,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    id: 11,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    id: 12,
    name: "Elite Plan",
    price: 99.99,
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
];

const PriceOptions = () => {
  return (
    <div className="m-12">
      <div className="grid md:grid-cols-3 gap-6 lg:grid-cols-5 ">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
