import React from 'react';
import ReactDom from 'react-dom';
import { PageHeader, ButtonToolbar, Glyphicon } from 'react-bootstrap';

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
