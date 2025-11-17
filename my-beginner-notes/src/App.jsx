import { useState } from 'react'
import UsingUndefined from './components/primitiveType/usingUndefined'
import UsingNull from './components/primitiveType/UsingNull'
import UsingSymbol from './components/primitiveType/UsingSymbol'
import UsingMap from './components/nonPrimitiveType/ArrayIterationMethods/usingMap'
import UsingFilter from './components/nonPrimitiveType/ArrayIterationMethods/UsingFilter'
import UsingReduce from './components/nonPrimitiveType/ArrayIterationMethods/UsingReduce'
import UsingFind from './components/nonPrimitiveType/ArrayIterationMethods/UsingFind'
import StaticArray from './components/nonPrimitiveType/DataTypes/StaticArray'
import DynamicArray from './components/nonPrimitiveType/DataTypes/DynamicArray'
import ImportantCoreConcepts from './components/nonPrimitiveType/DataTypes/ImportantCoreConcepts'

function App() {
  return (
    <>
      {/* <UsingUndefined />
      <UsingNull /> */}
      <DynamicArray/>
    </>
  )
}

export default App
