import React from 'react'
import style from '../recipe.module.css'

function Recipe({image,calories,label,ingredients,healthLabels}) {
    return (
        <div className={style.recipe}>
            <h1 className={style.label}>{label}</h1>
            <img className={style.image} src={image} alt="image"></img>
            <ul className={style.healthLabels}>
                {healthLabels.map(label=>(
                    <li className={style.healthLabelsElements}>{label}</li>
                ))}
            </ul>
            <p className={style.calories}>calories: {parseFloat(calories).toFixed(4)}</p>
            <b>Ingredients</b>
            <ol>
                {ingredients.map(ingredient=>(<li>
                    {ingredient.text}
                </li>))}
            </ol>
            
        </div>
    )
}

export default Recipe
