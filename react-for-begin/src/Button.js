import React from 'react';

const Button = () => {
  return (
    <button style={{
      backgroundColor: "red",
    }}
    onClick={() => console.log("i'm clicked")}
    >
      Click me
    </button>
  );
};

export default Button;