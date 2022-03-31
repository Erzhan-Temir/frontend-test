import React from 'react';
import { Header, HeaderContainer, HeaderName } from 'carbon-components-react';

const FormHeader: React.FC = () => (
  <HeaderContainer
    render={() => (
      <Header aria-label="IBM Watson Media" className="form-header">
        <HeaderName href='#' prefix="IBM" className="form-header-name">
          Watson Media
        </HeaderName>
      </Header>
    )}
  />
);

export default FormHeader;
