import React, { useState } from 'react';
import './App.css';
// import image from './images/Waterpuppy.jpg';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import MyPage from './components/MyPage';
import Login from './components/Login';
import ShoppingBasket from './components/ShoppingBasket';
import Signup from './components/Signup';
import Track from './components/Track';
import MainPage from './components/MainPage';
import QnA from './components/QnA';
import Data from './Data';
import Register from './components/Register';
import ShoppingList from './components/ShoppingList';
import Detail from './components/Detail';
import QnAList from './components/QnAList';
import NewBooks from './components/NewBooks';
import Domestic from './components/Domestic';
import Foreign from './components/Foreign';
import BestBooksPage from './components/BestBooksPage';
import Charge from './components/Charge';
import EmptyAd from './components/EmptyAd';
import AdData from './AdData';

function App() {
  const [booksData, setBooksData] = useState(Data);
  const [adData, setAdData] = useState(AdData);
  // const $route = doument.querySelector("#lo");
  // function logi(){
  //   return(
  //     console.log("d");
  //   );
  // }
  // $route.addEventListener("click", logi);
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        {/*
          로그인을 하면 마이페이지가 나타나며 
          로그인 -> 로그아웃
          그리고 회원가입은 사라짐

          로그인을 해야할땐 마이페이지 안보임
        */}
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/qnalist/qna" element={<QnA />} />
            <Route path="/qnalist" element={<QnAList />} />
            <Route path="/track" element={<Track />} />
            <Route path="/" element={<MainPage booksData={booksData} />} />
            <Route path="/bestbookspage" element={<BestBooksPage booksData={booksData} />} />
            <Route path="/newbooks" element={<NewBooks booksData={booksData} />} />
            <Route path="/domestic" element={<Domestic booksData={booksData} />} />
            <Route path="/foreign" element={<Foreign booksData={booksData} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ShoppingBasket" element={<ShoppingBasket booksData={booksData} setBooksData={setBooksData}/>} />
            <Route path="/ShoppingList" element={<ShoppingList booksData={booksData} />} />
            <Route path="/detail/:proNum" element={<Detail booksData={booksData} />} />
            <Route path="/emptyad/:id" element={<EmptyAd adData={adData}/>} />
            <Route path="/register" element={<Register booksData={booksData} setBooksData={setBooksData} />} />
            <Route path="/charge" element={<Charge booksData={booksData} setBooksData={setBooksData} />} />
            
        </Routes>
        {/* <img src={image} alt="물개쓰" width="10%"/> */}
      </div>
    </div>
  );
}

export default App;