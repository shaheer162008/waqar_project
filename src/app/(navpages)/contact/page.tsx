import { Breadcrumb } from '@/components/Breadcrumb'
import ContactPage from '@/components/contact-us'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us | Sayyid & Shaykh",
  description: "Looking for  services in Pakistan or globally? Sayyid & Shaykh Advocates provide expert legal solutions in 2025."
};

const page = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen ">
        <div className='p-4'>

    <Breadcrumb
                items={[
                    { label: "Sayyid & shaykh", href: "/" },
                    { label: "Contact" },
                ]}
                />
                </div>
    <div className='className="py-16 px-4 md:px-8 lg:px-16 bg-blue-500 text-white "'>

    <ContactPage/>
    </div>
    </div>
    </>
  )
}

export default page