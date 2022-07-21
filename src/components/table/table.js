import React from 'react';
import { nanoid } from 'nanoid';
import { tableItems } from '../../mock/mock';

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
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
