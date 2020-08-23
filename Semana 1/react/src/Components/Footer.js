import React, { useState } from "react";
import {getTime} from '../time'

export default function Footer({ title, children }) {
  let [time, setTime] = useState("");
  function handleHours() {
    
    time = getTime();
    setTime(time);
  }

  {
    setInterval(handleHours, 1000);
  }
  return (
    <footer>
      <h5>{time}</h5>
      <div>{children}</div>
    </footer>
  );
}
