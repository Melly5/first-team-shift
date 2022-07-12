import React from "react";
import "./FriendsList.css";

export const FriendsList = () => {
  return (
    <div className="friendslist">
      <div className="container friend-list">
        <div className="friends-header">Друзья</div>
        <div className="friends-items">
          <div className="friends_block">
            <div className="friends_round"></div>
            <div className="friends_descr">
              <div className="friends_name">Андрей Зурко</div>
              <div class="friends_message">Написать сообщение</div>
            </div>
          </div>

          <div className="friends_block">
            <div className="friends_round"></div>
            <div className="friends_descr">
              <div className="friends_name">Екатерина Владимирова</div>
              <div class="friends_message">Написать сообщение</div>
            </div>
          </div>

          <div className="friends_block">
            <div className="friends_round"></div>
            <div className="friends_descr">
              <div className="friends_name">Андрей Михайлов</div>
              <div class="friends_message">Написать сообщение</div>
            </div>
          </div>

          <div className="friends_block">
            <div className="friends_round"></div>
            <div className="friends_descr">
              <div className="friends_name">Александр Смирнов</div>
              <div class="friends_message">Написать сообщение</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
