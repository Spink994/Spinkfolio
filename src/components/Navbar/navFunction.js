import { useState } from "react";

const navFunction = () => {
  const [isHidden, setIsHidden] = useState(true);

  function navHandler() {
    setIsHidden(!isHidden);
  }

  return { isHidden, navHandler };
};

export default navFunction;
