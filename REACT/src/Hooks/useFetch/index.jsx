import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, method, data = null) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataResponse, setDataResponse] = useState(null);

  const fetchData = async () => {
    if (method === "get") {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          setDataResponse(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // if (method === "put") {
    //   setDataRequest(data);
    //   setLoading;
    //   axios
    //     .put(url, data)
    //     .then((response) => {
    //       setDataResponse(response);
    //     })
    //     .catch((err) => {
    //       setError(err.response.data);
    //     });
    // }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { dataResponse, loading, error };
}

export default useFetch;
