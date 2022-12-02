import {Button, IconButton, Input, ThemeProvider, Typography} from "@material-tailwind/react";
import {useState} from "react";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {logInWithEmailAndPassword, signInWithGoogle} from "../redux/slices/authSlice.js";
import {useNavigate} from "react-router-dom";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const themeInput = {
        input: {
            styles: {
                base: {
                    label: {
                        color: "!text-white"
                    },
                    input: {
                        color: "!text-white"
                    }
                }
            }
        }
    }


    const onSubmit = async () => {
        if (email && password) {
            if (emailValid && passwordValid) {
                dispatch(logInWithEmailAndPassword({email, password}));
                toast.success("LogIn Success!");
                await navigate("/home");
            } else {
                toast.error("User Details are Invalid!")
            }
        } else {
            toast.error("Fields Cannot be Empty!")
        }


    }

    const onEmailChange = (value) => {
        if (value.length) {
            const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
            if (regex.test(value)) {
                setEmailValid(true)
                setEmailInvalid(false)
            } else {
                setEmailInvalid(true)
                setEmailValid(false)
            }
        } else {
            setEmailInvalid(false)
            setEmailValid(false)
        }
    }

    const onPasswordChange = (value) => {
        if (value.length) {
            const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
            if (regex.test(value)) {
                setPasswordValid(true)
                setPasswordInvalid(false)
            } else {
                setPasswordInvalid(true)
                setPasswordValid(false)
            }
        } else {
            setPasswordInvalid(false);
            setPasswordValid(false)
        }
    }

    return (
        <>
            <section className="bg-blue-50">
                <div className="container flex flex-col mx-auto py-10 ">
                    <div className="grid md:grid-cols-2 lg:mx-60">
                        <div className="bg-white py-10 px-10 flex flex-col rounded-l-lg">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/background-images%2Fundraw_sign_in_re_o58h.svg?alt=media&token=46c62d91-e601-429c-9e1b-6a5cbe6e0d75"
                                alt="sign-in"/>
                            <Typography variant="h4" className="text-blue-gray-900 my-3 text-xl text-center">Get access
                                to your Orders, Wishlist and Recommendations</Typography>
                            <Button
                                onClick={()=> navigate("/signup")}
                                className="mt-5 mx-20 md:mb-6 py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none"
                            >Sign Up</Button>
                        </div>
                        <div className="bg-blue-gray-900 py-10 px-5 rounded-r-lg">
                            <div className="flex flex-row justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                </svg>
                                <div className="justify-center flex flex-col ml-3 my-auto">
                                    <Typography variant="small" className="text-white text-2xl">RTK Shop</Typography>
                                </div>
                            </div>
                            <div className="my-10 mx-10">
                                <div className="my-5">
                                    <ThemeProvider value={themeInput}>
                                        <Input label="email"
                                               color="blue-gray"
                                               variant="outlined"
                                               type="text"
                                               value={email}
                                               error={emailInvalid}
                                               success={emailValid}
                                               onChange={(e) => {
                                                   setEmail(e.target.value);
                                                   onEmailChange(e.target.value)
                                               }}
                                        />
                                    </ThemeProvider>
                                </div>
                                <div className="my-5">
                                    <ThemeProvider value={themeInput}>
                                        <Input label="password"
                                               variant="outlined"
                                               color="blue-gray"
                                               type="password"
                                               error={passwordInvalid}
                                               success={passwordValid}
                                               value={password}
                                               onChange={(e) => {
                                                   setPassword(e.target.value);
                                                   onPasswordChange(e.target.value)
                                               }}
                                        />
                                    </ThemeProvider>
                                </div>
                            </div>
                            <div className="flex flex-col mx-10" onClick={()=> navigate("/reset")}>
                                <Typography variant="small" className="text-white text-center cursor-pointer" >Forgot
                                    Password?</Typography>
                            </div>
                            <div className="flex flex-col mx-10">
                                <Button
                                    onClick={onSubmit}
                                    className="my-3 md:mb-6 py-2 flex flex-row justify-center bg-white text-blue-gray-900 px-5 font-thin rounded-md shadow-none hover:shadow-none"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>
                                    <div className="flex flex-col my-auto ml-2">
                                        <Typography variant="small" className="text-xs">Sign In With Email</Typography>
                                    </div>
                                </Button>
                                <Button
                                    onClick={()=> dispatch(signInWithGoogle())}
                                    className=" md:mb-6 py-2 flex flex-row justify-center bg-white text-blue-gray-900 px-5 font-thin rounded-md shadow-none hover:shadow-none"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"
                                         className="h-4 w-4" viewBox="0 0 16 16">
                                        <path
                                            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                    </svg>
                                    <div className="flex flex-col my-auto ml-2">
                                        <Typography variant="small" className="text-xs">Sign In With Google</Typography>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
