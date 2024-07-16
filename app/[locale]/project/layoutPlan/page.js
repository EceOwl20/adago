import React from 'react';
import LayoutPlan from '../../component/common/LayoutPlan';

async function getStrapiData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function page (){
  return (
    <div className='flex'>
      <LayoutPlan/>
    </div>
  )
}


