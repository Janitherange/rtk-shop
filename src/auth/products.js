
import {addDoc, collection} from "firebase/firestore";
import {db} from "./firebase.js";
import uuid from 'react-uuid';

const Products = async () => {

    const products = [
        {
            productName: "Stone and Beam Westview ",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/double-sofa/double-sofa-01.png",
            category: "sofa",
            price: 193,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.5,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.5,
        },

        {
            productName: "Rivet Bigelow Modern ",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/double-sofa/double-sofa-02.png",
            category: "sofa",
            price: 253,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.5,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.5,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },

        {
            productName: "Amazon Brand Modern Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/double-sofa/double-sofa-03.png",
            category: "sofa",
            price: 173,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },
        {
            productName: "Manual Reclining Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/double-sofa/double-sofa-04.jpg",
            category: "sofa",
            price: 253,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },
        {
            productName: "Fllufy Sheep Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/double-sofa/double-sofa-05.jpg",
            category: "sofa",
            price: 163,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },

        {
            productName: "Faux Velvet Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/double-sofa/double-sofa-06.jpg",
            category: "sofa",
            price: 163,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },
        {
            productName: "Fllufy Sheep Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/double-sofa/double-sofa-01.png",
            category: "sofa",
            price: 163,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },
        {
            productName: "Sakarias Armchair",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/arm-chairs/arm-chair-01.jpg",
            category: "chair",
            price: 99,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },

        {
            productName: "Modern Arm Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/arm-chairs/arm-chair-02.jpg",
            category: "sofa",
            price: 173,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },

        {
            productName: "Baltsar Chair",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/arm-chairs/arm-chair-03.jpg",
            category: "chair",
            price: 89,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },

        {
            productName: "Helmar Chair",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/arm-chairs/arm-chair-04.jpg",
            category: "chair",
            price: 112,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },

        {
            productName: "Apple iPhone 12 Pro",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/arm-chairs/arm-chair-05.jpg",
            category: "mobile",
            price: 799,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Sakarias Armchair",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/arm-chairs/arm-chair-06.jpg",
            category: "chair",
            price: 99,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.6,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.7,
        },
        {
            productName: "Apple iPhone 12 Max",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/phone-images/phone-01.jpg",
            category: "mobile",
            price: 799,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

        {
            productName: "Realme 8",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/phone-images/phone-02.jpg",
            category: "mobile",
            price: 599,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

        {
            productName: "One Plus Nord",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/phone-images/phone-03.png",
            category: "mobile",
            price: 799,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

        {
            productName: "Apple iPhone 13 Pro",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/phone-images/phone-04.jpg",
            category: "mobile",
            price: 899,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Samsung Galaxy S22",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/phone-images/phone-05.jpg",
            category: "mobile",
            price: 699,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Apple iPhone 13",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/phone-images/phone-06.jpg",
            category: "mobile",
            price: 699,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Google Pixel 6",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/phone-images/phone-07.jpg",
            category: "mobile",
            price: 699,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Samsung Galaxy A73",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/phone-images/phone-08.jpg",
            category: "mobile",
            price: 699,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Rolex Watch",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/watch-images/watch-01.jpg",
            category: "watch",
            price: 299,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

        {
            productName: "Timex Easy Reader Watch",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/watch-images/watch-02.jpg",
            category: "watch",
            price: 299,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

        {
            productName: "Casio Watch",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/watch-images/watch-03.jpg",
            category: "watch",
            price: 299,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

        {
            productName: "Apple Watch",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/watch-images/watch-04.jpg",
            category: "watch",
            price: 399,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

        {
            productName: "Beat Studio Wireless",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/wireless-images/wireless-01.png",
            category: "wireless",
            price: 899,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },

        {
            productName: "Beat EP Headphones",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/wireless-images/wireless-02.png",
            category: "wireless",
            price: 699,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Dolby Headphones",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/wireless-images/wireless-03.png",
            category: "wireless",
            price: 799,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "LUCKWIND Single Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/sigle-sofa/single-sofa-01.jpg",
            category: "sofa",
            price: 319,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Molasofa Single Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/sigle-sofa/single-sofa-02.jpg",
            category: "sofa",
            price: 300,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "AbocoFur Single Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/sigle-sofa/single-sofa-03.jpg",
            category: "sofa",
            price: 123,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Recaceik Single Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/sigle-sofa/single-sofa-04.png",
            category: "sofa",
            price: 245,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Subrtex Single Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/sigle-sofa/single-sofa-05.jpg",
            category: "sofa",
            price: 125,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
        {
            productName: "Olela Modern Single Sofa",
            imgUrl: "gs://rtk-shop.appspot.com/product-images/sigle-sofa/single-sofa-06.jpg",
            category: "sofa",
            price: 674,
            shortDesc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
            reviews: [
                {
                    rating: 4.8,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
                {
                    rating: 4.9,
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                },
            ],
            avgRating: 4.8,
        },
    ];

    for (const product of products) {
        await addDoc(collection(db, "products"), {
            id: uuid(),
            productName: product.productName,
            imgUrl: product.imgUrl,
            category: product.category,
            price: product.price,
            shortDesc: product.shortDesc,
            description: product.description,
            reviews: product.reviews,
            avgRating: product.avgRating
        });
    }

}

export default Products;
