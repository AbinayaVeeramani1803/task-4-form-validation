import { useState } from "react";
import "./App.css";
import useStackhook from "./useStackhook.jsx";

function UseStackHook() {
    const [count, setcount] = useState(0);
    const [user, setuser] = useState(true);
    console.log(count);
    console.log(user);

  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={()=> setcount(count + 1)}>Increment</button>
      <button onClick={()=> setcount(count - 1)}>Decrement</button>
      <button onClick={()=> setcount(0)}>Reset</button>
      
<h3>stacly</h3>
<nav>
    {user ? <h3>Welcome...</h3>:<h3>login</h3>}
    {user &&(
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus numquam ullam maiores dolores similique vero laboriosam quaerat adipisci. Vitae at consectetur pariatur non debitis qui optio ullam distinctio quisquam nulla?</p>
    )}
    <button onClick={()=> setuser(!user)}> 
    sign {user ? "out":"in"}
    </button>
</nav>
    </div>
  );
}

export default UseStackHook;
