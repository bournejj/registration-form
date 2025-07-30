# Everyway Registration Form

This is my registration form made for Everway using React, Typescript and Tailwind css

## Installation

1. Clone the repository:
   git clone https://github.com/bournejj/registration-form.git
   cd registration-form

2. npm install 
   or 
   yarn install

### run the app

npm run start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### 🔧 Fixes

- Changed the background colour of the primary button as the colour provided in the Figna file is not WCAG 2.2 AA compliant, due to not providing sufficent contrast between the background and the foreground text. 

##### 🛠️ To Be Fixed

- Form does not handle submit 
- Input variant needed to handle custom input styles
- Divider colour for header at the top needs to match figma design 

###### Things I would improve 

- Add asterisks or text to communicate required feilds upfront, with markup added that instructs screen readers to read the word "Required". 
- Add a tooltip or instructional information disclosing password contraints to users upfront. A strength meter would be a good addition too, to encourage users to create a secure password.
- Add a show/hide button to allow users to check their password before submitting the form, or alternatively have the password exposed by default, to prevent errors. 
- Improve and expand the microcopy of the form to enhance clarity, e.g. "Register for an account", "Select a plan".
- Add frontend inline validation to make users aware of any errors as they occur, enabling them to be corrected before attempting to submit the form.  




