import {motion} from "framer-motion";
import {Card, CardBody, CardFooter, CardHeader, IconButton, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {ThreeCircles} from "react-loader-spinner";

export const BestSaleProducts = () => {
    const [products, setProducts] = useState([]);
    const prods = useSelector(state => state.product.docs)
    const isLoading = useSelector(state => state.product.loading)
    const isProductsLoading = useSelector(state => state.product.loading);

    const getBestSalesProducts = () => {
        setProducts(prods.filter(product => product.category === "sofa"))
    }

    useEffect(() => {
        getBestSalesProducts()
    }, [isLoading])

    return (
        <>
            <div className="container flex flex-col place-content-center mx-auto">
                <h2 className="text-center pt-16 text-2xl md:text-3xl font-bold text-blue-gray-900">Best Sales</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                    {
                        products && products.map((item, id) => (
                            <motion.div key={id} whileHover={{scale: 0.9}}>
                                <Card className="w-full shadow-none ">
                                    <CardHeader floated={false}
                                                className=" h-28 md:h-40 lg:h-56 shadow-none flex justify-center">
                                        <img src={item.imgUrl} alt={`trending-product-${id}`}
                                             className="h-full bg-cover"/>
                                    </CardHeader>
                                    <CardBody className="px-6 py-2 ">
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
                {
                    (isProductsLoading === "pending" ) && (
                        <div className="h-full w-full ">
                            <div className="container mx-auto text-center flex">
                                <ThreeCircles
                                    height="100"
                                    width="100"
                                    color="white"
                                    wrapperStyle
                                    wrapperClass="mx-auto bg-blue-gray-900 rounded-full"
                                    visible={true}
                                    ariaLabel="three-circles-rotating"
                                    outerCircleColor=""
                                    innerCircleColor=""
                                    middleCircleColor=""
                                    className=""
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
