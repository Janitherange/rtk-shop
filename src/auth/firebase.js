import {initializeApp} from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import {addDoc, collection, getDocs, getFirestore, query, where,} from "firebase/firestore";
import {toast} from "react-toastify";
import {getDownloadURL, getStorage, ref} from 'firebase/storage';
import uuid from "react-uuid";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: "rtk-shop",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//     try {
//         const res = await signInWithPopup(auth, googleProvider);
//         const user = res.user;
//         const q = query(collection(db, "users"), where("uid", "==", user.uid));
//         const docs = await getDocs(q);
//         if (docs.docs.length === 0) {
//             await addDoc(collection(db, "users"), {
//                 uid: user.uid,
//                 name: user.displayName,
//                 authProvider: "google",
//                 email: user.email,
//             });
//         }
//         return true;
//     } catch (err) {
//         console.error(err);
//         return false;
//     }
// };
//
// const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password);
//         const user = res.user;
//         if (user){
//             return await addDoc(collection(db, "users"), {
//                 uid: user.uid,
//                 name,
//                 authProvider: "local",
//                 email,
//             });
//         }
//
//     } catch (err) {
//         console.error(err);
//         if (err.message === "FirebaseError: Firebase: Error (auth/email-already-in-use)."){
//             toast.error("Email Already Taken!")
//         }
//     }
// };
//
// const logInWithEmailAndPassword = async (email, password) => {
//
//     try {
//         const user = await signInWithEmailAndPassword(auth, email, password);
//         if(user){
//             // const products = [
//             //     {
//             //         productName: "Stone and Beam Westview ",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fdouble-sofa%2Fdouble-sofa-01.png?alt=media&token=0c307872-5168-48f6-8526-392a7f66130b",
//             //         category: "sofa",
//             //         price: 193,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.5,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.5,
//             //     },
//             //
//             //     {
//             //         productName: "Rivet Bigelow Modern ",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fdouble-sofa%2Fdouble-sofa-02.png?alt=media&token=58c0f0c6-5002-4bef-9a33-1abf3cc220be",
//             //         category: "sofa",
//             //         price: 253,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.5,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.5,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //
//             //     {
//             //         productName: "Amazon Brand Modern Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fdouble-sofa%2Fdouble-sofa-03.png?alt=media&token=96f3d8bd-6f7f-495f-b1bd-60b0d984c86f",
//             //         category: "sofa",
//             //         price: 173,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.6,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //     {
//             //         productName: "Manual Reclining Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fdouble-sofa%2Fdouble-sofa-04.jpg?alt=media&token=7819df0b-d238-43d4-8c6f-63de8b3643de",
//             //         category: "sofa",
//             //         price: 253,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //     {
//             //         productName: "Fllufy Sheep Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fdouble-sofa%2Fdouble-sofa-05.jpg?alt=media&token=4c2cbab0-983b-4504-9b02-317ca0b8caea",
//             //         category: "sofa",
//             //         price: 163,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.6,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //
//             //     {
//             //         productName: "Faux Velvet Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fdouble-sofa%2Fdouble-sofa-06.jpg?alt=media&token=e7c83640-83ce-4542-99e8-88901ba6cbdd",
//             //         category: "sofa",
//             //         price: 163,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.6,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //     {
//             //         productName: "Sakarias Armchair",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Farm-chairs%2Farm-chair-01.jpg?alt=media&token=1dfc86f4-8f5f-4490-a138-f3b59bde1f2e",
//             //         category: "chair",
//             //         price: 99,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.6,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //
//             //     {
//             //         productName: "Modern Arm Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Farm-chairs%2Farm-chair-02.jpg?alt=media&token=0dda94eb-fe56-4290-b94a-65d9b0b6f41d",
//             //         category: "sofa",
//             //         price: 173,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.6,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //
//             //     {
//             //         productName: "Baltsar Chair",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Farm-chairs%2Farm-chair-03.jpg?alt=media&token=73d0acd2-dce6-4455-8828-53a1c4fd96ed",
//             //         category: "chair",
//             //         price: 89,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.6,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //
//             //     {
//             //         productName: "Helmar Chair",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Farm-chairs%2Farm-chair-04.jpg?alt=media&token=72fc240e-4aae-4b1f-b6f8-dcfaf37a8621",
//             //         category: "chair",
//             //         price: 112,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.6,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //
//             //     {
//             //         productName: "Relax Buddy Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Farm-chairs%2Farm-chair-05.jpg?alt=media&token=1ae5f621-7066-4c25-a7fe-2a4d945af20c",
//             //         category: "sofa",
//             //         price: 799,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Sakarias Armchair",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Farm-chairs%2Farm-chair-06.jpg?alt=media&token=b98ae4eb-9f12-4088-b365-e8d3193de283",
//             //         category: "chair",
//             //         price: 99,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.6,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.7,
//             //     },
//             //     {
//             //         productName: "Apple iPhone 12 Max",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fphone-images%2Fphone-01.jpg?alt=media&token=726ad2ef-d252-4a13-a770-cd4a1e34dd44",
//             //         category: "mobile",
//             //         price: 799,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //
//             //     {
//             //         productName: "Realme 8",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fphone-images%2Fphone-02.jpg?alt=media&token=d4ba7170-cf0f-472e-997a-1e536b53d862",
//             //         category: "mobile",
//             //         price: 599,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //
//             //     {
//             //         productName: "One Plus Nord",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fphone-images%2Fphone-03.png?alt=media&token=0ed8ac73-c602-41ca-ae58-72fb44875d4d",
//             //         category: "mobile",
//             //         price: 799,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //
//             //     {
//             //         productName: "Apple iPhone 13 Pro",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fphone-images%2Fphone-04.jpg?alt=media&token=357bb93f-ae6a-44f9-9834-24d974b96080",
//             //         category: "mobile",
//             //         price: 899,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Samsung Galaxy S22",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fphone-images%2Fphone-05.jpg?alt=media&token=78da7746-c73e-4ff6-b221-c5bc2ca294f7",
//             //         category: "mobile",
//             //         price: 699,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Apple iPhone 13",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fphone-images%2Fphone-06.jpg?alt=media&token=8017d80e-d32f-4298-bcfb-925166091253",
//             //         category: "mobile",
//             //         price: 699,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Google Pixel 6",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fphone-images%2Fphone-07.jpg?alt=media&token=bdcaf40e-4c5a-405a-af5c-3f72d373ea5a",
//             //         category: "mobile",
//             //         price: 699,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Samsung Galaxy A73",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fphone-images%2Fphone-08.jpg?alt=media&token=0d572054-5b9e-4483-827a-aab3c1576b13",
//             //         category: "mobile",
//             //         price: 699,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Rolex Watch",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fwatch-images%2Fwatch-01.jpg?alt=media&token=388f0796-775c-43e5-aa24-845d009b3cd0",
//             //         category: "watch",
//             //         price: 299,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //
//             //     {
//             //         productName: "Timex Easy Reader Watch",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fwatch-images%2Fwatch-02.jpg?alt=media&token=af816e54-86c6-465f-9637-125bc0ef0796",
//             //         category: "watch",
//             //         price: 299,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //
//             //     {
//             //         productName: "Casio Watch",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fwatch-images%2Fwatch-03.jpg?alt=media&token=7a7eb70b-412b-4738-84cc-f0f8537f4a30",
//             //         category: "watch",
//             //         price: 299,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //
//             //     {
//             //         productName: "Apple Watch",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fwatch-images%2Fwatch-04.jpg?alt=media&token=5cf8e952-41f5-453b-b017-de51f6794578",
//             //         category: "watch",
//             //         price: 399,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //
//             //     {
//             //         productName: "Beat Studio Wireless",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fwireless-images%2Fwireless-01.png?alt=media&token=660e716a-37fa-4bf0-ad8d-d25482dcf285",
//             //         category: "wireless",
//             //         price: 899,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //
//             //     {
//             //         productName: "Beat EP Headphones",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fwireless-images%2Fwireless-02.png?alt=media&token=ac48943c-8c5c-4849-aad0-42e0e3e53748",
//             //         category: "wireless",
//             //         price: 699,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Dolby Headphones",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fwireless-images%2Fwireless-03.png?alt=media&token=3d94457d-ea9f-432f-b8aa-e3ca6ca912cb",
//             //         category: "wireless",
//             //         price: 799,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "LUCKWIND Single Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fsigle-sofa%2Fsingle-sofa-01.jpg?alt=media&token=59085c02-7287-42a7-af42-75ae0d3bad31",
//             //         category: "sofa",
//             //         price: 319,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Molasofa Single Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fsigle-sofa%2Fsingle-sofa-02.jpg?alt=media&token=145b2501-87c1-4c66-910c-d630013350f2",
//             //         category: "sofa",
//             //         price: 300,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "AbocoFur Single Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fsigle-sofa%2Fsingle-sofa-03.jpg?alt=media&token=aae80812-4e35-4d1a-b7cc-b0c1b0be72fc",
//             //         category: "sofa",
//             //         price: 123,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Recaceik Single Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fsigle-sofa%2Fsingle-sofa-04.png?alt=media&token=c9e68dcb-2b2a-458a-918a-1da4bef83694",
//             //         category: "sofa",
//             //         price: 245,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Subrtex Single Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fsigle-sofa%2Fsingle-sofa-05.jpg?alt=media&token=48eb8111-f403-482e-a316-ef298b4c57cb",
//             //         category: "sofa",
//             //         price: 125,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             //     {
//             //         productName: "Olela Modern Single Sofa",
//             //         imgUrl: "https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/product-images%2Fsigle-sofa%2Fsingle-sofa-06.jpg?alt=media&token=fc37e094-9e61-414d-b87b-e18cb4a030af",
//             //         category: "sofa",
//             //         price: 674,
//             //         shortDesc:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//             //         description:
//             //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//             //         reviews: [
//             //             {
//             //                 rating: 4.8,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //             {
//             //                 rating: 4.9,
//             //                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             //             },
//             //         ],
//             //         avgRating: 4.8,
//             //     },
//             // ];
//             //
//             // for (const product of products) {
//             //     const res = await addDoc(collection(db, "products"), {
//             //         id: uuid(),
//             //         productName: product.productName,
//             //         imgUrl: product.imgUrl,
//             //         category: product.category,
//             //         price: product.price,
//             //         shortDesc: product.shortDesc,
//             //         description: product.description,
//             //         reviews: product.reviews,
//             //         avgRating: product.avgRating
//             //     });
//             // }
//             console.log(user)
//             return user;
//
//         }
//     } catch (err) {
//         console.log(err.message);
//         if (err.message === "Firebase: Error (auth/user-not-found)."){
//             toast.error("User Not Found!")
//         }
//     }
// };
//
// const sendPasswordReset = async (email) => {
//     try {
//         return await sendPasswordResetEmail(auth, email);
//     } catch (err) {
//         console.error(err);
//        return false;
//     }
// };
//
// const getProducts = async () => {
//     const q = query(collection(db, "products"));
//     const querySnapshot  = await getDocs(q);
//     const products = [];
//
//     querySnapshot.forEach(     (docs) => {
//         const doc = docs.data();
//
//         products.push({
//             id: doc.id,
//             imgUrl: doc.imgUrl,
//             category: doc.category,
//             price: doc.price,
//             productName: doc.productName,
//             shortDesc: doc.shortDesc,
//             description: doc.description,
//             avgRating: doc.avgRating,
//             reviews: doc.reviews,
//         });
//     });
//
//     return products;
// }
//
// const logout = async () => {
//     return await signOut(auth);
// };

export {
    auth,
    db,
    googleProvider,
};

