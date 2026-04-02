import MemoList from '../MemoList';
import SideBarHeader from '../SideBarHeader';
import SideBarFooter from '../SideBarFooter';
import './index.css';

function SideBar({
  memos,
  addMemo,
  selectedMemoIdex,
  setSelectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIdex={selectedMemoIdex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
