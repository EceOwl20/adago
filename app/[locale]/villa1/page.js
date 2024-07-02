import React from 'react'
import RoomDetails from "@/app/[locale]/component/common/roomDetail"

import salon1 from "@/public/images/villalar/salon1.jpeg";
import salon2 from "@/public/images/villalar/salon2.jpeg";
import salon3 from "@/public/images/villalar/salon3.jpeg";
import salon4 from "@/public/images/villalar/salon4.jpeg";
import salon5 from "@/public/images/villalar/salon5.jpeg";
import salon6 from "@/public/images/villalar/salon6.jpeg";
import salon7 from "@/public/images/villalar/salon7.jpeg";
import salon8 from "@/public/images/villalar/salon8.jpeg";
import salon9 from "@/public/images/villalar/salon9.jpeg";

import bedroom from "@/public/images/villalar/yatakodası1.jpeg";
import bedroom2 from "@/public/images/villalar/yatakodası2.jpeg";
import bedroom3 from "@/public/images/villalar/yatakodası3.jpeg";
import bedroom4 from "@/public/images/villalar/yatakodası4.jpeg";
import bedroom5 from "@/public/images/villalar/yatakodası5.jpeg";
import bedroom6 from "@/public/images/villalar/yatakodası6.jpeg";
import bedroom7 from "@/public/images/villalar/yatakodası7.jpeg";
import bedroom8 from "@/public/images/villalar/yatakodası8.jpeg";
import bedroom9 from "@/public/images/villalar/yatakodası9.jpeg";
import bedroom10 from "@/public/images/villalar/yatakodası10.jpeg";
import bedroom11 from "@/public/images/villalar/yatakodası11.jpeg";
import bedroom12 from "@/public/images/villalar/yatakodası12.jpeg";
import bedroom13 from "@/public/images/villalar/yatakodası13.jpeg";
import bedroom14 from "@/public/images/villalar/yatakodası14.jpeg";

import tvRoom from "@/public/images/villalar/tvoda1.jpeg";
import tvRoom2 from "@/public/images/villalar/tvoda2.jpeg";
import tvRoom3 from "@/public/images/villalar/tvoda3.jpeg";
import tvRoom4 from "@/public/images/villalar/tvoda4.jpeg";
import tvRoom5 from "@/public/images/villalar/tvoda5.jpeg";
import tvRoom6 from "@/public/images/villalar/tvoda6.jpeg";
import tvRoom7 from "@/public/images/villalar/tvoda7.jpeg";

import wc from "@/public/images/villalar/tulavet1.jpeg";
import wc2 from "@/public/images/villalar/tulavet2.jpeg";
import wc3 from "@/public/images/villalar/tulavet3.jpeg";
import wc4 from "@/public/images/villalar/tulavet4.jpeg";
import wc5 from "@/public/images/villalar/tulavet5.jpeg";
import wc6 from "@/public/images/villalar/tulavet6.jpeg";
import wc7 from "@/public/images/villalar/tulavet7.jpeg";
import wc8 from "@/public/images/villalar/tulavet8.jpeg";
import wc9 from "@/public/images/villalar/tulavet9.jpeg";
import wc10 from "@/public/images/villalar/tulavet10.jpeg";

import room from "@/public/images/villalar/oda1.jpeg";
import room2 from "@/public/images/villalar/oda2.jpeg";
import room3 from "@/public/images/villalar/oda3.jpeg";
import room4 from "@/public/images/villalar/oda4.jpeg";

import hall from "@/public/images/villalar/hall1.jpeg";
import hall2 from "@/public/images/villalar/hall2.jpeg";
import hall3 from "@/public/images/villalar/hall3.jpeg";
import hall4 from "@/public/images/villalar/hall4.jpeg";

import aynaoda from "@/public/images/villalar/aynaoda1.jpeg";
import aynaoda2 from "@/public/images/villalar/aynaoda2.jpeg";
import aynaoda3 from "@/public/images/villalar/aynaoda3.jpeg";
import aynaoda4 from "@/public/images/villalar/aynaoda4.jpeg";
import aynaoda5 from "@/public/images/villalar/aynaoda5.jpeg";

const imagesBlueBedroom = [
  aynaoda,
  aynaoda2,
  aynaoda3,
  aynaoda4,
  aynaoda5,
];

const imagesHall ={
  hall,
  hall2,
  hall3,
  hall4,
}

const imagesRoom={
  room,
  room2,
  room3,
  room4,
}

const iamgesWc={
  wc,
  wc2,
  wc3,
  wc4,
  wc5,
  wc6,
  wc7,
  wc8,
  wc9,
  wc10,
}

const imagesTvRoom={
  tvRoom,
  tvRoom2,
  tvRoom3,
  tvRoom4,
  tvRoom5,
  tvRoom6,
  tvRoom7,
}

const imagesSalon={
  salon1,
  salon2,
  salon3,
  salon4,
  salon5,
  salon6,
  salon7,
  salon8,
  salon9,
}

const imagesBedroom={
  bedroom,
  bedroom2,
  bedroom3,
  bedroom4,
  bedroom5,
  bedroom6,
  bedroom7,
  bedroom8,
  bedroom9,
  bedroom10,
  bedroom11,
  bedroom12,
  bedroom13,
  bedroom14,
  
}

const images = Object.values(imagesBlueBedroom);

const page = () => {
  const roomHeader = "Yatak Odası";
  const roomText="Odalarımız geniş ferah ve son derece konforlu eşyalardan oluşmaktadır. Lorem ipsum dolor sit amet.";
  return (
    <div className='flex flex-col gap-20'>
        <RoomDetails images={images}/>
      

    </div>
  )
}

export default page