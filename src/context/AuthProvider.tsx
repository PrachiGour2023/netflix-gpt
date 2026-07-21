import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    addUser({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                    })
                );
                navigate("/landing")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        return unsubscribe;
    }, [dispatch]);

    return <>{children}</>;
};

export default AuthProvider;