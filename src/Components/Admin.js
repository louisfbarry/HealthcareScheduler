import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { doc, setDoc, getDocs, collection } from "firebase/firestore"; 
import { db } from '../firebase';

import 'tw-elements'
import { click } from '@testing-library/user-event/dist/click';

const Admin = () => {

    //Facility (from firestore list)
    const [facility, setFacility] = useState(["loading..."])
    const [currentFacility, setCurrentFacility] = useState()

    //date (MM/DD/YYYY)
    const [date, setDate] = useState(new Date())
    //shift hour
    const [shift, setShift] = useState()


    useEffect(() => {

        getFacilities()
        console.log("current facility is " + currentFacility)
        

        //console.log('date is : ' + `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}/`)

    }, [date, shift, currentFacility])

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

        console.log('you just clicked create shift!')

        // Add a new document in collection "cities"
        await setDoc(doc(db, "shifts", currentFacility), {
            facility: currentFacility,
            date: date,
            shift: shift
        })
        console.log('shift created')
    
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
            rounded-xl'            
            onChange={(e) => setCurrentFacility(e.target.value)}>
            {facility.map((currentFacility) => {

                return (
                    <option className='selectFacility
                        shadow-lg
                        rounded
                        bg-blue-300'
                        value={currentFacility}
                    >{currentFacility}</option>
                )
            })}
        </select>

        

        <div className="date-picker-wrapper">
            <DatePicker className='date-picker
                w-1/8 
                text-center
                rounded-xl' 
                selected={date} 
                onChange={(date) => setDate(date)} />
        </div>

        <div className='shiftSelect
            flex
            bg-blue-100
            rounded-lg
            gap-4'>
                
            <button className={`shiftBtn
                    ${shift === 1 ? 'ring-2 ring-red-500' : 'bg-blue-400'}
                    hover:bg-blue-500
                    active:bg-blue-100
                    drop-shadow-lg
                    shadow-lg
                    rounded-lg
                    px-4`}
                    id='1st'
                    onClick={() => setShift(1)}>1st</button>    
            <button className={`shiftBtn
                    ${shift === 2 ? 'ring-2 ring-red-500' : 'bg-blue-400'}
                    hover:bg-blue-500
                    active:gradient-to-t active:from-blue-100 active:to-blue-400
                    drop-shadow-lg
                    shadow-lg
                    rounded-lg
                    px-4`}
                    id='1st'
                    onClick={() => setShift(2)}>2nd</button>  
            <button className={`shiftBtn
                    ${shift === 3 ? 'ring-2 ring-red-500' : 'bg-blue-400'}
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
            font-bold'
            onClick={() => createShift()}>Create Shift</button>
            
        </div>
    )
}

export default Admin;
