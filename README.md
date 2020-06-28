<h1><b>06/01/20 - 06/07/20 | Week One of Development</b></h1>

<b>LOHK's Base</b>

LOHK has decided to use the base template provided by ICS 314 at UH Manoa. For details regarding the template, please click [here](http://ics-software-engineering.github.io/meteor-application-template-react/).

<b>What is complete thus far:</b>

- LOHK's password security is fully functional. There is a list of requirements that the password must meet prior to registration, and if they are not met, account creation is not available.
- The basic page layouts of LOHK has been created and connected. Each page is accessible and ready for front-end development.

<b>What is pending:</b>

- LOHK strives to create a dual authentication feature where post log-in, the user will be redirected to a page to input a pin that is sent to their email. The pin must match and if it does not, they can not access the dashboard to view their saved information.
- LOHK is still bare-bones when it comes to its front-end aesthetic. There is a lot of development that needs to be done to give LOHK the characteristics to stand out by itself as an application. 

<b>Team Members and their Responsibilities:</b>

- Corben Broennimann: Front-end Development
  - Current Workings: Dashboard design creation 
  - Future handlings: Front-end development of the application
  
- Jake Camarao: Back-end Development
  - Current Workings: Pin/email confirmation system and Login lockout system
  - Future handlings: information API and further back-end development
  
- Kyra Ikeda: Front-end Development
  - Current Workings: Landing page and Logo design
  - Future Handlings: Assistance of back-end and front-end design

- James Lau: Back-end Development
  - Current Workings: Password security and requirements
  - Future handlings: Linking database to the application and further back-end development

<h1><b>06/08/20 - 06/14/20 | Week Two of Development</b></h1>
<b>Progress:</b>

- During week two of development, we have finished primarily all of the functionalities that the team set out to complete prior to development. These include:
  - Password strength with many requirements
  - Dual authentication with every session with a randomly generated pin that is sent to the registered email upon log-in
  - Admin features with the ability to remove accounts if necessary
  - The ability to store information for any account and card information

<b>Link:</b>

The development team of LOHK has decided to move the repo to an organization now, and have renamed the team to be LOHKER instead of Turing. To access the current repository that is being worked on, click [here](https://github.com/LOHKER/LOHK).

<b>Pending:</b>

- Since the primary functionalities of LOHK is complete, we plan to implement the following:
  - Further front-end development to achieve a polished, intuitive UI
  - Allow the user to remove any information if they wish to remove a previously created input
- If we also have time to work, after front-end is achieved, we wish to implement the following:
  - An email verification system upon registration

<b>Roles and Responsibilities:</b>

- Corben Broennimann: Front-end Development
  - New Completions: Basic dashboard completed
  - Current: Further front-end development on the main dashboard
  - Next: Assist in cleaning up the UI and front-end if needed
  
- Jake Camarao: Back-end Development
  - New Completions: Admin features, Pin creation
  - Current: Self-account deletion by user
  - Next: Further back-end development if needed
  
- Kyra Ikeda: Front-end Development
  - New Completions: Landing page, Sign-in/Sign-up page
  - Current: Further front-end development on all pages
  - Next: Other pages (About us, terms of service, privacy notice)

- James Lau: Back-end Development
  - New Completions: Email system with pin verification
  - Current: Email verification upon registration
  - Next: Further back-end development if needed
  
<h1><b>06/15/20 - 06/21/20 | Week Three of Development & Verification</b></h1>
<b>Progress:</b>

- Due to having most of the main requirements and security features completed during week two of development, this week was primarily focused on polishing up LOHK. The new changes that were done include the following:
  - A new username feature to for users for displaying purposes and easier management
  - Users are now have the capabilities of deleting their own account if they feel compromised or have the urge to do so
  - Further front-end development for multiple pages 
  
<b>Pending:</b>
  
  - Similarly to week two, the primary focus of further development will be to implement more friendly, intuitive user interface to give users the best experience. This can be done so by:
   - Making certain features stand out by having new placements or redesigns
   - Add in more user settings to personalize the application towards them
   - Display the information inputted by users in a neater fashion to ease presentation
   
<b>Roles and Responsibilities:</b>

- Corben Broennimann: Front-end Development
  - Completions: Basic dashboard completed
  - Current: Further front-end development on all pages
  - Next: Assist in cleaning up the UI and front-end if needed
  
- Jake Camarao: Back-end Development
  - Completions: Admin features, Pin creation, User settings, Self-account deletion
  - Current: Further develop in user settings
  - Next: Further back-end development if needed
  
- Kyra Ikeda: Front-end Development
  - Completions: Landing page, sign-in/sign-up page, about us, terms of service, privacy notice
  - Current: Further front-end development on all pages
  - Next: Cleaning up the site design

- James Lau: Back-end Development
  - Completions: Email system with pin verification, Sign-up requirements
  - Current: Email verification upon registration
  - Next: Further back-end development if needed
   
<b>Link:</b>

To access the current repository that is being worked on, click [here](https://github.com/LOHKER/LOHK).

<h1><b>06/22/20 - 06/28/20 | Week Four of Development & Release</b></h1>
<b>Final Responsibilities:</b>

- Corben Broennimann: Finalizing front-end
 
- Jake Camarao: Finalizing back-end
  
- Kyra Ikeda: Finalizing front-end

- James Lau: Finalizing back-end

<b>How to Install and Run the Program</b>

1) Download the current release version
2) Download [Meteor](https://www.meteor.com/)
3) cd into the app folder in the file
4) ```npm install```
5) ```meteor npm npm start```
6) Open your browser to http://localhost:3000

<b>Developer Notes</b>

The development process of this project went through many roadblocks to get where it is today. The development team of LOHK feels as though the project reached a state where it is something to be proud of. However, there are some loose ends that we wish we could have cleaned up to further solidfy the application to become something better.

The Challenges:
- Setting up dual authentication 
- Having a cohesive application design

The Surprises:
- 

The Proud Moments:
- Dual authentication set up with an email sending a pin

The Disappointments:
- Further development of front-end could have been done
- Further implementation of features could have been done
  - Ex. Email Verification upon registration

Disclaimers: 
- There are still many things about LOHK that can be improved:
  - The front end design
  - LOHK is still very barebones in terms of features

<b>Links:</b>

- The main repository can be found [here](https://github.com/LOHKER/LOHK)
- The final project documentation can be found [here](https://github.com/LOHKER/LOHK/blob/master/README.md)
- The final release version of LOHK can be found [here]()
- The wiki page for LOHK can be accessed [here](https://lohker.github.io/LOHK.github.io/)
