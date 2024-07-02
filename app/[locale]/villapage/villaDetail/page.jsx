import React from 'react';
import { MdOutlinePool } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { RiHome3Fill,RiArmchairFill } from "react-icons/ri";
import { PiElevatorFill } from "react-icons/pi";
import { GiHomeGarage } from "react-icons/gi";
import ContactEmail from '@/app/component/common/contactEmail';
import Room from '@/app/component/common/room';
import RoomDetail from '@/app/component/common/roomDetail';
import aynaoda from "@/public/images/villalar/aynaoda1.jpeg";
import aynaoda2 from "@/public/images/villalar/aynaoda2.jpeg";
import aynaoda3 from "@/public/images/villalar/aynaoda3.jpeg";
import aynaoda4 from "@/public/images/villalar/aynaoda4.jpeg";
import aynaoda5 from "@/public/images/villalar/aynaoda5.jpeg";

const images =[
  aynaoda,aynaoda2,aynaoda3,aynaoda4,aynaoda5,aynaoda
];
//Odalarımız geniş ferah ve son derece konforlu eşyalardan oluşmaktadır. Lorem ipsum dolor sit amet.

const page = () => {
  const roomName="Yatak Odası";
  const roomDetail="Odalarımız geniş ferah ve son derece konforlu eşyalardan oluşmaktadır. Lorem ipsum dolor sit amet.";
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <div className='flex flex-col  w-full'>
      <RoomDetail roomName={roomName} roomDetail={roomDetail} images={images}/>
      </div>
    </div>
  )
}

export default page
