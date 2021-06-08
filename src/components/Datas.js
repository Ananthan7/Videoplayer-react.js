import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import Items from './Items';
import { datas } from './VedioData';


function Datas() {
  useEffect(() => {
    fetchItems()
  }, []);
  const [state, setstate] = useState([]);
  const fetchItems = () =>{
    const obj=datas
    setstate(obj)
  }
  return (
      <div className='datas'>
        {state.map((item,index)=>{
          return(<div className="vedios">
          <ReactPlayer controls width='100%' height='100%' url={item.url} />
          <Link to={`/items/${item.url}`} style={{fontSize:15}}><img src={item.thumbnailUrl} alt="" />{item.title}</Link>
        </div>)
          
        })}
      </div>
      
  
  );
}

export default Datas;
