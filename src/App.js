import './App.css';
import SplitPane, { Pane }  from 'react-split-pane';

function App() {
  return (
    <div className="App">
      <SplitPane split="vertical" allowResize={true}>
        <Pane initialSize="50%" className="Left">
          <h1>Tom Fong</h1>
          <p>Coming soon...</p>
          <p>Welcome to check out my <a href="https://github.com/tomfong" target="_blank">GitHub</a>!</p>
        </Pane>
        <Pane initialSize="50%" className="Right">
          <h1>Tom Fong</h1>
          <p>Coming soon...</p>
          <p>Welcome to check out my <a href="https://github.com/tomfong" target="_blank">GitHub</a>!</p>
        </Pane>
      </SplitPane>
    </div>
  );
}

export default App;
