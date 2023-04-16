import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useState } from 'react';
export const TarjetaMaterial = ({material, mostrarGaleriaHandler}) =>{
    
    return (
        <div className=' w-1/3 h-2/3 mx-15 m-auto p-5'>
            <div className='flex items-center justify-center'>
                <Image src={material.icono} width={50} height={50} className='' alt=''/>
            </div>
            <div className='flex items-center  justify-center m-2 font-bold'>
                <h1>{material.nombre}</h1>
            </div>
            <div className='h-9 p-3 m-2 flex items-center justify-center border-2  rounded self-center border-blue-500 bg-blue-500 hover:bg-lime-500 hover:border-lime-500'>
                <button className='rounded-lg text-stone-950 block font-bmw font-semibold'
                onClick={() => mostrarGaleriaHandler(material)}
                >
                    DETALLES
                </button>
            </div>
        </div>
    )
}