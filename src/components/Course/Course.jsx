import PropTypes from "prop-types"; // ES6

const Course = ({ course }) => {
  const { cover, title, body, price, credit } = course;
  return (
    <div>
      <figure>
        <img className="w-72" src={cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <p>Price: {price}</p>
          <p>Credit: {credit}</p>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
