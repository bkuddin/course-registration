import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses]= useState([]);

    useEffect(()=> {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    
    return (
        <div>
            <h3>Courses: {courses.length}</h3>
            <div className="card bg-base-100 shadow-xl grid md:grid-cols-3 gap-10">
            
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            
            </div>
        </div>
    );
};

export default Courses;