import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '50px', paddingBottom: '30px' };
    return (
        <Grid style={divStyle} stackable centered container>
          <Grid.Row>
            <a href={'https://github.com/LOHKER/LOHK'}>
              <Icon size={'big'} name={'github'}/>
            </a>
          </Grid.Row>
          <Grid.Row>
            <Header as={'h4'}>
              &copy; 2020 LOHK Inc. All rights reserved.
            </Header>
          </Grid.Row>
          <Grid.Row>
            <a href={'/#/about'}>About Us</a>
            <p>&ensp;|&ensp;</p>
            <a href={'/#/privacy'}>Privacy Notice</a>
            <p>&ensp;|&ensp;</p>
            <a href={'/#/terms'}>Terms of Service</a>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Footer;
