import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
// import { act } from 'react-dom/test-utils';

const renderWithRouter = (component) => {
  const customHistory = createMemoryHistory();
  const returnRender = {
    ...render(
      <Router history={ customHistory }>
        { component }
      </Router>,
    ),
  };

  return { history: customHistory, ...returnRender };
};

export default renderWithRouter;
