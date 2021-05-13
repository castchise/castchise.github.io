import React from "react";

import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoEarthSharp
} from "react-icons/io5";

const AuthorContacts = (props) => (
  <div className="mt-3 flex justify-center flex-wrap sm:justify-start">
    {props.portfolio_url ? (
      <a
        href={`${props.portfolio_url}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center text-gray-400 text-xl hover:text-gray-700 hover:underline"
      >
        <IoEarthSharp size={20} />
        <span className="ml-1">{props.portfolio_url}</span>
      </a>
    ) : null}
    {props.instagram_username ? (
      <a
        href={`https://www.instagram.com/${props.instagram_username}`}
        target="_blank"
        rel="noreferrer"
        className={`${
          props.portfolio_url ? "ml-2 sm:ml-5" : ""
        } flex items-center text-gray-400 text-xl hover:text-gray-700 hover:underline`}
      >
        <IoLogoInstagram size={20} />
        <span className="ml-1">{props.instagram_username}</span>
      </a>
    ) : null}
    {props.twitter_username ? (
      <a
        href={`https://www.twitter.com/${props.twitter_username}`}
        target="_blank"
        rel="noreferrer"
        className={`${
          props.portfolio_url || props.instagram_username ? "ml-2 sm:ml-5" : ""
        } flex items-center text-gray-400 text-xl hover:text-gray-700 hover:underline`}
      >
        <IoLogoTwitter size={20} />
        <span className="ml-1">{props.twitter_username}</span>
      </a>
    ) : null}
  </div>
);

export default AuthorContacts;
