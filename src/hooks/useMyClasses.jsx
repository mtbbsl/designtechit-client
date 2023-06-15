import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useMyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["myclasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myclasses?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [classes, refetch];
};
export default useMyClasses;