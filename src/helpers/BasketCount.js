import { useSelector } from 'react-redux'
const BasketCount = () => {
  
  const basket = useSelector((state) => state?.basket?.count);

  return basket ? basket : 0;
}

export default BasketCount
