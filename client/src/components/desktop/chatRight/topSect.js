import React from 'react'
import styles from '../../../App.css'

function TopSect() {
  return (
    <div className='flex-col grow h-auto w-full'>
        <div className='flex justify-end'>
            <div className="relative rounded-lg rounded-tr-none bg-[#edcce7] max-w-[60%] px-3 py-1 mx-5 my-2 w-auto outline-1 outline-dashed -outline-offset-2">
                <div>Hello This is Jagjit Singh Bhumra, live from ChatApp! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore dolor quos ipsum quas quaerat recusandae. Tempore nulla, minima laudantium adipisci veniam aliquam explicabo corporis, nemo eos modi molestiae maiores?</div>
                <div className='absolute w-0 h-0 border-t-[15px] border-t-[#edcce7] border-r-[15px] border-r-transparent -right-[9px] top-0'></div>
                <div className='absolute w-[11px] h-[10px] border-t border-dashed border-t-black border-r border-r-transparent -right-[5.5px] top-[1px] z-[101]'></div>
                <div className='absolute rounded-tl-lg w-[15px] h-[5px] border-t border-dashed border-t-black border-r border-r-transparent -right-[10.5px] top-[4.5px] z-[101] -rotate-45'></div>
            </div>
        </div>
        <div className='flex justify-start'>
            <div className="relative rounded-lg rounded-tl-none bg-[#ccedcd] max-w-[60%] px-3 py-1 ml-10 my-2 w-auto outline-1 outline-dashed -outline-offset-2">
                <div className='underline text-sm font-semibold'>jsbhumra:</div>
                <div>Hello This is Jagjit Singh Bhumra, live from ChatApp! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore dolor quos ipsum quas quaerat recusandae. Tempore nulla, minima laudantium adipisci veniam aliquam explicabo corporis, nemo eos modi molestiae maiores?</div>
                <div className='absolute w-0 h-0 border-t-[15px] border-t-[#ccedcd] border-l-[15px] border-l-transparent -left-[9px] top-0'></div>
                <div className='absolute w-[11px] h-[10px] border-t border-dashed border-t-black border-l border-l-transparent -left-[5.5px] top-[1px] z-[101]'></div>
                <div className='absolute rounded-tr-lg w-[13.5px] h-[5px] border-t border-dashed border-t-black border-l-0 border-l-transparent -left-[9px] top-[5px] z-[101] rotate-45'></div>
                <div className='absolute rounded-full -left-[35px] top-[2.5px] w-[30px] h-[30px]'>
                    <img src="./avatars/avocado.svg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSect