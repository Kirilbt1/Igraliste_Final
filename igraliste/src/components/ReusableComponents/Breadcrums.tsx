
import { Link } from 'react-router-dom';
import './Breadcrums.css';

interface Breadcrumb {
  path: string;
  name: string;
}

interface Props {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <nav className='links'>
      <ul className='breadcrumb-list'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li className='breadcrumb-link' key={index}>
            <Link className='link-breadcrumb' to={breadcrumb.path}>{breadcrumb.name}</Link>
            {index < breadcrumbs.length - 1 && (
              <img className='breadcrum-strelka' src="../images/leftStrelka.png" alt="" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
