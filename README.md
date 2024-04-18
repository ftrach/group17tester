# Group_17

## Developers
| Name        |   Role |     Github    | Email       |
| ----------- | --------- | --------- | --------------------------- |
| Louie Tse | Full Stack Developer | tselouie| lttse@myseneca.ca |
| Muhammad Sharif  | Full Stack Developer  | muhammadssharif | msharif28@myseneca.ca |
| Daniil Sen  | Full Stack Developer | Daniil-Sen | dsen5@myseneca.ca |
| Francis Trach  |  Full Stack Developer | ftrach | ftrach@myseneca.ca |

## Project Description

In this project, this website will be tailored for customers shopping on a website. The theme for the website will be a clothing store, a single clothing store owner selling their products to their clients online. This website will feature all the tools that you need in order to purchase items online regardless of the type of items that will be for sale on the website. This project will have a fully complete “template” in order to create a fully functioning website that will allow you  to buy items of any kind depending on the type of shop that you would like to create.

### Admin CRUD functionalities for Products on website

This tool will allow you to have all the functionality that you need in order to add, remove, and edit products into the shop. This will give the user all that they need to edit their website in any way. This will remove the need to consistently contact the developers. This will also make it incredibly easy to update the website in an effortless and smooth manner.

### Cart

We will be creating a cart function so users can buy multiple items at once. 

### Payment Portal

This will be the tool that allows the website in order to receive payments. We will be using Stripe which is generally considered the industry standard. 

### Order Tracking 

This will  organise all the orders and payments to be able to keep track of every single order on the website. We will be using Stripe which is generally considered the industry standard. 

### Authentication
Currently, the application only supports logging in via email. If the user is registered, /login will allow the user to receive a one-time-password to login via email. Once logged in, a session will be provided by the user and using this session, we are able to allow or prevent any or all actions for a given role.

### OTP By Email
The One-Time-Passcodes are sent using Resend and is currently using a personal domain. As Resend does not allow emails to be sent outside of the registration and test email a domain must be personally set up to use the otp functionality.

## Tech Stack

### Back-End
PostgreSQL hosted by VercelDB 
The back-end will use a cloud-based PostgreSQL database from [VercelDB](https://vercel.com/guides/using-databases-with-vercel)/). Data will then be fetched seamlessly from our vercel db. 
### Front-End
NextJS, React, TailwindCSS
The front-end UI will be developed using a NextJS framework, and all styling will be using [TailwindCSS](https://tailwindcss.com/) to develop the main interface. The template websites will have their css stored separately and themes will be held via a json file.

### Hosting of Application & Database while using Github CI/CD
Hosting of the Postgres database and the NextJS app are hosted on vercel allowing unity within the application. As we push items to the repository it will automatically deploy onto vercel having a very smooth transition from development to production. On the application side a verceldb module is used in order to fetch the data.

### Developing Tools

This website was developed using [Visual Studio Code](https://code.visualstudio.com/) with Typescript,Prisma extensions. [Postman](https://www.postman.com/) will be used to test all API routes from our application. Stripe services will be used for all transactional based actions. [Github](https://www.github.com/) will be our primary source of code collaboration.





