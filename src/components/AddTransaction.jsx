import React, { useState } from 'react'

function AddTransaction() {
    const [ desc, setDesc ] = useState('')
    const [ amount, setAmount ] = useState(0)

    return (
        <>
            <h3>Add new Transaction</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor='desc'>Text</label>
                    <input type='text'
                        id='desc'
                        placeholder='Enter description..'
                        value={ desc }
                        onChange={ (e) => setDesc(e.target.value) }
                    />
                </div>

                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount <br />
                        (negative is expense, positive is income)
                    </label>
                    <input type='number'
                        id='amount'
                        placeholder='Enter amount..'
                        value={ amount }
                        onChange={ (e) => setAmount(e.target.value) }
                    />
                </div>

                <button className="btn">Add Transcation</button>
            </form>
        </>
    )
}

export default AddTransaction
