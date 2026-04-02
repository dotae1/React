import './index.css';

function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
  return (
    <div
      // 공백으로 클래스 구분이 가능해서 'selected'하면 css적용안됨
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem_delete-button" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default MemoItem;
