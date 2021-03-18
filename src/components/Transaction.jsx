import React from 'react'

const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <li className={ `${ transaction.amount < 0 ? 'expense' : 'income' } ` }>
            {transaction.desc }
            <span>{ sign }${ transaction.amount }</span>
            <button className='delete-btn'>
                X
            </button>
        </li>
    )
}

export default Transaction
