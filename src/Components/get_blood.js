import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../Context/firebase_context'
import '../Styles/get.css'





export default function GetBlood() {
	const {firebase} = useContext(FirebaseContext)

	const [content,setContent] = useState([]);

useEffect(() => {
    firebase
      .firestore()
      .collection("donors")
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);

      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
	
	// console.log("content",content)
	// let specific = content.filter(el=>el.added_by=="tamangsagar70@gmail.com");
	// console.log(specific);
	console.log("content",content)

	

 	function calcAge(data){
 		let slected_date = new Date(data);
  				// setDate(slected_date.toString());
  				let current_date = new Date(); 
  				let passed_year = Math.abs(current_date.getUTCFullYear() - slected_date.getUTCFullYear());
  				// console.log(passed_year);
  				// setAge(passed_year)
  				return passed_year;

 	}



  return (
  	<>
  	<div className="get_blood_container">
   <h1>GetBlood</h1>
   <table>
   <tbody>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Contact</th>
    <th>Blood Type</th>
    <th>Email</th>
    <th>Location</th>



  </tr>
 
  {
  	content.map(elem =>{
  		return <tr key={elem.id}>
  			<td>{elem.fullname}</td>
  			<td>{calcAge(elem.dob)}</td>

  			<td>{elem.phone_number}</td>

  			<td>{elem.bloodgroup}</td>

  			<td>{elem.email}</td>
  			<td><a href={`https://www.google.com/maps/@${elem.location_coords},14z`}>{elem.location_coords}</a></td>




  		</tr>
  	})

  }
  </tbody>
  
</table>



  	</div>
  	</>
  	);
}


