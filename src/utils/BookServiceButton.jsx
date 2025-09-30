import Link from 'next/link'
import React from 'react'

const BookServiceButton = ({ bgColor = "bg-primary" }) => {
    return (
        <div className="flex justify-center">
            <Link
                href="/book-service"
                className={`inline-flex text-sm sm:text-lg md:text-xl items-center justify-center px-4 lg:px-5 py-3  text-white font-semibold rounded-lg lg:rounded-xl transition-colors shadow-lg ${bgColor} hover:${bgColor}/90`}>
                Book Your Service
            </Link>
        </div>
    )
}

export default BookServiceButton