import './App.css';
import { requestPermission, useFirebaseNotifiactions } from './hooks/useFirebaseNotifiactions';


function App() {
  const a =useFirebaseNotifiactions()
  // console.log("🚀 ~ file: App.js:7 ~ isTokenFound:", isTokenFound)


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


