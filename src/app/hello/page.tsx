import { GET } from '@/app/hello/route'
import React from 'react'

const Hello = () => {
  const res = GET();
  console.log('res', res);
  return (
    <div>
      {JSON.stringify(res)}
    </div>
  )
}

export default Hello