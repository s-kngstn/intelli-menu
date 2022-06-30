import useSWR from "swr";
import fetcher from "./fetcher";

// A hook to retrive data from the current validated user
export const useUser = () => {
  const { data, error } = useSWR("/user", fetcher);

  return {
    user: data as any,
    isLoading: !data && !error,
    isError: error,
  };
};

// A hook to retrive the current restaurants from a validated user
export const useRestaurants = () => {
  const { data, error } = useSWR("/restaurants", fetcher);

  return {
    restaurants: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
