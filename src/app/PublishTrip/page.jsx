"use client"
// import React from 'react'
// import styles from './page.module.css'
// import Navbar from '../Components/Navbar/Navbar'
// import Container from '../Components/Container/Container'
// import { DatePicker, Select } from 'antd';
// import moment from 'moment';
// import { UserOutlined } from '@ant-design/icons';

// const { Option } = Select;

// export default function PublishTrip() {
//   return (
//     <div>
//        <Navbar />
//        <div  className={styles.Ims}>
//         <Container>
//             <div>
//               <Select
//               className={styles.Input}
//               style={{ width: '100%',height: '100%', border: 'none', outline: 'none' }}
//               placeholder="Leaving from.."
//               value={leavingFrom}
//               onChange={(value) => handleSearchChange(value, 'leavingFrom')}
//               showSearch
//               allowClear
//               optionFilterProp="children"
//               filterOption={(input, option) =>
//                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//               }
//               required
//               >
//                 <Option value="baghdad">Baghdad</Option>
//                 <Option value="erbil">Erbil</Option>
//                 <Option value="basra">Basra</Option>
//                 <Option value="mosul">Mosul</Option>
//               {/* Add more options as needed */}
//               </Select>
//             </div>

//             <div>
//               <Select
//                 className={styles.Input}
//                 placeholder="Going To.."
//                 value={goingTo}
//                 onChange={(value) => handleSearchChange(value, 'goingTo')}
//                 showSearch
//                 allowClear
//                 optionFilterProp="children"
//                 filterOption={(input, option) =>
//                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
//                 style={{ width: '100%',height: '100%', }}
//                 required
//                 >
//                 <Option value="baghdad">Baghdad</Option>
//                 <Option value="erbil">Erbil</Option>
//                 <Option value="basra">Basra</Option>
//                 <Option value="mosul">Mosul</Option>
//               </Select>
//             </div>

//             <div>
//               <DatePicker
//                className={styles.Input}
//                style={{ width: '100%',height: '100%', }}
//                placeholder={'Today'}
//                value={searchDate ? moment(searchDate) : null}
//                onChange={(momentDate, dateString) =>
//                handleSearchChange(dateString, 'searchDate')}
//               />
//             </div>

//             <div className={styles.numberPassengersContainer}>
//               <div className={styles.iconPassengers}><UserOutlined /></div>
//               <input
//               className={styles.InputNum}
//               type="number"
//               min={1}
//               max={4}
//               value={numberPassengers}
//               name="numberPassengers"
//               onChange={(e) =>
//               handleSearchChange(e.target.value, 'numberPassengers')}
//               required
//               />
//             </div>

//             <button className={styles.PublishButton} onClick={onPuplish}>Puplish a ride</button>

//         </Container>
//        </div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../Components/Navbar/Navbar';
import Container from '../Components/Container/Container';
import { DatePicker, Select } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';
import Footer from '../Components/Footer/Footer';

const { Option } = Select;

export default function PublishTrip() {
  // State variables and their handlers
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [searchDate, setSearchDate] = useState(null);
  const [numberPassengers, setNumberPassengers] = useState(1);

  // Handler for input changes
  const handlePublishChange = (value, field) => {
    switch (field) {
      case 'leavingFrom':
        setLeavingFrom(value);
        break;
      case 'goingTo':
        setGoingTo(value);
        break;
      case 'searchDate':
        setSearchDate(value);
        break;
      case 'numberPassengers':
        setNumberPassengers(value);
        break;
      default:
        break;
    }
  };

  // Handler for publishing
  const handlePublish = () => {
    // Implement logic for publishing
    // You can use the state variables (leavingFrom, goingTo, searchDate, numberPassengers) here
  };

  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Main content */}
      <div className={styles.Ims}>
        <Container>
          <div className={styles.Titel}>
            <h1 className={styles.Titel}>
              Become a BlaBlaCar driver and save on travel costs by sharing your ride with passengers.
            </h1>
          </div>
          <form className={styles.Form} onSubmit={(e) => handlePublish(e)}>
            {/* Leaving From dropdown */}
            <div>
              <Select
                className={styles.Input}
                style={{ width: '100%', height: '100%', border: 'none', outline: 'none' }}
                placeholder="Leaving from.."
                value={leavingFrom}
                onChange={(value) => handlePublishChange(value, 'leavingFrom')}
                showSearch
                allowClear
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                required
              >
                {/* Options for Leaving From */}
                <Option value="baghdad">Baghdad</Option>
                <Option value="erbil">Erbil</Option>
                <Option value="basra">Basra</Option>
                <Option value="mosul">Mosul</Option>
                {/* Add more options as needed */}
              </Select>
            </div>

            {/* Going To dropdown */}
            <div>
              <Select
                className={styles.Input}
                placeholder="Going To.."
                value={goingTo}
                onChange={(value) => handlePublishChange(value, 'goingTo')}
                showSearch
                allowClear
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{ width: '100%', height: '100%' }}
                required
              >
                {/* Options for Going To */}
                <Option value="baghdad">Baghdad</Option>
                <Option value="erbil">Erbil</Option>
                <Option value="basra">Basra</Option>
                <Option value="mosul">Mosul</Option>
                {/* Add more options as needed */}
              </Select>
            </div>

            {/* Date Picker */}
            <div>
              <DatePicker
                className={styles.Input}
                style={{ width: '100%', height: '100%' }}
                placeholder={'Today'}
                value={searchDate ? moment(searchDate) : null}
                onChange={(momentDate, dateString) => handlePublishChange(dateString, 'searchDate')}
              />
            </div>

            {/* Number of Passengers input */}
            <div className={styles.numberPassengersContainer}>
              <div className={styles.iconPassengers}>
                <UserOutlined />
              </div>
              <input
                className={styles.InputNum}
                type="number"
                min={1}
                max={4}
                value={numberPassengers}
                name="numberPassengers"
                onChange={(e) => handlePublishChange(e.target.value, 'numberPassengers')}
                required
              />
            </div>

            {/* Publish button */}
            <button className={styles.PublishButton} onClick={handlePublish}>
              Publish a ride
            </button>
          </form>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}