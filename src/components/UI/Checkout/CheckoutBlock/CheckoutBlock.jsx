import {Button, Input, Typography} from "@material-tailwind/react";
import {TextField, Autocomplete} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import countries from "i18n-iso-countries";
import english from "i18n-iso-countries/langs/en.json";
import {useSelector} from "react-redux";

export const CheckoutBlock = () => {
    const tax = useSelector(state => state.cart.tax);
    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    countries.registerLocale(english);
    const countriesMap = countries.getNames("en", {select: "official"});

    let countriesData = [];

    for (const countryCode in countriesMap) {
        const data = {
            firstLetter: countriesMap[countryCode][0],
            title: countriesMap[countryCode],
        }
        countriesData.push(data)
    }

    const theme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#698592",
                            font: "normal !important"
                        },
                        "& .MuiOutlinedInput-notchedOutline":{
                            borderColor: "#b0bec5 !important",
                        },

                    },
                    input:{
                        paddingTop: "0 !important",
                        paddingBottom: "0 !important"
                    },
                }
            }
        }
    });

    return (
        <div className="container flex flex-col sm:flex-row mx-auto py-10">
            <div className="flex flex-col lg:w-[80%] sm:w-[50%] w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 sm:mr-10 mx-2 mb-5 sm:mb-0 gap-5">
                    <div>
                        <Input label="First Name" color="blue-gray" type="text"/>
                    </div>
                    <div>
                        <Input label="Last Name" color="blue-gray" type="text"/>
                    </div>
                    <div>
                        <Input label="Email" color="blue-gray" type="email"/>
                    </div>
                    <div>
                        <Input label="Phone Number" color="blue-gray" type="tel"/>
                    </div>
                    <div>
                        <Input label="Address" color="blue-gray" type="text"/>
                    </div>
                    <div>
                        <Input label="City" color="blue-gray" type="text"/>
                    </div>
                    <div>
                        <Input label="Postal Code" color="blue-gray" type="number"/>
                    </div>
                    <div >
                        <ThemeProvider theme={theme}>
                            <Autocomplete
                                id="grouped-demo"
                                options={countriesData.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                groupBy={(option) => option.firstLetter}
                                getOptionLabel={(option) => option.title}
                                sx={{
                                    "& .MuiFormLabel-root":{
                                        top: "-8px ",
                                        color: "#698592"
                                    },
                                    "& .MuiInputLabel-shrink":{
                                        top:0,
                                        color: "#698592 !important"
                                    },
                                    "& .MuiOutlinedInput-root":{
                                        borderRadius: "7px",
                                    },
                                    "& MMuiInputBase-input":{
                                        color: "#698592",
                                    },
                                }}
                                renderInput={(params) => <TextField {...params} label="Country" />}
                            />
                        </ThemeProvider>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:w-[20%] sm:w-[50%] w-full">
               <div className="bg-blue-gray-900 p-5">
                   <div className="flex flex-row justify-between mb-2 ">
                       <Typography variant="paragraph" className="text-sm">Total Qty:</Typography>
                       <Typography variant="paragraph" className="font-bold text-sm">{totalQty}</Typography>
                   </div>
                   <div className="flex flex-row justify-between w-full mb-2">
                       <Typography variant="paragraph" className="text-sm">Subtotal:</Typography>
                       <Typography variant="paragraph" className="font-bold text-sm">${totalAmount}</Typography>
                   </div>
                   <div className="flex flex-row justify-between w-full mb-2">
                       <Typography variant="paragraph" className="text-sm">Tax:</Typography>
                       <Typography variant="paragraph" className="font-bold text-sm">${tax}</Typography>
                   </div>
                   <div className="border-t border-white mt-3 flex flex-col">
                       <div className="flex flex-row justify-between mt-3 mb-12">
                           <Typography variant="paragraph" className="text-xl">Total:</Typography>
                           <Typography variant="paragraph" className="font-bold text-xl">${totalAmount - tax}</Typography>
                       </div>
                       <Button
                           className=" mb-3 pb-2 bg-white text-blue-gray-900 px-5 font-thin rounded-md shadow-none hover:shadow-none">Place an Order</Button>
                   </div>
               </div>
            </div>
        </div>
    )
}
