import classes from '../../assets/styles/Illustration.module.css'
import signupimage from '../../assets/images/signup.svg';
import loginimage from '../../assets/images/login.svg';

const Illustration = () => {
  return (
    <>
      <div className={classes.illustration}>
        <img src={signupimage} alt="Signup" />
      </div>
    </>
  );
}

export default Illustration
