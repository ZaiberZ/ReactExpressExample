import React, { useEffect, useState } from 'react';

function App() {
  const [backEndData, setBackEndData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => {
      setBackEndData(data);
    })
  }, [])

  return (
    <div>
      {(typeof backEndData.users === 'undefined') ? (<p>Loading</p>) :
        (<ul>
          {backEndData.users.map((u, i) => (<li id={i}>{u}</li>))}
        </ul>)}
    </div>
  )
}

export default App;