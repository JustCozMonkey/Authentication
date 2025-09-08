
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SIgnIn = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPass] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const navigate = useNavigate()

    const submitHandler = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/auth/signin", { email, password }, { withCredentials: true })
            setMessage(res.data.message)

            //navigate("/")
        } catch (err: any) {
            setMessage(err.response?.data?.message || "Login Error")
        }

    }
    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <div className='bg-blue-300 w-11/12 sm:w-160 px-8 py-16 rounded-tl-3xl rounded-br-3xl hover:shadow-2xl'>
                <p className='mb-6 text-3xl text-center font-mono font-bold'>
                    Sign in
                </p>
                <form onSubmit={submitHandler} className=' flex flex-col h-1/2 gap-6'>
                    <label className="flex flex-col text-gray-700 font-medium gap-2">
                        Email:
                        <input
                            className='bg-gray-100 rounded-sm border-1 border-black'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label className="flex flex-col text-gray-700 font-medium gap-2">
                        Password:
                        <input
                            className='bg-gray-100 rounded-sm border-1 border-black'
                            type="password"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </label>
                    <button className='bg-blue-400 w-1/2 sm:w-1/4 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition' type='submit'>Submit</button>
                </form>
                <p className='text-lg my-3 '>{message}</p>
                <p className='text-2xl mt-6 font-bold'>New Customers</p>
                <p className='text-lg mt-3'>If you don’t have an account yet, you can <Link className='text-red-100 hover:text-red-600' to={"/register"}>create an account</Link> here.</p>
            </div>
        </div>

    )
}

export default SIgnIn
