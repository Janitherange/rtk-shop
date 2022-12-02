import {CommonBackground} from "../components/UI/Common/CommonBackground/CommonBackground";
import {Products} from "../components/UI/Shop/Products/Products.jsx";

export const Shop = () => {

    return(
        <>
            <section className="text-white">
                <CommonBackground title="Products" />
            </section>
            <section >
                <Products category={0}/>
            </section>
        </>
    )
}
