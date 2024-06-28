import { atom, selector } from "recoil";

// export const minuteState = atom({
//   key: "minutes",
//   default: 111,
// });

// export const minutesToHoursSelector = selector<number>({
//   key: "minutesToHours",
//   get: ({ get }) => {
//     const minutes = get(minuteState);
//     return minutes / 60;
//   },
//   set: ({ set }, newValue) => {
//     const minutes = Number(newValue) * 60;
//     set(minuteState, minutes)
//   },
// });

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const minutesToHoursSelector = selector({
  key: "minutesToHours",
  get: ({ get }) => {
    const currentMinutes = get(minuteState);
    const newHours = currentMinutes / 60;
    return newHours;
  },
  set: ({ set }, newValue) => {
    const currentHours = Number(newValue);
    const newMinites = currentHours * 60;
    set(minuteState, newMinites);
  },
});
