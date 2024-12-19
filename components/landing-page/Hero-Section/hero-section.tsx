import React from "react";
import WaitingList from "../Waitlist/waiting-list";
import { motion, AnimatePresence } from "framer-motion";
import { ListTodo } from "lucide-react";
import { useUser } from "@/context/User-Data/authentication";

interface DataPoint {
  revenue: number;
  subscription: number;
}

const data: DataPoint[] = [
  { revenue: 26475, subscription: 0 },
  { revenue: 11244, subscription: 20 },
  { revenue: 9600, subscription: 100 },
  { revenue: 7000, subscription: 300 },
  { revenue: 11244, subscription: 500 },
  { revenue: 14405, subscription: 600 },
  { revenue: 8200, subscription: 600 },
  { revenue: 11244, subscription: 500 },
  { revenue: 7000, subscription: 300 },
  { revenue: 9600, subscription: 100 },
  { revenue: 11244, subscription: 20 },
  { revenue: 26475, subscription: 0 },
];

const HeroSection = () => {
  // ! Use Context
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center h-screen flex-auto w-full justify-center">
      <div className="my-auto gap-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <span className="text-xl italic   text-[#01DA58] px-7 py-2 font-semibold ">
            Fluedity
          </span>
        </motion.div>
        <AnimatePresence>
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className=" text-center flex text-3xl lg:text-4xl flex-col justify-center items-center"
            >
              <h1 className="lg:text-7xl font-semibold ">All new powerful</h1>
              <p className="  lg:text-7xl font-semibold">
                Cognition Intelligence
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
              className="text-center  py-3 justify-center flex"
            >
              <p className=" text-[12px] md:max-w-[700px] max-w-[300px]  md:text-base text-muted-foreground">
                Fluedity&apos;s Cognition Intelligence let&apos;s you use AI
                features with realtime motion tracking.
                <br />
                <span className=" font-bold">
                  Ultimately making you a wizard.
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className=" mb-7 lg:mb-10 xl:mb-16 justify-center flex flex-col items-center "
            >
              <WaitingList />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
          className="bg-black cursor-pointer transition-all ease-in-out justify-between w-full  flex duration-300 hover:scale-[101%]  items-center relative rounded-full"
        >
          <video
            autoPlay
            muted
            controls={false}
            loop
            className="lg:w-40 md:w-28  cursor-pointer transition-all ease-in-out duration-300 hover:translate-x-[-5px]  w-12 h-12 md:h-28 lg:h-40 object-cover rounded-full"
            src="https://cdn.dribbble.com/userupload/15363755/file/original-33c8fceaa8f1f12da02deb9ef182cafd.mp4"
          />
          <div className="relative gap-2 flex flex-col text-center  md:max-w-[500px]">
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold ">
              {"Pending task!"}
            </h1>
            <span className="text-[#86868B] md:block hidden max-w-[230px] md:max-w-[400px] lg:max-w-none  font-medium text-[12px] md:text-sm lg:text-base  text-ellipsis overflow-hidden">
              <span className=" capitalize">
                {user && <>{user.displayName},</>}{" "}
              </span>
              Submit your assigment before 3:00 PM or else you will not be
              allowed in today&apos;s class.
            </span>
          </div>{" "}
          <div className=" bg-black cursor-pointer transition-all hover:translate-x-[5px] rounded-full md:h-28 md:w-28 lg:w-40 w-12 h-12 lg:h-40 items-center justify-center ease-in-out duration-300 flex relative  lg:px-10">
            <ListTodo
              strokeWidth={1.2}
              className="transition-all  w-7 p-[6px] h-7 md:w-14 md:h-14 lg:w-20 lg:h-20 md:p-3  ring-1 md:ring-2  lg:ring-4 text-white bg-[#FF1111]/50 ring-[#FF1111]  lg:p-4 ease-in-out duration-300 object-cover rounded-full"
              // src="https://cdn.dribbble.com/users/2066397/screenshots/4881747/1billiontasks_v01.png?resize=800x600&vertical=center"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
