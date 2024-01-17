import React, { useEffect, useState } from "react";

const List = ({ number }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(number());
    console.log(state);
  }, [number]);

  return (
    <div>
      <p>{state[0]}</p>
      <p>{state[1]}</p>
      <p>{state[2]}</p>
    </div>
  );
};

export default List;
