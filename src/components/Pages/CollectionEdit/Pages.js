import React from 'react';
import {Pagination} from 'semantic-ui-react';

const Pages = ({pageChange, activePage, totalPages}) => {
  let display = null;
  if (totalPages > 1)
    display = (
      <Pagination
        firstItem={null}
        lastItem={null}
        attached="bottom"
        defaultActivePage={activePage}
        onPageChange={pageChange}
        totalPages={totalPages}
        tabular
      />
    );
  return display;
};

export default Pages
