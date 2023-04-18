import { useSelector } from 'react-redux'
const BasketCount = () => {
  
  const products = useSelector((state) => state?.basket?.products);

  return products ? products.length : 0;
}

export default BasketCount
