import PropTypes from 'prop-types';

const Job = ({ job }) => {
  const { logo } = job || {};
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
