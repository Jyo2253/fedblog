import React from "react";
const Delete = () => {
  return (
    <div>
      <div className="article"></div>
      Storing sensitive data on local machine could be dangerous and could leave a security hole.The Session Storage Data would be deleted by the browsers immediately after the session gets terminated.
      Hence to delete the local storage data, you need to call two methods:
      <ol>
          <li><b>localStorage.removeItem('key'):</b>If you want to delete the value on a particular key, then you can use the "key," and that value will be deleted.</li>
        <li><b>localStorage.clear():</b>If you want to delete or clear all settings with key/value pair, then you can call this method.</li>
    </ol>
<include src="src/htmlFiles/delete1.html"></include>
<h4>Example Explanation:</h4>
In the above example we have used localStorage.removeItem("name"); Which will delete the value for the key "name".
You can remove id for a particular key, or you can also remove all data using localStorage.clear() method.
    </div>
  );
};

export default Delete;
