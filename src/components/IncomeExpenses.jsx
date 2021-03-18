import React from 'react'

function IncomeExpenses() {
    return (
        <div className='income-expense-container'>
            <div>
                <h4>Income</h4>
                <p className='money income'>
                    $0.00
                </p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className='money expense'>
                    $0.00
                </p>
            </div>
        </div>
    )
}

export default IncomeExpenses
