import React from 'react'

const UsingMap = () => {

    const products = [
        { id: 1, name: "TV", price: 300 },
        { id: 2, name: "Laptop", price: 1200 },
        { id: 3, name: "Phone", price: 800 },
        { id: 4, name: "Headphones", price: 100 },
    ];
    return (
        <div>
            <h1>Using Map</h1>
            <p>
                {products.map((product) =>
                    <div>
                        <span key={product.id}>{product.name}</span>
                        <br></br>
                    </div>
                )}
            </p>
        </div>
    )
}

export default UsingMap