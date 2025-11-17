import React, { useState } from 'react'

const UsingSymbol = () => {
  const id1 = Symbol("id");
  const id2 = Symbol("id");
  var items = {
    // it will be hidden
    [id1]: "123",
    Name: "TV"
  }
  return (
    <>
      <h1>here symbol is syntax, id will be hidden</h1>
      <div>{(id1 === id2) ? "Duplicated" : "Doesn't allow any duplicated "}Not recommended - but define wise it is a hidden over iteration but cannot be duplicated</div>
      <div>{items.id1}</div>
    </>

  )
}

export default UsingSymbol