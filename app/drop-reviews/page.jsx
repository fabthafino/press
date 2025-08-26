"use server"
import React from 'react'
import DropReviews from './drop-reviews'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await auth()
  // console.log(session);

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <main>
      <DropReviews session={session} />
    </main>
  )
}

export default page
