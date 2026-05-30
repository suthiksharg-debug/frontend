import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <AccountCircleSharpIcon />
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}