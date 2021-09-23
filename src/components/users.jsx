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

  const showTable = (value) => {
    let classes = "table table-hover";
    if (!value) {
      return (classes += " d-none");
    }
    return classes;
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((users) => users._id !== userId.target.id));
  };

  const renderPhrase = (number) => {
    const lastNumber = Number(number.toString().slice(-1));
    if ([2, 3, 4].indexOf(lastNumber) >= 0) {
      return `${users.length} человека тусанут с тобой сегодня`;
    }
    if (number > 4 && number < 15) {
      return `${users.length} человек тусанет с тобой сегодня`;
    }
    if (lastNumber === 1) {
      return `${users.length} человек тусанет с тобой сегодня`;
    }
    if (lastNumber === 0) {
      return "Никто с тобой не тусанет";
    }
  };
  return (
    <>
      <span className={getButtonClasses(users.length)}>
        {renderPhrase(users.length)}
      </span>
      <table className={showTable(users.length)}>
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
            <tr key={user._id}>
              <th key={user._id + user.name} scope="row">
                {user.name}
              </th>
              <td>
                {user.qualities.map((quality) => (
                  <span
                    key={user._id + quality.name}
                    className={getButtonClasses(quality.color)}
                  >
                    {quality.name}
                  </span>
                ))}
              </td>
              <td key={user._id + user.profession.name}>
                {user.profession.name}
              </td>
              <td key={user._id + user.completedMeetings}>
                {user.completedMeetings}
              </td>
              <td key={user._id + user.rate}>{user.rate}</td>
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
