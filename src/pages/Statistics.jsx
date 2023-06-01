import React from "react";
import Container from "../components/Container";
import { PieChart, Pie, Tooltip } from "recharts";
const data = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 60 },
  { name: "Assignment 3", value: 58 },
  { name: "Assignment 4", value: 56 },
  { name: "Assignment 5", value: 60 },
  { name: "Assignment 7", value: 60 },
  { name: "Assignment 8", value: 60 },
];

const Statistics = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const average = total / data.length;
  return (
    <div>
      <div className="bg-[url('/assets/images/header.png')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="grid min-h-[50vh] grid-cols-1 items-center overflow-hidden ">
            <h1 className="text-center text-[32px] font-extrabold text-black">
              Statistics
            </h1>
          </div>
        </Container>
      </div>
      <section className="py-[70ox] md:py-[130px]">
        <Container>
          <h3 className="text-center text-3xl font-extrabold text-purple-500">
            My Assinment Results
          </h3>
          <h3 className="mt-4 text-center text-xl font-semibold text-black">
            My Average Marks: {average.toFixed(2)}%
          </h3>
          <div className="flex justify-center">
            <PieChart width={600} height={400}>
              <Pie
                dataKey="value"
                startAngle={360}
                endAngle={0}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Statistics;
