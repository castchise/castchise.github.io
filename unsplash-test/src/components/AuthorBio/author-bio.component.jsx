import React from "react";

import AuthorContacts from "../AuthorContacts/author-contacts.component";

const AuthorBio = (props) => (
  <div className="flex flex-col mb-3">
    <div className="flex">
      <div
        className="rounded-full overflow-hidden flex-shrink-0"
        style={{ height: 40, width: 40 }}
      >
        <img src={props.profile_image.medium} alt="" />
      </div>
      <div className="ml-3">
        <h2 className="text-3xl text-gray-700 font-semibold tracking-tight">
          <span>{props.first_name}</span>
          {props.last_name ? <span> {props.last_name}</span> : null}
        </h2>
        {props.bio ? (
          <h3 className="text-xl text-gray-400">{props.bio}</h3>
        ) : null}
      </div>
    </div>
    <AuthorContacts {...props} />
  </div>
);

export default AuthorBio;
