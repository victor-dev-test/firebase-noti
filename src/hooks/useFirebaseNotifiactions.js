import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../config/config";
import {vapidKey} from '../config/config'

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const fetchToken = async (setTokenFound) => {
    try {
      const currentToken = await getToken(messaging, {
        vapidKey: 'BHGPr3pJQSflJAJtTIVXbmcEXlPV_HP29TZQRcqrGCN10gKIa-ojIJmtvM9kQGcsNKsWIA6ezKFG8Bd6LTjaVc0'
      });
  
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        // setTokenFound(false);
        // shows on the UI that permission is required 
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    }
  };
  

export const useFirebaseNotifiactions = () => {
    const [isTokenFound, setIsTokenFound] = useState(false)
    fetchToken()
    
    
    return {
        isTokenFound
    }
}