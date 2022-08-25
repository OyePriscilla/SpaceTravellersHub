import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockects } from '../../redux/rockets/rockets';
import Rocket from './rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockects());
  }, []);

  return (
    <div className="container">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.image}
          name={rocket.name}
          description={rocket.description}
        />
      ))}
    </div>
  );
};

export default Rockets;
