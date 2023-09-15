import PropTypes from "prop-types"; // ES6

const Course = ({ course, handleSelectedCourses }) => {
  const {cover, title, body, price, credit } = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <p>Price: {price}</p>
          <p>Credit: {credit}</p>
        </div>
        <button className="btn btn-neutral" onClick={()=>handleSelectedCourses(course)}>Select</button>
      </div>
      
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectedCourses: PropTypes.func.isRequired,
};

export default Course;
