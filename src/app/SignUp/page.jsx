"use client"
// import React from 'react';
// import styles from './page.module.css';
// import { useState } from 'react';
// import Navbar from '../Components/Navbar/Navbar';
// import Container from '../Components/Container/Container';

// export default function SignUp() {


//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [gender, setGender] = useState('');
//   const [placeOfResidence, setPlaceOfResidence] = useState('');


//   const handleSignUp = (e) => {
//     e.preventDefault();

//     // Perform validation or send data to your backend for further processing
//     console.log({
//       firstName,
//       lastName,
//       email,
//       password,
//       phoneNumber,
//       birthday,
//       gender,
//       placeOfResidence,
//     });

//     // Reset the form fields
//     resetForm();
//   };

//   const resetForm = () => {
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setPassword('');
//     setPhoneNumber('');
//     setBirthday('');
//     setGender('');
//     setPlaceOfResidence('');
//   };


//   return (
//     <div>
//       <Navbar></Navbar>
//       <Container>
//         <div className={styles.SignUp}>
//           <h2 className={styles.Title}>Sign Up</h2>
//           <form onSubmit={handleSignUp} className={styles.Form}>
//             <div className={styles.ContainerInput}>
//               <label className={styles.Label}>
//                 First Name:
//                 <input className={styles.Input} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//               </label>
//             </div>

//             <div className={styles.ContainerInput}>
//               <label className={styles.Label}>
//                 Last Name:
//                 <input  className={styles.Input} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//               </label>
//             </div>

//             <div className={styles.ContainerInput}>
//               <label className={styles.Label}>
//                 Email:
//                 <input  className={styles.Input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               </label>
//             </div>

//             <div className={styles.ContainerInput}>
//               <label className={styles.Label}>
//                 Password:
//                 <input  className={styles.Input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//               </label>
//             </div>

//             <div className={styles.ContainerInput}>
//               <label className={styles.Label}>
//                 Phone Number:
//                 <input  className={styles.Input} type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
//               </label>
//             </div>

//             <div className={styles.ContainerInput}>
//               <div className={styles.ContainerBirthday}>
//                 <div>
//                   <label className={styles.Label}>
//                     Birthday:
//                     <input  className={styles.Input} type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
//                   </label>
//                 </div>
//                 <div>
//                   <label className={styles.Label}>
//                     Gender:
//                     <select  className={styles.Input} value={gender} onChange={(e) => setGender(e.target.value)} required>
//                       <option value="">Select Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                     </select>
//                   </label>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//                 </div>
//               </div>
//             </div>

//             <div className={styles.ContainerInput}>
//               <label className={styles.Label}>
//                 Place of Residence:
//                 <input  className={styles.Input} type="text" value={placeOfResidence} onChange={(e) => setPlaceOfResidence(e.target.value)} required />
//               </label>
//             </div>
//             <div>
//               <button className={styles.SubmitButton} type="submit">Sign Up</button>
//             </div>
//           </form>
        
//         </div>

//       </Container>
//     </div>
//   );
// };

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../Components/Navbar/Navbar';
import Container from '../Components/Container/Container';
import DriverForm from '../Components/DriverForm/DriverForm';
import PassengerForm from '../Components/PassengerForm/PassengerForm'; // Import your PassengerForm component
import Footer from '../Components/Footer/Footer';

export default function SignUp() {
  const [userType, setUserType] = useState('passenger');
  const [driverInfo, setDriverInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    birthday: '',
    gender: '',
    typeCar: '',
    carNumber: '',
    yearCar: '2020',
    color: '',
  });

  const [passengerInfo, setPassengerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    birthday: '',
    gender: '',
  });

  
  const handleUserTypeChange = (selectedUserType) => {
    setUserType(selectedUserType);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriverInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePassengerInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };



  const handleDriverSubmit = () => {

    if (driverInfo.firstName.length < 2) {
      alert('First name must be at least 2 characters long.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(driverInfo.email)) {
      alert('Please enter a valid email address.');
      return;
    }  
      
    if (driverInfo.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (!driverInfo.birthday) {
      alert('Please enter your birthday.');
      return;
    }
  
    const age = calculateAge(driverInfo.birthday);
  
    if (age < 18) {
      alert('You must be at least 18 years old to sign up.');
      return;
    }

    if (driverInfo.yearCar < 2010) {
      alert('Your car is not suitable.');
      return;
    }

    console.log('Driver data:', driverInfo);
  };

  const handlePassengerSubmit = () => {
    if (passengerInfo.firstName.length < 2) {
      alert('First name must be at least 2 characters long.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(passengerInfo.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    if (passengerInfo.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }


     if (!passengerInfo.birthday) {
      alert('Please enter your birthday.');
      return;
    }

    const age = calculateAge(passengerInfo.birthday);

    if (age < 18) {
      alert('You must be at least 18 years old to sign up.');
      return;
    }


    console.log('Passenger data:', passengerInfo);

  };


  

  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.SignUp}>
          <div>
            <h2 className={styles.Titel}>Sign Up</h2>
          </div>
          <div className={styles.userType}>
            <ul className={styles.ulUserType}>
              <li
                className={`${styles.PassengerUser} ${
                  userType === 'passenger' ? styles.active : ''
                }`}
                onClick={() => handleUserTypeChange('passenger')}
              >
                Passenger
              </li>
              <li
                className={`${styles.DriverUser} ${
                  userType === 'driver' ? styles.active : ''
                }`}
                onClick={() => handleUserTypeChange('driver')}
              >
                Driver
              </li>
            </ul>
          </div>
          {userType === 'passenger' ? (
            <PassengerForm
              {...passengerInfo}
              onInputChange={handlePassengerInputChange}
              onSubmit={handlePassengerSubmit}
            />
          ) : (
            <DriverForm
              {...driverInfo}
              onInputChange={handleInputChange}
              onSubmit={handleDriverSubmit}
            />
          )}
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}
