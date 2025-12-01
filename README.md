<h1>Full Stack Web Application – README</h1>

<h2>Overview</h2>
<p>
  This repository contains a full stack web application that serves both customer-facing
  and administrative functionality. The application started as a traditional Express-based
  site and evolved into a single-page application (SPA) with a secure admin login,
  protected routes, and an API backed by a NoSQL MongoDB database.
</p>

<h2>Architecture</h2>

<p>
  <strong>Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).</strong>
</p>
<p>
  At the beginning of the project, I used server-rendered Express HTML templates with basic
  JavaScript to create static-like pages. In this model, each request to the server returned
  a full HTML page, so navigation was driven by routes on the backend. This approach was
  simple and good for quickly getting content on the screen, but it required full page
  reloads for most interactions and limited the overall user experience.
</p>
<p>
  As the project evolved, I transitioned to a single-page application (SPA) on the frontend.
  The SPA uses JavaScript to handle routing in the browser, dynamically updating only the
  parts of the page that need to change. Instead of rendering full HTML on the server, the
  backend now focuses on providing JSON data through RESTful endpoints. This made the UI
  feel faster and more responsive, improved the separation of concerns between frontend and
  backend, and allowed for richer client-side behavior, especially on the administrative
  side of the application.
</p>

<p>
  <strong>Why did the backend use a NoSQL MongoDB database?</strong>
</p>
<p>
  The backend uses a NoSQL MongoDB database because it provides flexible schemas and
  documents that map naturally to JavaScript objects. This flexibility is helpful when
  requirements evolve, because I can add or modify fields in collections without having to
  redesign a rigid relational schema. MongoDB also integrates well with Node.js and Express,
  which simplifies data access code. The document-based model fits the structure of the
  data in this application, and it allows the API to quickly store and retrieve JSON-like
  documents for both customer and admin functionality.
</p>

<h2>Functionality</h2>

<p>
  <strong>How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?</strong>
</p>
<p>
  JSON (JavaScript Object Notation) is a lightweight data format used for structured data,
  while JavaScript is a full programming language. JSON supports a limited set of types
  (strings, numbers, booleans, arrays, objects, and null) and does not include functions or
  program logic. In this project, JSON acts as the “glue” between the frontend and backend:
  the backend API sends and receives JSON payloads, and the frontend parses that JSON into
  JavaScript objects. This common data format allows the SPA to consume data from the
  Express/MongoDB backend in a consistent and predictable way.
</p>

<p>
  <strong>Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.</strong>
</p>
<p>
  During development, I refactored several parts of the codebase. On the backend, I cleaned
  up route handlers by moving repeated logic into utility functions and middleware. This
  made the code easier to maintain and reduced duplication when handling validation,
  authentication, and error responses. On the frontend, I refactored repeated HTML and
  JavaScript into reusable components, such as shared layout sections and form components
  that could handle both creating and editing records.
</p>
<p>
  Reusable UI components improved consistency, because similar screens share the same look
  and behavior. They also made the codebase easier to extend; adding a new feature often
  meant composing existing components instead of writing everything from scratch. This
  component-based approach supports cleaner code, faster development, and a more uniform
  user experience across the customer and admin sides of the application.
</p>

<h2>Testing</h2>

<p>
  <strong>
    Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
  </strong>
</p>
<p>
  In a full stack application, HTTP methods and endpoints define how the client interacts
  with the backend. Common methods include <code>GET</code> for retrieving data,
  <code>POST</code> for creating new records, <code>PUT</code> or <code>PATCH</code> for
  updating existing data, and <code>DELETE</code> for removing records. Each endpoint
  represents a specific resource or action, such as <code>/api/items</code> for listing or
  creating items and <code>/api/items/:id</code> for operations on a single item.
</p>
<p>
  Testing these endpoints involves verifying that they return the correct status codes,
  response bodies, and error messages under different conditions. When security is added,
  such as authentication and authorization for the admin side, the tests must also cover
  protected routes. That includes making sure requests without valid credentials are
  rejected, verifying that tokens or sessions are handled correctly, and confirming that
  only authorized users can access sensitive data. Understanding how methods, endpoints,
  and security work together is essential to ensure that the application behaves correctly
  and protects both data and users.
</p>

<h2>Reflection</h2>

<p>
  <strong>
    How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
  </strong>
</p>
<p>
  This course has helped me move closer to my professional goals by giving me hands-on
  experience building a full stack web application from start to finish. I strengthened my
  understanding of how the frontend and backend interact, how RESTful APIs are designed,
  and how to work with a NoSQL database like MongoDB. I also gained practical experience
  implementing authentication and managing secure admin access, which is a critical skill
  for real-world applications.
</p>
<p>
  In addition to technical skills, I improved my ability to refactor code, structure
  projects, and think about maintainability and scalability. Working through testing and
  debugging helped me develop a more systematic approach to finding and fixing issues.
  Overall, I now feel more confident presenting myself as a developer who can design,
  implement, and secure a full stack application, which makes me a stronger and more
  marketable candidate in the software development field.
</p>
