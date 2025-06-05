//import { nanoid } from "nanoid";
import { createContext, useState } from "react"

export const recepicontext = createContext(null)

const Recipecontext = (props) => {
    const [Data, setData] = useState([
      {
        "id": 11,
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "title": "Classic Margherita Pizza",
        "category": "dinner",
        "ingridients": "Pizza dough, Tomato sauce, Fresh mozzarella cheese, Fresh basil leaves, Olive oil, Salt and pepper to taste",
        "description": "Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Slice and serve hot."
      },
      {
        "id": 22,
        "image": "https://cdn.dummyjson.com/recipe-images/11.webp",
        "title": "Chicken Biryani",
        "category": "lunch",
        "ingridients": "Basmati rice, Chicken, Yogurt, Onions, Tomatoes, Ginger garlic paste, Spices (turmeric, cumin, garam masala), Fresh coriander, Mint leaves",
        "description": "Marinate chicken with yogurt, spices, and ginger garlic paste. Fry onions until golden brown. Layer marinated chicken, fried onions, and partially cooked basmati rice in a pot. Add fresh coriander and mint leaves. Cook on low heat until the chicken is tender and rice is fully cooked. Serve hot with raita."
      },
      {
        "id": 33,
        "image": "https://cdn.dummyjson.com/recipe-images/25.webp",
        "title": "Chocolate Lava Cake",
        "category": "dessert",
        "ingridients": "Dark chocolate, Butter, Eggs, Sugar, All-purpose flour, Vanilla extract, Salt",
        "description": "Preheat the oven to 425°F (220°C). Melt dark chocolate and butter together. In a separate bowl, beat eggs and sugar until light and thick. Combine the melted chocolate mixture with the egg mixture. Fold in flour, vanilla extract, and a pinch of salt. Pour batter into greased ramekins. Bake for 12-14 minutes until the edges are firm but the center is soft. Serve warm with a scoop of vanilla ice cream."
      }
    ])
    //console.log(Data);
    
  return (
    <recepicontext.Provider value={[Data, setData]}>
        {props.children}
    </recepicontext.Provider>
  )
}

export default Recipecontext