import { useState } from "react";

// https://unavatar.io/kikobeats
export const TwitterFollowCard = ({ name, userName, initialIsFollowing}) => {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing
  ? 'Siguiendo'
  : 'Seguir'


  const buttonClassName = isFollowing
  ?'tw-followCard-button is-following'
  :'tw-followCard-button'
 

  const handleClick= ()=>{
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Avata User" />
        <div className='tw-followCard-info' >
        <strong className='tw-followCard-infoUserName'>{name}</strong>
        <span>{`@${userName}`}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
         <span className='tw-followCard-text'>{text}</span>
         <span className='tw-followCard-stopFollow'>Dejar de seguir</span>        
        </button>
        
      </aside>
    </article>
  );
}