import React, {useState, useEffect} from 'react';

import { doc, setDoc, getDocs, collection } from "firebase/firestore"; 
import { db } from '../firebase';

const Admin = () => {

    //
    useEffect(() => {

        getFacilities()

    }, [])

    //use selects facility from a dropdown menu
    //map through each shift and create dropdown menu for each
    const tempArray = []
    const [facility, setFacility] = useState([])

    const getFacilities = async () => {
        //find all docs(facilities) in shifts collection
        const querySnapshot = await getDocs(collection(db, "shifts"));
        querySnapshot.forEach((doc) => {
            setFacility([...facility, doc.id])
            console.log('added : ' + doc.id)

        });


        
        
      
        
    }

    const createShift = async () => {
        // Add a new document in collection "cities"
        await setDoc(doc(db, "shifts", "admin"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    }


    return (
        <div className='page
        w-screen
        h-screen
        bg-red-300
        flex
        justify-center
        items-center'>

        <input className='shiftsearch
        w-1/2
        h-8
        rounded-lg
        p-2' placeholder='Search  open shifts'></input>

        {}

            
        </div>
    );
}

export default Admin;
