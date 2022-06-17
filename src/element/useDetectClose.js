import { useEffect, useState } from "react";

const useDetectClose = (ele, initialState) => {
    const [isOpen, setIsOpen] = useState(initialState);

    useEffect(() => {
      const onclick = (e) => {
        if (ele.current != null && !ele.current.contain(e.target)) {
          setIsOpen(!isOpen);
        }
      };
      if(isOpen) {
        window.addEventListener('click', onclick);
      }
      return () => {
        window.removeEventListener('click', onclick);
      };
    }, [isOpen, ele]);
    return [isOpen, setIsOpen]
  };

  export default useDetectClose;