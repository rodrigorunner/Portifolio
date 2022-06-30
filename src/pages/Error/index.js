import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='mt-5 p-5 text-center'>
      <h1>Page Not Found</h1>
      <h3>404</h3>
      <Link className='btn btn-primary' to='/'>Página Inicial</Link>
    </div>
  );
}

export default Error;
