"use client";
import { useEffect, useState } from "react";

export default function Analytics(){

 const [data,setData] = useState([]);

 useEffect(()=>{
  fetch("http://localhost:5000/api/analytics/departments")
   .then(res=>res.json())
   .then(data=>setData(data));
 },[]);

 return(
  <div className="p-10">
   <h1 className="text-3xl font-bold mb-6">
    Analytics Dashboard
   </h1>

   {data.map(d=>(
    <div key={d._id} className="border p-4 mb-3">
      <h2 className="font-bold">
        Department: {d._id}
      </h2>
      <p>Cases: {d.count}</p>
    </div>
   ))}
  </div>
 );
}