"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <h1 className="text-xl font-bold">
        NeoConnect
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6">

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/">Submit</Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/dashboard">Dashboard</Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/polls">Polls</Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/analytics">Analytics</Link>
        </motion.div>

      </div>
    </div>
  );
}