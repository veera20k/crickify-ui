import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRandomColor = (): string => {
  const getRandomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  const isTooLight = (red + green + blue) > (255 * 3 / 2);
  if (isTooLight) {
    return getRandomColor();
  }
  const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  return hexColor;
};

export function calculateAge(birthdate: {
  year: number;
  month: number;
  date: number;
}): number {
  const today: Date = new Date();
  const birthDate: Date = new Date(birthdate.year, birthdate.month - 1, birthdate.date);
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const monthDiff: number = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
