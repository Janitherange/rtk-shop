import {Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

export const Hero = () => {
    const navigate = useNavigate();

  const year = new Date().getFullYear();

  const onClickButton = () => {
    navigate("/shop");
  }

  return(
      <div className="flex container flex-col md:flex-row pt-10 mx-auto">
        <div className="flex flex-row md:w-1/2 w-full px-5 md:px-3" >
          <div className="items-center mx-auto ">
            <p className="font-semibold my-3">Trending Products in {year}</p>
            <h2 className="font-bold justify-items-center text-3xl xl:text-5xl lg:text-4xl my-3 pr-10 md:pr-14 lg:leading-[3.5rem] md:leading-snug leading-snug">Make Your IInterior More Minimalistic & Modern</h2>
            <p className="font-thin text-base leading-snug my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia libero vel erat
              blandit, eu efficitur felis tristique. Sed non augue dolor. Phasellus pharetra blandit
              leo interdum ultrices.</p>
            <Button onClick={onClickButton} className="my-3 md:mb-6 py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none">SHOP NOW</Button>
          </div>
        </div>
        <div className="flex flex-row md:w-1/2">
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/background-images%2Fhero-img.png?alt=media&token=4577c463-29ea-4e6b-9856-b4f4ea4dda01" alt="hero-img"/>
          </div>
        </div>
      </div>
  )
}
