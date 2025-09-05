import { MONTHS } from "@/constants/calendar";

export function getFirstDayOfMonth(month: number, year: number): number {
  const firstDay = new Date(`${MONTHS[month]} 1, ${year}`);
  console.log(firstDay.getDay());
  return firstDay.getDay();
}

export function getMonthDaysCount(month: number, year: number): number {
  switch (month) {
    case 0: return 31;
    case 1: return isLeapYear(year) ? 29 : 28;
    case 2: return 31;
    // case 3: return 30;
    case 4: return 31;
    // case 5: return 30;
    case 6: return 31;
    case 7: return 31;
    // case 8: return 30;
    case 9: return 31;
    // case 10: return 30;
    case 11: return 31;
    default: return 30;
  }
}

export function isLeapYear(year: number): boolean {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  }

  return false
}