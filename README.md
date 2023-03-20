# [Palpite Box](https://palpite-box.patriciacvcosta.vercel.app/)
<h1 align='center'>
    <img src='public/Palpite-Box-Image.jpg'
    alt="Markdown Monster icon"
        style="float: left; display: block; margin-left: auto; margin-right: auto; width: 100%;"
    />
</h1>

<p align="center"> Palpite Box App Window<p>

---

### Table of Contents
<!-- You're sections headers will be used to reference location of destination. -->

- [Description](#description)
- [Running and Deploying the Application](#running-and-deploying-the-application)
- [Useful links and resources](#Useful-links-and-resources)
- [License](#license)
- [Author Info](#author-info)

---

## Description

"Palpite Box" was developed during the Fullstack Master Week, a workshop offered by DevPleno and taught by Tulio Faria. 

The application consists of an 'opinion box' ('Palpite Box' in Portuguese), where customers can make evaluations about an establishment and receive a discount coupon in exchange!

The app is connected to a Google Spreadsheet, which works as a database, where the business owner can activate/deactivate a discount, change the discount message, and manage received suggestions/coupons generated. 

This is a very affordable, interesting, and easy to use software that can make your establishment more appealing, while attracting more customers.


#### Technologies

- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- Google Spreadsheets

[Back To The Top](#palpite-box)

---

## Running and Deploying the Application

* First, you need NodeJS and NPM installed on your machine. After that, you can go ahead and run the following:

```
npm install
npm run dev
```

* In order to run the application properly, you need to create the environment variables to configure access to Google Spreadsheets.

```
SHEET_CLIENT_EMAIL=<client email from service credential>
SHEET_PRIVATE_KEY=<service credential private key>
SHEET_DOC_ID=<sheet id>
```


<!-- #### Installation -->


<!-- 
#### API Reference

```html
    <p>dummy code</p>
```
[Back To The Top](#read-me-template) -->

---

## Useful links and resources

* The App was deployed using Vercel, a cloud platform for static sites and Serverless Functions. You can access the app through the link right below:

    https://palpite-box.patriciacvcosta.vercel.app/

* The React Hook Form library was used to validate all inputs, making them required, creating patterns, setting minimum/maximum lenght, and other specifications.
        
    https://react-hook-form.com/


* The Email Validator library was used together with React Hook Form library to validate the Email entry, requiring a valid email address.

    https://www.npmjs.com/package/email-validator



[Back To The Top](#palpite-box)

---

## License

MIT License

Copyright &copy; [2020] [Patricia Canuto Vieira da Costa]

[Back To The Top](#palpite-box)

---

## Author Info

- LinkedIn - [Patricia Costa](https://www.linkedin.com/in/patricia-costa-885038a0/)

[Back To The Top](#palpite-box)