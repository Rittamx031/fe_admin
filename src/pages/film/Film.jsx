import React, { useState } from 'react'
import NavTime from '../../components/menu/NavTime'
import TabFilm from './TabFilm'
const Film = () => {
  const [date, setDate] = useState({});
  const udpatedate = (data) => {
    setDate(data);
  }
  return (
    <>
      <NavTime selectedDate={date} setSelectedDate={udpatedate} />
      <TabFilm datas={date} />
    </>
  )
}

export default Film
