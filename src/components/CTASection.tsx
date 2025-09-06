import React from "react"
import Link from "next/link"

export const CTASection = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-300 mb-8 text-lg">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Залишити заявку
        </Link>
        <Link
          href="/posluhy"
          className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
        >
          ПОСЛУГИ
        </Link>
      </div>
    </div>
  )
}
