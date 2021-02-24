import React from "react";
import CircleProgress from "../Atoms/CircleProgress/CircleProgress";
const OneImage = (props) => {
  const {
    casePost = "result",
    caption,
    image,
    label,
  } = props;

  return (
    <>
      <div className="mb-m w-full">
        <h3 className="text-md text-dark font-normal">{caption}</h3>
      </div>
      <div className="grid gap-x-2 gap-y-4 mb-m rounded-md relative">
        <div className="  relative rounded-md overflow-hidden">
          <img
            src={image}
            alt="post"
            className="md:w-37xl"
            style={{ width: "600px", height: "644px" }}
          />
          <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
            {label}
          </div>
          {casePost === "result" ? (
           <CircleProgress progres={30}/>
          ) : (
            <div className="absolute bottom-4 right-4 flex">
              <button className="p-xs bg-error rounded-full mr-m">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3H17H6.693C5.864 3 5.112 3.521 4.82 4.298L2.063 11.649C2.021 11.761 2 11.88 2 12V14C2 15.103 2.897 16 4 16H9.612L8.49 19.367C8.287 19.975 8.389 20.649 8.764 21.169C9.14 21.689 9.746 22 10.388 22H12C12.297 22 12.578 21.868 12.769 21.64L17.469 16H20C21.103 16 22 15.103 22 14V5C22 3.897 21.103 3 20 3ZM11.531 20H10.386L11.948 15.316C12.051 15.011 11.999 14.676 11.811 14.415C11.623 14.154 11.321 14 11 14H4V12.181L6.693 5H16V14.638L11.531 20ZM18 14V5H20L20.001 14H18Z"
                    fill="white"
                  ></path>
                </svg>
              </button>

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
                  d="M28 16H22.388L23.511 12.633C23.713 12.025 23.611 11.351 23.236 10.831C22.861 10.311 22.253 10 21.612 10H20C19.703 10 19.422 10.132 19.231 10.36L14.531 16H12C10.897 16 10 16.897 10 18V27C10 28.103 10.897 29 12 29H15H25.307C26.136 29 26.888 28.479 27.18 27.702L29.937 20.351C29.979 20.239 30 20.12 30 20V18C30 16.897 29.103 16 28 16ZM12 18H14V27H12V18ZM28 19.819L25.307 27H16V17.362L20.468 12H21.614L20.052 16.683C19.949 16.988 20.001 17.323 20.189 17.584C20.377 17.846 20.679 18 21 18H28V19.819Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OneImage;
