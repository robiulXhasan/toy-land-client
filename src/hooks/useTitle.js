import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `ToyLand | ${title}`;
  }, [title]);
};
export default useTitle;
