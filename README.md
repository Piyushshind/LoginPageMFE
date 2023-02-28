# LoginPageMFE


This project is a microfrontend built using React. It is designed to be integrated with other microfrontends to create a larger, composite web application.

Why MFE ?
Microfrontends (MFEs) are an architectural approach to building web applications where the user interface is composed of a collection of small, independently developed and deployed applications that work together seamlessly to create a larger, composite user interface.

There are several reasons why we use MFEs:

Modularity and scalability: MFEs enable us to break down complex web applications into smaller, more manageable pieces that can be developed and maintained independently. This allows us to scale our development process more easily and makes it easier to introduce new features and functionality.

Flexibility and reusability: Because MFEs are designed to be small and modular, they can be reused in different contexts and combined with other MFEs to create new, composite user interfaces. This makes it easier to create flexible and adaptable applications that can be customized to meet the needs of different users and use cases. Technological diversity: MFEs can be developed using different technologies and frameworks, allowing teams to choose the tools that are best suited to their needs and expertise. This enables more specialized teams to develop components using their preferred technologies and integrate them into the larger application without having to worry about the implementation details of the other components. Improved development and deployment process: MFEs can be developed and deployed independently, which makes it easier to test and deploy new features and functionality without disrupting the entire application. This can lead to faster development cycles and more frequent releases, which can improve the user experience and enable teams to respond more quickly to changing requirements and user feedback. Overall, MFEs offer a flexible and modular approach to building web applications that can improve development and deployment processes, increase scalability and flexibility, and promote technological diversity and reusability.

Installation To install this project npx create-mf-app, and run yarn to install the dependencies.

Usage To start the project, need to download All the MFE 1] HomePageMFE : github-link : https://github.com/Bhavishm009/HomePageMFE.git || Port : 3001 2] LoginPageMFE github-link : https://github.com/Piyushshind/LoginPageMFE.git || Port : 3002 3] ProductPageMFE github-link : https://github.com/komalsc/ProductPageMFE.git || Port : 3003 4] CheckoutMFE github-link : https://github.com/virender121/CheckkoutMFE.git || Port : 3004

run yarn start. This will start the development server and open the project in your default browser.

yarn start

you can see the live project here :-  https://rad-gecko-67887d.netlify.app/

Configuration This project uses Webpack Module Federation to enable integration with other microfrontends. The configuration for this can be found in the webpack.config.js file.

Deployment To deploy the project, run yarn run build to create a production-ready build. You can then deploy the files in the build directory to your server.

yarn build
