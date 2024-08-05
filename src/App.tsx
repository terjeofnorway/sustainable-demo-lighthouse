import { Header } from './components/header/Header';
import { News } from './components/news/News';

import './App.css';
import { NewsItemData } from './types/NewsData';
import { Footer } from './components/footer/Footer';

const newsData: NewsItemData[] = [
  {
    title: 'Hurtigstrikk',
    text: 'Strikk en genser på bare 4,5 minutter mens du opplever negativ G hele 4 ganger!',
    image: 'speed-sweater.webp',
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
