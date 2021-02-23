import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories  = ['One Pucn', 'Gundam', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Onepunch']);

    
    // const handleAdd = () => {
        
    //     // setCategories([...categories, 'HunterXHunter']); // RECORDAR QUE EL SPREAD CREA UN NUEVO APUNTADO D EMEMEORIA
    //     // setCategories(['HunterXHunter',...categories ]);
    //     setCategories( cats => [...cats, 'HunterXHunter']); // Tambien es posible utilizar un Callback().
        
    // }

    return (
        <>
            <h2> GifExpertApp  wwPwwOwwLwwWwwE'</h2>
            <AddCategory setCategories={ setCategories } /> 
            <hr />


            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 


                        />
                    ))
                }
            </ol>
        </>
    )
} // Mandar la prop de categories en el componente tambien es buena opción  return <li key={ category }>{ category }</li>

GifExpertApp.prototype = {
    setCategories: PropTypes.func.isRequired,
}


export default GifExpertApp
