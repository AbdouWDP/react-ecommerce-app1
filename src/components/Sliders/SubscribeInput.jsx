import React from "react";
import { BsSend } from "react-icons/bs";

function SubscribeInput() {
  return (
    <div className="subscribe-input">
      <span>
        <BsSend />
      </span>
      <div>
        <input type="email" placeholder="Your email address" />
      </div>
      <button>Subscribe</button>
    </div>
  );
}

export default React.memo(SubscribeInput);
