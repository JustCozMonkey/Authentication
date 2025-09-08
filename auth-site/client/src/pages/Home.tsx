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
        return <div key={el.id} className='p-2 w-1/2 sm:w-1/3 lg:w-1/4'>
            <div className='border-1 border-gray-400 rounded-lg p-2 sm:p-5 text-center flex flex-col jsutify-center items-center'>
                <img className='w-4/5 aspect-square mt-4' src={el.image} alt={el.description} />
                <p className='line-clamp-3 w-11/12 mt-4'>{el.description}</p>
                <p className='mt-4 text-xl text-red-700 fond-bold'>{el.price}$</p>
                <button className='bg-red-800 w-full text-white font-mono py-2 my-4 rounded-tr-lg rounded-bl-lg w-4/5 border-b-2 hover:border-r-2 hover:border-black hover:shadow-lg'>Add to Card</button>
            </div>
        </div>

    })

    return (
        <div className='flex h-full w-full flex-col sm:flex-row items-center sm:items-start sm:p-6 p-0'>
            <div className='w-5/6 sm:w-1/5 flex flex-col mr-2'>
                <p className='text-xl font-bold font-mono'>Category</p>
                <ul className='flex flex-col mt-1 ml-2'>
                    <li className='border-b-1 border-gray-500 hover:bg-gray-300' onClick={() => filterHandler("category", "men's clothing")}>Men's clothing</li>
                    <li className='border-b-1 border-gray-500 hover:bg-gray-300' onClick={() => filterHandler("category", "jewelery")}>Jewelery</li>
                    <li className='border-b-1 border-gray-500 hover:bg-gray-300' onClick={() => filterHandler("category", "electronics")}>Electronics</li>
                    <li className='border-b-1 border-gray-500 hover:bg-gray-300' onClick={() => filterHandler("category", "women's clothing")}>Women's clothing</li>
                    <li className='border-b-1 border-gray-500 hover:bg-gray-300' onClick={() => filterHandler("category", "")}>Clear</li>
                </ul>
            </div>


            <div className='flex flex-wrap justify-center w-5/6 sm:4/5 mt-6 sm:mt-0' >
                {mapProducts}
            </div>


        </div>
    )
}

export default Home
