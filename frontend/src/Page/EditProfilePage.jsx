import { useEffect, useState } from "react"
import toast,{ Toaster } from "react-hot-toast";
function EditProfilePage(){
    const token = localStorage.getItem("Token")
    const user_id = localStorage.getItem("user_id")
    const [profile,setProfile] = useState({})
    const [isLoading,setIsLoading] = useState(false)
    const VITE_REQUEST_URL=import.meta.env.VITE_REQUEST_URL

    // isImage(profile?.image)
    // console.log(isImage)
    
    const handleEditPost = async(e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append("username",profile.username)
      formData.append("first_name",profile.first_name)
      formData.append("last_name",profile.last_name)
      formData.append("email",profile.email)
      formData.append("updated_image",profile.image)
        try{
          setIsLoading(true)
           const response =  await fetch(`${VITE_REQUEST_URL}guest/edit_profile/${user_id}/`,{method:"PATCH",headers:{'Authorization':`Token ${token}`},
            body:formData
            })
           const data = await response.json()
           if(data){
            toast.success("You have successfully updated your account.")
            setIsLoading(false)
           }
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        const profileData = async()=>{
           try{
            const Data = await fetch(`${VITE_REQUEST_URL}guest/edit_profile/${user_id}/`,{method:"GET",headers:{'Authorization':`Token ${token}`,'Content-Type':'application/json'}})
            const ProfileData = await Data.json()
            setProfile(ProfileData)
            console.log(profileData)
           }catch(e){
            console.log(e)
           }
        }
        if(token){
            profileData()
        }
    },[token])
    const handleUpdate = (e)=>{
      e.preventDefault()
      if (e.target.name==='image' && e.target.files.length>0){
        setProfile({
          ...profile,
          imagePreview:URL.createObjectURL(e.target.files[0]),
          image:e.target.files[0]
        })
      }else{
        setProfile({
            ...profile,
            [e.target.name]:e.target.value
        })
      }

  }
    // console.log(profile)
    return (
<>
<div><Toaster/></div>
<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Update Your Profile
        </h1>
        <form onSubmit={handleEditPost} className="space-y-4 md:space-y-6" action="#">
          <div className="flex justify-center">
            <img  className="rounded-full w-28 h-28 border" src={profile?.imagePreview?profile.imagePreview:profile.image} alt="image" />
          </div>
            <label className="text-white font-bold" htmlFor="profile_image">
              Change Image
              <input name="image" onChange={(e)=>handleUpdate(e)} id="profile_image" type="file" accept="image/*" />
            </label>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
            <input value={profile?profile.username:""} onChange={(e)=>handleUpdate(e)} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <input value={profile?profile.first_name:""} onChange={(e)=>handleUpdate(e)} type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input value={profile?profile.last_name:""} onChange={(e)=>handleUpdate(e)} type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input value={profile?profile.email:""} onChange={(e)=>handleUpdate(e)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <button disabled={isLoading} type="submit" className="w-full h-12 text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            {isLoading?(<div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-yellow-600 rounded-full" role="status" aria-label="loading"></div>):("Update")}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
</>
)
}

export default EditProfilePage