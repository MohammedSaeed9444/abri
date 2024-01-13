
import Calend from '../Calend/Calend'
import PassengerSelector from '../PassengerSelector/PassengerSelector'
import Selectr from '../Selectr/Selectr'
import styles from './SearchForm.module.css'


export default function SearchForm() {
  return (
    <div className={styles.SearchForm}>
      <Selectr></Selectr>
      <Selectr></Selectr>
      <Calend></Calend>
      <PassengerSelector></PassengerSelector>
      <button className={styles.SearchButton}>Search</button>
    </div>
  )
}
