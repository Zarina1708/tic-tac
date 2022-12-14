import './App.css';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }


function MyInfo(props) {
  return (
    <div classname="MyInfo">
      <h1 >{props.name}</h1>
      <p>My name is Zarina, I am 20 years old and I am a 3rd year student at KNU. I was born in Kazakhstan in the capital Astana. I take courses in JavaScript programming. I have been studying for 4 months already, I want to master this JS language and find a job...</p>
      <ul><li>New York</li></ul>
      <ul><li>Switzerland</li></ul>
      <ul><li>Paris</li></ul>
    </div>
  )
}


export default MyInfo;
