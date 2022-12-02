import BackgroundCommon from "../../../../assets/images/common-section-bg.jpg";
import {Typography} from "@material-tailwind/react";

export const CommonBackground = ({title}) => {
  return(
      <div className="relative">
          <div className="w-full items-center flex flex-row text-center brightness-50 h-48" style={{
              backgroundImage:  `url(https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/background-images%2Fcommon-section-bg.jpg?alt=media&token=8eecb338-db68-49bc-8be4-d7cfe74583a0)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: "center"
          }}>
          </div>
          <div className="flex items-center mx-auto flex-col absolute top-0 w-full h-full">
              <div className="flex flex-row h-full items-center">
                  <Typography className="text-2xl brightness-100" variant="h2">{title}</Typography>
              </div>
          </div>
      </div>
  )
}
