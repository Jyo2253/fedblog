const Intro = () => {
  return (
    <div>
      <div className="article"></div>
      <h1>Web Storage-Introduction </h1>
      The Web Storage is one of the great features of HTML5. With the Web
        Storage feature, web applications can locally store data within the
        browser on the client side. It stores data in the form of key/value pair
        on the browser. Web Storage sometimes also known as DOM storage.Storing
        data with the help of web storage is similar to cookies, but it is
        better and faster than cookies storage. Storing structured data on the
        client side using HTTP session cookies includes following drawbacks:
        <ul>
          <li>
            Cookies are included with every HTTP request, thereby slowing down
            your web application by transmitting the same data.
          </li>
          <li>
            Cookies are included with every HTTP request, thereby sending data
            unencrypted over the internet.
          </li>
          <li>
            Cookies are limited to about 4 KB of data. Not enough to store
            required data.
          </li>
        </ul>
        In compared to cookies Web Storage has Following Advantages:
        <ul>
          <li>Web Storage can use storage space upto 5MB per domain. (The browser software may prompt the user if the space limit is reached). </li>
          <li>It will not send data to the server side, hence it is faster than cookies storage.</li>
          <li>The data stored by local Storage never expires, but cookies data expires after some time or session. </li>
          <li>Web Storage is more secure than cookies.</li>
        </ul>
    </div>
  );
};

export default Intro;