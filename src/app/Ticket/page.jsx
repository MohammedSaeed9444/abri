// import React from 'react';
// import styles from './page.module.css';
// import Container from '../Components/Container/Container';
// import Navbar from '../Components/Navbar/Navbar';
// import Footer from '../Components/Footer/Footer';

// export default function Ticket() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Container>
//         <div className={styles.Ticket}>
//           <div className={styles.Titel}>
//             <h2>Sun, 21 January</h2>
//           </div>
//           <div>
//             <div className={styles.From}>
//               <div className={styles.TimeFrom}>02:35</div>
//               <div className={styles.DesFrom}>Baghdad</div>
//             </div>
//             <div className={styles.To}>
//               <div className={styles.TimeTo}>06:45</div>
//               <div className={styles.DesTo}>Erbil</div>
//             </div>
//             <div className={styles.ContPrice}>
//               <div className={styles.Npassenger}>price for 1 passenger</div>
//               <div className={styles.Price}>13$</div>
//             </div>
//             <div className={styles.typeCar}>BMW</div>
//           </div>
//           <div className={styles.ContBook}>
//             <button className={styles.BookButton}>Book</button>
//           </div>
//         </div>
//       <div className={styles.coverImg}>
//         <img className={styles.img} src="/Passengers.svg" alt="Passengers" />
//       </div>
//       </Container>
//       <Footer></Footer>
//     </div>
//   );
// }






import React from 'react';
import styles from './page.module.css';
import Container from '../Components/Container/Container';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Ticket } from '@/Fake';

export default function Tickets() {
  return (
    <div>
      <Navbar />
      <Container>
        {Ticket.map(ticket => (
          <div key={ticket.TicketId} className={styles.Ticket}>
            <div className={styles.Titel}>
              <h2>{ticket.Date}</h2>
            </div>
            <div>
              <div className={styles.From}>
                <div className={styles.TimeFrom}>{ticket.Leaving.FromTime}</div>
                <div className={styles.DesFrom}>{ticket.Leaving.From}</div>
              </div>
              <div className={styles.To}>
                <div className={styles.TimeTo}>{ticket.Goning.ToTime}</div>
                <div className={styles.DesTo}>{ticket.Goning.To}</div>
              </div>
              <div className={styles.ContPrice}>
                <div className={styles.Npassenger}>price for 1 passenger</div>
                <div className={styles.Price}>{ticket.Price}</div>
              </div>
              <div className={styles.typeCar}>{ticket.carType}</div>
            </div>
            <div className={styles.ContBook}>
              <button className={styles.BookButton}>Book</button>
            </div>
          </div>
        ))}
        <div className={styles.coverImg}>
          <Image className={styles.img} src="/Passengers.svg" alt="Passengers"  width={200} height={200}/>
        </div>
      </Container>
      <Footer />
    </div>
  );
}