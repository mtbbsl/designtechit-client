import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useMyEnrollClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["myenrolledclass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myenrolledclass?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });
  return [classes, refetch];
};
export default useMyEnrollClass;
