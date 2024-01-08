import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "@/app/components/shared/RenderTag";

const hotQuestions = [
  {
    _id: 1,
    title: "What is DevFlow?",
  },
  {
    _id: 2,
    title: "What is DevFlow?",
  },
  {
    _id: 3,
    title: "What is DevFlow?",
  },
  {
    _id: 4,
    title: "What is DevFlow?",
  },
  {
    _id: 5,
    title: "What is DevFlow?",
  },
];
const PopularTags = [
  {
    _id: 1,
    name: "React",
    totalQuestions: 5,
  },
  {
    _id: 2,
    name: "React",
    totalQuestions: 5,
  },
  {
    _id: 3,
    name: "React",
    totalQuestions: 5,
  },
  {
    _id: 4,
    name: "React",
    totalQuestions: 5,
  },
  {
    _id: 5,
    name: "React",
    totalQuestions: 5,
  },
  {
    _id: 6,
    name: "React",
    totalQuestions: 5,
  },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex  flex-col h-screen  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden w-[350px] custom-scrollbar max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colorts"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900 ">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4 ">
          {PopularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
