import { useState, useEffect } from 'react'

interface items {
    id: number,
    desc: string,
    amount: number,
    category: string
}

interface Item {
    item: items[]
    onRemove: (id: number) => void
}

export const Display = ({ item, onRemove }: Item) => {




    return (

        <div className="container">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {item.map(item => <tr key={item.id}>
                        <td>{item.desc}</td>
                        <td>{item.amount}</td>
                        <td>{item.category}</td>
                        <td>
                            <button
                                className='btn btn-outline-danger'
                                onClick={() => onRemove(item.id)}
                            >
                                Remove
                            </button>
                        </td>
                    </tr>)}
                </tbody>
            </table>



        </div>
    )
}
