import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Content } from 'carbon-components-react';
import { FormHeader } from 'components/FormHeader';
import { EditEvent } from 'pages/EditEvent';
import './App.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <FormHeader />
      <Content className='edit-event-content'>
        <Routes>
          <Route path="/frontend-test" element={<EditEvent />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
};

export default App;
