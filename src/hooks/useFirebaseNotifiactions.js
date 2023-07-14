import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../config/config";
import {vapidKey} from '../config/config'

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = () => {

    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {

      if (permission === "granted") {

        console.log("Notification User Permission Granted."); 
        return getToken(messaging, { vapidKey: `BJw640PII3rVQpjbxNBnJKh1PtHmk4GveC5PQBpr7OOQi7CxZ5VOeDolnK6x-niFWtkc_t-g1g8yPmDqUaGpyLc` })
          .then((currentToken) => {

            if (currentToken) {

              console.log('Client Token: ', currentToken);
            } else {
              
              console.log('Failed to generate the app registration token.');
            }
          })
          .catch((err) => {

            console.log('An error occurred when requesting to receive the token.', err);
          });
      } else {

        console.log("User Permission Denied.");
      }
    });

  }

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

export const useFirebaseNotifiactions = () => {
    const [isTokenFound, setIsTokenFound] = useState(false)
    
    useEffect(()=> {
        requestPermission();
        const unsubscribe = onMessageListener().then((payload) => {
         console.log('payload', payload)
    });
        return () => {
          unsubscribe.catch((err) => console.log('failed: ', err));
        };
    },[])
    
    return {
        isTokenFound
    }
}