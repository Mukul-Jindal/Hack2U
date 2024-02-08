import React, { useContext, useEffect, useState } from 'react'
import ClothesComponent from './ClothesComponent';
import fetchClothes from '../../firebase/CRUDOperations';
import { userContext } from '../../firebase/userState';

export default function ClothesPage() {
    const [clothes, setClothes] = useState([]);
    const { user } = useContext(userContext)

    const refreshClothes = () => {
        let query = {
            'collection': 'Clothes',
            'gender': 'men',
            'cloth': 'hoodie',
            'color': 'black',
        }
        fetchClothes(query, user).then((response) => {
            if (response.data.size > 0) {
                let tempArr = []
                response.data.forEach((element) => {
                    tempArr.push(element.data());
                });
                setClothes(tempArr);
                console.log(clothes);
            }
        })
    }

    const getClothes = () => {
        refreshClothes();
    }
    useEffect(() => {
        document.title = `Fetching`;
        getClothes();
    }, []);
    return (
        <div className='container'>
            {
                clothes.length > 0
                    ? clothes.map((element, index) => {
                        return (
                            <ClothesComponent key={index} data={element}></ClothesComponent>
                        );
                    })
                    : <></>
            }
            <button type="button" className="btn btn-primary" onClick={(e) => { e.preventDefault(); refreshClothes() }}>refresh</button>
        </div>
    )
}
