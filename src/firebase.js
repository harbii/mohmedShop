import { getDatabase, ref as Reference , onValue} from "firebase/database";
import { initializeApp } from "firebase/app";
await initializeApp( {
    apiKey           : "AIzaSyBFze76GCC9-MfNll_4_twwA04R_mWKKYk"  ,
    authDomain       : "test-d010f.firebaseapp.com"               ,
    projectId        : "test-d010f"                               ,
    storageBucket    : "test-d010f.appspot.com"                   ,
    messagingSenderId: "234176974670"                             ,
    appId            : "1:234176974670:web:99f528ecb120570d9bd81f",
    measurementId    : "G-2LH03JLTVM"
} );
const Database = getDatabase( ) ;
export {
    Database , Reference , onValue
}