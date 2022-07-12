import dynamic from "next/dynamic"
import { memo, useState } from "react"
import { AddProductToWishListProps } from "./AddProductToWishList"

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
  loading: () => <div>Loading...</div>,
  ssr: false
})

interface ProductItemProps  {
  product: {
    id: number
    title: string
    price: number
    priceFormatted: string;
  }
  addToWishList: (id: number) => void
}

function ProductItemComponent ({ product, addToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false)
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
      
      {
        isAddingToWishList && (
          <AddProductToWishList onAddToWishList={() => addToWishList(product.id)} onRequestClose={() => setIsAddingToWishList(false)}/>
        )
      }
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})
