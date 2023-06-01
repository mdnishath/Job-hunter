import React from "react";
import Container from "./Container";

const Error = () => {
  return (
    <div>
      <Container>
        <div className="flex h-screen items-center justify-center text-4xl text-purple-500">
          404 Not Found
        </div>
      </Container>
    </div>
  );
};

export default Error;
