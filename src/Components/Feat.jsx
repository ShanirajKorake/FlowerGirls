import React from 'react'
import truck from '../assets/truck.svg'
import money from '../assets/money.svg'
import gift  from '../assets/gift.svg'
import payment from '../assets/payment.svg'

export default function Feat() {
  return (
    <div className="w-full px-12 py-6 bg-gray-300">
      <div className="grid grid-cols-4 gap-2 px-10">
        <div className="bg-white rounded-lg mx-2 flex py-2 justify-itemes-center itemes-center w-full">
          <div className=" flex flex-col items-center justify-center w-1/3">
            <img src={truck} alt="Profile" className="w-14 h-14 hover:opacity-80" />
          </div>
          <div className="w-2/3">
            <p className="font-bold text-xl">Free Shipping</p>
            <p className="text-lg text-gray-600">On all Orders</p>
          </div>
        </div>
        <div className="bg-white rounded-lg mx-2 flex py-2 justify-itemes-center itemes-center w-full">
          <div className=" flex flex-col items-center justify-center w-1/3">
            <img src={money} alt="Profile" className="w-14 h-14 hover:opacity-80" />
          </div>
          <div className="w-2/3">
            <p className="font-bold text-xl">10 Days Returns</p>
            <p className="text-lg text-gray-600">Moneyback Guarantee</p>
          </div>
        </div>
        <div className="bg-white rounded-lg mx-2 flex py-2 justify-itemes-center itemes-center w-full">
          <div className=" flex flex-col items-center justify-center w-1/3">
            <img src={gift} alt="Profile" className="w-14 h-14 hover:opacity-80" />
          </div>
          <div className="w-2/3">
            <p className="font-bold text-xl">Offer and Gift</p>
            <p className="text-lg text-gray-600">On all Orders</p>
          </div>
        </div>
        <div className="bg-white rounded-lg mx-2 flex py-2 justify-itemes-center itemes-center w-full">
          <div className=" flex flex-col items-center justify-center w-1/3">
            <img src={payment} alt="Profile" className="w-14 h-14 hover:opacity-80" />
          </div>
          <div className="w-2/3">
            <p className="font-bold text-xl">Secure Payment</p>
            <p className="text-lg text-gray-600">Protected By UPI</p>
          </div>
        </div>

      </div>
    </div>
  )
}

