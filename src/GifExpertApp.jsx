import { useState } from 'react'

import { AddCategory, GifGrid } from './components';

import logo from '././assets/react.svg'

export const GifExpertApp = () => 
{
    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) =>
    {
        if ( categories.includes( newCategory ) ) return; 
        setCategories([  newCategory, ...categories ])
    }

    return(
        <>
            <h1>
                GifExpertApp &nbsp;
                <img src = { logo } />
            </h1>
            
            <AddCategory 
                onNewCategory = { onAddCategory }
            />
        
            { 
                categories.map( ( category ) => 
                (
                    <GifGrid 
                        key = { category }
                        category = { category } />
                ))
            }
                
        </>
   ) 

}