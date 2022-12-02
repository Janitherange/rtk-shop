import {CommonBackground} from "../components/UI/Common/CommonBackground/CommonBackground.jsx";
import {CheckoutBlock} from "../components/UI/Checkout/CheckoutBlock/CheckoutBlock.jsx"

export const Checkout = () => {
    return (
        <>
            <section className="text-white">
                <CommonBackground title="Checkout"/>
            </section>
            <section className="text-white">
                <CheckoutBlock/>
            </section>
        </>
    )
}
