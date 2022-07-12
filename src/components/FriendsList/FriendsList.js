import React from 'react';
import './FriendsList.css';

const FriendsList = () => {
    return (
      <div className='friendslist'>
        <div className='container'>
          <div className='row'>
          <div className='friends'>Друзья</div> 
            <div className='col'>
              <div className="friends_block">
                <div className='friends_round'></div>
                  <div className='friends_descr'>
                    <div className="friends_name">Андрей Зурко</div>
                    <div class="friends_message">Написать сообщение</div>
                  </div>     
              </div>
            </div>
            <div className='col'>
              <div className="friends_block">
                <div className='friends_round'></div>
                  <div className='friends_descr'>
                    <div className="friends_name">Екатерина Владимирова</div>
                    <div class="friends_message">Написать сообщение</div>
                  </div>     
              </div>
            </div>
            <div className='col'>
              <div className="friends_block">
                <div className='friends_round'></div>
                  <div className='friends_descr'>
                    <div className="friends_name">Андрей Михайлов</div>
                    <div class="friends_message">Написать сообщение</div>
                  </div>     
              </div>
            </div>
            <div className='col'>
              <div className="friends_block">
                <div className='friends_round'></div>
                  <div className='friends_descr'>
                    <div className="friends_name">Александр Смирнов</div>
                    <div class="friends_message">Написать сообщение</div>
                  </div>     
              </div>
            </div>
            <div className='col'>
              <div className="friends_block">
                <div className='friends_round'></div>
                  <div className='friends_descr'>
                    <div className="friends_name">Марина Моор</div>
                    <div class="friends_message">Написать сообщение</div>
                  </div>     
              </div>
            </div>
          </div>
      </div>
      </div>
    )
    
}
 
  export default FriendsList