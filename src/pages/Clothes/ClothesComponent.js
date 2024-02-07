import React from 'react'

export default function ClothesComponent(props) {
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={props.data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Cloth : {props.data.type}
                        <br></br>
                        Color : {props.data.color}
                    </p>
                </div>
            </div>
        </>
    )
}
