import MemoContainer from './components/MemoContainer';
import { useState } from 'react';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo1',
      content: 'This is Memo1',
      createdAt: 1774533901159,
      updatedAt: 1774533901159,
    },
    {
      title: 'Memo2',
      content: 'This is Memo2',
      createdAt: 1774533993692,
      updatedAt: 1774533993692,
    },
  ]);

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
