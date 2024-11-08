import PropTypes from 'prop-types';

const Home = ({ userRole }) => {
  return (
    <div>
      <h1>Bienvenido a la Plataforma de Citas Médicas</h1>
      <p>Actualmente estás conectado como: {userRole}</p>
    </div>
  );
};

Home.propTypes = {
  userRole: PropTypes.string,
  setUserRole: PropTypes.func.isRequired,
};

export default Home;
