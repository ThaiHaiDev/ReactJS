import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  //   const userId = params.userId; (destructuring userId)
  return <div>User details page {userId}</div>;
};
export default UserDetail;