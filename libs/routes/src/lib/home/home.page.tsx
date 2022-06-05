import { NavLink } from 'react-router-dom';
import { Nav } from '../elephant/components';

export const HomePage = () => (
  <main>
    <h2>Home Page</h2>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/elephant/stampede">Elephant</NavLink>
      </li>
      <li>
        <NavLink to="/drip">Drip</NavLink>
      </li>
    </ul>
  </main>
);
