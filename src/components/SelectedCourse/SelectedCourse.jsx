import PropTypes from "prop-types";

const SelectedCourse = ({course}) => {
    const {title} = course;
    
  
   
    return (
        <div>          
            <li>{title} </li>            
        </div>
    );
};

SelectedCourse.propTypes = {
    course: PropTypes.object.isRequired, 
}

export default SelectedCourse;