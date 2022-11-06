import React from 'react'
import { CONTEXT } from '../constants/variables'

const Content = () => {
    return (
        <div>
            <div className="card my-1 shadow-xl">
                <div className="card-body">
                    <h1 className="card-title">What is {CONTEXT.MAIN_KEYWORD}?</h1>


                    <p>How to park your car at your garage?</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Content