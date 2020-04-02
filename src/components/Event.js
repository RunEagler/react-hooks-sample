import React from 'react';

const Event = ({ event, dispatch }) => {

  const handleClickDeleteEvent = () => {
    const result = window.confirm(`イベント「${event.title}」を消してしまってもよろしいでしょうか？`)
    if (result) {dispatch({ type: 'DELETE_EVENT', id:event.id })};
  };
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteEvent}>削除</button>
      </td>
    </tr>
  );
};

export default Event;
