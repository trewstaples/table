import dayjs from 'dayjs';

const TABLES_ITEM_COUNT = 50;

const TITLES = [
  'Beautiful & luxurious apartment at great location',
  'Nice room at city',
  'Cool room at city',
  'Cool apartment',
  'luxurious apartment',
  'Beautiful & luxurious',
  'Cool room',
];

const AMOUNTS = [1, 2, 3, 4, 5, 6, 7];

const DISTANCES = [10, 20, 30, 40, 50, 60];

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomDate = () => {
  const maxDaysGap = 360;

  const daysGap = getRandomInteger(0, maxDaysGap);

  const formatString = 'YYYY/MM/D HH:mm';

  return dayjs().add(-daysGap, 'day').format(formatString);
};

const generateTableItem = () => {
  return {
    date: getRandomDate(),
    title: TITLES[getRandomInteger(0, TITLES.length - 1)], //название объявления
    amount: AMOUNTS[getRandomInteger(0, AMOUNTS.length - 1)], //количество комнат
    distance: DISTANCES[getRandomInteger(0, DISTANCES.length - 1)], //расстояние
  };
};

const renderTableItems = () => {
  const array = [];
  for (let i = 0; i < TABLES_ITEM_COUNT; i++) {
    array.push(generateTableItem(i));
  }
  return array;
};

export const items = renderTableItems();
