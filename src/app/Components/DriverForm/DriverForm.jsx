import React from 'react';
import styles from './DriverForm.module.css';


export default function DriverForm({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  birthday,
  gender,
  typeCar,
  carNumber,
  yearCar,
  color,
  onInputChange, // Pass a function to handle input changes
  onSubmit, // Pass a function to handle form submission
}) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Additional validation or processing logic can be added here
    onSubmit(); // Call the onSubmit function passed from the parent component
  };


  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.Form}>
        {/* Render driver-specific form fields */}
        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            First Name:
            <input
              className={styles.Input}
              type="text"
              value={firstName}
              name="firstName"
              onChange={onInputChange}
              required
            />
          </label>
        </div>

        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            Last name:
            <input
              className={styles.Input}
              type="text"
              value={lastName}
              name="lastName"
              onChange={onInputChange}
              required
            />
          </label>
        </div>

        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            Email:
            <input
              className={styles.Input}
              type="email"
              value={email}
              name="email"
              onChange={onInputChange}
              required
            />
          </label>
        </div>


        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            Password:
            <input
              className={styles.Input}
              type="password"
              value={password}
              name="password"
              onChange={onInputChange}
              required
            />
          </label>
        </div>


        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            Phone Number:
            <input
              className={styles.Input}
              type="text"
              value={phoneNumber}
              name="phoneNumber"
              onChange={onInputChange}
              required
            />
          </label>
        </div>

        <div className={styles.ContainerInput}>
        <div className={styles.ContainerBirthday}>
          <div>
            <label className={styles.Label}>
            Birthday:
              <input className={styles.InputB}
              type="date"
              value={birthday}
              name="birthday"
              onChange={onInputChange}
              required
              />
            </label>
          </div>

          <div>
            <label className={styles.Label}>
            Gender:
              <select
              className={styles.InputB}
              value={gender}
              name="gender"
              onChange={onInputChange}
              required>
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </label>
          </div>
        </div>
      </div>

        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            Type of Car:
            <input
                className={styles.Input}
                type="text"
                value={typeCar}
                name="typeCar"
                onChange={onInputChange}
                required
            />
            </label>
        </div>

        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            Year:
            <input
                className={styles.Input}
                type="number"
                min={2010} max={2024}
                value={yearCar}
                name="yearCar"
                onChange={onInputChange}
                required
            />
            </label>
        </div>

        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            Color:
            <input
                className={styles.Input}
                type="text"
                value={color}
                name="color"
                onChange={onInputChange}
                required
            />
            </label>
        </div>

        <div className={styles.ContainerInput}>
          <label className={styles.Label}>
            Car Number:
            <input
                className={styles.Input}
                type="text"
                value={carNumber}
                name="carNumber"
                onChange={onInputChange}
                required
            />
            </label>
        </div>
        <button className={styles.SubmitButton} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
