import {Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";

export const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let interval;

    const countdown =()=>{
        const destination = new Date("Dec 10, 2022").getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const difference = destination - now;
            const days = Math.floor(difference/(1000*60*60*24));

            const hours = Math.floor(difference%(1000*60*60*24)/(1000*60*60));

            const minutes = Math.floor(difference%(1000*60*60)/(1000*60));

            const seconds = Math.floor(difference%(1000*60)/1000);

            if (destination < 0){
                clearInterval(interval.current)
            }else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds)
            }
        })
    }

    useEffect(()=>{
        countdown();
    },[])

    return (
        <>
          <span className="py-3 pr-3 text-start">
             <Typography variant="paragraph" className="text-xl lg:text-2xl font-thin">
                {days.toString()}
             </Typography>
             <Typography variant="paragraph" className="text-xs">
                Days
             </Typography>
          </span>
          <span className="py-3 pr-2">:</span>
          <span className="py-3 pr-2 text-center">
             <Typography variant="paragraph" className="text-xl lg:text-2xl font-thin">
                {hours.toString()}
             </Typography>
             <Typography variant="paragraph" className="text-xs">
                Hours
             </Typography>
          </span>
          <span className="py-3 pr-2">:</span>
          <span className="py-3 pr-2 text-center">
             <Typography variant="paragraph" className="text-xl lg:text-2xl font-thin">
               {minutes.toString()}
             </Typography>
             <Typography variant="paragraph" className="text-xs">
               Minutes
             </Typography>
          </span>
          <span className="py-3 pr-2">:</span>
          <span className="py-3 text-center">
              <Typography variant="paragraph" className="text-xl lg:text-2xl font-thin">
                 {seconds.toString()}
              </Typography>
              <Typography variant="paragraph" className="text-xs">
                 Seconds
              </Typography>
          </span>
        </>
    )
}
