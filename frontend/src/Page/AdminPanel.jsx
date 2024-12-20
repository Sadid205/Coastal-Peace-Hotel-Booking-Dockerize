import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TbArrowBadgeRight } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import toast,{ Toaster } from "react-hot-toast";
import { TEChart } from "tw-elements-react";
import { FaRegAddressBook } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { IoBagAddSharp } from "react-icons/io5";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { BiSolidSelectMultiple } from "react-icons/bi";



const AdminPanel = ()=>{
    const [pendingBookingList,setPendingBookingList] = useState()
    const [bookingInfo,setBookingInfo] = useState()
    const [guestOrAdmin,setGuestOrAdmin] = useState()
    const[revenue,setRevenue] = useState({})
    const [bookingGraphData,setBookingGraphData] = useState([])
    const [confirmIsLoading,setConfirmIsLoading] = useState(false)
    const [cancelIsLoading,setCancelIsLoading] = useState(false)
    const token = localStorage.getItem("Token")
    const user_id = localStorage.getItem('user_id')
    const VITE_REQUEST_URL=import.meta.env.VITE_REQUEST_URL
    const [bar,setBar] = useState(false)
    useEffect(()=>{
        const guest_or_admin_account = async()=>{
            try{
                const guest_or_admin_account_request = await fetch(`${VITE_REQUEST_URL}guest/list/?user_id=${user_id}`,{method:"GET",headers:{'Authorization':`Token ${token}`,'Content-Type':'application/json'}})
                const guest_or_admin_account_response = await guest_or_admin_account_request.json()
                setGuestOrAdmin(guest_or_admin_account_response)
            }catch(e){
                console.log(e)
            }
        }
        const pending_booking_list = async()=>{
            try{
                const pending_booking_list_request = await fetch(`${VITE_REQUEST_URL}booking/pending_booking/`,{method:"GET",headers:{'Authorization':`Token ${token}`,'Content-Type':'application/json'}})
                const pending_booking_list_response = await pending_booking_list_request.json()
                setPendingBookingList(pending_booking_list_response.pending_booking_list)

            }catch(e){
                console.log(e)
            }
        }
        const booking_information = async()=>{
            try{
                const request_booking_info = await fetch(`${VITE_REQUEST_URL}booking/booking_info/`,{method:"GET",headers:{'Authorization':`Token ${token}`,'Content-Type':'application/json'}})
                const response_booking_info = await request_booking_info.json()
                setBookingInfo(response_booking_info.booking_info
                )
            }catch(e){
                console.log(e)
            }
        }
        const getBookingGraphData = async()=>{
            try{
                const request = await fetch(`${VITE_REQUEST_URL}booking/daily-bookings/`,{method:"GET",headers:{'Authorization':`Token ${token}`,'Content-Type':'application/json'}})
                const response = await request.json()
                setBookingGraphData(response)
            }catch(e){
                console.log(e)
            }
        }
        const getRevenue = async()=>{
            try{
                const request = await fetch(`${VITE_REQUEST_URL}transactions/transaction-totals/`,{method:"GET",headers:{'Authorization':`Token ${token}`,'Content-Type':'application/json'}})
                const response = await request.json()
                setRevenue(response)
            }catch(e){
                console.log(e)
            }
        }
        
        pending_booking_list()
        booking_information()
        guest_or_admin_account()
        getBookingGraphData()
        getRevenue()
    },[confirmIsLoading,cancelIsLoading])
    const confirm_booking_handler=async(e,booking_id)=>{
        e.preventDefault()
        try{
            setConfirmIsLoading(true)
            const update_request = await fetch(`${VITE_REQUEST_URL}booking/confirm_booking/${booking_id}/`,{method:"PATCH",headers:{'Authorization':`Token ${token}`,'Content-Type':'application/json'}})
            const update_response = await update_request.json()
            if(update_response){
                setConfirmIsLoading(false)
                toast.success(update_response.Success)
            }
        }catch(e){
            setConfirmIsLoading(false)
            console.log(e)
        }

    }
    const cancel_booking_handler = async(e,booking_id)=>{
        e.preventDefault()
        try{
            setCancelIsLoading(true)
            const cancel_request = await fetch(`${VITE_REQUEST_URL}booking/cancel_booking/${booking_id}/`,{method:"PATCH",headers:{'Authorization':`Token ${token}`,'Content-Type':'application/json'}})
            const cancel_response = await cancel_request.json()
            if(cancel_response){
                setCancelIsLoading(false)
                toast.success(cancel_response.Success)
            }
        }catch(e){
            setCancelIsLoading(false)
            console.log(e)
        }
    }
    // console.log(pendingBookingList&&pendingBookingList.length>0?pendingBookingList[0].total_bookings:"")
    // console.log(pendingBookingList)
    // console.log(bookingInfo)
    // console.log(guestOrAdmin)
    // console.log(bookingGraphData)
    return (
<div>
<div className="md:flex bg-gray-300">
    <Toaster/>
        <div className="md:flex p-3 gap-3 m-auto">
                <div className="absolute">
                    <button onClick={()=>setBar(true)} className="text-5xl"><TbArrowBadgeRight /></button>
                </div>
                <div style={{width:"250px"}} className={`absolute ${bar?"":"-ms-72"}  transition-all bg-gray-700 p-2 shadow border rounded-md`}>
                <div className="absolute right-0 top-0">
                    <button onClick={()=>setBar(false)} className="text-3xl text-white mr-2 mt-3"><RxCross2/></button>
                </div>
                   <div className="overflow-y-auto max-h-screen">
                        <div className="flex items-center px-2 hover:cursor-pointer py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><FaRegAddressBook /></span>
                            <Link to={"/add_hotel"} className="font-bold p-2 hover:text-black text-white">Add Hotel</Link>
                        </div>
                        {guestOrAdmin&&guestOrAdmin[0].is_master_admin==true?(
                        <div className="hover:cursor-pointer px-2 py-4 flex items-center rounded-md hover:bg-gray-400">
                            <span className="text-white"><FaCodePullRequest /></span>
                            <Link to={"/admin_request"} className="font-bold p-2 hover:text-black text-white">Admin Request</Link>
                        </div>
                        ):("")}
                        <div className="flex items-center px-2 hover:cursor-pointer py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><FaThList /></span>
                            <Link to={"/admin_list"} className="font-bold p-2 hover:text-black text-white">Admin List</Link>
                        </div>
                        <div className="flex items-center px-2 hover:cursor-pointer py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><FaThList /></span>
                            <Link to={"/user_list"} className="font-bold p-2 hover:text-black text-white">User List</Link>
                        </div>
                        <div className="flex items-center px-2 hover:cursor-pointer py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><MdAddAPhoto /></span>
                            <Link to={"/add_banner"} className="font-bold p-2 hover:text-black text-white">Add Banner</Link>
                        </div>
                        <div className="hover:cursor-pointer px-2 flex items-center py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><IoIosCreate /></span>
                            <Link to={"/create_offer"} className="font-bold p-2 hover:text-black text-white">Create Offer</Link>
                        </div>
                        <div className="hover:cursor-pointer px-2 flex items-center py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><IoIosCreate /></span>
                            <Link to={"/create_category"} className="font-bold p-2 hover:text-black text-white">Create Category</Link>
                        </div>
                        <div className="flex items-center  px-2 hover:cursor-pointer py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><IoBagAddSharp /></span>
                            <Link to={"/add_best_room"} className="font-bold p-2 hover:text-black text-white">Add Best Room</Link>
                        </div>
                        <div className="flex items-center  px-2 hover:cursor-pointer py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><MdOutlineCreateNewFolder /></span>
                            <Link to={"/create_service"} className="font-bold p-2 hover:text-black text-white">Create Services</Link>
                        </div>
                        <div className="hover:cursor-pointer px-2 flex items-center py-4 rounded-md hover:bg-gray-400">
                            <span className="text-white"><BiSolidSelectMultiple /></span>
                            <Link to={"/select_feedback"} className="font-bold p-2 hover:text-black text-white">Select Feedback</Link>
                        </div>
                   </div>
                </div>
                <div>
                    <div style={{height:"80px",width:"250px"}} className="rounded-md  border border-slate-300 shadow-2xl mt-3 mx-auto text-center">
                        <h1 className="font-bold">Total Bookings</h1>
                            <h1 className="font-bold text-3xl">{bookingInfo&&bookingInfo?bookingInfo.total_bookings:"0"}</h1>
                    </div>
                    <div style={{height:"80px",width:"250px"}} className="rounded-md  border border-slate-300 shadow-2xl  mt-3 mx-auto text-center">
                        <h1 className="font-bold">Total User</h1>
                            <h1 className="font-bold text-3xl">{bookingInfo&&bookingInfo?bookingInfo.total_user:"0"}</h1>
                    </div>
                    <div style={{height:"80px",width:"250px"}} className="rounded-md  border border-slate-300 shadow-2xl  mt-3 mx-auto text-center">
                        <h1 className="font-bold">Weekly Revenue</h1>
                            <h1 className="font-bold text-3xl">{revenue&&revenue.total_amount_this_week?revenue.total_amount_this_week:"0"} Taka</h1>
                    </div>
                </div>
               <div>
               <div style={{height:"80px",width:"250px"}} className="rounded-md border border-slate-300 shadow-2xl  mt-3 mx-auto text-center">
                    <h1 className="font-bold">Booking Request</h1>
                        <h1 className="font-bold text-3xl">{bookingInfo&&bookingInfo?bookingInfo.total_booking_request:"0"}</h1>
                </div>
                <div style={{height:"80px",width:"250px"}} className="rounded-md border border-slate-300 shadow-2xl mt-3 mx-auto text-center">
                <h1 className="font-bold">Total Hotel</h1>
                        <h1 className="font-bold text-3xl">{bookingInfo&&bookingInfo?bookingInfo.total_hotel:"0"}</h1>
                </div>
                <div style={{height:"80px",width:"250px"}} className="rounded-md border border-slate-300 shadow-2xl mt-3 mx-auto text-center">
                <h1 className="font-bold">Total Revenue</h1>
                        <h1 className="font-bold text-3xl">{revenue&&revenue.total_amount?revenue.total_amount:"0"} Taka</h1>
                </div>
               </div>
        </div>
        <div className="overflow-x-auto max-h-screen overflow-y-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Hotel Name
                </th>
                <th scope="col" className="px-6 py-3">
                Booking Account
                </th>
                <th scope="col" className="px-6 py-3">
                Booking Date
                </th>
                <th scope="col" className="px-6 py-3">
                Booking Status
                </th>
                <th scope="col" className="px-6 py-3">
                Booking Id
                </th>
                <th scope="col" className="px-6 py-3">
                Checked-In Date
                </th>
                <th scope="col" className="px-6 py-3">
                Checked-Out Date
                </th>
                <th scope="col" className="px-6 py-3">
                Guest Number
                </th>
                <th scope="col" className="px-6 py-3">
                Room Type
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th>
            </tr>
            </thead>
        <tbody>
           {pendingBookingList?pendingBookingList.map((pending_booking,index)=>(
        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {pending_booking.hotel_name}
             </th>
             <td className="px-6 py-4">
             {pending_booking.guest_name}
             </td>
             <td className="px-6 py-4">
             {pending_booking.booking_date}
             </td>
             <td className="px-6 py-4">
             <span className="border rounded-md px-2 bg-sky-500 font-bold text-black">{pending_booking.booking_status}</span>
             </td>
             <td className="px-6 py-4">
             {pending_booking.booking_id}
             </td>
             <td className="px-6 py-4">
             {pending_booking.check_in_date?pending_booking.check_in_date:"00-00-00"}
             </td>
             <td className="px-6 py-4">
             {pending_booking.check_out_date?pending_booking.check_out_date:"00-00-00"}
             </td>
             <td className="px-6 py-4">
             {pending_booking.guest}
             </td>
             <td className="px-6 py-4">
             {pending_booking.room_type}
             </td>
             <td className="px-6 py-4">
                 <div className="flex gap-2">
                     <button onClick={(e)=>confirm_booking_handler(e,pending_booking.id)} className="border rounded-md px-2 py-1 justify-center w-20 flex bg-blue-500 font-bold">
                        {confirmIsLoading?(
                                <div class="border-gray-300 h-5 w-5 animate-spin rounded-full border-2 border-t-blue-600" />
                        ):("Confirm")}
                     </button>
                     <button onClick={(e)=>cancel_booking_handler(e,pending_booking.id)} className="border rounded-md px-2 py-1 w-20 flex justify-center bg-red-500 font-bold">
                        {cancelIsLoading?(
                                <div class="border-gray-300 h-5 w-5 animate-spin rounded-full border-2 border-t-blue-600" />
                        ):("Cancel")}
                     </button>
                 </div>
             </td>
         </tr>
           )):""}
            </tbody>
        </table>
        </div>
</div>
<TEChart
      type="bar"
      darkTicksColor="#ff0000"
      darkGridLinesColor="#ffff00"
      darkLabelColor="#ff00ff"
      data={{
        labels: bookingGraphData.map((booking)=>booking[0]),
        datasets: [
          {
            label: "Total Bookings",
            data:bookingGraphData.map((booking)=>booking[1])
          },
        ],
      }}
      
    />
</div>
    )
}


export default AdminPanel



