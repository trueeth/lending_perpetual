export const getDays = (month: number, year: number) => {
  return new Date(year, month, 0).getDate()
}
