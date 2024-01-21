import React from 'react';
import styles from './PassengerForm.module.css';

export default function PassengerForm({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  birthday,
  gender,
  onInputChange,
  onSubmit,
}) {
  return (
    <div className={styles.Form}>
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
          Last Name:
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
            placeholder="YourEmail@example.com"
            autoComplete="email" 
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
          minLength="6"
          placeholder="Enter your password"
          title="Please enter at least 6 characters"
          required
          />
        </label>
       </div>

      <div className={styles.ContainerInput}>
        <label className={styles.Label}>
          Phone Number:
          <input
            className={styles.Input}
            type="tel"
            value={phoneNumber}
            name="phoneNumber"
            pattern="[0-9]{10}"
            onChange={onInputChange}
            placeholder="Enter your phone number (e.g., 7700000000)"
            title="Please enter a valid phone number"
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


      {/* <div>
        <div className={styles.ContainerInput}>
            <label className={styles.Label}>
            Birthday:
            <input
                className={styles.Input}
                type="date"
                value={birthday}
                name="birthday"
                onChange={onInputChange}
                required
            />
            </label>
        </div>
        <div className={styles.ContainerInput}>
            <label className={styles.Label}>
            Gender:
            <select
                className={styles.Input}
                value={gender}
                name="gender"
                onChange={onInputChange}
                required
            >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </label>
        </div>
      </div> */}


      <button className={styles.SubmitButton} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}