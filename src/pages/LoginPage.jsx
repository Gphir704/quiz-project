import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../store/createData.thunk";
import { Link } from "react-router-dom";
import { deleteUser } from "../store/createData.thunk";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { singupData, error, loading } = useSelector((state) => state.signup);
  console.log(singupData);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(deleteUser);
  }, [deleteUser]);

  if (loading) return <h1> L O A D I N G . . . </h1>;
  if (error) return <h1> E R R O R : {error}. . . </h1>;
  return (
    <div>
      <Link to={"/"}> CREATE </Link>
      {singupData.map((data) => (
        <div key={data._uuid} style={{ border: "2px solid gray" }}>
          <h3>{data.fullNameRef}</h3>
          <h3> {data.email}</h3>
          <h3> {data.selectedValue}</h3>
          <button onClick={() => dispatch(deleteUser(data._uuid))}>
            {" "}
            DELETE{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LoginPage;
