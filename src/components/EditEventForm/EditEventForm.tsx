import React from 'react';
import {
  TextInput,
  Dropdown,
  DatePicker,
  DatePickerInput,
  Form,
  Button,
} from 'carbon-components-react';
import { timezones } from 'constants/timezones';

const EditEventForm: React.FC = () => (
  <Form className="edit-event-form">
    <div className="bx--row">
      <div className="bx--col-lg-8 bx--col-md-6 edit-event-form__event-name">
        <TextInput
          helperText="Displayed as the channel title while the event page is open."
          id="event-name"
          invalidText="A valid value is required"
          defaultValue="Revenue reporting Q2"
          labelText="Event name"
          placeholder="Revenue reporting Q2"
        />
      </div>
    </div>

    <div className="bx--row">
      <div className="bx--col-lg-8 bx--col-md-6">
        <Dropdown
          ariaLabel="Dropdown"
          id="event-timezone"
          items={timezones}
          label="Europe/Budapest"
          titleText="Event time zone"
        />
      </div>
    </div>

    <div className="bx--row edit-event-form__text-info">
      <div className="bx--col-lg-8 bx--col-md-6">
        <h2 className="edit-event-form__subheading">Event date</h2>
        <p className="edit-event-form__p">
          Start and end date of the event displayed on the event page. Sessions
          between these two dates are listed on the event page under the
          Schedule tab.
        </p>
      </div>
    </div>

    <div className="bx--row edit-event-form__datepicker">
      <div className="bx--col-lg-8 bx--col-md-6">
        <DatePicker datePickerType="single">
          <DatePickerInput
            placeholder="28/09/2021"
            labelText="Event start"
            defaultValue="28/09/2021"
            id="event-start"
          />
        </DatePicker>
      </div>
    </div>

    <div className="bx--row edit-event-form__datepicker">
      <div className="bx--col-lg-8 bx--col-md-6">
        <DatePicker datePickerType="single">
          <DatePickerInput
            placeholder="28/09/2021"
            labelText="Event end"
            defaultValue="28/09/2021"
            id="event-end"
          />
        </DatePicker>
      </div>
    </div>

    <div className="bx--row edit-event-form__text-info">
      <div className="bx--col-lg-8 bx--col-md-6">
        <h2 className="edit-event-form__subheading">Event page</h2>
        <p className="edit-event-form__p">
          Opening the event page turns your channel page into your event's
          landing page.
        </p>
      </div>
    </div>

    <div className="bx--row edit-event-form__datepicker">
      <div className="bx--col-lg-8 bx--col-md-6">
        <DatePicker datePickerType="single">
          <DatePickerInput
            placeholder="26/09/2021"
            labelText="Event page opens"
            defaultValue="26/09/2021"
            id="event-page-opens"
          />
        </DatePicker>
      </div>
    </div>

    <div className="bx--row edit-event-form__datepicker">
      <div className="bx--col-lg-8 bx--col-md-6">
        <DatePicker datePickerType="single">
          <DatePickerInput
            placeholder="28/09/2021"
            labelText="Event page closes"
            defaultValue="28/09/2021"
            id="event-page-closes"
          />
        </DatePicker>
      </div>
    </div>

    <div className="bx--row">
      <div className="bx--col-lg-8 bx--col-md-6 edit-event-form__button-wrapper">
        <Button kind="primary" tabIndex={0}>
          Save
        </Button>
        <Button kind="secondary" tabIndex={0}>
          Cancel
        </Button>
      </div>
    </div>
  </Form>
);

export default EditEventForm;
