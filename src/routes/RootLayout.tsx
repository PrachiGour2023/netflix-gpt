import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";



export const RootLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {

            if (firebaseUser) {

                dispatch(addUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                }));
                navigate("/landing")
            } else {
                dispatch(removeUser());
                navigate("/")
            }

            setLoading(false);

        });

        return unsubscribe;

    }, [dispatch]);

    if (loading) {
        return "Loading......"
    }

    return <Outlet />;
};