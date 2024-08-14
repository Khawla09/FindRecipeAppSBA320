import React from 'react'

function Footer() {

    const footerStyle = {
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: '10px',
        
       
        bottom: '0',
        width: '100%',
        borderTop: '1px solid #ddd',
      };
  return (
    <footer style={footerStyle}>
        <p>&copy; 2024 Find Your Recipe App. All rights reserved.</p>
      </footer>
  )
}

export default Footer