import React from 'react'
import Link from "next/link"

const MainPage = () => {
  return (
    <div>
        <h1 className="text-3xl">Hello and Welcome</h1>
        <Link href="/properties">Show Properties</Link>
    </div>
  )
}

export default MainPage