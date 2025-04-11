import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications-container">
      <h3>Notificações</h3>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className={`notification ${notification.type}`}>
              {notification.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>Sem notificações no momento.</p>
      )}
    </div>
  );
};

export default Notifications;