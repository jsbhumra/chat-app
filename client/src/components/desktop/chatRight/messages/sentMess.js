import React from 'react'

function SentMess({ details }) {
  return (
    <div className='flex justify-end'>
        <div className={`relative rounded-lg max-w-[60%] px-3 py-1 mx-5 my-0 w-auto outline-1 outline-dashed -outline-offset-2`} style={{ backgroundColor: details.textColor }}>
            <div>{details.text}</div>
            {/* <div className='absolute w-0 h-0 border-t-[15px] border-t-[#ccedcd] border-r-[15px] border-r-transparent -right-[9px] top-0'></div>
            <div className='absolute w-[11px] h-[10px] border-t border-dashed border-t-black border-r border-r-transparent -right-[5.5px] top-[1px] z-[101]'></div>
            <div className='absolute rounded-tl-lg w-[15px] h-[5px] border-t border-dashed border-t-black border-r border-r-transparent -right-[10.5px] top-[4.5px] z-[101] -rotate-45'></div> */}
        </div>
    </div>
  )
}

export default SentMess