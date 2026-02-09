// @ts-nocheck
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Header from "../../layout/Header";
import type { RootState } from "../../redux/store";

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state?.user?.userData);
  console.log(userData);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative flex justify-between">
      <Header />
      <p></p>
      <div className="mr-10 mt-2">
        {/* <img src={userData?.photoURL} alt="user" className="w-10 rounded-4xl" /> */}
        <button
          onClick={handleSignout}
          className="cursor-pointer text-white font-medium absolute"
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
