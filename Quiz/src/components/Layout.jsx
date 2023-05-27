import Nav from "./Nav";
import classese from '../assets/styles/Layout.module.css'

const Layout = ({ children } ) => {
  return (
    <>
          <Nav />
          <div className={classese.main}>
              <div className={classese.container}>
                  {children}
              </div>
          </div>
    </>
  );
}

export default Layout
