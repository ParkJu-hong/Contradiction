import './App.css';
import Main from './mobile/components/Main.jsx';
import MainDesktop from './desktop/MainDesktop';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  })
  const isMobileMain = isPc ? <MainDesktop /> : <Main />;

  return (
    <>
      {/* 메뉴바 컴포넌트에 Link써서 하자 */}
      {isMobileMain}
    </>
  );
}


export default App;
