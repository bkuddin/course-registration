import PropTypes from "prop-types"; // ES6
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectedCourses}) => {
    const [courses, setCourses]= useState([]);

    useEffect(()=> {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    
    return (
        <div className="md:w-9/12">
            <h3>Courses: {courses.length}</h3>
            <div className="grid md:grid-cols-3 gap-4">
            
                {
                    courses.map(course => <Course 
                        key={course.id} 
                        course={course} 
                        handleSelectedCourses={handleSelectedCourses}>

                        </Course>)
                }
            
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSelectedCourses: PropTypes.func.isRequired,
}

export default Courses;