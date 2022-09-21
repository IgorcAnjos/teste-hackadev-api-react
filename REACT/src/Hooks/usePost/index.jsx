import { useEffect, useState } from "react";
import axios from "axios";

function usePost(url, method, data) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    const postFetchData = () => {
      setLoading(true);
      axios
        .post(url, data)
        .then((response) => {
          setDataResponse(response.data);
        })
        .catch((err) => {
          setError({ status: err.response.status, message: err.response.data });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const fetchData = async () => {
      postFetchData();
    };

    fetchData();
  }, [url, data, method]);

  return { dataResponse, loading, error };
}

export default usePost;
