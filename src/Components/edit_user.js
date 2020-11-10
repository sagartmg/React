import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../Context/firebase_context'





export default function EditUser(props) {
	const {firebase} = useContext(FirebaseContext)
  const[content,setContent]= useState([])
  const[doc_id,setDocId] = useState("");
  const[selected_document,setDocument] = useState("");
  // console.log
  console.log("fullnameeeeeeeeeee",selected_document.fullname)

  // console.log(props.location.state.detail)
  const [datee,setDate] = useState(new Date().toString())
  const [age,setAge] = useState(0);
  const [current_location,SetCurrentLocation] = useState()
  const [temp_location,setTemp] = useState("27.7090319,85.2911131")
  const [checkbox_,setCheckbox] = useState(false)
  const [latitude,setLatitue] = useState("27.7090319");
  const [longitude,setLongitue] = useState("85.2911131");
  const [direct_change,setDirectChange] = useState(false)

  const [fullname,setFullName] = useState("");
  console.log("ffffffffffffff",fullname);
  const[phone_number,setPhonenumber] = useState("");
  const[email,setNewEmail] = useState("");

  const[password,setNewPassword] = useState("");
  const[location_coords,setNewLocation] = useState("");
    // const[location_coords,setNewLocation] = useState("");
    const[dob,setNewDob] = useState("")
    const[bloodgroup,setNewBloodgroup] = useState("")



  useEffect(()=>{
     var childrens = document.querySelector(".form_actual").children;
      // console.log("childrens",childrens)
      let childrens_list = [...childrens]
      childrens_list.forEach(childs=>childs.style.marginBottom="1em")
      // console.log(childrens_list);


      }
         
      );



    useEffect(()=>{
      console.log("useEffect")
      // console.log("detialsss",props.location.state.detail);

      firebase.firestore().collection("donors").where("email", "==",props.location.state.detail)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setDocId(doc.id);
            setDocument(doc.data());
            setFullName(doc.data().fullname);
            setPhonenumber(doc.data().phone_number);
            setNewLocation(doc.data().location_coords);
            setNewEmail(doc.data().email)
            setNewDob(doc.data().dob)
            setNewBloodgroup(doc.data().bloodgroup);


        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    },[])



  function update(){
    firebase.firestore().collection("donors").doc(doc_id).update({
                  fullname:fullname,
                  phone_number:phone_number,
                  email:email,
                  location_coords:location_coords,
                  dob:dob,
                  bloodgroup:bloodgroup
    })
    .then(function() {
        alert("document updated successfully");
        console.log("Document successfully updated!");
    })
    .catch(error=>alert(error));
    }
      // update();
	
	// console.log("content",content)





  console.log("re-render")
  // const {firebase} = useContext(FirebaseContext)


   function geo(){
      console.log("geo")
        if('geolocation' in navigator) {
        // console.log("geo-availabale")
        // let temp;
        // let temp2;
        
        let hell;
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position.coords.latitude, position.coords.longitude);
           hell = `${position.coords.latitude},${position.coords.longitude}`
           setLatitue(position.coords.latitude);
           setLongitue(position.coords.longitude);
           // console.log("ok prepeare")          // return 'nothing from geo'
         
          // console.log(hell,"hell")
          // alert("location changed")
          // console.log("hell",hell)
          // setTemp(temp2);
           if(checkbox_ && !direct_change){
            console.log("change in temp")
          setTemp(`${latitude},${longitude}`)


          }



        })
        // console.log("later should be printed")
        // return hell;


    } else {
        console.log("geo location not availabale")
        // return "geo locaiton not availabale"


     

    }
    // return "geovalue "
  }
  geo();
  // console.log("geo value",geo());


   function today(){
    let today= new Date(datee);
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    let date = today.getDate().toString();
    
    if(month.length===1){
      month = "0"+month;
    }
    if(date.length===1){
      date = "0"+date;
    }

      let today_date =  `${year}-${month}-${date}`
      // console.log(today_date);
      return today_date;
  }

  
  // function getUUID() {
  //         // eslint gets funny about bitwise
  //         /* eslint-disable */
  //         return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  //             const piece = (Math.random() * 16) | 0;
  //             const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
  //             return elem.toString(16);
  //         });
  //         /* eslint-enable */
  //       }
      console.log("render dob",dob);


  return (
    <>
   <div className="form_container">
   <div className="form_container_inner">
   <form className="form_actual" onSubmit={(e)=>{e.preventDefault();console.log(e.target);
              update();
              // console.log(e.target.fullname.value)
              // console.log(e.target.phone_number.value)
              // console.log(e.target.selected_date.value)
              // console.log(e.target.bloodgroup.value)
              // console.log(geo())

              const{fullname,phone_number,location_coords,selected_date,bloodgroup} = e.target;
              console.log(fullname.value,phone_number.value,location_coords.value,selected_date.value,bloodgroup.value);
              

              // History.push("/give")
              console.log(props)
              // props.history.push("/verify")
              // const promise = firebase.auth().createUserWithEmailAndPassword(e.target.email.value, e.target.password.value);
            // console.log(promise);
            // console.log(typeof(promise))
            // promise.then(user => {
            //   console.log("verifcation sent")
            //    user.user.sendEmailVerification();

            //        firebase.firestore().collection('donors').add({
            //       id: getUUID(),
            //       fullname:fullname.value,
            //       phone_number:phone_number.value,
            //       email:email.value,
            //       location_coords:location_coords.value,
            //       dob:selected_date.value,
            //       bloodgroup:bloodgroup.value
            //     })
            //     .then(snap=>{
            //       console.log("snap",snap.id)
            //       console.log("added to firebase firestore");
            //     })  
            //     .catch(error => console.log("error",error));

            //    alert("verifcation link has been sent to your email")
            //   props.history.push("/login")
            // }
            // );
// 



            //  todo add data to firestore now. 


            // props.history.push("/login")


              //todo instead of verifciation direct add to firebase,only if verfied email  and to login page. 
              // History.push("/give")
              // todo send the OTP code using google auth.firebase auth. 
              // todo save to mongovia axios



            }}>
      <input placeholder="fullname" name="fullname"  className="get_big" value={fullname} onChange={(e)=>setFullName(e.target.value)}/>
      <input placeholder="phone-number" name="phone_number" className="get_big" value={phone_number} onChange={(e)=>setPhonenumber(e.target.value)}/>
    




      
    
      <div className="checkbox_container form_titles">
      <input type="checkbox" checked={checkbox_} onChange={(e)=>{
          setCheckbox(!checkbox_);
          if(e.target.checked){
            console.log("non idrect change");
            // setDirectChange(false);
            setDirectChange(false)
            setNewLocation(`${latitude},${longitude}`);
          
          }

          else{
            setTemp("");
            alert("copy a fake nearby co-ordinates from google map")
            // <a href="https://www.w3schools.com" target="popup" onclick="window.open('/','name','width=600,height=400')">Open page in new window</a>
            let MAP_URL= `https://www.google.com/maps/@${latitude},${longitude},15z`
              window.open(MAP_URL,'name','width=600,height=400');

            // todo how to modify the default temp_location value though. 
          }

      }}/><p>current location</p>
      </div>

      <input type="text" className="get_big" placeholder={checkbox_?"":"paste co-ordinates: latitude,longitude "} name="location_coords" value={location_coords} onChange={(e)=>{
        // setCheckbox(!checkbox_);
          // if(checkbox_){
          //   console.log("new location to be set",latitude,longitude)
          //   setNewLocation(`${latitude},${longitude}`);
          // }
          // else{
            setNewLocation(e.target.value)
          // }
      }}/>

      <label className="form_titles">Date Of Birth</label>
      <input type="date" name="selected_date" value={dob} onChange={
        (e)=>{
          let slected_date = new Date(e.target.value);
          // setNewDob(slected_date.toString());

          setDate(slected_date.toString());

           let today= new Date(datee);
          let year = slected_date.getFullYear().toString();
          let month = (slected_date.getMonth()+1).toString();
          let date = slected_date.getDate().toString();
          
          if(month.length===1){
            month = "0"+month;
          }
          if(date.length===1){
            date = "0"+date;
          }

            let today_date =  `${year}-${month}-${date}`
            console.log("today_date",today_date);

      setNewDob(today_date);
      // 2008-11-06
      // setNewDob("2008-11-06")






          let current_date = new Date(); 
          let passed_year = Math.abs(current_date.getUTCFullYear() - slected_date.getUTCFullYear());
          // console.log(passed_year);
          setAge(passed_year)
          // todo set it as age of person
          
        }
      }/>
      <label className="form_titles">bloodgroup</label>
      <select name="bloodgroup" id="bloodgroup" name="bloodgroup" value={bloodgroup} onChange={(e)=>setNewBloodgroup(e.target.value)}>
        <option value ="A+">A+</option>
        <option value ="A-">A-</option>
        <option value ="B+">B+</option>
        <option value ="B-">B-</option>
        <option value ="O+">O+</option>
        <option value ="O-">O-</option>
        <option value ="AB+">AB+</option>
        <option value="AB-">AB-</option>

     </select>
     <div className="next_btn_container">
     <input type="submit" value="Update Info" id="next_btn"/>

     </div>

   </form>
   </div>

   
   
   </div>
   
    </>
  );
}


