import React from "react";
import avatar from "../../img/large-avatar.png";
const Header = (props) => {
  const { name, date, srcOfUserImage = avatar } = props;
  return (
    <div className="flex justify-between pb-s border-b w-full border-grey-shd6 mb-m">
      <div className="flex">
        <img
          src={srcOfUserImage}
          alt="filled avatar"
          className="w-10 h-10 mr-m"
        />
        <div>
          <h4 className="font-medium text-sm text-dark">{name}</h4>
          <span className="font-light text-sm text-dark-grey">{date}</span>
        </div>
      </div>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
            fill="#8D9A9E"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
