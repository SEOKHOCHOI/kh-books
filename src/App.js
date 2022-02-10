import React, { useState, useEffect } from 'react';
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
import Finding from './components/Finding';
import ModifyInfo from './components/ModifyInfo';
import Withdraw from './components/Withdraw';
import NavbarAfterLogin from './components/NavbarAfterLogin';

function App() {
  const [booksData, setBooksData] = useState(Data);
  const [adData, setAdData] = useState(AdData);
  const [session, setSession] = useState('');

  
  return (
    <div className="App">
      <div className="container">
        {
          // sessionStorage.getItem('logined')
          session ? (
            <>
              <NavbarAfterLogin logout={(logout)=>{setSession(logout)}}/>
              <Routes>
                <Route path="/modifyinfo" element={<ModifyInfo />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/qnalist/qna" element={<QnA />} />
                <Route path="/qnalist" element={<QnAList />} />
                <Route path="/track" element={<Track />} />
                <Route path="/" element={<MainPage booksData={booksData} />} />
                <Route path="/bestbookspage" element={<BestBooksPage booksData={booksData} />} />
                <Route path="/newbooks" element={<NewBooks booksData={booksData} />} />
                <Route path="/domestic" element={<Domestic booksData={booksData} />} />
                <Route path="/foreign" element={<Foreign booksData={booksData} />} />
                <Route path="/mypage" element={<MyPage booksData={booksData} />} />
                <Route path="/ShoppingBasket" element={<ShoppingBasket booksData={booksData} setBooksData={setBooksData}/>} />
                <Route path="/ShoppingList" element={<ShoppingList booksData={booksData} />} />
                <Route path="/detail/:proNum" element={<Detail booksData={booksData} />} />
                <Route path="/emptyad/:id" element={<EmptyAd adData={adData}/>} />
                <Route path="/register" element={<Register booksData={booksData} setBooksData={setBooksData} />} />
                <Route path="/charge" element={<Charge booksData={booksData} setBooksData={setBooksData} />} />
              </Routes>
            </>
          ):(

            <>
              <Navbar />
              <Routes>
                <Route path="/login" element={<Login logined={(logined)=>setSession(logined)} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/finding" element={<Finding />} />
                <Route path="/" element={<MainPage booksData={booksData} />} />
                <Route path="/bestbookspage" element={<BestBooksPage booksData={booksData} />} />
                <Route path="/newbooks" element={<NewBooks booksData={booksData} />} />
                <Route path="/domestic" element={<Domestic booksData={booksData} />} />
                <Route path="/foreign" element={<Foreign booksData={booksData} />} />
                <Route path="/detail/:proNum" element={<Detail booksData={booksData} />} />
                <Route path="/emptyad/:id" element={<EmptyAd adData={adData}/>} />
                <Route path="/ShoppingBasket" element={<ShoppingBasket booksData={booksData} setBooksData={setBooksData}/>} />
                <Route path="/ShoppingList" element={<ShoppingList booksData={booksData} />} />
                  
              </Routes>
            </>
          )
        }
        {/* <img src={image} alt="물개쓰" width="10%"/> */}
      </div>
    </div>
  );
}

export default App;