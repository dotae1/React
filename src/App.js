import MemoContainer from './components/MemoContainer';
import { useCallback, useState } from 'react';
import SideBar from './components/SideBar';
import './App.css';
import { getItem, setItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debouncedSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);
  // 0으로 Index값이 셋팅되어있는데 0을 수정하면 setter함수 내에서 렌더링 필요를 못느낌 다른값으로 셋팅 해줘야함(리렌더링 X)
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        // 기존에 index에 직접 memo를 넣어주게되면 불변성 훼손 -> 배열을 복사하여 값을 넣어주고 그 새로운 메모를 set함수에 넣기
        const newMemos = [...memos];

        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem('memo', newMemos);

        return newMemos;
      });
    },
    [selectedMemoIndex],
  );
  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: 'Untitled',
          content: '',
          createdAt: now,
          updatedAt: now,
        },
      ];
      debouncedSetItem('memo', newMemos);
      return newMemos;
    });
    setSelectedMemoIndex(memos.length);

    // localStorage.setItem('memo', JSON.stringify(newMemos));
  }, [memos]);
  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        debouncedSetItem('memo', newMemos);
        return newMemos;
      });

      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex],
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIdex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
