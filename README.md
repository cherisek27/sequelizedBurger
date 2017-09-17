# Sequelized Burger Application 

Created a Sequelized `Burger` app. 

#### Sequelized! 

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, my app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* My app will store every burger in a database, whether devoured or not.

#### App Setup

1. Create a GitHub repo called `burger` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express --save`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars --save`.

6. Install the method-override npm package: `npm install method-override --save`.

7. Install the body-parser npm package: `npm install body-parser --save`.

8. Install MySQL npm package: `npm install mysql --save`.

9. Require the following npm packages inside of the server.js file:
   * express
   * method-override
   * body-parser

#### Config Setup

1. Inside your `burger` directory, create a folder named `config`.

2. Create a `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, setup the code to connect Node to MySQL.

   * Export the connection.

3. Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()` 
     * `insertOne()` 
     * `updateOne()` 

   * Export the ORM object in `module.exports`.

#### Model setup

* Inside your `burger` directory, create a folder named `models`.

  * In `models`, make a `burger.js` file.

    * Inside `burger.js`, import `orm.js` into `burger.js`

    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    * Export at the end of the `burger.js` file.

#### Controller setup

1. Inside your `burger` directory, create a folder named `controllers`.

2. In `controllers`, create the `burgers_controller.js` file.

3. Inside the `burgers_controller.js` file, import the following:

   * Express
   * `burger.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your `burger` directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

<img width="771" alt="screen shot 2017-09-17 at 12 26 37 pm" src="https://user-images.githubusercontent.com/26241261/30524177-9460f088-9ba3-11e7-9192-b89ee7877366.png">


<img width="920" alt="screen shot 2017-09-17 at 12 26 47 pm" src="https://user-images.githubusercontent.com/26241261/30524192-ca49669e-9ba3-11e7-807b-c01df6d88f34.png">

<img width="899" alt="screen shot 2017-09-17 at 12 26 56 pm" src="https://user-images.githubusercontent.com/26241261/30524199-e41957be-9ba3-11e7-918d-54ea39a7f917.png">
