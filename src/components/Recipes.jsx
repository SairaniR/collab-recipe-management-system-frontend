import RecipesData from '../mock-data/Recipes.json'
import Recipe from './Recipe'

function Recipes() {
    return <>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 place-items-center'>
            {RecipesData.map((recipe) => { return (<div className='p-10'><Recipe key={recipe.id} recipe={recipe}></Recipe></div>) })}
        </div>
    </>
}

export default Recipes