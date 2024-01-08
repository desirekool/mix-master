import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from './CocktailCard';
const CocktailList = ({drinks}) => {
    if(!drinks) {
        return (
            <h4 style={{textAlign: 'center'}}>No Matching cocktails found...</h4>
        )
    }

    const formattedDrinks = drinks.map((item) => {
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
        return {id:idDrink, name:strDrink, image: strDrinkThumb, info:strGlass, glass: strGlass};
    })

    return  <Wrapper>
                {formattedDrinks.map((item) => <CocktailCard key={item.id} {...item} />)}
            </Wrapper>
}

export default CocktailList;