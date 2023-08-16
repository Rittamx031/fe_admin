import React, { useEffect, useState } from 'react';
import convertdata from '../../utils/convertdata';
import '../../assets/css/navfilm.css'
function NavTime({ selectedDate, setSelectedDate }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 7);

    const newDates = [];
    while (currentDate <= futureDate) {
      newDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDates(newDates);
  }, []);

  return (
    <div className='container navfilm border-bottom'>
      <div className="row">
        {dates.map((date, index) => (
          <div className={`col-2 mb-2 navdate text-center ${selectedDate === date ? 'selected' : ''}`}>
            <button className='w-100 '
              onClick={() => setSelectedDate(date)}
              key={index}
            >
              {convertdata.dateInNav(date)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavTime;
