import React from 'react';

const Title = () => {
  return (
    <div>
      <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        Hello I'm a title
      </h3>
    </div>
  );
};

export default Title;