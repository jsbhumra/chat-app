import React from 'react'

function BottomSect() {
  return (
    <div className='h-[45px] w-full border-2 border-[#b2b2b2] rounded-full flex pl-5'>
        <div className='grow h-full'></div>
        <div className='h-[2/3] w-[1px] bg-[#bebebe]'></div>
        <div className='relative h-full w-[80px] text-center mx-4'><span className='-mt-[1px] text-[#4e4e4e] font-bold text-lg absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Send</span></div>
    </div>
  )
}

export default BottomSect