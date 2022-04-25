import React from 'react';
import './Home.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);
    return (
        <div className='Home'>   
            {
                courses.slice(0, 4).map(course => <Course 
                key={course.key} 
                course={course}
                >
               </Course>)
            }
        </div>
    );
};

export default Home;