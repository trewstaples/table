import React from 'react';
import { nanoid } from 'nanoid';

const Table = ({ tableItems, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th onClick={onSort.bind(null, 'title')}>Название</th>
          <th onClick={onSort.bind(null, 'amount')}>Количество</th>
          <th onClick={onSort.bind(null, 'distance')}>Расстояние</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item) => {
          return (
            <tr key={nanoid()}>
              <th>{item.date}</th>
              <th>{item.title}</th>
              <th>{item.amount}</th>
              <th>{item.distance}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { Table };
