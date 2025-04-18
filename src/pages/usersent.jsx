import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function usersent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All\n");
  const location = useLocation();
  const email = location.state?.email || localStorage.getItem("userEmail");
 
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Perform logout actions, like clearing session, localStorage, etc.
      navigate('/');
    };
    const handsen=()=>{
      navigate('/user');
    }
  const filters = ["All\n", "Infrastructure\n", "Health\n", "Education\n","Taxproblems\n"];
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/mes').then(res=>res.json()).then(data=>setdata(data)).catch(err=>console.log(err));
  })
  async function se(s) {
    const response = await axios.post("http://localhost:8081/cu", s);
    
  }
  return (
    <div className="p-2.5 w-full bg-white min-h-[screen] ">
    <div className="flex flex-col w-full bg-white shadow-sm h-[955px] max-w-[1371px] absolute inset-0 z-0 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1470&q=80')] before:bg-cover before:bg-center before:opacity-20 before:blur-sm before:animate-fadeIn before:z-[-1] ">
      <div className="flex gap-1 items-center p-2.5">
        <div className="flex gap-11 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
            alt=""
            className="w-[42px] h-[42px]"
          />
          <div className="text-base text-black">Sent</div>
          <div className="gap-2.5 text-base text-black">Response</div>
            <Link to="/user" className="gap-2.5 pl-2.5 text-base text-black">
              Send
            </Link>
           <Link to="/" className="gap-2.5 pl-2.5 text-base text-black">
                    Log out
                    </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end px-5 mt-5">
        <div className="flex gap-1 items-center px-1 py-0.5 rounded bg-zinc-950">
          

      {/* Dropdown Menu */}
      
      
         
        </div>
        <table className="w-full border-collapse border border-black bg-zinc-50">
            {/* Table Header */}
            <thead className="bg-gray-200 border-b border-black">
              <tr className="text-base text-black hover:bg-[#ffa200] transition duration-200">
                <th className="p-3 border border-black">User</th>
                <th className="p-3 border border-black">Context</th>
                <th className="p-3 border border-black">Status</th>
                <th className="p-3 border border-black">View</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.filter((item)=>item.username === email).length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="text-center border-b border-black hover:bg-[#f7ae30] transition duration-200">
                    {(selectedFilter==="All\n" || item.Category === selectedFilter)  && (
    <>
      <td className="p-3 border border-black ">{item.username}</td>
      <td className="p-3 border border-black">{item.Context || "N/A"}</td>
      <td className="p-3 border border-black">{(item.Status==='A')?"Approved":((item.Status==='R')?"Rejected":"Pending") || "N/A"}</td>
      <td className="p-3 border border-black">
        <Link to="/ussent" state={{ item }}>
          <button onClick={() => se(item)} className="px-4 py-2 bg-black text-white rounded-md">
            View
          </button>
        </Link>
      </td>
    </>
  )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-3 text-center border border-black text-gray-500">
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div> 
      </div>
    </div>
 
  )
}

export default usersent