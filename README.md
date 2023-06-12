# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Is-it-fresh
![is-it-fresh new ()](https://github.com/PawelOwiesek/Is-it-fresh-/assets/121549413/b17be00a-fc1c-4cb8-bdd3-5184e02b4e6f)

![Animation Is-It-Fresh](https://github.com/PawelOwiesek/Is-it-fresh-/assets/121549413/60c8a904-9781-409d-a5f3-82180f0f6866)

## This application is a simple product tracker. It allows users to add products along with their starting date and expiration date. The application calculates and displays the remaining time for each product, showing the number of days, hours, minutes, and seconds left until the expiration date.

The main features of the application include:

- ### Displaying the current date and time at the top of the page.
- ### Adding a new product by filling out a form with the product name, starting date, and expiration date.
- ### *Calculating and updating the remaining time for each product in real-time.
- ### Removing a product from the list when the "Remove" button is clicked.
The application uses JavaScript to handle the logic and manipulation of data. It utilizes the Date object to perform date and time calculations.<br/> The remaining time is calculated based on the current time and the expiration date provided by the user. The formatTime function formats the remaining time into a user-friendly string representation.

The application updates the product list and the remaining time display whenever a new product is added or a product is removed. The current date and time are updated every second to reflect the current time.

Overall, this application helps users keep track of product expiration dates and provides a countdown of the time remaining for each product.


#### *In the future, this application will undergo a redesign and introduce new functionalities. The appearance of the application will be revamped with an updated user interface and a more modern design. The goal is to enhance the overall user experience and make the application visually appealing.

Along with the visual changes, several new functionalities will be added to improve the product tracking experience. These planned enhancements include:

User Accounts: Users will be able to create accounts and log in to personalize their product list and settings. This will allow users to access their tracked products from any device and ensure data persistence.

Notifications: The application will send notifications to users when a product is about to expire. Users can set custom notification preferences to receive alerts via email, push notifications, or SMS.

Barcode Scanning: Users will have the option to scan product barcodes using their device's camera. The application will fetch product details and automatically populate the name, starting date, and expiration date fields, making it easier to add products.

Sorting and Filtering: Users will have the ability to sort and filter their product list based on various criteria such as name, expiration date, or remaining time. This will help users quickly identify products that require attention.

Reminders and To-Do Lists: Users will be able to set reminders or create to-do lists related to specific products. This will enable them to track additional tasks or actions associated with each product, such as purchasing replacements or using products before they expire.

These upcoming changes aim to make the application more user-friendly, efficient, and customizable. The new functionalities will provide users with greater control over their product tracking and help them stay organized and proactive in managing their perishable items.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

