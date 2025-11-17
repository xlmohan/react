import React from 'react'

const UsingReduce = () => {
    const numbers = [1, 2, 5];
    return (
        <>
        <h1>Initial accumulator (jar) = 2 → jar already has 2 coins at the start.</h1>
            <table>
                <thead>
                    <tr>
                        <th>Step</th>
                        <th>jar (accumulator)</th>
                        <th>coin (currentValue)</th>
                        <th>jar + coin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2 (starts with 2)</td>
                        <td>1</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>2</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>5</td>
                        <td>5</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
            
            
            Main Total::::{numbers.reduce((jar, coin) => jar + coin, 2)}
        </>

    )
}

export default UsingReduce