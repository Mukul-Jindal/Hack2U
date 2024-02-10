import React, { useState } from 'react'

export default function Prompt() {
    const [promt, setPromt] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        //Write onSubmit prompt function here

    }


    return (
        <div className='container'>
            <form onsubmit={onSubmit}>
                <div className="container">
                    <label for="promtText" className="form-label">Enter Prompt</label>
                    <input type="text" className="form-control" id="promtText" aria-describedby="emailHelp" onChange={(e) => setPromt(e.target.value)} />
                </div>
                <div className="container">

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
