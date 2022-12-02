import {Button, Input, Textarea, Typography} from "@material-tailwind/react";
import {Rating} from "@mui/material";

export const Reviews = () => {
  return(
      <>
          <div className="grid grid-rows-2 lg:w-[1140px] lg:w-[1140px] xl:w-[1320px] text-blue-gray-900">
              <div className="flex flex-col w-full pb-5">
                  <Typography variant="h3" className="text-xl">John Doe</Typography>
                  <Typography variant="small"><span className="text-[#faaf00] pr-2">4.5</span>( rating)</Typography>
                  <Typography variant="paragraph" className="pt-2">Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.</Typography>
              </div>
              <div className="flex flex-col w-full">
                  <Typography variant="h3" className="text-xl">John Doe</Typography>
                  <Typography variant="small"><span className="text-[#faaf00] pr-2">4.5</span>( rating)</Typography>
                  <Typography variant="paragraph" className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia libero vel erat blandit, eu efficitur felis tristique.</Typography>
              </div>
          </div>
          <div className="flex flex-row justify-center text-blue-gray-900">
                <div className="flex flex-col w-[70%]">
                    <Typography variant="h3" className="text-xl mb-5">Leave your experience</Typography>
                    <Input label="Enter name" color="blue-gray" />
                    <Rating name="rating" value={4.5} precision={0.5} className="my-5"/>
                    <Textarea variant="outlined" color="blue-gray" label="Review message..." />
                    <div>
                        <Button className="my-10 md:mb-6 py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none">Submit</Button>
                    </div>
                </div>
          </div>
      </>
  )
}
