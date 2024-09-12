import { Header } from './components/header/Header';
import { News } from './components/news/News';

import { NewsItemData } from './types/NewsData';
import { Footer } from './components/footer/Footer';

import './App.css';

const newsData: NewsItemData[] = [
  {
    title: 'Tøff hurtigstrikk',
    text: 'Strikk ei trøye på bare 4 og en halv minutt, mens du kjenner havets raseri med negativ G hele fire ganger, arrgh!',
    image: 'pirate-knitting.jpg',
    url: '/hurtigstrikk',
  },
  {
    title: 'Strikkegenser med tyngde!',
    text: 'Du lærer å strikke 2 par ullsokker mens du spinner rundt i Gravitron. Vi garanterer strikkepinner som veier 4 ganger sin vanlige vekt!',
    image: 'rotor-mittens.webp',
    url: '/hurtigstrikk',
  },
  {
    title: 'Rolige masker i strikkhopp',
    text: 'Våg å kaste deg ut i luften mens du monterer delene til en elegang sommerkjole i alpakka-ull. Dette er kurs for viderekommende.',
    image: 'bungee-dress.webp',
    url: '/hurtigstrikk',
  },
];

const App = () => {
  return (
    <>
      <Header />
      <News newsData={newsData} />
      <Footer />
    </>
  );
};

export default App;
