"use client"
// import React, { useState } from 'react';
// import styles from './SearchForm.module.css';

// export default function SearchForm() {
//   const [formData, setFormData] = useState({
//     fromLocation: '',
//     to: '',
//     date: '',
//     passenger: 1,
//   });

//   const weekFormat = 'MM/DD';

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { fromLocation, to, date, passenger } = formData;
//     console.log('From:', fromLocation);
//     console.log('To:', to);
//     console.log('Date:', date);
//     console.log('Passengers:', passenger);
//   };

//   return (
//     <form className={styles.SearchForm} onSubmit={onSubmit}>
//       <input
//         type="text"
//         placeholder="Leaving from.."
//         className={styles.SearchInput}
//         name="fromLocation"
//         value={formData.fromLocation}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         placeholder="Going to.."
//         className={styles.SearchInput}
//         name="to"
//         value={formData.to}
//         onChange={handleChange}
//       />
//       <input
//         type="date"
//         placeholder="Today"
//         className={styles.SearchInput}
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         placeholder="Passengers"
//         className={styles.SearchInput}
//         name="passenger"
//         value={formData.passenger}
//         onChange={handleChange}
//       />

//       <button className={styles.SearchButton} type="submit">
//         Search
//       </button>
//     </form>
//   );
// }


// import React, { useState } from 'react';
// import styles from './SearchForm.module.css';
// import TextInput from '../TextInput/TextInput';
// import PassengerSelector from '../PassengerSelector/PassengerSelector';
// // import DatePicker from '../DatePicker/DatePicker';
// import { DatePicker } from 'antd';

// const SearchForm = () => {
//   const [formData, setFormData] = useState({
//     fromLocation: '',
//     to: '',
//     date: '',
//     passenger: 1,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handlePassengerChange = (count) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       passenger: count,
//     }));
//   };

//   // const handleDateChange = (date) => {
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     date: date,
//   //   }));
//   // };
//   const onChange = (date, dateString) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       date: dateString,
//     }));
//   };
  

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { fromLocation, to, date, passenger } = formData;
//     console.log('From:', fromLocation);
//     console.log('To:', to);
//     console.log('Date:', date);
//     console.log(date, dateString);
//     console.log('Passengers:', passenger);
//   };

//   return (
//     <form className={styles.SearchForm} onSubmit={onSubmit}>
//       <TextInput
//         placeholder="Leaving from.."
//         name="fromLocation"
//         value={formData.fromLocation}
//         onChange={handleChange}
//       />
//       <TextInput
//         placeholder="Going to.."
//         name="to"
//         value={formData.to}
//         onChange={handleChange}
//       />
//       {/* <DatePicker
//         selectedDate={formData.date}
//         onDateChange={handleDateChange}
//       /> */}
//       <DatePicker onChange={onChange} format={"MMM DD"} />
//       <PassengerSelector
//         className={styles.PassengerSelector}
//         passengerCount={formData.passenger}
//         onIncrement={() => handlePassengerChange(formData.passenger + 1)}
//         onDecrement={() =>
//           handlePassengerChange(
//             formData.passenger > 1 ? formData.passenger - 1 : 1
//           )
//         }
//       />

//       <button className={styles.SearchButton} type="submit">
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchForm;

"use client"
import React from 'react';
import styles from './SearchForm.module.css';
import { DatePicker, Select } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function SearchForm({
  leavingFrom,
  goingTo,
  searchDate,
  numberPassengers,
  onSearchFormChange,
  onSearch,
}) {
  const handleSearchChange = (value, name) => {
    onSearchFormChange({ target: { name, value } });
  };

  return (
    <div className={styles.SearchForm}>
        <div>
          <Select
              className={styles.Input}
              style={{ width: '100%',height: '100%', border: 'none', outline: 'none' }}
              placeholder="Leaving from.."
              value={leavingFrom}
              onChange={(value) => handleSearchChange(value, 'leavingFrom')}
              showSearch
              allowClear
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              required
              >
              <Option value="baghdad">Baghdad</Option>
              <Option value="erbil">Erbil</Option>
              <Option value="basra">Basra</Option>
              <Option value="mosul">Mosul</Option>
              {/* Add more options as needed */}
          </Select>
        </div>

        <div>
          <Select
            className={styles.Input}
            placeholder="Going To.."
            value={goingTo}
            onChange={(value) => handleSearchChange(value, 'goingTo')}
            showSearch
            allowClear
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: '100%',height: '100%', }}
            required
          >
            <Option value="baghdad">Baghdad</Option>
            <Option value="erbil">Erbil</Option>
            <Option value="basra">Basra</Option>
            <Option value="mosul">Mosul</Option>
            {/* Add more options as needed */}
          </Select>
        </div>

        <div>
          <DatePicker
            className={styles.Input}
            style={{ width: '100%',height: '100%', }}
            placeholder={'Today'}
            value={searchDate ? moment(searchDate) : null}
            onChange={(momentDate, dateString) =>
              handleSearchChange(dateString, 'searchDate')
            }
          />
        </div>

        <div className={styles.numberPassengersContainer}>
          <div className={styles.iconPassengers}><UserOutlined /></div>
          <input
            className={styles.InputNum}
            type="number"
            min={1}
            max={4}
            value={numberPassengers}
            name="numberPassengers"
            onChange={(e) =>
              handleSearchChange(e.target.value, 'numberPassengers')
            }
            required
          />
        </div>

        <button className={styles.SearchButton} onClick={onSearch}>
          Search
        </button>
    </div>
  );
}