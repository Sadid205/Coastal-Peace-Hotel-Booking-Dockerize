import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import toast,{ Toaster } from "react-hot-toast";
import { GoogleOAuthProvider,GoogleLogin  } from '@react-oauth/google';
function LoginPage() {
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [errors,SetErrors] = useState('');
const [isLoading,setIsLoading] = useState(false)
const CLIENT_ID=import.meta.env.VITE_CLIENT_ID
const VITE_REQUEST_URL=import.meta.env.VITE_REQUEST_URL
// console.log(VITE_REQUEST_URL)
const navigate = useNavigate()
const LoginMethod = async(e)=>{
    e.preventDefault()
    try{
        setIsLoading(true)
        const response = await axios.post(`${VITE_REQUEST_URL}guest/login/`,{username,password},{headers:{'Content-Type':'application/json'}})
        const data = response.data;
        if(data){
          setIsLoading(false)
        }
        if (data.Error){
          SetErrors(data)
        }else{
        toast.success("Login Success")
        localStorage.setItem('user_id',data.user_id)
        localStorage.setItem('Token',data.Token)
        setUsername('')
        setPassword('')
        navigate('/')
        }
        
    }
    catch(err){
        console.log(err)
    }
}

const handleLogin = async(response)=>{
  const AccessToken = response.credential
  const googleLogin = await fetch(`${VITE_REQUEST_URL}guest/api/auth/google/login/`,{method:'POST',headers:{
    'Content-Type':'application/json'
},body:JSON.stringify({
  "token":AccessToken
  })
})
const googleLoginResponse = await googleLogin.json()
// console.log(googleLoginResponse)
if(googleLoginResponse.Token && googleLoginResponse.user_id){
  toast.success("Login Success")
  localStorage.setItem('user_id',googleLoginResponse.user_id)
  localStorage.setItem('Token',googleLoginResponse.Token)
  navigate('/')
}else{
  toast.error("Something went wrong!.Please try again.")
  navigate('/login')
}
}
  return (
  <>
  <div><Toaster/></div>
  <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
        <div style={{
          boxShadow:
          "rgba(0, 0, 0, 0.15) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }} className='w-96 mb-8 mx-auto bg-sky-400 p-3'>
          <p><span className='font-semibold'>Username (Master Admin):</span> <span className=''>sadid_1914</span></p>
          <p><span className='font-semibold'>Password (Master Admin):</span> <span>Naim12345</span></p>
          <hr />
          <p><span className='font-semibold'>Username (User):</span> <span className=''>rong_1914</span></p>
          <p><span className='font-semibold'>Password (User):</span> <span>Naim12345</span></p>
        </div>
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-sky-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">Login</h1>
        </div>
        <form onSubmit={LoginMethod} className="divide-y divide-gray-200">
          <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
              <input value={username} required onChange={(e)=> setUsername(e.target.value)} autoComplete="off" id="username" name="username" type="text" className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"/>
              <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                {errors.Error?errors.Error:"Username"}
              </label>
            </div>
            <div className="relative">
              <input value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="off" id="password" name="password" type="password" className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"/>
              <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                {errors.Error?errors.Error:"Password"}
              </label>
            </div>
            <div className="relative">
            <button disabled={isLoading} type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative w-20 flex  justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {isLoading?<div className="w-5 h-5 border-4 border-gray-300 rounded-full animate-spin border-t-yellow-200"/>:<p>Login</p>}
            </span>
          </button>
            </div>
          </div>
        </form>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleLogin onSuccess={(response)=>handleLogin(response)} onError={()=>console.log('Login Failed!')}/>
        </GoogleOAuthProvider>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default LoginPage;


