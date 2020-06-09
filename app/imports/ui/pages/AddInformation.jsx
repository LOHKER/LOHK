import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Informations } from '../../api/information/Information';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  username: String,
  password: String,
  notes: String,
});

/** Renders the Page for adding a document. */
class AddInformation extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { username, password, notes } = data;
    const owner = Meteor.user().username;
    Informations.insert({ username, password, notes, owner },
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
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">New Account</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='username'/>
                <TextField name='password'/>
                <TextField name='notes'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddInformation;
