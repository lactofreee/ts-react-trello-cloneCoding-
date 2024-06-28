import { useRecoilState, useRecoilValue } from "recoil";

import { minuteState, minutesToHoursSelector } from "./recoilAtoms/atoms";
import React from "react";

// export default function App() {
//   const [minutes, setMinutes] = useRecoilState(minuteState);
//   const [hours, setHours] = useRecoilState(minutesToHoursSelector);
//   const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
//     setMinutes(+event.currentTarget.value);
//   };
//   const onHoursChanged = (event: React.FormEvent<HTMLInputElement>) => {
//     setHours(+event.currentTarget.value)
//   };

//   return (
//     <div>
//       <input
//         onChange={onMinutesChange}
//         value={minutes}
//         type="number"
//         placeholder="Minutes"
//       />
//       <input
//         onChange={onHoursChanged}
//         value={hours}
//         type="number"
//         placeholder="Hours"
//       />
//     </div>
//   );
// }
function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(minutesToHoursSelector);
  const onMinutesChanged = (event: React.FormEvent<HTMLInputElement>) => {
    const newMinutes = +event.currentTarget.value;
    setMinutes(newMinutes);
  };

  const onHoursChanged = (event: React.FormEvent<HTMLInputElement>) => {
    const newHours = +event.currentTarget.value;
    setHours(newHours);
  };
  return (
    <div>
      <input
        onChange={onMinutesChanged}
        value={minutes}
        type="number"
        placeholder="minutes"
      />
      <input
        onChange={onHoursChanged}
        value={hours}
        type="number"
        placeholder="hours"
      />
    </div>
  );
}

export default App;
