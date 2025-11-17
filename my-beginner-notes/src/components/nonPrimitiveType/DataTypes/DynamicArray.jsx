import React, { useState } from 'react'
import ImportantCoreConcepts from './ImportantCoreConcepts';

const DynamicArray = () => {
    // Static Array
    const staticArray = [
        { id: 1, name: 'John', age: 28 },
        { id: 2, name: 'Jane', age: 32 },
        { id: 3, name: 'Bill', age: 45 },
        { id: 4, name: 'Bill2', age: 45 },
        { id: 5, name: 'Alice', age: 22 }
    ];

    //Dynamic Array
    const [dynamicArray, setDynamicArray] = useState(staticArray);

    // Example 5: Remove a person by ID from the dynamic array
    const removePersonById = id => {
        setDynamicArray(prevArray => prevArray.filter(person => {
            console.log(person);
            return person.id !== id;
        }
        ));
    };

    return (
        <div>
            <ImportantCoreConcepts/>
            <h1>Dynamic Array Example:</h1>
            <ul>
                {dynamicArray.map(person => (
                    <li key={person.id}>
                        {`${person.name} (Age: ${person.age})`}
                        <button onClick={() => removePersonById(person.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default DynamicArray