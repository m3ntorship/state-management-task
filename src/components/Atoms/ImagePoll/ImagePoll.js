import React from "react";
import imagePost from "../../../img/post-img.jpg";
const ImagePoll = (props) => {
  const { image = imagePost, label = "image label" } = props;
  return (
    <div className="grid grid-img-upload w-37xl gap-2 gap-x-2 gap-y-4 mb-m">
      <div className=" relative rounded-md overflow-hidden">
        <img src={image} alt="post" className=" relative " />
        <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
          {label}
        </div>
        <div className="absolute bottom-4 right-4 flex">
          <div className="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                fill="#7048E8"
              />
              <path
                d="M20 12.595C18.896 11.589 17.488 11.037 16.004 11.037C14.426 11.037 12.932 11.66 11.791 12.795C9.43798 15.158 9.43898 18.854 11.793 21.207L19.125 28.539C19.295 28.838 19.623 29.031 20 29.031C20.322 29.031 20.609 28.868 20.792 28.622L28.207 21.207C30.561 18.853 30.561 15.158 28.205 12.791C27.068 11.66 25.574 11.037 23.996 11.037C22.513 11.037 21.104 11.589 20 12.595ZM26.791 14.205C28.354 15.776 28.355 18.23 26.793 19.793L20 26.586L13.207 19.793C11.645 18.23 11.646 15.776 13.205 14.209C13.965 13.453 14.959 13.037 16.004 13.037C17.049 13.037 18.039 13.453 18.793 14.207L19.293 14.707C19.684 15.098 20.316 15.098 20.707 14.707L21.207 14.207C22.719 12.698 25.281 12.702 26.791 14.205Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" relative rounded-md overflow-hidden">
        <img src={image} alt="post" className=" " />
        <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
          {label}
        </div>
        <div className="absolute bottom-4 right-4 flex">
          <div className="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                fill="#7048E8"
              />
              <path
                d="M20 12.595C18.896 11.589 17.488 11.037 16.004 11.037C14.426 11.037 12.932 11.66 11.791 12.795C9.43798 15.158 9.43898 18.854 11.793 21.207L19.125 28.539C19.295 28.838 19.623 29.031 20 29.031C20.322 29.031 20.609 28.868 20.792 28.622L28.207 21.207C30.561 18.853 30.561 15.158 28.205 12.791C27.068 11.66 25.574 11.037 23.996 11.037C22.513 11.037 21.104 11.589 20 12.595ZM26.791 14.205C28.354 15.776 28.355 18.23 26.793 19.793L20 26.586L13.207 19.793C11.645 18.23 11.646 15.776 13.205 14.209C13.965 13.453 14.959 13.037 16.004 13.037C17.049 13.037 18.039 13.453 18.793 14.207L19.293 14.707C19.684 15.098 20.316 15.098 20.707 14.707L21.207 14.207C22.719 12.698 25.281 12.702 26.791 14.205Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative   rounded-md overflow-hidden">
        <img src={image} alt="post" className=" relative " />
        <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
          {label}
        </div>
        <div className="absolute bottom-4 right-4 flex">
          <div className="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                fill="#7048E8"
              />
              <path
                d="M20 12.595C18.896 11.589 17.488 11.037 16.004 11.037C14.426 11.037 12.932 11.66 11.791 12.795C9.43798 15.158 9.43898 18.854 11.793 21.207L19.125 28.539C19.295 28.838 19.623 29.031 20 29.031C20.322 29.031 20.609 28.868 20.792 28.622L28.207 21.207C30.561 18.853 30.561 15.158 28.205 12.791C27.068 11.66 25.574 11.037 23.996 11.037C22.513 11.037 21.104 11.589 20 12.595ZM26.791 14.205C28.354 15.776 28.355 18.23 26.793 19.793L20 26.586L13.207 19.793C11.645 18.23 11.646 15.776 13.205 14.209C13.965 13.453 14.959 13.037 16.004 13.037C17.049 13.037 18.039 13.453 18.793 14.207L19.293 14.707C19.684 15.098 20.316 15.098 20.707 14.707L21.207 14.207C22.719 12.698 25.281 12.702 26.791 14.205Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="  relative rounded-md overflow-hidden">
        <img src={image} alt="post" className=" " />
        <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
          {label}
        </div>
        <div className="absolute bottom-4 right-4 flex">
          <div className="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                fill="#7048E8"
              />
              <path
                d="M20 12.595C18.896 11.589 17.488 11.037 16.004 11.037C14.426 11.037 12.932 11.66 11.791 12.795C9.43798 15.158 9.43898 18.854 11.793 21.207L19.125 28.539C19.295 28.838 19.623 29.031 20 29.031C20.322 29.031 20.609 28.868 20.792 28.622L28.207 21.207C30.561 18.853 30.561 15.158 28.205 12.791C27.068 11.66 25.574 11.037 23.996 11.037C22.513 11.037 21.104 11.589 20 12.595ZM26.791 14.205C28.354 15.776 28.355 18.23 26.793 19.793L20 26.586L13.207 19.793C11.645 18.23 11.646 15.776 13.205 14.209C13.965 13.453 14.959 13.037 16.004 13.037C17.049 13.037 18.039 13.453 18.793 14.207L19.293 14.707C19.684 15.098 20.316 15.098 20.707 14.707L21.207 14.207C22.719 12.698 25.281 12.702 26.791 14.205Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePoll;
