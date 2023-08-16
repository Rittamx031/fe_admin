import React, { useState } from 'react'
import TabShowTimes from './TabShowTimes'
import NavTime from '../../components/menu/NavTime'
//reudx -- truyền tham số ?
function ShowTimes() {
  const [date, setDate] = useState({});
  const udpatedate = (data) => {
    setDate(data);
  }
  return (
    <>
      <NavTime selectedDate={date} setSelectedDate={udpatedate} />
      <TabShowTimes />
    </>
  )
}

export default ShowTimes