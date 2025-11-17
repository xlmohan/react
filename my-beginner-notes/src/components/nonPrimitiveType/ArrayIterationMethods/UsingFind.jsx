import React from 'react'

function UsingFind() {
    const allInactive = [
        { id: 1, active: true },
        { id: 2, active: false }
    ];
    const firstActive = allInactive.find(u => u.active === false);
    return (
        <div>
            <h1>Using Find</h1>
            <span>.find() is designed to return only the first element that matches the condition.</span><br></br>
            result:::::{(firstActive) ? firstActive.id : "No matching found"}
        </div>
    )
}

export default UsingFind