import PropTypes from "prop-types";

const SelectedCourse = ({course}) => {
    const {title} = course;
    return (
        <div>
            <h3>Selected Course: {title} </h3>
            
        </div>
    );
};

SelectedCourse.propTypes = {
    course: PropTypes.object.isRequired, 
}

export default SelectedCourse;