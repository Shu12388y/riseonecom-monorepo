import React from 'react'
import  {SignedIn,UserButton} from "@clerk/nextjs"


function page() {
  return (
    <div>
        <h1>Dashboard</h1>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
  )
}

export default page