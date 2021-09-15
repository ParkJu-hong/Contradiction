import './App.css';
import Main from './mobile/components/Main.jsx';
import { useMediaQuery } from 'react-responsive';




function App() {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  })
  const isMobileMain = isPc ? "웹페이지" : <Main />;

  return (
    <>
      {/* 메뉴바 컴포넌트에 Link써서 하자 */}
      {isMobileMain}
    </>
  );
}

function hello() {
  return <h2>Hello world</h2>
}

export default App;
