import React, { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./Title";
import Description from "./Description";
import CategoryCard from "./CategoryCard";

const JobCaregoryList = () => {
  const [categories, setCategories] = useState([]);

  //fetcing categories from local json file
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //what to show
  let content = null;
  if (categories && categories.length > 0) {
    content = categories.map((cat) => (
      <CategoryCard key={cat.id} category={cat} />
    ));
  }

  return (
    <div className="px-3 pt-10 md:px-0 md:pt-[130px]">
      <Container>
        <Title text={"Job Category List"} />
        <Description>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </Description>
        <div className="grid gap-6 md:grid-cols-4">{content}</div>
      </Container>
    </div>
  );
};

export default JobCaregoryList;
