import {Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Global from './components/Global';
import publicRoutes from './routes'
import {DefaultLayout} from './components/Layouts'
import { Fragment } from 'react';

function App() {
  return (
    
    <div className="App">
      <Global>    
          <Routes>
            {publicRoutes.map((route,index) => {
                let Layout = DefaultLayout ;
                if (route.layout)
                  Layout=route.layout
                else if(route.layout===null)
                  Layout = Fragment

              const Page = route.component
              return <Route key={index} 
                            path={route.path} 
                            element={
                              <Layout>
                                <Page></Page>
                              </Layout>
                            }
              />
            })}
          </Routes>
      </Global>
    </div>
  );
}

export default App;
