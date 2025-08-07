"use client"
import { ProductStore } from "@/store/ProductStore"
import { useEffect } from "react"

const ProductProvider = ({ products }) => {
    const setProducts = ProductStore((state) => state.setProducts)

    useEffect(() => {
      setProducts(products) // update Zustand store
    }, [products, setProducts])
  
    return null // no UI, just logic
  
}

export default ProductProvider