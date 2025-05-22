import ChildComponent from './Childcomponent';

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
