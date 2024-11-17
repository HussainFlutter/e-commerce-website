import React from "react";
import CustomButton from "./components/CustomButton";
import Link from "next/link";
const Page404 = () => {
  return (
    <div className="flex flex-col justify-center gap-6 items-center absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full">
      <h1 className="text-8xl"> 404 Not found</h1>
      <p>The page you visited does not exist</p>
      <div>
        <Link href={"/pages/home"}>
          <CustomButton title={"Back to home page"} />
        </Link>
      </div>
    </div>
  );
};

export default Page404;
