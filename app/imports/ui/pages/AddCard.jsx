import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Cards } from '../../api/card/Card';
import NavBar from '../components/NavBar';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  number: String,
  pin: String,
  expire: String,
  notes: String,
});

/** Renders the Page for adding a document. */
class AddCard extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { number, pin, expire, notes } = data;
    const owner = Meteor.user().username;
    Cards.insert({ number, pin, expire, notes, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {

    let fRef = null;
    return (
      <div>
        <NavBar/>
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">New Card</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='number'/>
                <TextField name='pin'/>
                <TextField name='expire'/>
                <TextField name='notes'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
     </div>
    );
  }
}

export default AddCard;
