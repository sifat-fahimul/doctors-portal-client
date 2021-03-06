import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";



//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')

    const googleProvider = new GoogleAuthProvider();


    const auth = getAuth();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                setAuthError('')
                const newUser = { email, displayName: name }
                //save user to database
                saveUser(email, name, 'POST')

                setUser(newUser)
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/')
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('')

                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')
                navigate(location?.state?.from || '/')

            }).catch((error) => {
                setAuthError(error.message); setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://immense-chamber-79953.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setAuthError('')
            //Sign-out successful.
        }).catch((error) => {
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://immense-chamber-79953.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;