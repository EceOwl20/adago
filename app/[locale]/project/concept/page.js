import React from 'react'
import Concept from '../../component/common/Concept'

async function getStrapiData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function page (){
  return (
    <div>
        <Concept/>
    </div>
  )
}


