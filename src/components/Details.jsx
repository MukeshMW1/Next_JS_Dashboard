'use client'
import React from 'react'
import { info } from '@/utils/info'
import { Button } from '../app/MTailwind'



export const Details = () => {


    return (
        <div>
            {info.map((detail) => {
                return (
                    <div>

                    <div className='mt-[40px] mb-[50px] flex justify-between content-center first-line:items-center'>

                        <div className='flex gap-4 justify-center content-center items-center max-w-[200px]'>
                            <img src={detail.img} height={30} width={30} />
                            <h1> {detail.description}</h1>
                        </div>


                        <div className='flex gap-[40px] justify-between content-center items-center max-w-[600px]'>

                            <div className="flex gap-4  items-center  place-items-center                            ">

                                <img src={detail.countImg} alt="" height={30} width={30} />
                                <h1 className='text-[11px] text-gray-400 '>{detail.country}</h1>
                            </div>


                            <h2 className=' text-[11px] text-gray-400'>{detail.sessioin}</h2>


                            <Button className='text-[11px]'>Delete</Button>
                        </div  >
                    </div>
                        <hr className="my-[6px] h-[4px]" />
                    </div>


                )
            })}


        </div>


    )
}