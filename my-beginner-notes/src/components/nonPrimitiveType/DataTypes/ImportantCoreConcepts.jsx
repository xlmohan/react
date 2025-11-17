import React from 'react'

const ImportantCoreConcepts = () => {
    return (
        <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Strategies by Operation</h1>
            <table
                style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    marginTop: "20px"
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #999", padding: "10px", background: "#f2f2f2" }}>
                            Operation
                        </th>
                        <th style={{ border: "1px solid #999", padding: "10px", background: "#f2f2f2" }}>
                            Strategy
                        </th>
                        <th style={{ border: "1px solid #999", padding: "10px", background: "#f2f2f2" }}>
                            Example
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>Add</td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            Use spread operator to copy old items, then append new one
                        </td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            <code>setArray(prev =&gt; [...prev, newItem])</code>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>Remove</td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            Use filter to exclude the item
                        </td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            <code>setArray(prev =&gt; prev.filter(item =&gt; item.id !== id))</code>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>Update</td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            Use map to transform the matching item
                        </td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            <code>
                                setArray(prev =&gt; prev.map(item =&gt; item.id === id ? &#123;...item, age:
                                newAge&#125; : item))
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>Toggle</td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            Use map again, but flip a boolean property
                        </td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            <code>
                                setArray(prev =&gt; prev.map(item =&gt; item.id === id ? &#123;...item,
                                selected: !item.selected&#125; : item))
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>Reset</td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            Just set back to the original array
                        </td>
                        <td style={{ border: "1px solid #999", padding: "10px" }}>
                            <code>setArray(staticArray)</code>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ImportantCoreConcepts