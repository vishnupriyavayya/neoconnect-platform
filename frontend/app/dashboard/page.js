"use client";
import { useEffect, useState } from "react";

export default function Dashboard(){

 const [cases,setCases] = useState([]);

 useEffect(()=>{
  fetch("https://neoconnect-api-rfzz.onrender.com/api/cases")
   .then(res=>res.json())
   .then(data=>setCases(data));
 },[]);

 return(
  <div className="p-10">
   <h1 className="text-3xl font-bold mb-6">
    Case Dashboard
   </h1>

   {cases.map(c=>(
    <div key={c._id} className="border p-4 mb-3">
      <h2 className="font-bold">{c.title}</h2>
      <p>Status: {c.status}</p>
      <p>Tracking ID: {c.trackingID}</p>
    </div>
   ))}
  </div>
 );
}