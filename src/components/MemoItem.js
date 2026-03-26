function MemoItem({ children, onClick, isSelected }) {
  return (
    <div
      // 공백으로 클래스 구분이 가능해서 'selected'하면 css적용안됨
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default MemoItem;
