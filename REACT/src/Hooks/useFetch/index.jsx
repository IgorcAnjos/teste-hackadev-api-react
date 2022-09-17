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
          setError({ status: err.response.status, message: err.response.data });
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (method === "post") {
      setLoading(true);
      axios
        .post(url, data)
        .then((response) => {
          setDataResponse(response.status);
        })
        .catch((err) => {
          setError({ status: err.response.status, message: err.response.data });
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (method === "put") {
      axios
        .put(url, data)
        .then((response) => setDataResponse(response.status))
        .catch((err) =>
          setError({ status: err.response.status, message: err.response.data })
        )
        .finally(() => setLoading(false));
    } else if (method === "delete") {
      axios
        .delete(url)
        .then((response) => {
          setDataResponse(response.status);
        })
        .catch((err) => {
          setError({ status: err.response.status, message: err.response.data });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { dataResponse, loading, error };
}

export default useFetch;
