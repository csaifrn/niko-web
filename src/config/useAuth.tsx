import { getAuth, onAuthStateChanged, signOut, User} from "firebase/auth"
import { useEffect, useState  } from "react"
import { useNavigate } from "react-router-dom"

const useFirebaseAuth = () => {

    const navigate = useNavigate();
    const auth = getAuth();

    const [user, setUser] =  useState<User>();
    const [loading, setLoading] =  useState(true);

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("Logout")
            navigate("/login");
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user is logged in");
                setUser(user);
            } else {
                console.log("user is not logged in");
                navigate("/login");
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return {
        user: user,
        loading: loading,
        logOut: handleLogout,
    }

}

export default useFirebaseAuth;