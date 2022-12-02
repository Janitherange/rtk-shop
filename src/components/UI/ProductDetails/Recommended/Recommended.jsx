import product1 from "../../../../assets/images/double-sofa-01.png";
import product2 from "../../../../assets/images/double-sofa-02.png";
import product3 from "../../../../assets/images/double-sofa-03.png";
import product4 from "../../../../assets/images/single-sofa-01.jpg";
import product5 from "../../../../assets/images/single-sofa-02.jpg";
import product6 from "../../../../assets/images/single-sofa-03.jpg";
import product7 from "../../../../assets/images/single-sofa-04.png";
import {motion} from "framer-motion";
import {Card, CardBody, CardFooter, CardHeader, IconButton, Typography} from "@material-tailwind/react";

export const Recommended = () => {
    const items = [
        {
            image: product1,
            name: "Stone and Beam Westview",
            type: "sofa",
            price: 193
        },
        {
            image: product2,
            name: "Rivet Rigelow Modern",
            type: "sofa",
            price: 253
        },
        {
            image: product3,
            name: "Amazon Brand Modern Sofa",
            type: "sofa",
            price: 173
        },
        {
            image: product2,
            name: "Rivet Rigelow Modern",
            type: "sofa",
            price: 253
        },
        {
            image: product4,
            name: "Fullify Sheep Sofa",
            type: "sofa",
            price: 163
        },
        {
            image: product5,
            name: "Faux Velvet Sofa",
            type: "sofa",
            price: 200
        },
        {
            image: product6,
            name: "Fullify Sheep Sofa",
            type: "sofa",
            price: 142
        },
        {
            image: product7,
            name: "Modern Arm Sofa",
            type: "sofa",
            price: 173
        },
    ]

  return(
      <>
          <div className="container flex flex-col mx-auto pb-10">
              <h2 className=" text-xl font-bold text-blue-gray-900">You might also like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                  {
                      items.map((item, id)=>(
                          <motion.div key={id} whileHover={{scale: 0.9}}>
                              <Card className="w-full shadow-none static">
                                  <CardHeader floated={false} className=" h-56 shadow-none static">
                                      <img src={item.image} alt={`trending-product-${id}`} className="h-full w-full"/>
                                  </CardHeader>
                                  <CardBody className="px-6 py-2 static">
                                      <Typography variant="h3" className="text-blue-gray-900 text-sm lg:text-xl">{item.name}</Typography>
                                      <Typography variant="paragraph" className="text-blue-gray-700 font-extralight text-xs">{item.type}</Typography>
                                  </CardBody>
                                  <CardFooter className="flex items-center justify-between py-3">
                                      <Typography variant="small" className="text-blue-gray-900 font-bold">
                                          ${item.price}
                                      </Typography>
                                      <IconButton className="text-white bg-blue-gray-900 rounded-full w-6 h-6 shadow-none hover:shadow-none active:shadow-none focus:opacity-100">
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
      </>
  )
}
