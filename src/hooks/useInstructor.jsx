import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstructor = () => {
  const {user, loading} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      // console.log("is instructor response", res.data);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;
