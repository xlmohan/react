import React from 'react'

const StaticArray = () => {
  // Static Array
  const staticArray = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Bill', age: 45 },
    { id: 4, name: 'Alice', age: 22 }
  ];

  const adult = staticArray.filter(name => name.age <= 30);
  
  return (
    <div>
      <h1>StaticArray</h1>
      <span>Static Array Example::: {staticArray.map(person => (<div>
        <span>{person.name}</span>
        <br></br>
      </div>
      ))}</span>
      <b>Adults (Age &lt; = 30)::: {adult.map(person => (<div>
        <span>{person.name}</span>
        <br></br>
      </div>
      ))}
      </b>
    </div>

  )
}

export default StaticArray