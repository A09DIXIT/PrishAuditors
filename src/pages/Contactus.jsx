import React from 'react'
import ContactForm from '../assets/components/ContactForm.component/ContactForm.component'

const Contactus = () => {
  return (
    <div className="pt-24 px-4"> {/* Padding from top and optional horizontal padding */}
      <div>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contactus
