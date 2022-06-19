import './App.css';
import { useState } from 'react';


function App() {
  let [menuList, menuChange] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [good , veryGood] = useState(0);

  return (
    <div className="App">
      <header>ReactBlog</header>
      <div className='menu'>

        <butoon onClick={()=>{
          let copy = [...menuList]; 
          copy[0]='여자코트 추천';    
          //console.log(copy==menuList);
           menuChange(copy)
          }}>글수정</butoon>

          <button onClick={()=>{
           let copy= [...menuList];
           copy.sort(); //가나다순 정렬
           menuChange(copy)
         }}>정렬</button>

          <h2>{menuList[0]}<span onClick={()=>{ veryGood(good+1)}}>👍</span>{good}</h2>
          <p>2월 17일 발행</p>
        </div>
        <div className='menu'>
          <h2>{menuList[1]}</h2>
          <p>2월 17일 발행</p>
        </div>
        <div className='menu'>
          <h2>{menuList[2]}</h2>
          <p>2월 17일 발행</p>
        </div>
    </div>
  );
}

export default App;
