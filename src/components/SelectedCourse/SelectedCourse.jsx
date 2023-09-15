import PropTypes from "prop-types";

const SelectedCourse = ({course}) => {
    const {title} = course;
    
  
   
    return (
        <div className="my-4 pl-8">          
            <li className="font-semibold text-gray-400">{title} </li>            
        </div>
    );
};

SelectedCourse.propTypes = {
    course: PropTypes.object.isRequired, 
    
}

export default SelectedCourse;