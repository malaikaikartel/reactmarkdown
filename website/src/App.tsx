import { useState } from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import Github from '@uiw/react-shields/esm/github';
import Npm from '@uiw/react-shields/esm/npm';
import BackToUp from '@uiw/react-back-to-top';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@wcj/dark-mode';
import logo from './logo.svg';
import { Preview } from './preview';
import './App.css';

let val = 1;

const App = () => {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <BackToUp>Top</BackToUp>
      <dark-mode permanent light="Light" dark="Dark"></dark-mode>
      <GitHubCorners zIndex={9999} fixed target="__blank" href="https://github.com/uiwjs/react-markdown-preview" />
      <header className="App-header">
        <img style={{}} src={logo} className="App-logo" alt="logo" />
        <a href="https://github.com/uiwjs/react-markdown-preview" target="_blank" rel="noopener noreferrer">
          React Markdown Preview
        </a>
        <p>
          React component preview markdown text in web browser. The minimal amount of CSS to replicate the GitHub
          Markdown style.
        </p>
      </header>
      <div className="App-editor">
        <button onClick={() => setValue('# Markdown ' + val++)}>set value</button>

        <textarea
          placeholder="Please enter the Markdown code!"
          value={value}
          spellCheck="false"
          onChange={(e) => setValue(e.target.value)}
        />
        <MarkdownPreview className="App-editor-preview" source={value} />
      </div>
      <Preview />
      <div className="App-footer">
        <Github user="uiwjs" repo="react-markdown-preview">
          <Github.Social type="forks" href="https://github.com/uiwjs/react-markdown-preview" />
          <Github.Social type="stars" href="https://github.com/uiwjs/react-markdown-preview/stargazers" />
          <Github.Social type="watchers" href="https://github.com/uiwjs/react-markdown-preview/watchers" />
        </Github>
        <Npm.Version
          scope="@uiw"
          packageName="react-markdown-preview"
          href="https://www.npmjs.com/package/@uiw/react-markdown-preview"
        />
      </div>
    </div>
  );
};

export default App;
