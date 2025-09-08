import { useEffect, useState } from 'react'
import { productsImport } from '../services/productsImport'
import { useSearchParams } from 'react-router-dom'
import filterUpdate from '../components/filterUpdate'

const Home = () => {



    const [products, setProducts] = useState<{
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        }
    }[]>([])
    const [searchParam, setSearchParams] = useSearchParams()
    useEffect(() => {
        async function loadProducts() {
            const prod = await productsImport(searchParam)
            setProducts(prod)
        }
        loadProducts()
    },)

    function filterHandler(key: string, value: string) {
        filterUpdate(searchParam, setSearchParams, key, value)
    }

    const mapProducts = products.map(el => {
        return <div key={el.id} className='border-1 border-gray-400 rounded-lg w-5/6 sm:w-60 h-100 p-5 text-center flex flex-col jsutify-center items-center'>
            <img className='h-40 w-40' src={el.image} alt={el.description} />
            <p className='line-clamp-3 w-11/12 mt-4'>{el.description}</p>
            <p className='mt-4 text-xl text-red-700 fond-bold'>{el.price}$</p>
            <button className='bg-red-800 text-white font-mono px-4 py-2 mt-auto mb-4 rounded-tr-xl rounded-bl-xl w-4/5 border-b-2 hover:border-r-2 hover:border-black hover:shadow-lg'>Add to Card</button>
        </div>
    })

    return (
        <div className='flex h-full w-full flex-col sm:flex-row items-center sm:items-start p-6'>
            <ul className='flex flex-col w-5/6 sm:w-1/5'>
                <li className='border-2 border-black hover:bg-gray-300 active:border-blue-500' onClick={() => filterHandler("category", "men's clothing")}>Men's clothing</li>
                <li className='border-2 border-black hover:bg-gray-300' onClick={() => filterHandler("category", "jewelery")}>Jewelery</li>
                <li className='border-2 border-black hover:bg-gray-300' onClick={() => filterHandler("category", "electronics")}>Electronics</li>
                <li className='border-2 border-black hover:bg-gray-300' onClick={() => filterHandler("category", "women's clothing")}>Women's clothing</li>
                <li className='border-2 border-black hover:bg-gray-300' onClick={() => filterHandler("category", "")}>Clear</li>
            </ul>

            <div className='flex flex-wrap justify-center gap-3 w-5/6 sm:4/5' >
                {mapProducts}
            </div>


        </div>
    )
}

export default Home
