import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { doc, setDoc, getDocs, collection } from "firebase/firestore"; 
import { db } from '../firebase';

import 'tw-elements'
import { click } from '@testing-library/user-event/dist/click';

const Admin = () => {

    //Facility (from firestore list)
    const [facility, setFacility] = useState([])
    //date (MM/DD/YYYY)
    const [startDate, setStartDate] = useState(new Date())
    //shift hour
    const [shift, setShift] = useState()


    //
    useEffect(() => {

        getFacilities()
        console.log('date is : ' + `${startDate.getMonth() + 1}/${startDate.getDate()}/${startDate.getFullYear()}/`)

    }, [startDate, shift])

    const tempArray = []
    

    const getFacilities = async () => {
        //find all docs(facilities) in shifts collection
        const querySnapshot = await getDocs(collection(db, "shifts"));
        querySnapshot.forEach((doc) => {
            tempArray.push(doc.id)
        });

        setFacility(tempArray)
        
    }

    const createShift = async () => {
        // Add a new document in collection "cities"
        await setDoc(doc(db, "shifts", "admin"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    }

    const clickFn = () => {
        setShift(1)
    }



    return (

        <div className='page
        w-screen
        h-screen
        bg-red-300
        flex
        flex-col
        justify-center
        items-center
        gap-4'>

        <h1 className='text-lg font-extrabold'>Create Shift</h1>

        <select className='dropdown
            px-4
            py-1
            text-center
            rounded-xl'>
            {facility.map((facility) => {
            return (
                <option className='selectFacility
                    shadow-lg
                    rounded
                    bg-blue-300'
                    value={facility}>{facility}</option>
            )
            })}
        </select>

        

        <div className="date-picker-wrapper">
        <DatePicker className='date-picker
            w-1/8 
            text-center
            rounded-xl' 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} />
        </div>

        <div className='shiftSelect
            flex
            bg-blue-100
            rounded-lg
            gap-4'>

                
        <button className={`shiftBtn
                ${shift == 1 ? 'ring-2 ring-red-500' : 'bg-blue-400'}
                hover:bg-blue-500
                active:bg-blue-100
                drop-shadow-lg
                shadow-lg
                rounded-lg
                px-4`}
                id='1st'
                onClick={() => setShift(1)}>1st</button>    
        <button className={`shiftBtn
                ${shift == 2 ? 'ring-2 ring-red-500' : 'bg-blue-400'}
                hover:bg-blue-500
                active:bg-blue-100
                drop-shadow-lg
                shadow-lg
                rounded-lg
                px-4`}
                id='1st'
                onClick={() => setShift(2)}>2nd</button>  
        <button className={`shiftBtn
                ${shift == 3 ? 'ring-2 ring-red-500' : 'bg-blue-400'}
                hover:bg-blue-500
                active:bg-blue-100
                drop-shadow-lg
                shadow-lg
                rounded-lg
                px-4`}
                id='1st'
                onClick={() => setShift(3)}>3rd</button>   

        </div>

        

        <button className='createBtn
            bg-blue-400
            hover:bg-blue-500
            active:bg-blue-100
            rounded-lg
            px-4
            py-1
            drop-shadow-lg
            shadow-lg
            tracking-wider
            font-bold'>Create Shift</button>





        
            
        </div>
    );
}

export default Admin;
