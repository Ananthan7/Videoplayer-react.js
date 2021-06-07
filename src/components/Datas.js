import React from 'react'


function Datas() {
  const json = '{"url":"https://www.youtube.com/watch?v=dB1z8ndy4Kc", "title":42}';
  const obj = JSON.parse(json);
  return (
      <div className='datas'>
        <div className="vedios">
          <video controls src={obj.url} preload="none"></video>
          <p><img src="https://yt3.ggpht.com/ytc/AAUvwngqRTkuI1ItqozUYhltYNPXfdz-jSHij8uoahMBHQ=s88-c-k-c0x00ffffff-no-rj" alt="" />Best Opening Races From Pixar's Cars</p>
        </div>
        <div className="vedios">
          <video controls src={obj.url} preload="none"></video>
          <p><img src="https://yt3.ggpht.com/ytc/AAUvwngqRTkuI1ItqozUYhltYNPXfdz-jSHij8uoahMBHQ=s88-c-k-c0x00ffffff-no-rj" alt="" />Police Car Breaking Blocks and Painting Street Vehicle w </p>
        </div>
        <div className="vedios">
          <video controls src={obj.url} preload="none"></video>
          <p><img src="https://yt3.ggpht.com/ytc/AAUvwngqRTkuI1ItqozUYhltYNPXfdz-jSHij8uoahMBHQ=s88-c-k-c0x00ffffff-no-rj" alt="" />Giants Machines Crushes Cars </p>
        </div>
        <div className="vedios">
          <video controls src={obj.url} preload="none"></video>
          <p><img src="https://yt3.ggpht.com/ytc/AAUvwngqRTkuI1ItqozUYhltYNPXfdz-jSHij8uoahMBHQ=s88-c-k-c0x00ffffff-no-rj" alt="" />Best Opening Races From Pixar's Cars</p>
        </div>
        <div className="vedios">
          <video controls src={obj.url} preload="none"></video>
          <p><img src="https://yt3.ggpht.com/ytc/AAUvwngqRTkuI1ItqozUYhltYNPXfdz-jSHij8uoahMBHQ=s88-c-k-c0x00ffffff-no-rj" alt="" />Giants Machines Crushes Cars </p>
        </div>
        <div className="vedios">
          <video controls src={obj.url} preload="none"></video>
          <p><img src="https://yt3.ggpht.com/ytc/AAUvwngqRTkuI1ItqozUYhltYNPXfdz-jSHij8uoahMBHQ=s88-c-k-c0x00ffffff-no-rj" alt="" />Best Opening Races From Pixar's Cars</p>
        </div>
      </div>
      
  
  );
}

export default Datas;
