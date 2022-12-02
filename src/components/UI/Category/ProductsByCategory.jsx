import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    IconButton,
    Input,
    Typography,
    ThemeProvider as InputThemeProvider,
} from "@material-tailwind/react";
import {createTheme, ThemeProvider as SelectThemeProvider} from "@mui/material/styles"
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {cartActions} from "../../../redux/slices/cartSlice.js";
import {categoryActions, getProductsByCategory} from "../../../redux/slices/categorySlice.js";

export const ProductsByCategory = ({category, categoryName}) => {
    const [priceRange, setPriceRange] = useState("");
    const [categoryType, setCategoryType] = useState( "")
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const products = useSelector(state => state.category.products);
    const visible = useSelector(state => state.category.visible);

    const categoryMap = (value) => {
        switch (value) {
            case 10:
                return "sofa";
            case 20:
                return "mobile";
            case 30:
                return "chair";
            case 40:
                return "watch";
            case 50:
                return "wireless";
            default:
                return "";
        }
    }

    const priceMap = (value) => {
        switch (value) {
            case 10:
                return "low";
            case 20:
                return "high";
            default:
                return "";
        }
    }

    const sortByPrice = (event) => {
        setPriceRange(event.target.value);
    };

    const sortByCategory = (event) => {
        setCategoryType(event.target.value);
    };

    const filterByName = (event) => {
        setInputValue(event.target.value);
    }

    const filterOrChangeProducts = () => {
        dispatch(categoryActions.filterByCategory({
            priceMap: priceMap(priceRange),
            inputValue,
        }));
    }

    const addProductToCart = (item) => {
        dispatch(cartActions.addItems(item))
    }

    useEffect(() => {
        dispatch(getProductsByCategory({
            category: categoryName,
        }));
    }, [category])

    useEffect(() => {
        setCategoryType(category);

    }, [category])

    useEffect(() => {
        filterOrChangeProducts();
    }, [categoryType, priceRange, inputValue])

    const themeSelect = createTheme({
        palette: {
            secondary: {
                main: "#698592",
            }
        },
        components: {

            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#b0bec5",
                        },
                        "&.Mui-focused": {
                            "borderColor": "#698592"
                        }
                    },
                    notchedOutline: {
                        borderColor: "#b0bec5",
                        borderRadius: "0.375rem",
                        color: "white",
                    },
                }
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: "white !important",
                        top: "-8px"
                    },
                    shrink: {
                        top: 0
                    }
                }
            },
            MuiSelect: {
                styleOverrides: {
                    select: {
                        color: "white !important",
                    },
                    icon: {
                        color: "white !important"
                    },
                }
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        padding: "0.75rem",
                    },

                }
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        color: "white",
                        borderRadius: "0.375rem",
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#263238",
                    },
                }
            },
        }
    });

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

    return (
        <>
            <div className="bg-blue-gray-900 py-5 lg:px-0 px-5">
                <div
                    className="container mx-auto lg:grid-cols-[20%,40%,40%] md:grid-cols-[30%,30%,40%] md:grid flex flex-col justify-between">
                    <div className="grid grid-cols-1 pb-5 gap-3 md:hidden">
                        <SelectThemeProvider theme={themeSelect}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Filtered By Category</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    labelId="select-label"
                                    label="Filtered By Category"
                                    value={categoryType}
                                    onChange={sortByCategory}
                                    variant="outlined"
                                    size="small"
                                    color="secondary"
                                >
                                    <MenuItem value={10}>Sofa</MenuItem>
                                    <MenuItem value={20}>Mobile</MenuItem>
                                    <MenuItem value={30}>Chair</MenuItem>
                                    <MenuItem value={40}>Watch</MenuItem>
                                    <MenuItem value={50}>Wireless</MenuItem>
                                </Select>
                            </FormControl>
                        </SelectThemeProvider>
                        <SelectThemeProvider theme={themeSelect}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    labelId="select-label"
                                    label="Sort By"
                                    value={priceRange}
                                    onChange={sortByPrice}
                                    variant="outlined"
                                    size="small"
                                    color="secondary"
                                >
                                    <MenuItem value={10}>Price Low</MenuItem>
                                    <MenuItem value={20}>Price High</MenuItem>
                                </Select>
                            </FormControl>
                        </SelectThemeProvider>
                    </div>
                    <div className="lg:mr-[60%] w-[200px] hidden md:block ">
                        <SelectThemeProvider theme={themeSelect}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Filtered By Category</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    labelId="select-label"
                                    label="Filtered By Category"
                                    value={categoryType}
                                    onChange={sortByCategory}
                                    variant="outlined"
                                    size="small"
                                    color="secondary"
                                >
                                    <MenuItem value={10}>Sofa</MenuItem>
                                    <MenuItem value={20}>Mobile</MenuItem>
                                    <MenuItem value={30}>Chair</MenuItem>
                                    <MenuItem value={40}>Watch</MenuItem>
                                    <MenuItem value={50}>Wireless</MenuItem>
                                </Select>
                            </FormControl>
                        </SelectThemeProvider>
                    </div>
                    <div className="lg:mr-[50%] lg:ml-[20%] w-[200px] hidden md:block">
                        <SelectThemeProvider theme={themeSelect}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    labelId="select-label"
                                    label="Sort By"
                                    value={priceRange}
                                    onChange={sortByPrice}
                                    variant="outlined"
                                    size="small"
                                    color="secondary"
                                >
                                    <MenuItem value={10}>Price Low</MenuItem>
                                    <MenuItem value={20}>Price High</MenuItem>
                                </Select>
                            </FormControl>
                        </SelectThemeProvider>
                    </div>
                    <div className="md:w-[200px] lg:w-full w-full">
                        <InputThemeProvider value={themeInput}>
                            <Input
                                label="Search..."
                                color="blue-gray"
                                onChange={filterByName}
                                variant="outlined"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                    </svg>
                                }/>
                        </InputThemeProvider>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-row justify-between pb-10">
                <div className=" w-full grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                    {
                        products && products.map((item, id) => (
                            <motion.div key={id} whileHover={{scale: 0.9}}>
                                <Card className="w-full shadow-none static">
                                    <CardHeader floated={false}
                                                className=" h-28 md:h-40 lg:h-56 shadow-none flex justify-center">
                                        <img src={item.imgUrl} alt={`product-${id}`}
                                             className="bg-cover h-full"/>
                                    </CardHeader>
                                    <CardBody className="px-6 py-2">
                                        <Typography variant="h3"
                                                    className="text-blue-gray-900 text-sm lg:text-xl">{item.productName}</Typography>
                                        <Typography variant="paragraph"
                                                    className="text-blue-gray-700 font-extralight text-xs">{item.category}</Typography>
                                    </CardBody>
                                    <CardFooter className="flex items-center justify-between py-3">
                                        <Typography variant="small" className="text-blue-gray-900 font-bold">
                                            ${item.price}
                                        </Typography>
                                        <IconButton
                                            onClick={() => addProductToCart(item)}
                                            className="text-white bg-blue-gray-900 rounded-full w-6 h-6 shadow-none hover:shadow-none active:shadow-none focus:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 6v12m6-6H6"/>
                                            </svg>
                                        </IconButton>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            {
                visible && (
                    <div className="container mx-auto my-40 flex flex-col justify-center text-center">
                        <Typography variant="h2" className="font-bold text-2xl">No Product Found</Typography>
                    </div>
                )
            }
        </>
    )
}
