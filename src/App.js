import './App.css';
import { useFirebaseNotifiactions } from './hooks/useFirebaseNotifiactions';


function App() {
  const {isTokenFound} =useFirebaseNotifiactions()
  console.log("🚀 ~ file: App.js:7 ~ isTokenFound:", isTokenFound)


  return (
    <div className="App">
      home page
      {/* {isTokenFound && 
      ' Notification permission enabled 👍🏻 '
      }
      {!isTokenFound && 
      'Need notification permission ❗️ '
      } */}
    </div>
  );
}

export default App;
