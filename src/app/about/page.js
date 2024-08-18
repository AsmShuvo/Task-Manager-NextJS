import React from "react";

const takeTime = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000); // 3 seconds delay
  });
};

const Page = async () => {
  await takeTime();
  throw new Error("this is manual error");
  return <div>about</div>;
};

export default Page;
