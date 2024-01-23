// import React from 'react'
// import styles from './page.module.css'
// import Navbar from '../Components/Navbar/Navbar'
// import Container from '../Components/Container/Container'

// export default function Tickets() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Container>
//         <div className={styles.Titel}>
//           <h2>Sun, 21 January</h2>
//         </div>
//         <div className={styles.ContainerTickets}>
//             <div className={styles.Tickets}>
//               <div className={styles.destinations}>
//                 <div className={styles.From}>
//                     <div className={styles.TimeFrom}>02:35</div>
//                     <div className={styles.DesFrom}>Baghdad</div>
//                 </div>
//                 <div className={styles.To}>
//                     <div className={styles.TimeTo}>06:45</div>
//                     <div className={styles.DesTo}>Erbil</div>
//                 </div>
//               </div>
//               <div className={styles.price}>$13</div>
//             </div>


//             <div className={styles.Tickets}>
//               <div className={styles.destinations}>
//                 <div className={styles.From}>
//                     <div className={styles.TimeFrom}>02:35</div>
//                     <div className={styles.DesFrom}>Baghdad</div>
//                 </div>
//                 <div className={styles.To}>
//                     <div className={styles.TimeTo}>06:45</div>
//                     <div className={styles.DesTo}>Erbil</div>
//                 </div>
//               </div>
//               <div className={styles.price}>$13</div>
//             </div>

//             <div className={styles.Tickets}>
//               <div className={styles.destinations}>
//                 <div className={styles.From}>
//                     <div className={styles.TimeFrom}>02:35</div>
//                     <div className={styles.DesFrom}>Baghdad</div>
//                 </div>
//                 <div className={styles.To}>
//                     <div className={styles.TimeTo}>06:45</div>
//                     <div className={styles.DesTo}>Erbil</div>
//                 </div>
//               </div>
//               <div className={styles.price}>$13</div>
//             </div>

//             <div className={styles.Tickets}>
//               <div className={styles.destinations}>
//                 <div className={styles.From}>
//                     <div className={styles.TimeFrom}>02:35</div>
//                     <div className={styles.DesFrom}>Baghdad</div>
//                 </div>
//                 <div className={styles.To}>
//                     <div className={styles.TimeTo}>06:45</div>
//                     <div className={styles.DesTo}>Erbil</div>
//                 </div>
//               </div>
//               <div className={styles.price}>$13</div>
//             </div>

//         </div>
//       </Container>
//     </div>
//   )
// }










import React from 'react'
import styles from './page.module.css'
import Navbar from '../Components/Navbar/Navbar'
import Container from '../Components/Container/Container'

export default function Tickets() {
  const ticketsData = [
    {
        TicketId : '1',
        Date : '2024/02/13',
        Leaving : {From : 'Baghadad', FromTime : '02:45'},
        Goning : {To : 'Mosal', ToTime : '06:32'},
        Price : '$11',
    },
    {
        TicketId : '2',
        Date : '2024/02/13',
        Leaving : {From : 'Mosal', FromTime : '03:45'},
        Goning : {To : 'Baghadad', ToTime : '08:32'},
        Price : '$7',
    },
    {
        TicketId : '3',
        Date : '2024/02/13',
        Leaving : {From : 'Baghadad', FromTime : '12:45'},
        Goning : {To : 'Erbil', ToTime : '05:32'},
        Price : '$13',
    },
    {
        TicketId : '4',
        Date : '2024/02/13',
        Leaving : {From : 'Erbil', FromTime : '06:45'},
        Goning : {To : 'Baghadad', ToTime : '11:32'},
        Price : '$10',
    },
    {
        TicketId : '5',
        Date : '2024/02/13',
        Leaving : {From : 'Baghadad', FromTime : '02:45'},
        Goning : {To : 'Basra', ToTime : '06:32'},
        Price : '$9',
        
    },
    {
        TicketId : '6',
        Date : '2024/02/13',
        Leaving : {From : 'Basra', FromTime : '02:45'},
        Goning : {To : 'Baghadad', ToTime : '06:32'},
        Price : '$13',
        
    },

];

  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.Titel}>
          <h2>Sun, 21 January</h2>
        </div>
        <div className={styles.ContainerTickets}>
          {ticketsData.map((ticket) => (
            <div key={ticket.TicketId} className={styles.Tickets}>
              <div className={styles.destinations}>
                <div className={styles.From}>
                  <div className={styles.TimeFrom}>{ticket.Leaving.FromTime}</div>
                  <div className={styles.DesFrom}>{ticket.Leaving.From}</div>
                </div>
                <div className={styles.To}>
                  <div className={styles.TimeTo}>{ticket.Goning.ToTime}</div>
                  <div className={styles.DesTo}>{ticket.Goning.To}</div>
                </div>
              </div>
              {ticket.Price && <div className={styles.price}>{ticket.Price}</div>}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};