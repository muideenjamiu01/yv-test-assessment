import React from 'react'
import { getInvoices } from './hooks/useInvoice'

const page = () => {
 console.log(getInvoices())
 

  return (
    <div className="py-10 md:px-8 h-screen">
      Invoice
    </div>
  )
}

export default page