import { useState } from 'react'
import axios from "axios"


const Register = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPass] = useState<string>("")

    const submitHandler = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/auth/register", { name, email, password });
        } catch (err) {
            alert("Register failed");
        }
    }
    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <div className='bg-blue-300 w-11/12 sm:w-160 px-8 py-16 rounded-tl-3xl rounded-br-3xl hover:shadow-2xl'>
                <p className='mb-6 text-3xl text-center font-mono font-bold'>
                    Create New Account
                </p>
                <form onSubmit={submitHandler} className=' flex flex-col h-1/2 gap-6'>
                    <label className="flex flex-col text-gray-700 font-medium gap-2">
                        Name:
                        <input
                            className='bg-gray-100 rounded-sm border-1 border-black'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
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
            </div>
        </div>



    )
}

export default Register
