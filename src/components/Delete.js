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
    
    <!DOCTYPE html>  
<html>  
<head>  
  <title>Web Storage API</title>  
  <style>  
     body{  
      color: green;  
      text-align: center;  
      font-size: 30px;  
      margin-top: 30px;  
      font-style: italic;  
      }  
  </style>  
</head>  
<body>  
<button onclick="remove();">Remove item</button>  
<div id="output"></div>  
  
<script>  
 if(typeof(Storage)!=="undefined") {  
  localStorage.setItem("name","Harshita");  
  localStorage.setItem("Country", "India");  
  document.getElementById('output').innerHTML= "Hii, my name is"+ " "+ localStorage.name +" "+"and i belongs to"+" "+localStorage.Country;  
   }  
  else{  
  alert("Sorry! your browser is not supporting the browser")  
 }  
  function remove() {  
 localStorage.removeItem("name");  
   document.getElementById('output').innerHTML= "Hii, my name is"+ " "+ localStorage.name +" "+"and i belongs to"+" "+localStorage.Country;  
}  
</script>  
</body>  
</html>  

<h4>Example Explanation:<h4>
In the above example we have used localStorage.removeItem("name"); Which will delete the value for the key "name".
You can remove id for a particular key, or you can also remove all data using localStorage.clear() method.
    </div>
  );
};

export default Delete;
