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
  // 0으로 Index값이 셋팅되어있는데 0을 수정하면 setter함수 내에서 렌더링 필요를 못느낌 다른값으로 셋팅 해줘야함(리렌더링 X)
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    // 기존에 index에 직접 memo를 넣어주게되면 불변성 훼손 -> 배열을 복사하여 값을 넣어주고 그 새로운 메모를 set함수에 넣기
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setMemos(newMemos);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIdex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
