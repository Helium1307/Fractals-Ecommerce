export function getCurrentDateStartDay() {
  return toStartDay(new Date());
}

export function getCurrentDateEndDay() {
  return toEndDay(new Date());
}

export function toStartDay(date: Date): Date {
  const newDate = new Date(date.getTime());
  newDate.setUTCHours(0, 0, 0, 0);
  return newDate;
}

export function toEndDay(date: Date): Date {
  const newDate = new Date(date.getTime());
  newDate.setUTCHours(23, 59, 59, 999);
  return newDate;
}

export function fromIsoWithStartDay(date: string) {
  return toStartDay(new Date(date));
}

export function fromIsoWithEndDay(date: string) {
  return toEndDay(new Date(date));
}

export function firstDayOfMonth(year: number, month: number) {
  return new Date(`${year}-${month}-01`);
}

export function lastDayOfMonth(year: number, month: number): Date {
  const date = new Date(year, month - 1, 32);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const dateOfLastDayOfMonth = new Date(firstDay.toISOString());
  dateOfLastDayOfMonth.setDate(dateOfLastDayOfMonth.getDate() - 1);

  return dateOfLastDayOfMonth;
}

export function plusDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}
