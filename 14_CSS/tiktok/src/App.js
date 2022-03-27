import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Button from './components/Button'
import GlobalStyles from './components/GlobalStyles'

// module không hổ trợ * hay tagname
// Không kế thừa được
function App() {
  return (
    <GlobalStyles>
      <div className="App" style={{ padding: 30 }}>
          <Heading />
          <Paragraph />
          <Button />
          <div>d</div>
          <div className="d-flex">a</div>
      </div>
    </GlobalStyles>
  );
}

export default App;
