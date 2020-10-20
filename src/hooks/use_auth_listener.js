import {useState,useEffect,useContext} from 'react';


import {FirebaseContext}from '../firebase_context';


export default function useAuthListener(){
	console.log("use Atut Listener")
	const [user ,setUser] = useState("")
	const {firebase} = useContext(FirebaseContext)


	useEffect(()=>{
			const listener = firebase.auth().onAuthStateChanged((authUser)=>{
				if(authUser){
				localStorage.setItem("authUser",JSON.stringify(authUser));
				setUser(authUser)
				}
				else{
				localStorage.removeItem("authUser");
				setUser(null)

				}
				
			});

			return ()=>listener();
			





	},[])
}