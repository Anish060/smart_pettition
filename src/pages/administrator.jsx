import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
export default function administrator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All\n");

  const filters = ["All\n", "Infrastructure\n", "Health\n", "Education\n","Taxproblems\n"];
  const [data,setdata]=useState([])
  const [p,setP]=useState(0);
  const [d,setD]=useState();
  const[s,setS]=useState('');
  const hview=(e)=>{
    setD(e);
    setP(1);
  }
  useEffect(()=>{
    fetch('http://localhost:8081/mes').then(res=>res.json()).then(data=>setdata(data)).catch(err=>console.log(err));
  })
  const handleA = async (e) => {
    const { ID } = e; // ✅ Extract ID correctly
     // ✅ Ensure correct keys
    
    try {
        const response = await fetch("http://localhost:8081/senA", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ID,status:'A' }),
        });

        const result = await response.json();
        console.log("Server response:", result); // ✅ Debugging

        if (response.ok) {
            alert("Successfully approved the case");
            setTimeout(fetchData, 500); // ✅ Small delay before fetching updated data
            
        } else {
            console.error("Failed to update case:", result.error);
        }
        
    } catch (error) {
        console.error("Error during submission:", error);
    }
    setP(0);
    //navigate("/dashboardl",{state:{email}});
        
};
const handleR = async (e) => {
  const { ID } = e; // ✅ Extract ID correctly
   // ✅ Ensure correct keys
  
  try {
      const response = await fetch("http://localhost:8081/senR", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ID,status:'R' }),
      });

      const result = await response.json();
      console.log("Server response:", result); // ✅ Debugging

      if (response.ok) {
          alert("Successfully approved the case");
          setTimeout(fetchData, 500); // ✅ Small delay before fetching updated data
          
      } else {
          console.error("Failed to update case:", result.error);
      }
      
  } catch (error) {
      console.error("Error during submission:", error);
  }
  setP(0);
  //navigate("/dashboardl",{state:{email}});
      
};
const hr=()=>{
 setP(0);
}
  return (
    <div className="p-2.5 w-full bg-white min-h-[screen] ">
    <div className="flex flex-col w-full bg-white shadow-sm h-[955px] max-w-[1371px] p-2.5 w-full bg-white min-h-[screen] absolute inset-0 z-0 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1470&q=80')] before:bg-cover before:bg-center before:opacity-20 before:blur-sm before:animate-fadeIn before:z-[-1] ">
      <div className="flex gap-1 items-center p-2.5">
        <div className="flex gap-11 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/223f4f43b00bf6d9de1545efb7107a8b5ae7317d"
            alt=""
            className="w-[42px] h-[42px]"
          />
          <div className="text-base text-black">Sent</div>
          <div className="gap-2.5 text-base text-black">Response</div>
          
          <Link to="/">
          <div className="gap-2.5 pl-2.5 text-base text-black">Log out</div>
          </Link>
        </div>
        
      </div>
      <div className="flex flex-col gap-4 items-end px-5 mt-5">
        <div className="flex gap-1 items-center px-1 py-0.5 rounded bg-zinc-950">
           <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-zinc-950 text-white rounded"
      >
        Filter
        
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-lg">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`block w-full px-4 py-2 text-left hover:bg-gray-200 ${
                selectedFilter === filter ? "bg-gray-300 font-bold" : ""
              }`}
              onClick={() => {
                setSelectedFilter(filter);
                setIsOpen(false);
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
      
          <div>
            
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"18:1557\" layer-name=\"arrow_drop_down\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[24px] h-[24px]\"> <path d=\"M12 15L7 10H17L12 15Z\" fill=\"#FEF7FF\"></path> </svg>",
              }}
            />
          </div>
        </div>
        
        {(p===0)&&(
        <table className="w-full border-collapse border border-black bg-zinc-50">
            {/* Table Header */}
            <thead className="bg-gray-200 border-b border-black">
              <tr className="text-base text-black hover:bg-[#ffa200] transition duration-200">
                <th className="p-3 border border-black">User</th>
                <th className="p-3 border border-black">Context</th>
                <th className="p-3 border border-black">Status</th>
                <th className="p-3 border border-black">Sentimental analysis</th>
                <th className="p-3 border border-black">View</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="text-center border-b border-black hover:bg-[#f7ae30] transition duration-200">
                    {(selectedFilter==="All\n" || item.Category === selectedFilter)  && (
    <>
      <td className="p-3 border border-black">{item.username || "N/A"}</td>
      <td className="p-3 border border-black">{item.Context || "N/A"}</td>
      <td className="p-3 border border-black">{(item.Status==='A')?"Approved":(item.Status==="R")?"Rejected":"Pending" || "N/A"}</td>
      <td className="p-3 border border-black">{item.emo_val || "N/A"}</td>
      <td className="p-3 border border-black">
        
          <button onClick={() => hview(item)} className="px-4 py-2 bg-black text-white rounded-md">
            View
          </button>
        
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
          </table>)
}
         
        </div>
        {(p === 1) && (
      <div className="flex justify-center items-center min-h-screen p-8">
        <div className="flex overflow-hidden flex-col items-start self-start px-10 py-8 w-full rounded-lg border border-black border-solid max-w-[502px] shadow-lg bg-white">
          <div className="text-lg font-bold">User Name: {d.username}</div>
          <div className="mt-4 text-lg font-semibold">Context: {d.Context}</div>
          <div className="mt-6 font-semibold">Description:</div>
          <textarea className="overflow-hidden px-3.5 pt-3.5 pb-20 mt-3.5 border border-black shadow w-full resize-none bg-white" value={d.Issue || ""} readOnly />
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 text-white bg-black rounded-lg" onClick={hr}>Back</button>
            <button className="px-6 py-3 text-black bg-[#39ff14] rounded-lg" onClick={() => handleA({ ID: d.ID })}>Approve</button>
            <button className="px-6 py-3 text-black bg-[#fc1515] rounded-lg" onClick={() => handleR({ ID: d.ID })}>Reject</button>
          </div>
        </div>
      </div>
    )} 
      </div>
    </div>
 
  )
}
