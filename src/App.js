
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

import Card from './components/shared/Card';
import Feedbackstats from './components/Feedbackstats';
import Feedbackform from './components/Feedbackform';
import Aboutpage from './pages/Aboutpage';
import { Feedbackprovider } from './context/Feedbackcontext';

function App() {
 
 

  return (

<Feedbackprovider>


    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Feedbackform  />
                <Feedbackstats  />
                <FeedbackList   />
              </>
            }
          />

          <Route path='/about' element={<Aboutpage />} />
        </Routes>
      </div>
    </Router>
    </Feedbackprovider>
  );
}

export default App;
