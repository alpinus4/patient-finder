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
  and this line to body instead the "It works":
```html
<your-component-name text-to-show="test"></your-component-name>
```
  7. Open your component in browser and you should see: 
  >I have to show this text: test
  
  8. For more information about creating components you should go to [polymer site](https://www.polymer-project.org/2.0/start/)

