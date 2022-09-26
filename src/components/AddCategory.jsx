import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => 
{
    
    const [ inputValue, setInputValue ] = useState('One Punch')

    const onInputChange = ({ target }) => 
    {
        let valueInput = target.value
        setInputValue(valueInput);
    }

    const onSubmit = ( event ) =>
    {
        event.preventDefault();

        const cleanValue = inputValue.trim();

        if ( cleanValue.length <= 1 ) return;

        onNewCategory( cleanValue )
        setInputValue('');
    }

    return (
        <form onSubmit = { onSubmit }>
            <input 
                type = "text"
                placeholder = "Buscar Gifs" 
                value = { inputValue }
                onChange = { onInputChange }/>
        </form>
    )
}
