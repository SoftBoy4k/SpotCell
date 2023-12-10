import React from 'react'
import BookingHeader from '../components/BookingHeader'
import BookingFooter from '../components/BookingFooter'
import BookingContent from '../components/BookingContent'

const BookingPage = () => {
  return (
    <div style={{ backgroundColor: '#D8E6EE', height: '100vh', paddingBottom: '100px' }}>
        <BookingHeader/>
        <BookingContent/>
        <BookingFooter/>
    </div>
  )
}

export default BookingPage