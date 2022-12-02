import {Button, Typography} from "@material-tailwind/react";
import {CommonBackground} from "../components/UI/Common/CommonBackground/CommonBackground";
import {CartBlock} from "../components/UI/Cart/CartBlock/CartBlock";

export const Cart = () => {
    return (
        <>
            <section className="text-white">
                <CommonBackground title="Shopping Cart"/>
            </section>
            <section>
                <CartBlock/>
            </section>
        </>
    )
}
