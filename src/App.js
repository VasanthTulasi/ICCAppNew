import './App.css';
import Board from './WhiteBoard/Board';
import firebase,{signInWithGoogle,auth} from './firebase';
import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';

function App(props) {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  }, [])

  return (
    <div className="App">
      <div className='header'>
          <h2 className='heading'>WhiteBoard</h2>
          {
            user?
            <p className='text'>Welcome, {user.displayName}</p>:
            <div/>
          }
          {
            user?
            <Button variant="danger" className="button" onClick={() => auth.signOut()}>Sign out</Button>:
            <Button variant="primary" className="button" onClick={signInWithGoogle}>Sign in with Google</Button>
          }
      </div>
      <div className='body'>
      {
        user?
        <Board/>:
        <h5 className='text'>Please sign-in to see the whiteboard</h5>
      }
      </div>
      <div className='footer'>
          <h2 className='heading'>This project is done as part of Course Work of 'CO4219-CO7219 Internet and Cloud Computing 2021-22 SEM1'
          by Group 20</h2>
      </div>
    </div>
  );
}


export default App;
