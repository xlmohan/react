import React, { useState } from 'react'

const UsingUndefined = () => {
    const [name, setName] = useState();
  return (
    <div>
        <span>{(name===undefined) && "undefined - wrong way - name===undefined"}</span>
        <span>{(name) && "undefined - correct way"}</span>
    </div>

  )
}

export default UsingUndefined