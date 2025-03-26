import React from 'react'

export default function Home(props) {
  return (
    <div id='home'>
      <h1>{props.name} is my name</h1>
      <h2>{props.game} is my fav game</h2>
    </div>
  );
}

 //both is same


// export default function Home({name, game}) {
//   return (
//     <div id='home'>
//       <h1>{name} is my name</h1>
//       <h2>{game} is my fav game</h2>
//     </div>
//   );
// }
