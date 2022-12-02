import {ArrowPathIcon, TruckIcon} from "@heroicons/react/24/outline/index.js";
import { motion } from "framer-motion"

export const Services = () => {
    const items = [
        {
            icon: <TruckIcon className="h-6 w-6 text-white"/>,
            title: "Free Shipping",
            backgroundColor: "#fdefe6"
        },
        {
            icon: <ArrowPathIcon className="h-6 w-6 text-white"/>,
            title: "Easy Returns",
            backgroundColor: "#d6e5fb"
        },
        {
            icon: <TruckIcon className="h-6 w-6 text-white"/>,
            title: "Secure Payments",
            backgroundColor: "#ceebe9"
        },
        {
            icon: <TruckIcon className="h-6 w-6 text-white "/>,
            title: "Back Guarantee",
            backgroundColor: "#e2f2b2"
        }
    ];

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 container pt-10 mx-auto">
            {
                items.map((item, id) => (
                    <motion.div key={id} className=" lg:m-4 lg:p-2 md:m-2 md:p-1 my-2 mx-6 p-1 rounded-md" style={
                        {
                            backgroundColor: item.backgroundColor
                        }
                    } whileHover={{scale: 1.1}}>
                        <div className="flex place-content-center flex-row">
                            <span className="bg-blue-gray-900 p-3 rounded-full m-2">{item.icon}</span>
                            <div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="font-thin">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}
