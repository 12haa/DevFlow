import React from "react";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex  flex-col h-screen  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden w-[350px] custom-scrollbar max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]"></div>
      </div>
      <div className="mt-16"></div>
    </section>
  );
};

export default RightSidebar;
