import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories }) => { // es buena Opción mandar el categories aquí  "", categories"

    const [inputValue, setInputValue] = useState(''); //'Hello wwPwwOwwLwwWwwE'

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)  => {
        e.preventDefault();
 
        if( inputValue.trim().length > 2){
           setCategories( cats => [ inputValue, ...cats] ); 
           setInputValue('');
        }
        

    }


    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired,
}

