function Recipe({recipe}) {
    return <>
        <div className={`w-96 border rounded-md shadow-md ${recipe.type==='NV'?"shadow-red-200":recipe.type==='V'?"shadow-green-200":"shadow-yellow-200"} `}>
            <img src={recipe.image} alt={recipe.name} className='w-96 object-cover' />
            <div className={`${recipe.type==='NV'?"bg-red-50":recipe.type==='V'?"bg-green-50":"bg-yellow-50"} p-5`}>
                <h3 className='text-center font-bold'>{recipe.name}</h3>
                <div className='py-5'>
                    <p className='text-left w-1/2 inline-block'>{`duration: ${recipe.duration}`}</p>
                    <p className='text-right w-1/2 inline-block'>{`creator: ${recipe.creator}`}</p>
                </div>
                <div className='w-full flex justify-center'>
                    <button className={`${recipe.type==='NV'?"bg-red-500":recipe.type==='V'?"bg-green-500":"bg-yellow-500"} text-white px-3 py-1 rounded-full`}>view details</button>
                </div>
            </div>
        </div>
    </>
}

export default Recipe;