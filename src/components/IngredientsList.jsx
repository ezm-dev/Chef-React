export default function IngredientsList(props){

        const listItems = props.ingredients.map(i=> (
    <li key={i}>{i}</li>
    ))

    return(
        <section>
                  <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{listItems}</ul>
               
                {props.ingredients.length >=2 && <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipeShown}>Get a recipe </button>
                </div>}

            </section>
    )
}