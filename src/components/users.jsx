import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const [count, setCount] = useState(100);

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const textForButton = (value) => {
    value = Math.abs(value) % 100;
    let count = value % 10;
    if (count > 10 && count < 20) {
      return "человек тусанет с тобой сегодня";
    }
    if (count > 4 && count < 10) {
      return "человек тусанет с тобой сегодня";
    }
    if (count > 1 && count < 5) {
      return "человека тусанет с тобой сегодня";
    }
    if (count === 1) {
      return "человек тусанет с тобой сегодня";
    }
    if (count === 0) {
      return "Никто с тобой не тусанет";
    }
  };
  const getButtonclasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };
  // const handleDelete = (userId) => {};
  // const renderPhrase = (number) => {};
  return (
    <>
      <button className={getButtonclasses()}>
        {formCount()} {textForButton(count)}
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>2.5/5</td>
            <td>
              <button className="btn btn-danger btn-sm">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
console.log(api.users.fetchAll());
export default Users;
