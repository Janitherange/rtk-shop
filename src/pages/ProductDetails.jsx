import {CommonBackground} from "../components/UI/Common/CommonBackground/CommonBackground.jsx";
import {Details} from "../components/UI/ProductDetails/Details/Details";
import {Recommended} from "../components/UI/ProductDetails/Recommended/Recommended";

export const ProductDetails = () => {
    return(
        <>
            <section className="text-white">
                <CommonBackground title="Faux Velvet Sofa" />
            </section>
            <section>
                <Details/>
                <Recommended/>
            </section>
        </>
    )
}
