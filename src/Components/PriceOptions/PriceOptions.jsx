import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  [
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
        "Extended gym hours",
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
        "Group fitness classes",
        "Personal training consultation",
        "Sauna and steam room access",
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
        "Sauna, steam room, and jacuzzi",
        "Nutritional guidance",
        "Towel service and VIP lounge access",
      ],
    },
  ];

  return (
    <>
      {PriceOptions.map((option) => (
        <PriceOption option={option} key={option.id} />
      ))}
      <PriceOption />
    </>
  );
};

export default PriceOptions;
