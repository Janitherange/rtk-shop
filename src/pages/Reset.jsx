import {useState} from "react";
import {sendPasswordReset} from "../redux/slices/authSlice.js";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button, Input, ThemeProvider, Typography} from "@material-tailwind/react";

export const Reset = () => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
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
        if (email) {
            if (emailValid) {
                dispatch(sendPasswordReset({email}));
                await navigate("/login");
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

    return (
        <>
            <section className="bg-blue-50">
                <div className="container flex flex-col mx-auto py-10 ">
                    <div className="grid md:grid-cols-2 lg:mx-60">
                        <div className="bg-white py-10 px-10 flex flex-col rounded-l-lg">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/background-images%2Fundraw_forgot_password_re_hxwm.svg?alt=media&token=c483772c-63b1-4c87-aad6-2804f8aff357"
                                alt="reset-password" className="h-36"/>
                            <Typography variant="h4" className="text-blue-gray-900 my-3 text-xl text-center">Get access
                                to your Orders, Wishlist and Recommendations</Typography>
                            <Button
                                onClick={()=> navigate("/signup")}
                                className="my-1 mx-20 md:mb-6 py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none"
                            >Sign Up</Button>
                            <Button
                                onClick={()=> navigate("/login")}
                                className=" mx-20 md:mb-6 py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none"
                            >Sign In</Button>
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
                            <div className="mt-40 mb-10 mx-10">
                                <div >
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
                            </div>
                            <div className="flex flex-col mx-10">
                                <Button
                                    onClick={onSubmit}
                                    className="my-3 md:mb-6 py-2 flex flex-row justify-center bg-white text-blue-gray-900 px-5 font-thin rounded-md shadow-none hover:shadow-none"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                                    </svg>
                                    <div className="flex flex-col my-auto ml-2">
                                        <Typography variant="small" className="text-xs">Reset Password</Typography>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
