import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello from Parent!";
  return (
    <div>
      <ChildComponent text={message} />
      <ChildComponent text="Another message!" />
    </div>
  );
}

export default ParentComponent;
