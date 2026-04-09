import {useRef, useState,useEffect} from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"

export default function Main(){


    const [ingredients,setIngredients] = useState([])
        //"all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipeShown, setRecipeShown] = useState(false)
    const recipeSection = useRef(null)

  // Scroll to recipe section when receipe is ready and recipeSection refrenced node element
    useEffect(()=>{
        if(recipeShown && recipeSection.current)
        recipeSection.current.scrollIntoView({behavior: "smooth"})
    },[recipeShown])
    
    function toggleRecipeShown(){
        setRecipeShown(prevShown=>!prevShown)
    }


 ///2-Before (React 19)    <form onSubmit={handleSubmit} method="post"> on client side
//     function handleSubmit(e){
//         e.preventDefault() // prevent page reload on form submit
//         const formData= new FormData(e.currentTarget)
//         const newItem= formData.get("ingredient")
//         setIngredients(prev=> [...prev,newItem])
//         formEl.reset()
//   }

// 1-Oldway using controlling components (state for each input--onchanege={e=>setIngredient(e.target.value)} value={ingredient}
  //3- NEW way(React 19) to handle form submit on clinet side using action={handle.....}
  //Adv: Getting formData automatically as input, and form reset done for you
    
//  <form action={addItems}>   
  function addItems(formData){
        const newItem = formData.get("ingredient")
        if(!newItem){
            alert("Please enter an ingredient")
            return
        }
        if(ingredients.includes(newItem)){
            alert("You have already added this ingredient")
            return
        }   
        setIngredients(prev => [...prev,newItem])

    }
 

    
return(
    <main>
        <p>Enter what you have of ingredients to get a recipe!</p>
        <form action={addItems} className="ingredients-form" >
            <input 
            type="text" 
            id="ingredient"
            name="ingredient"
            placeholder="e.g. Oregano"
            aria-label="Enter ingredients"
            // defaultValue="Salt"
            pattern="[a-zA-Z\s]{2,}" // Only letters and spaces, at least 2 characters
            title="Please enter a valid ingredient name (only letters and spaces, at least 2 characters)"
             />
            <button>Add ingredients</button>
        </form>
           {ingredients.length>0 && <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} ref={recipeSection}/> }
            {recipeShown && <Recipe /> }
    </main>
)
}