import React from 'react';
import FloorPlan from '../../component/common/FloorPlan';

async function getStrapiData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function page (){
  return (
    <div className='flex'>
      <FloorPlan/>
    </div>
  )
}


