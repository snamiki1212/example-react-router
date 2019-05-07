import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC= () => {
  return(
    <>
      <Header />
      <p>Programming Languagesについての一覧を表示するアプリ</p>
      <p>ここに一覧とリンク</p>
      <Footer />
    </>
  );
}

export default Home;