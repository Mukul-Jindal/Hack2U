import React, { useEffect, useState } from 'react'
import ClothesComponent from './ClothesComponent';
import fetchClothes from '../../firebase/fetchClothes';

export default function ClothesPage() {
    const [clothes, setClothes] = useState([]);

    const getClothes = () => {
        let query = {
            'collection': 'Clothes',
            'gender': 'men',
            'type': 'hoodie',
            'color': 'white',
        }
        fetchClothes(query).then((response) => {
            let tempArr = []
            response.data.forEach((element) => {
                tempArr.push(element.data());
            });
            setClothes(tempArr);

        })
    }
    useEffect(() => {
        document.title = `Fetching`;
        getClothes();
    }, []);
    return (
        <div>
            {clothes.map((element, index) => {
                return (
                    <ClothesComponent key={index} data={element}></ClothesComponent>
                );
            })}
        </div>
    )
}
