import { useState, useEffect, useCallback } from "react";

export const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    function (...args) {
      setStatus("pending");
      setValue(null);
      setError(null);
      return asyncFunction(...args)
        .then((response) => {
          setValue(response);
          setStatus("success");
        })
        .catch((error) => {
          setError(error);
          setStatus("error");
        });
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, status, value, error };
};
