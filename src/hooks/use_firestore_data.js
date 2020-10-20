// import { useEffect, useState, useContext } from 'react';
// import { FirebaseContext } from '../firebase_context';

// export default function firestoreData(target) {
//   const [content, setContent] = useState([]);
//   const { firebase } = useContext(FirebaseContext);

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection(target)
//       .get()
//       .then((snapshot) => {
//         const allContent = snapshot.docs.map((contentObj) => ({
//           ...contentObj.data(),
//           docId: contentObj.id,
//         }));

//         setContent(allContent);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   },[]);

//   return { [target]: content };
// }



import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../firebase_context';

export default function useFirestoreData(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
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

  return { [target]: content };
}
