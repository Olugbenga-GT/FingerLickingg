import React from 'react'
import Card from '../../UI/card/Card'
import MealItem from '../mealitem/MealItem'
import classes from './AvailableMeals.module.css' 

const MEALS = [

       {
              id: 'm1',
              name:'Amala wit Gbegiri and Ewedu',
              description: 'Finest Local delicacies. Amala wey go OAU',
              price : '3699.99'
       },
       {
              id: 'm2',
              name:'Fried Rice, Coleslaw an dChicken',
              description: 'Finest Meals. Fried rice wey sweet pass Salado and Mavise',
              price : '2500.00'
       },
       {
              id: 'Spaghetti Gasttorinni',
              name:'Spagghetti meal with some finesse. ',
              description: 'Korede Spag dey learn, Chopand give lick your fingerss',
              price : '2000.00'
       },
       {
              id: 'm4',
              name:'Ewa Aganyi and Beans',
              description: 'Hot, Fresh, straight-from-the-oven bread, with Ewa Aganyii from Congo ',
              price : '1500.00'
       },
       {
              id: 'Eba and Oha soup',
              name:'Oha wey get varfieties inside, Cant miss this',
              description: 'Finest Local delicacies. Oha wey come directly from south south',
              price : '5000.00'
       },
       {
              id: 'm6',
              name:'Chicken and Chips',
              description: 'Something light for the road..',
              price : '3500.00'
       },
       {
              id: 'm7',
              name: 'Order any thing, we go cook am',
              description: 'Finest Local delicacies',
              price : '00.00'
       },
]

const mealsList = MEALS.map(meal => <MealItem 
       key ={meal.id} 
       name = {meal.name}     
       description ={meal.description} 
       price ={meal.description}/>)
function AvailableMeals() {
       return (
              <section className = {classes.meals}>
                     <Card>
                     <ul>
                            {mealsList}
                     </ul>
                     </Card>
              </section>
       )
}

export default AvailableMeals
