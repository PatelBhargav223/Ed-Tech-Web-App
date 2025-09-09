# StudyNotion Edtech Project

<img width="518" height="782" alt="mainpage" src="https://github.com/user-attachments/assets/0d2b8185-77e0-43d7-99bc-018b84827beb" />
<img width="1919" height="839" alt="Screenshot 2025-09-05 181218" src="https://github.com/user-attachments/assets/4e4b489c-7edd-4d65-97be-389f44f69426" />
<img width="1919" height="868" alt="Screenshot 2025-09-05 181234" src="https://github.com/user-attachments/assets/aee53ad2-f5b6-4f02-a423-9f92583422a0" />
<img width="1886" height="857" alt="Screenshot 2025-09-05 183219" src="https://github.com/user-attachments/assets/1320a518-3baa-4952-b276-7c9ca551cd76" />
<img width="1910" height="794" alt="Screenshot 2025-09-05 183231" src="https://github.com/user-attachments/assets/88643aef-07f2-4cd4-ad54-e25d5c139b47" />
<img width="1911" height="790" alt="Screenshot 2025-09-05 183308" src="https://github.com/user-attachments/assets/77a896eb-519b-4301-866a-d203b710d560" />
<img width="1915" height="656" alt="Screenshot 2025-09-05 183322" src="https://github.com/user-attachments/assets/718f8a20-ec68-4cb3-a8c0-e3f61c181c5f" />
<img width="1913" height="797" alt="Screenshot 2025-09-05 183330" src="https://github.com/user-attachments/assets/74487e42-a5c4-4c59-be4d-d7d08a7359cf" />
<img width="1912" height="867" alt="Screenshot 2025-09-09 144903" src="https://github.com/user-attachments/assets/8536b024-d597-4193-9f63-4b2bf856b239" />


platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

**Introduction**

StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform serves as a platform for instructors to showcase their expertise and connect with learners across the globe.

In the following sections, we will cover the technical details of the platform, including the system architecture, API design, installation, usage instructions, and potential future enhancements.

**System Architecture**

The StudyNotion EdTech platform consists of three main components: the front-end, the back-end, and the database. The platform follows a client-server architecture, with the front-end serving as the client and the back-end and database serving as the server.

**Front-end**

The front-end of the platform is built using ReactJS, which allows for the creation of dynamic and responsive user interfaces, crucial for providing an engaging learning experience to students. The front-end communicates with the back-end using RESTful API calls.

**Front End Pages**

For Students:

**Homepage**: A brief introduction to the platform with links to the course list and user details.

**Course List**: A list of all the courses available on the platform, along with their descriptions and ratings.

**Wishlist**: Displays all the courses that a student has added to their wishlist.

**Cart Checkout**: Allows the user to complete course purchases.

**Course Content**: Presents the course content for a particular course, including videos and related material.

**User Details**: Provides details about the student's account, including their name, email, and other relevant information.

**User Edit Details**: Allows students to edit their account details.

**For Instructors:**

**Dashboard:** Offers an overview of the instructor's courses, along with ratings and feedback for each course.

**Insights**: Provides detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.

**Course Management Pages**: Enables instructors to create, update, and delete courses, as well as manage course content and pricing.

**View and Edit Profile Details**: Allows instructors to view and edit their account details.

**Front-end Tools and Libraries**
To build the front-end, we use frameworks and libraries such as ReactJS, CSS, and Tailwind for styling, and Redux for state management.

**Back-end**
The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

**Back-end Features**
**User Authentication and Authorization**: Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.

**Course Management:** Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.

**Payment Integration:** Students will purchase and enroll in courses by completing the checkout flow, followed by Razorpay integration for payment handling.

**Cloud-based Media Management:** StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.

**Markdown Formatting**: Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.

**Back-end Frameworks, Libraries, and Tools**

The back-end of StudyNotion uses various frameworks, libraries, and tools to ensure its functionality and performance, including:

**Node.js:** Used as the primary framework for the back-end.

**Express.js:** Used as a web application framework, providing a range of features and tools for building web applications.

**MongoDB:** Used as the primary database, providing a flexible and scalable data storage solution.

**JWT (JSON Web Tokens):** Used for authentication and authorization, providing a secure and reliable way to manage user credentials.

**Bcrypt**: Used for password hashing, adding an extra layer of security to user data.

**Mongoose: **Used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.

**Data Models and Database Schema**

The back-end of StudyNotion uses several data models and database schemas to manage data, including:

**Student Schema:** Includes fields such as name, email, password, and course details for each student.

**Instructor Schema**: Includes fields such as name, email, password, and course details for each instructor.

**Course Schema:** Includes fields such as course name, description, instructor details, and media content.

**Database**

The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.

<img width="736" height="384" alt="schema" src="https://github.com/user-attachments/assets/9e706aea-20c5-41a4-9031-8d133fe4a01a" />

**Architecture Diagram**

Below is a high-level diagram that illustrates the architecture of the StudyNotion EdTech platform:

<img width="708" height="242" alt="architecture" src="https://github.com/user-attachments/assets/af9dcba3-648f-4ad6-8fcc-5d0b25267698" />


**API Design**

The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

**Installation**
1.Clone the repository: git clone https://github.com/username/repo.git

2.Navigate to the project directory: cd StudyNotion

3.Install dependencies: npm install

**Configuration**

Set up a MongoDB database and obtain the connection URL.

Create a .env file in the root directory with the following environment variables:

MONGODB_URI=<your-mongodb-connection-url>

JWT_SECRET=<your-jwt-secret-key>
Usage
Start the server: npm start
Open a new terminal and navigate to the client directory: cd client
Start the React development server: npm start
Access the application in your browser at http://localhost:3000.
