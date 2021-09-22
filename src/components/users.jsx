import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const getButtonClasses = (value) => {
    let classes = "badge m-2 bg-";
    if (value === 0) {
      return (classes += "danger");
    }
    if (value > 0) {
      return (classes += "primary");
    }
    return (classes += value);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((users) => users._id !== userId.target.id));
  };

  const renderPhrase = (number) => {
    number = Math.abs(number) % 100;
    let num = number % 10;
    if (num > 10 || num < 20) {
      return `${users.length} человек тусанет с тобой сегодня`;
    }
    if (num > 5 || num < 10) {
      return `${users.length} человек тусанет с тобой сегодня`;
    }
    if (num > 1 || num < 5) {
      return `${users.length} человека тусанут с тобой сегодня`;
    }
    if (num === 1) {
      return `${users.length} человек тусанет с тобой сегодня`;
    }
    if (number === 0) {
      return "Никто с тобой не тусанет";
    }
  };
  return (
    <>
      <span className={getButtonClasses(users.length)}>
        {renderPhrase(users.length)}
      </span>
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
          {users.map((user) => (
            <tr>
              <th scope="row">{user.name}</th>
              <td>
                {user.qualities.map((quality) => (
                  <span className={getButtonClasses(quality.color)}>
                    {quality.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  id={user._id}
                  onClick={handleDelete}
                  className="btn btn-danger btn-sm"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
console.log(api.users.fetchAll());
export default Users;
