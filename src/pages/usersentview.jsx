import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function usersentview() {
    const location = useLocation();
    const item = location.state?.item || {};
    if (!item) {
        return <div className="text-center mt-10 text-red-500">No data available.</div>;
      }
  return (
    <div className="flex overflow-hidden flex-col pr-20 pb-32 text-base leading-snug text-black bg-white max-w-[705px] max-md:pr-5 max-md:pb-24 ">
    <div className="flex gap-1 items-center max-w-full whitespace-nowrap w-[333px]">
      <div className="flex flex-col justify-center items-start self-stretch p-2.5 my-auto min-w-60 w-[262px]">
        <div className="flex gap-10 items-center mr-0 w-full min-h-[42px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/df7bc22c67d8741226cfe9d5880ba56fa3bd78a3?placeholderIfAbsent=true&apiKey=fe06d74da83f4f91b307234a5d0c765e"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[42px]"
          />
          <Link to="/user">
          <div className="self-stretch my-auto">
            Sent
          </div>
          </Link>
          <div className="gap-2.5 self-stretch my-auto">
            Response
          </div>
        </div>
      </div>
      <div className="gap-2.5 self-stretch p-2.5 my-auto">
        Send
      </div>
    </div>
    <div className="flex overflow-hidden flex-col items-start self-end px-10 py-8 mt-16 w-full rounded-lg border border-black border-solid max-w-[502px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div>User Name:{item.username}</div>
      <div className="mt-9">
        Context: {item.Context}
      </div>
      <div className="mt-12 max-md:mt-10">
        Issue: 
      </div>
      <textarea
  className="overflow-hidden px-3.5 pt-3.5 pb-20 mt-3.5 ml-9 max-w-full border border-black shadow w-[301px] max-md:pr-5 max-md:pb-28 max-md:ml-2.5 resize-none bg-white"
  value={item.Issue || ""}
  readOnly
/>

      <Link to="/usersent">
      <button
        className="self-end px-12 pt-1.5 pb-5 mt-9 max-w-full font-semibold text-white whitespace-nowrap rounded-lg bg-stone-900 w-[114px] max-md:px-5"
      >
        Back
      </button>
      </Link>
    </div>
  </div>
  )
}
