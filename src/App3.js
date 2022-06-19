import './App.css';
import { useState } from 'react';


function App() {
  let [menuList, menuChange] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [good , veryGood] = useState([0,0,0]);
  let [modal, setModal] = useState(true); //괄호안에 false로 하면 모달 부분이 화면에 보이지 않음 
  let [title, setTitle]= useState(0); // 모달을 써준 function에 써줘도 되지만 부모에도 이 내용이 필요할 수 있으니까 가장 상위 컴포넌트에 적어주는 게 좋음

  return (
    <div className="App">
      <header>ReactBlog</header>
      {/*}
      <div className='menu'>
        
      <butoon onClick={()=>{
          let copy = [...menuList]; 
          copy[0]='여자코트 추천';    
          //console.log(copy==menuList);
           menuChange(copy)
          }}>글수정</butoon>
        
          <h2>{menuList}<span onClick={()=>{
        
          }}>👍</span>{good}</h2> 
          <p>2월 17일 발행</p>
        </div>  
          
        <div className='menu'>
          <h2>{menuList[1]}<span onClick={()=>{ veryGood(good+1)}}>👍</span>{good}</h2>
          <p>2월 17일 발행</p>
        </div>

        <div className='menu'>
          <h2 >{menuList[2]}<span onClick={()=>{ veryGood(good+1)}}>👍</span>{good}</h2>
          <p>2월 17일 발행</p>
        </div>  */}

          {/* {
            menuList.map(function(a, i){ //a는 array안에 있는 데이터/ i는 반복문이 돌 때마다 0부터 1씩 증가하는 정수
             
              return ( 
              <div className='menu' key={i}>
                  <h2 onClick={()=>{setModal(true)}} >{menuList[i]}</h2>
                  <p>2월 17일 발행</p>
              </div>
            
            )
            })
          } */}

          {
            menuList.map(function(a, i){ //a는 array안에 있는 데이터/ i는 반복문이 돌 때마다 0부터 1씩 증가하는 정수
             
              return ( 

                
              {/* <div className='menu' key={i}>
                  <h2 >{menuList[i]}<span onClick={()=>{
                    let change = [...good];
                    change[i]=change[i]+1;
                    veryGood(change)
                  } }>👍</span>{good[i]}</h2>
                  <p>2월 17일 발행</p>
              </div> */}
            
                
            )
            })
          }

            <button onClick={()=>{setTitle(0)}}>글제목0</button>
            <button onClick={()=>{setTitle(1)}}>글제목1</button>
            <button onClick={()=>{setTitle(2)}}>글제목2</button>


            {
              modal == true ? <Modal title={title} menuList={menuList}/> : null
            } 
  
          
         {/* <button onClick={ ()=>{setModal(!modal)}}>modal</button>
        {
          modal == true ? <Modal menuList={menuList[0]} /> : null
        } */}
      
    </div> 
        
  );
}


function Modal(props){  // 다른 function 밖에 만들어야 하고, 영어 대문자로 시작하기
  return (
    <div className='modal'>
      <h4>{props.menuList[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


{/*
function Modal(props){  // 다른 function 밖에 만들어야 하고, 영어 대문자로 시작하기
  return (

    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

*/}

export default App;
