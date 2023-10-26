import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    // Hook
    const [ inputValue, setInputValue ] = useState('')
    // Function to modify initial state
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    // Submit function: it sends new category value to parent component
    const onSubmit = ( event ) => {
        event.preventDefault();
        const cleanCategoryInput = inputValue.trim();
        if( cleanCategoryInput.length <= 3 ) return
        onNewCategory(cleanCategoryInput)
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Looking for your gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
