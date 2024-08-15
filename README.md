# Welcome to Tap Shop

## About Tap Shop

Tap Shop is an online shopping platform designed to provide a seamless and enjoyable shopping experience. Tap Shop allows users to browse and search for a wide variety of products, apply advanced filters, and sort items to find exactly what they need. With features such as dynamic pagination, real-time updates, and intuitive navigation, Tap Shop ensures a user-friendly interface for efficient and enjoyable shopping. Whether you're exploring categories, comparing brands, or looking for specific items, Tap Shop offers a comprehensive and responsive platform to meet all your shopping needs.

**Live Link**: [Tap Shop](https://ecom-edeb3.web.app/)

## Installation

To install the Tap Shop project on your local machine, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/s-shahriar/TapShop-client
   ```

2. **Navigate to the Project Directory**: Change to the project directory:

   ```
   cd tapshop-client
   ```

3. **Install Dependencies**: Install the required dependencies for both the client and server:

   ```
   ## for client
   npm install

   ## for server
   cd ../server
   npm install
   ```

4. **Set Up Environment Variables**: Create a `.env` file in the server directory and add your environment variables:

   ```
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the Development Server**: Run the following command to start the development server:

   ```
   npm run dev
   ```

6. **Access the Application**: Open your browser and go to `http://localhost:3000` to view the application.

## Table of Contents

- [Features](#features)
- [Libraries Used](#libraries-used)
- [Technologies Used](#technologies-used)
- [Design Inspiration](#design-inspiration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### Features

- **Product Browsing**: Explore a wide range of products with a user-friendly interface and intuitive navigation.
- **Search Functionality**: Quickly find products by name with an efficient search bar.
- **Advanced Filters**: Apply filters based on brand, category, and price range to refine your product search.
- **Sorting Options**: Sort products by price (low to high, high to low) or date added (newest first).
- **Real-Time Updates**: All transactions and status changes are reflected in real-time.
- **Pagination**: Browse products across multiple pages with a responsive pagination system.

### Libraries Used

- [tanstack-query](https://tanstack.com/query/v4): Utilized for efficient data fetching, caching, and synchronization, enhancing the performance and responsiveness of the application.
- [react-lottie](https://www.npmjs.com/package/react-lottie): Used for integrating animated Lottie files, adding engaging visual elements to enhance user experience.
- [react-tooltip](https://react-tooltip.com/docs/getting-started): Utilized for creating informative tooltips, providing additional context when users interact with certain elements, enhancing usability.
- [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter): Employed for implementing typewriter-style text animation, adding a dynamic touch to text elements across the website.
- [swiper.js](https://swiperjs.com/): Integrated Swiper.js for creating interactive and responsive sliders, enhancing the presentation of content such as asset carousels and featured items.
- [react-hook-form](https://react-hook-form.com/) : Used for handling form validation and submission.
- [axios](https://axios-http.com/): Utilized for making secure API calls.
- [sweetalert2](https://sweetalert2.github.io/): Used for creating interactive alerts for better user experience.

### Technologies Used

- **Front-End**: ReactJS
- **UI Library**: Tailwind CSS, Flowbite
- **Back-end**: ExpressJS
- **Database**: MongoDB

## Contributing

We welcome contributions! If you have any suggestions, improvements, or bug fixes, feel free to submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
