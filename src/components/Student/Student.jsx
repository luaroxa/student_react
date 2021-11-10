import "./Student.css";
import Score from "../Score/Score.jsx";

export default function Student(props) {
  return (
    <div>
      <h1>Students Results</h1>
      {props.students.map((user) => (
        <div>
          <ul>
            <li>Name: {user.name} </li>
            <li>{user.bio} </li>
          </ul>
          <div>
            Score Results
            <table class="table">
              <tr>
                <th>Date</th>
                <th>Score</th>
              </tr>
              <tr>
                {user.scores.map((el) => (
                  <Score date={el.date} score={el.score} />
                ))}
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

//           <table class="table">
//               <
//           <td> HELLO2</td>
//           <td> workworkwork</td>
//             {user.scores.map((el) => {
//                 <tr>
//                 <th>Date</th>
//                 <th>Score</th>
//               </tr>
//               <tr>
//                 <td> {el.date} </td>
//                 <td> {el.score} </td>
//               </tr>
// })}
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// }

{
  /* <div>
      Students Results
      {props.students.map((e) => (
        <ul>
          <li>name: {e.name} </li>
          <li>{e.bio} </li>
<table>
<tr>
  <th>Date</th>
  <th>Score</th>
</tr>
<tr>
  <th>

    {e.scores.map(el => console.log(el))}

  </th>
  <th>Score</th>
</tr>
</table>
</ul>
      )) }
      


    </div> */
}
