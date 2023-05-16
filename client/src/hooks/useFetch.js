import { useState } from "react";

const useFetch = (route, onReceived) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const cancelFetch = () => {
    controller.abort();
  };

  if (route.includes("api/")) {
    throw Error(
      "When using the useFetch hook, the route should not include the /api/ part"
    );
  }

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const performFetch = (options = {}) => {
    setError(null);
    setIsLoading(true);

    const baseOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    const mergedOptions = { ...baseOptions, ...options, signal };

    if (mergedOptions.method === "POST" && options.body) {
      mergedOptions.body = JSON.stringify(options.body);
    }

    const fetchData = async () => {
      const url = `${process.env.BASE_SERVER_URL}/api${route}`;

      try {
        const res = await fetch(url, mergedOptions);

        if (!res.ok) {
          throw new Error(
            `Fetch for ${url} returned an invalid status (${
              res.status
            }). Received: ${JSON.stringify(res)}`
          );
        }

        const jsonResult = await res.json();

        if (jsonResult.success === true) {
          onReceived(jsonResult);
        } else {
          throw new Error(
            jsonResult.msg ||
              `The result from our API did not have an error message. Received: ${JSON.stringify(
                jsonResult
              )}`
          );
        }
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  };

  return { isLoading, error, performFetch, cancelFetch };
};

export default useFetch;
