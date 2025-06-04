import { useNavigate } from 'react-router-dom';
const FoodBox = ({ category }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`food-box`}
      id={category.strCategory}
      onClick={()=>navigate(`/category/${category.strCategory}`)}
    >
    <img src={category.strCategoryThumb} alt="" loading='eager' />
    <p className="category-text">{category.strCategory}</p>
    </div>
  );
};

export default FoodBox;
