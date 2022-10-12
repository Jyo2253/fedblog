import React from "react";
const Types = () => {
  return (
    <div>
      <div className="article"></div>
      <h1>Types of Web Storage</h1>
There are two types of web storage with different scope and lifetime.
<b>Local Storage:</b> Local Storages uses Windows.localStaorage object which stores data and available for every page. But data persist even if the browser is closed and reopened (Stores data with no Expiration).
<b>Session Storage:</b> Session Storage uses Windows.sessionStorage object which stores data for one session and data will be lost if the window or browser tab will be closed.
Before diving into types of web Storage we must check whether our browser is supporting the web Storage or not.Check by executing the following code:
<include src="src/htmlFiles/types1.html"></include>  
    </div>
  );
};

export default Types;
