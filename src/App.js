import './App.css';
import { Layout, Navigation, Drawer, Header, Content } from 'react-mdl'
import Main from './components/Main'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="J. Talmage Lucas" scroll>
            <Navigation>
              <Link to="/React-Portfolio">Home</Link>

              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer >
            <Navigation>
              <Link to="/">Home</Link>

              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
