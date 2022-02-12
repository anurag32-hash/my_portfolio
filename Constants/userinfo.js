//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Anurag Singla", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'singlaanurag32@email.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '6317109702', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+1' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: '', icon: faGithubAlt },
        { type: 'linkedin', link: '', icon: faLinkedinIn },
        { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Anurag.",
        subtitle: "I'm a software developer, and I love to create things that make people's lives better."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Languages", // eg.frontend, backend, devops etc
            skills: ["Python", "C/C++", "Java"] //eg. react, html, python etc.
        },
        {
            category: "Full Stack",
            skills: ["React", "Node.js", "AWS"]
        },
        {
            category: "Tools",
            skills: ["Git", "Vs Code", "Linux"]
        },
        //{
          //  category: "Category",
            //skills: ["Skillset4", "Skillset4", "Skillset4"]
        //},
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Part time chess player and dancer but full time programmer",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Aug \'21 - Present', //timespan
                title: 'Masters in Computer Science', //eg. BTech in Compuster Engineering
                organization: 'Stony Brook University', //eg. VJTI, Mumbai
                description: 'GPA: 3.5/4.0' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'Jul \'17 - May \'21',
                title: 'BTech in Textile Technology',
                organization: 'Indian Institute of Technology, Delhi',
                description: 'GPA: 7.57/10.0'
            },
            /*{
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },*/
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Dunder Mifflin', //company name eg.Microsoft
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}