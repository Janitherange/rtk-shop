import {CommonBackground} from "../components/UI/Common/CommonBackground/CommonBackground";
import {useParams} from "react-router-dom";
import {ProductsByCategory} from "../components/UI/Category/ProductsByCategory";

export const Category = () => {
    const categoryMap = (value) => {
        switch (value) {
            case "sofa":
                return 10;
            case "mobile":
                return 20;
            case "chair":
                return 30;
            case "watch":
                return 40;
            case "wireless":
                return 50;
            default:
                return 0;
        }
    }

    const capitalize = (category) => {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    const { name } = useParams();

    return(
        <>
            <section className="text-white">
                <CommonBackground title={capitalize(name)} />
            </section>
            <section >
                <ProductsByCategory category={categoryMap(name)} categoryName={name} />
            </section>
        </>
    )
}
