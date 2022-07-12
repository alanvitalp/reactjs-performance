import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    title: string;
    price: number
    priceFormatted: string;
  }>
  addToWishList: (id: number) => void
  totalPrice: number
}


const SearchResults = ({ results, addToWishList, totalPrice }: SearchResultsProps) => {
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return <ProductItem key={product.id} product={product} addToWishList={addToWishList}/>
      })}      
    </div>
  )
}

export default SearchResults