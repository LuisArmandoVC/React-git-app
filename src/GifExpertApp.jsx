import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    // Hooks
    const [ categories, setCategories ] = useState([ 'Demon Slayer' ]);
    // Modify categories array
    const onAddCategory = (category) => {
        if (categories.includes(category)) {
            return;
        }
        setCategories( [category, ...categories] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (category) => onAddCategory(category) }
            />

            {
                categories.map( (category) => (
                    <GifGrid
                        key={ category }
                        category={ category } 
                    />
                ))
            }        
        </>
    )
}
