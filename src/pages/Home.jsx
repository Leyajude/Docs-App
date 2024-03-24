import React from 'react'
import Document from './Document'


function Home() {
  return (
    <>
           <div className='container'>
           <h1 style={{textAlign:'center',marginTop:'200px',color:'black',fontSize:'70px', }}>
        DOCS APP
    </h1>
           </div>

<Document/>

    </>
  )
}

export default Home