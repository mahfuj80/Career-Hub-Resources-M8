import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col gap-6 items-center justify-center">
      <h1 className=" font-bold text-2xl">Oops!!!</h1>
      <Link
        className="bg-slate-500 py-2 px-3 rounded-lg text-white hover:bg-slate-600"
        to={'/'}
      >
        Go Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
