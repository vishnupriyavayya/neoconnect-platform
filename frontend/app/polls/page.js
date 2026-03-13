"use client";
import { useEffect, useState } from "react";

export default function Polls(){

 const [polls,setPolls] = useState([]);

 useEffect(()=>{
  fetch("https://neoconnect-api-rfzz.onrender.com/api/polls")
   .then(res=>res.json())
   .then(data=>setPolls(data));
 },[]);

 const vote = async(id,index)=>{
  await fetch("https://neoconnect-api-rfzz.onrender.com/api/polls/vote/"+id,{
   method:"POST",
   headers:{
    "Content-Type":"application/json"
   },
   body: JSON.stringify({
    optionIndex:index,
    userId:"123"
   })
  });

  alert("Vote submitted");
 };

 return(
  <div className="p-10">
   <h1 className="text-3xl font-bold mb-6">
    Staff Polls
   </h1>

   {polls.map(p=>(
    <div key={p._id} className="border p-4 mb-4">
      <h2 className="font-bold mb-2">{p.question}</h2>

      {p.options.map((o,i)=>(
       <button
        key={i}
        onClick={()=>vote(p._id,i)}
        className="block bg-blue-600 text-white px-3 py-1 mb-2 rounded"
       >
        {o}
       </button>
      ))}

    </div>
   ))}

  </div>
 );
}