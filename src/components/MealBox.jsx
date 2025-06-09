import { useNavigate } from 'react-router-dom';

const MealBox = ({ meal }) => {
    const navigate = useNavigate()
    return (
        <div className='meal-box-card' id={meal.strMeal}
            onClick={()=>navigate(`/meal/${meal.idMeal}`)}
        >
        <img src={meal.strMealThumb} alt={meal.strMeal} loading='eager'/>
        <p>{meal.strMeal.slice(0,25)}</p>
        </div>
    )
}

export default MealBox