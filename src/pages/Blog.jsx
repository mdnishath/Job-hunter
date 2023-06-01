import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import BlogCard from "../components/BlogCard";
const data = [
  {
    question: "When should you use context API?",
    answer:
      "Context API is useful for sharing data that needs to be accessed by multiple components, without having to pass it down through multiple levels of props. It can also be used to avoid prop drilling and make the code more readable and maintainable.",
  },
  {
    question: "What is a custom hook?",
    answer:
      "A custom hook is a function that uses one or more of the built-in React hooks (such as useState, useEffect, useContext, etc.) to create a reusable piece of code that encapsulates some specific behavior or logic. Custom hooks can help reduce code duplication and make it easier to share code between components.",
  },
  {
    question: "What is useRef?",
    answer:
      "useRef is a built-in React hook that returns a mutable ref object. This object can be used to store a value that persists across renders and updates, without triggering a re-render. It can also be used to access and modify the DOM or other mutable data, such as instance variables or timers.",
  },
  {
    question: "What is useMemo?",
    answer:
      "useMemo is a built-in React hook that can be used to optimize expensive calculations or complex data transformations, by memoizing the result and returning a cached value if the inputs have not changed. It takes two arguments: a function that performs the calculation, and an array of inputs that trigger the recalculation when they change. By using useMemo, you can avoid unnecessary re-calculations and improve the performance of your app.",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="bg-[url('/assets/images/header.png')] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="grid min-h-[50vh] grid-cols-1 items-center overflow-hidden ">
            <h1 className="text-center text-[32px] font-extrabold text-black">
              Blog
            </h1>
          </div>
        </Container>
      </div>
      <section className="py-[70ox] md:py-[130px]">
        <Container>
          <div className="grid grid-cols-2 gap-4">
            {data &&
              data.length > 0 &&
              data.map((post, index) => <BlogCard key={index} post={post} />)}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
