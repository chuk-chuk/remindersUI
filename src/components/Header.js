import React from 'react';
import { PageHeader, Glyphicon } from 'react-bootstrap';

const Header = () => {
    return (
      <PageHeader>
        <div className="header-main">
		      Reminders <Glyphicon glyph="align-justify" />
        </div>
	    </PageHeader>
    )
  }

export default Header;
