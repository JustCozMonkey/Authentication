import axios from "axios";

export async function productsImport(searchParams: any) {
    try {
        const queryString = searchParams.toString()
        const products = await axios.get(`http://localhost:8000/products?${queryString}`)
        return products.data

    } catch (error) {
        return []
    }

}