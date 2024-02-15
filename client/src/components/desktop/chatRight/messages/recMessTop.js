import React from 'react'

function RecMessTop({ details}) {
  return (
    <div className='flex justify-start'>
        <div className="relative rounded-lg rounded-tl-none bg-[#edcce7] max-w-[60%] px-3 py-1 ml-10 mt-2 w-auto outline-1 outline-dashed -outline-offset-2">
            <div className='underline text-sm font-semibold'>{details.username}:</div>
            <div>{details.text}</div>
            <div className='absolute w-0 h-0 border-t-[15px] border-t-[#edcce7] border-l-[15px] border-l-transparent -left-[9px] top-0'></div>
            <div className='absolute w-[11px] h-[10px] border-t border-dashed border-t-black border-l border-l-transparent -left-[5.5px] top-[1px] z-[101]'></div>
            <div className='absolute rounded-tr-lg w-[13.5px] h-[5px] border-t border-dashed border-t-black border-l-0 border-l-transparent -left-[9px] top-[5px] z-[101] rotate-45'></div>
            <div className='absolute rounded-full -left-[35px] top-[2.5px] w-[30px] h-[30px]'>
                <img src={`./avatars/${details.avatar}`} />
            </div>
        </div>
    </div>
  )
}

export default RecMessTop