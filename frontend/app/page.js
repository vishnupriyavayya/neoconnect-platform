"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [success,setSuccess] = useState("");

  const submitCase = async () => {
    const res = await fetch("https://neoconnect-api-rfzz.onrender.com/api/cases",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        title,
        description,
        category:"Facilities",
        department:"IT",
        location:"Office",
        severity:"High"
      })
    });

    const data = await res.json();
    setSuccess("Case submitted! Tracking ID: " + data.trackingID);

    setTitle("");
    setDescription("");
  };

  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.5 }}
      className="p-10 max-w-xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6">
        NeoConnect Complaint Portal
      </h1>

      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3 rounded"
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <motion.button
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        onClick={submitCase}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit Complaint
      </motion.button>

      {success && (
        <motion.div
          initial={{ scale:0 }}
          animate={{ scale:1 }}
          className="mt-4 bg-green-200 text-green-800 p-3 rounded"
        >
          {success}
        </motion.div>
      )}
    </motion.div>
  );
}