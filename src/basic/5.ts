enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string): boolean => {
  let saturday = DayOfWeek[DayOfWeek.Saturday];
  let sunday = DayOfWeek[DayOfWeek.Sunday];

  if (day === sunday || day === saturday) {
    return true;
  } else {
    return false;
  }
};

console.log(isWeekend(DayOfWeek[DayOfWeek.Sunday]));
