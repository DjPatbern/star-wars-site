import moment from "moment";

export const formatDate = (date: string | Date) => {
  return moment(date).format("ll");
};

export const convertBirthYearToGregorian = (birthYear: string) => {
  if (birthYear?.endsWith("BBY")) {
    const yearsBefore = parseInt(birthYear.slice(0, -3), 10);
    return 2024 - yearsBefore;
  } else if (birthYear?.endsWith("ABY")) {
    const yearsAfter = parseInt(birthYear?.slice(0, -3), 10);
    return 2024 + yearsAfter;
  }
  return null;
};
