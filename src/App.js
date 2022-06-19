import './App.css';
import { useState } from 'react';


function App() {
  let [menuList, menuChange] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [good , veryGood] = useState(0);
  let [modal, setModal] = useState(false); //괄호안에 false로 하면 모달 부분이 화면에 보이지 않음 
  let [title, setTitle]= useState(0); // 모달을 써준 function에 써줘도 되지만 부모에도 이 내용이 필요할 수 있으니까 가장 상위 컴포넌트에 적어주는 게 좋음
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <header>ReactBlog</header>  

          {
            menuList.map(function(a, i){ //a는 array안에 있는 데이터/ i는 반복문이 돌 때마다 0부터 1씩 증가하는 정수
             
              return ( 

                
               <div className='menu' key={i}>
                  <h2 onClick={()=>{setModal(true); setTitle(i)}}>{menuList[i]}
                  <span onClick={(e)=>{e.stopPropagation(); veryGood(good+1)}}>👍</span>{good}</h2>
                  <p>2월 17일 발행</p>
                  <button onClick={()=>{
                    let change =[...menuList];
                    change.splice(i,1); // i를 써줘야 해당 부분의 글이 삭제됨
                    menuChange(change);
                  }}>삭제</button>
              </div> 
            
                
            )
            })
          }
          <input onChange={(e)=>{입력값변경(e.target.value)}} />
          {/*타겟은 이벤트가 발생한 html 태그, value는 이벤트가 발생한 html 태그에 입력한 값 */}


          <button onClick={(e)=>{
             let copy = [...menuList];
             copy.unshift(입력값);
             menuChange(copy);
          }}>글발행</button>

            {
              modal == true ? <Modal title={title} menuList={menuList}/> : null
            } 
  
          
        
      
    </div> 
        
  );
}


function Modal(props){  
  return (
    <div className='modal'>
      <h4>{props.menuList[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


export default App;
