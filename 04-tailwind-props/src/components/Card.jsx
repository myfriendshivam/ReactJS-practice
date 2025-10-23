import React from 'react'

// function Card(props) {
function Card({username, btnText= "vist me"}) {
    // console.log("props:", props);
    // console.log(props.username);
    console.log(username);
    
    
    
  return (
    <div className="relative grid h-110 max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 h-full w-full bg-linear-to-t from-black/80 via-black/50"></div>
        </div>

        <div className="relative text-center p-6 px-6 py-14 md:px-12">
          <h2 className='text-lg font-semibold text-white'>{username}</h2>
          <p className='mt-2 text-sm text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore explicabo nihil tempore doloremque, minima fugiat tenetur pariatur animi impedit!
          </p>
          <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-whitej'>
            {/* {btnText || "vist me"} → */}
            {btnText} →
          </button>

        </div>
      </div>
  )
}

export default Card