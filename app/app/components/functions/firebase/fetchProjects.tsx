import {firestore, db} from '../../../../firebaseconfig'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {QuerySnapshot, CollectionReference, DocumentData, collection, getDocs, query, onSnapshot, doc} from 'firebase/firestore'

export async function fetchProjects(): Promise<any[]> {
try {

    //const projectRef = db.collection("projects");

    //const q = query(collection(db, "projects"))
    //const unsub = onSnapshot(q, (querySnapshot) => {
    //console.log("Data", querySnapshot.docs.map(d => doc.data()));
  //});
    //const documentRef: CollectionReference<Document> = firestore.collection("projects");
    //const querySnapshot: QuerySnapshot<Document> = await documentRef.get();

    //g__WEBPACK_IMPORTED_MODULE_0__.firebase.firestore is not a function
    //const documentRef = firestore.collection("projects");
    //const querySnapshot = await getDocs(documentRef);
    //const documentRef = firebase.firestore().collection("projekts");
    //const querySnapshot = await getDocs(documentRef);

    //const documentRef = firestore.collection("projects");
    //const querySnapshot = await documentRef.get();
//
    //console.log(documentRef);
    //console.log(querySnapshot);


//
    const data: any[] = [];
//
    //// Loop through the documents in the subcollection and store them in an array
    //querySnapshot.forEach((doc) => {
    //    console.log("Document ID:", doc.id);
    //    console.log("Document Data:", doc.data());
    //    console.log("halå");
//
    //    data.push({ id: doc.id, ...doc.data() });
    //});
//
    //console.log(data);
//
    return data;
} catch (error) {
    console.error('Error querying projects: ', error);
    return [];
}

    //console.log(documentRef);
    //console.log(querySnapshot);
//
//
    //const data:any[] = [];
//
    //// Loop through the documents in the subcollection and store them in an array
    //querySnapshot.forEach((doc) => {
    //    console.log("Document ID:", doc.id);
    //    console.log("Document Data:", doc.data());
    //    console.log("halå");
    //    
    //    data.push({ id: doc.id, ...doc.data() });
    //    //data.push({ id: doc.id, ...doc.data() });
    //});
    //
    //console.log(data);
    //
    //return data;
    //} catch (error) {
    //    console.error('Error querying projects: ', error);
    //    return [];
    //}
}