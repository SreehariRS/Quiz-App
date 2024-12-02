"use client"
import { useQuizConfig } from '@/store'
import React from 'react'


export default function InputBox() {
    const addQuestionNumber = useQuizConfig((state:any)=>state.addQuestionNumber)

  return (
<><div className="relative">
<input 
  type="number" 
  defaultValue={10} 
  max={50} 
  min={10} 
  onChange={(e:React.FormEvent<HTMLInputElement>)=>addQuestionNumber(e.currentTarget.value ?? '')} 
  id="floating_outlined" 
  className="block px-4 pb-3 pt-4 w-full text-sm text-gray-700 bg-gradient-to-r from-indigo-100 to-indigo-50 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 peer"

  placeholder=" " 
/>
<label 
  htmlFor="floating_outlined" 
  className="absolute text-sm text-gray-600 duration-300 transform -translate-y-5 scale-90 top-3 z-10 origin-[0] bg-white px-3 py-1 rounded-md shadow-sm peer-focus:px-3 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-90 peer-focus:-translate-y-5 left-3">
  Number of questions
</label>






</div></>  )
}
