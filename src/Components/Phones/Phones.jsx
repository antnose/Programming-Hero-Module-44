import axios from "axios";
import { XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { BarChart, Bar } from "recharts";
import { FallingLines } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //   fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //     .then((res) => res.json())
    //     .then((data) => setPhones(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && (
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      )}

      <h2 className="text-5xl"> Phones:{phones.length}</h2>
      <marquee>
        <BarChart width={2500} height={400} data={phones}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </marquee>
    </div>
  );
};

export default Phones;
