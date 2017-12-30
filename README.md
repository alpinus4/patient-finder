# How to use my components?
Every component requires bootstrap 3.
* <b>Patient demographics component [ _patient-demographics.html_ ]</b></br>
  To use it add the following line:
  ```html
  <patient-demographics uuid='there put patient uuid' id="patient_demographics_id"></patient-demographics>
  ```
  This component also have some custom css properties presented below. Values inserted show default values.
  ```css
  #patient_demographics_id {
     /*MAIN*/
    --patient-demographics-display: inline-block;
    --patient-demographics-font-size: 25pt; /*main font size, other font size properties by "inherit" value get this value*/
    --patient-demographics-font-color: rgb(24, 24, 24); /*main font color, other font color properties by "inherit" value get this value*/
    --patient-demographics-background-color: rgb(255, 255, 255);
    --patient-demographics-padding: 20px;

     /*TO PATIENT NAME TEXT*/
    --patient-demographics-font-size-name: 40pt;
    --patient-demographics-text-name-decoration: underline;
    --patient-demographics-text-name-decoration-color: rgb(0, 0, 0);
    --patient-demographics-display-name: inherit; /*if you want to hide name text, change this property to none*/

     /*TO PATIENT ID TEXT*/
     --patient-demographics-font-size-id: 20pt;
     --patient-demographics-font-color-id: rgb(88, 88, 88);
     --patient-demographics-display-id: inherit; /*if you want to hide id text, change this property to none*/

     /*TO PATIENT ADDRESS TEXT*/
     --patient-demographics-font-size-address: 20pt;
     --patient-demographics-font-color-address: rgb(38, 38, 38);
     --patient-demographics-display-address: inherit; /*if you want to hide address text, change this property to none*/

     /*TO PATIENT GENDER TEXT*/
     --patient-demographics-font-size-gender: inherit;
     --patient-demographics-font-color-gender: inherit;
     --patient-demographics-display-gender: inherit; /*if you want to hide gender text, change this property to none*/

     /*TO PATIENT BIRTHDATE TEXT*/
     --patient-demographics-font-size-birthdate: inherit;
     --patient-demographics-font-color-birthdate: inherit;
     --patient-demographics-display-birthdate: inherit; /*if you want to hide birthdate text, change this property to none*/

     /*TO PATIENT DEAD TEXT*/
     --patient-demographics-font-size-dead: inherit;
     --patient-demographics-font-color-dead: inherit;
     --patient-demographics-display-dead: inherit; /*if you want to hide dead text, change this property to none*/
  }
  ```
  </br>
* <b>Patient last visits/encounters component [ _last-visits.html_ ]</b></br>
  To use it add the following line:
  ```html
  <last-visits patientuuid='there put patient uuid' id="last_visits_encounters_id"></last-visits>
  ```
  This component also have some custom css properties presented below. Values inserted show default values.
  ```css
  #last_visits_encounters_id {
    /*MAIN*/
    --last-visits-encounters-display: inline-block;
    --last-visits-encounters-font-size: 20pt; /*main font size, other font size properties by "inherit" value get this value*/
    --last-visits-encounters-font-color: rgb(24, 24, 24); /*main font color, other font color properties by "inherit" value get this value*/
    --last-visits-encounters-background-color: rgb(255, 255, 255);
    --last-visits-encounters-padding: 20px;

    /*TO HEADERS*/
    --last-visits-encounters-font-size-header: 30pt;
    --last-visits-encounters-font-color-header: inherit;
    --last-visits-encounters-display-header: inherit; /*if you want to hide headers, change this property to none*/

    /*TO INDEX TEXTS*/
    --last-visits-encounters-font-size-index: inherit;
    --last-visits-encounters-font-color-index: inherit;
    --last-visits-encounters-display-index: inherit; /*if you want to hide index texts, change this property to none*/

    /*TO TYPE TEXTS*/
    --last-visits-encounters-font-size-type: inherit;
    --last-visits-encounters-font-color-type: inherit;
    --last-visits-encounters-display-type: inherit; /*if you want to hide type texts, change this property to none*/

    /*TO LOCATION TEXTS*/
    --last-visits-encounters-font-size-location: inherit;
    --last-visits-encounters-font-color-location: inherit;
    --last-visits-encounters-display-location: inherit; /*if you want to hide location texts, change this property to none*/

    /*TO DATE TIME TEXTS*/
    --last-visits-encounters-font-size-datetime: 15pt;
    --last-visits-encounters-font-color-datetime: rgb(88, 88, 88);
    --last-visits-encounters-display-datetime: inherit; /*if you want to hide date time texts, change this property to none*/
  }
  ```

* <b>Patient search component [ _patient-search.html_ ]</b></br>
    To use it add the following line:
    ```html
    <patient-search sq="put there search query" id="patient_search_id"></patient-search>
    ```
    Component will search and show you search results as bootstrap list group with linked items. Every list item has _onclick_ parameter, which calls following function.
    ```javascript
    function ClickedItem(patientBtnClicked){      
      console.log(patientBtnClicked.id); //returns patient uuid
    }
    ```
    This component also have some custom css properties presented below. Values inserted show default values.
    ```css
    #patient_search_id {
      /*everything use default bootstrap styles*/
      --patient-search-font-size: inherit;
      --patient-search-font-color: inherit;
      --patient-search-background-color: inherit;      
    }
    ```
# How to create the component?

  1. Firstly install polymer. Follow the instructions from [polymer site](https://www.polymer-project.org/2.0/docs/tools/polymer-cli#install)

  2. Then go to your project location and run:
  ```
  bower install Polymer/polymer#^2.0.0
  ```

  3. Create the index.html file

  ```html
  <!doctype html>
    <html>
      <head>
        <script src="/bower_components/webcomponentsjs/webcomponents-loader.js"></script>
        <title>My component</title>

      </head>
      <body>
      It works!
      </body>
</html>
  ```

  4. Serve your project by typing:
  ```
  polymer serve --open
  ```

  5. If everything works, let's finally create a component. Create new html file named _your-component-name.html_
  ```html
<link rel="import" href="bower_components/polymer/polymer-element.html">
<dom-module id="your-component-name">

  <template>

    <style>
      :host #text{
      color: var(--your-component-name-font-color , rgb(24, 24, 24));
      }
    </style>


    <p id="text">I have to show this text: {{textToShow}}</p>
  </template>

  <script>
    class YourComponentName extends Polymer.Element {
      static get is() {
          return 'your-component-name';
      }
      static get properties() {
        return {
          textToShow: {
            type: String
          },
        }
      }
      constructor() {
        super();
      }

    }
    customElements.define(YourComponentName.is, YourComponentName);
  </script>

</dom-module>
  ```

  6. Add the following line to index.html to head:
```html
<link rel="import" href="your-component-name.html">
```
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and this line to body instead the "It works":
```html
<your-component-name text-to-show="test"></your-component-name>
```
  7. Open your component in browser and you should see:
  >I have to show this text: test

  8. For more information about creating components you should go to [polymer site](https://www.polymer-project.org/2.0/start/)

# How to deal with rest api using polymer?

You have to use iron-ajax component. To import iron-ajax add the following line:
```html
<link rel="import" href="https://polygit.org/polymer+v2.0.0/shadycss+webcomponents+1.0.0/components/iron-ajax/iron-ajax.html">
```
For more information look at:
http://frontendinsights.com/polymer-rest-api-using-iron-ajax/ </br>
https://www.webcomponents.org/element/PolymerElements/iron-ajax/elements/iron-ajax
