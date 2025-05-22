import "./App.css";
import ProfileCard from "./assets/Components/Miniproject1";
import TaskList from "./assets/Components/Miniproject2";
import ColorfulText from "./assets/Components/Miniproject3";
import WhatAreProps from "./assets/Components/Task1";
import InlineStylingProps from "./assets/Components/Task10";
import ButtonClickWithProps from "./assets/Components/Task11";
import ReusableCard from "./assets/Components/Task12";
import ParentComponent from "./assets/Components/Task13";
import SimpleTextProp from "./assets/Components/Task2";
import MultipleProps from "./assets/Components/Task3";
import DestructuringProps from "./assets/Components/Task4";
import BooleanProp from "./assets/Components/Task5";
import DefaultProps from "./assets/Components/Task6";
import ListRenderingProps from "./assets/Components/Task7";
import ObjectProps from "./assets/Components/Task8";
import ConditionalRenderingProps from "./assets/Components/Task9";

function App() {
   const handleClick = () => {
    console.log("Button Clicked");
  };
  const myTasks = ["Learn React", "Write Code", "Build Projects"];
  return (
    <div>
      <h2>Task1:</h2>
    <WhatAreProps/>
    <h2>Task2:</h2>
    <SimpleTextProp message="Hello from Props!"/>
    <h2>Task3:</h2>
    <MultipleProps name="Alice" age={25}/>
    <h2>Task4:</h2>
    <DestructuringProps name="John" city="New York"/>
    <h2>Task5:</h2>
    <BooleanProp isStudent={true} />
    <h2>Task6:</h2>
    <DefaultProps/>
    <h2>Task7:</h2>
    <ListRenderingProps hobbies={['Reading', 'Gaming', 'Coding']} />
    <h2>Task8:</h2>
      <ObjectProps user={{ name: 'Sam', email: 'sam@example.com', phone: '123-456-7890' }} />
      <h2>Task9:</h2>
      <ConditionalRenderingProps name="Chris" />
      <h2>Task10:</h2>
      <InlineStylingProps color="green" />
      <h2>Task11:</h2>
      <ButtonClickWithProps onClick={() => console.log("Button Clicked")} />
        <h2>Task12:</h2>
      <ReusableCard title="React Card" description="Reusable component with props" />
      <h2>Task13:</h2>
      <ParentComponent />
      <h2>Miniproject1:</h2>
       <ProfileCard name="Alice" age={25} city="New York" />
       
      <ProfileCard />
      <h2>Miniproject2:</h2>
      <TaskList tasks={myTasks}/>
     <h2>Miniproject3:</h2>
      <ColorfulText text="Hello in Red!" color="red" />
      
      <ColorfulText text="Hello in Blue!" color="blue" />
      <h2>Miniproject4:</h2>
        <ButtonClickWithProps onClick={handleClick} />
   
      
    </div>
  );
}

export default App