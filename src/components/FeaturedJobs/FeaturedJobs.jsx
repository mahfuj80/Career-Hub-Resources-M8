import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // is not the best way to show all data
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch('./jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center">
      <div>
        <h2 className="text-5xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? 'hidden' : 'w-[20%] mx-auto'}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn my-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
