import React from 'react'
import AvailableMeals from '../availableMeals/AvailableMeals'
import MealSummary from '../mealSummary/MealSummary'

function Meals() {
       return (
              <React.Fragment>
                     <MealSummary/>
                     <AvailableMeals/>
              </React.Fragment>
       )
}

export default Meals
