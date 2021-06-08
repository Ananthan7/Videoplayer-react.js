import React,{useEffect} from 'react'
import ReactPlayer from 'react-player';

function Items(props) {
  
    return (
        
        <div>
            <div className="player">
                <ReactPlayer controls width='100%' height='100%' url={props} />
                <div className="player-bottom">
                    <box-icon type='solid' name='share-alt'></box-icon>
                    <box-icon name='like' type='solid' ></box-icon>
                    <box-icon name='dislike' type='solid' ></box-icon>
                </div>
            </div>
        </div>
    )
}

export default Items
