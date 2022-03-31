import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import { EditEventForm } from 'components/EditEventForm';

const EditEvent: React.FC = () => (
  <div className="bx--grid bx--grid--full-width edit-event">
    <div className="bx--row">
      <div className="bx--col-lg-16">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Events</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Revenue reporting Q2</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="edit-event__heading">Edit event</h1>
      </div>
    </div>
    <EditEventForm />
  </div>
);

export default EditEvent;
