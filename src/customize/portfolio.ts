import { Section, Content, Link } from './interfaces';

export const intro = {
  portfolioName: 'Your name right here!',
  blurb:
    "I'm a software engineer! I'm a Googler and I pushed this from my main branch! Even though my Github Pages deploys from my prod branch!",
};

/**
 * Social Media Links
 * Edit and comment or uncomment the linked-icons you would like.
 */
export const socialMediaLinks: Link[] = [
  {
    name: 'github',
    url: 'https://github.com',
  },
  {
    name: 'linkedIn',
    url: 'https://linkedin.com',
  },
  {
    name: "mail",
    url: "mailto:your@email.here",
  },
  /*   {
    name: 'medium',
    url: 'https://medium.com',
  }, */
  /* {
    name: 'twitter',
    url: 'https://twitter.com'
  } */
];

/**
 ******PORTFOLIO SECTIONS********
 * Name: Add the name of the individual item you would like.
 * Id: If you add more items, make sure to increment any additions (if you're adding a 5th item, make sure it has an id of 5)
 * Image: When adding images, add them to the src/assets/images directory and when setting the image property of your item, 
 *        set it like this: './assets/images/your_image. NOTE - Landscape oriented images will look better
 * Text: You may use html markup to customize the structure.
 * Link: Link to the external item page. Ensure that your link begins with "https://" 
 */

/** Project Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. project1)
 *  below as well as include your addition in the projectSection.
 */
const project1: Content = {
  name: 'Hackathon',
  id: 1,
  image: './assets/images/project.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'https://example.com',
};

const project2: Content = {
  name: 'Open Source Project',
  id: 2,
  image: './assets/images/colors.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'https://example.com',
};

const project3: Content = {
  name: 'Open Source Project',
  id: 3,
  image: './assets/images/project.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'https://example.com',
};

/** Sample, copy this and make sure to increment the id */
/* const project4: Content = {
    name: 'Open Source Project',
    id: 4,
    image: './assets/images/project.avif',
    position: 'string',
    text: 'Lorem impsum herm er askll moded',
    link: 'https://example.com',
  }; */

export const projectSection: Section = {
  name: 'Projects',
  display: true,
  content: [
    project1,
    project2,
    project3,
    //Add more here
    //project4
  ],
};

/** Experience Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. experience1)
 *  below as well as include your addition in the experienceSection.
 */

const experience1: Content = {
  name: 'XYZ Tech Solutions',
  id: 1,
  image: './assets/images/exp.avif',
  position: 'Junior Software Engineer March 2023 – Present',
  text: `
    <p>As a Junior Software Engineer at XYZ Tech Solutions, I contribute to the development and maintenance of web applications and software solutions. My primary responsibilities include collaborating with senior developers to design, code, and test new features while ensuring high-quality performance and user experience.</p>
    
    <p>In my role, I have been involved in various projects, including the development of a customer management system using Angular and Node.js. I have actively participated in code reviews, debugging, and troubleshooting to enhance the functionality and efficiency of our software products. Additionally, I have gained experience with version control systems like Git and project management tools such as JIRA.</p>
    
    <p>One of my key achievements includes optimizing an existing application module, resulting in a 20% improvement in performance and a reduction in user-reported issues. I have also been responsible for writing comprehensive documentation and providing support to end-users to ensure smooth software deployment and usability.</p>
    
    <p>My role has also included working closely with cross-functional teams to gather requirements, identify technical challenges, and propose effective solutions. This experience has honed my problem-solving skills and ability to adapt to fast-paced, dynamic environments.</p>
    
    <p>Overall, my time at XYZ Tech Solutions has provided me with a solid foundation in software engineering principles and best practices. I am committed to continuing my professional growth and contributing to impactful software development projects.</p>
    `,
  link: 'https://example.com',
};

const experience2: Content = {
    name: 'Techikyaki',
    id: 2,
    image: './assets/images/exp.avif',
    position: 'Junior Software Engineer March 2023 – Present',
    text: `
      <p>As a Junior Software Engineer at XYZ Tech Solutions, I contribute to the development and maintenance of web applications and software solutions. My primary responsibilities include collaborating with senior developers to design, code, and test new features while ensuring high-quality performance and user experience.</p>
      
      <p>In my role, I have been involved in various projects, including the development of a customer management system using Angular and Node.js. I have actively participated in code reviews, debugging, and troubleshooting to enhance the functionality and efficiency of our software products. Additionally, I have gained experience with version control systems like Git and project management tools such as JIRA.</p>
      
      <p>One of my key achievements includes optimizing an existing application module, resulting in a 20% improvement in performance and a reduction in user-reported issues. I have also been responsible for writing comprehensive documentation and providing support to end-users to ensure smooth software deployment and usability.</p>
      
      <p>My role has also included working closely with cross-functional teams to gather requirements, identify technical challenges, and propose effective solutions. This experience has honed my problem-solving skills and ability to adapt to fast-paced, dynamic environments.</p>
      
      <p>Overall, my time at XYZ Tech Solutions has provided me with a solid foundation in software engineering principles and best practices. I am committed to continuing my professional growth and contributing to impactful software development projects.</p>
      `,
    link: 'https://example.com',
};

const experience3: Content = {
    name: 'TechTrek',
    id: 3,
    image: './assets/images/exp.avif',
    position: 'Junior Software Engineer March 2023 – Present',
    text: `
      <p>As a Junior Software Engineer at XYZ Tech Solutions, I contribute to the development and maintenance of web applications and software solutions. My primary responsibilities include collaborating with senior developers to design, code, and test new features while ensuring high-quality performance and user experience.</p>
      
      <p>In my role, I have been involved in various projects, including the development of a customer management system using Angular and Node.js. I have actively participated in code reviews, debugging, and troubleshooting to enhance the functionality and efficiency of our software products. Additionally, I have gained experience with version control systems like Git and project management tools such as JIRA.</p>
      
      <p>One of my key achievements includes optimizing an existing application module, resulting in a 20% improvement in performance and a reduction in user-reported issues. I have also been responsible for writing comprehensive documentation and providing support to end-users to ensure smooth software deployment and usability.</p>
      
      <p>My role has also included working closely with cross-functional teams to gather requirements, identify technical challenges, and propose effective solutions. This experience has honed my problem-solving skills and ability to adapt to fast-paced, dynamic environments.</p>
      
      <p>Overall, my time at XYZ Tech Solutions has provided me with a solid foundation in software engineering principles and best practices. I am committed to continuing my professional growth and contributing to impactful software development projects.</p>
      `,
    link: 'https://example.com',
};

const experience4: Content = {
    name: 'XYZ For Good',
    id: 4,
    image: './assets/images/colors.avif',
    position: 'Junior Software Engineer March 2023 – Present',
    text: `
      <p>As a Junior Software Engineer at XYZ Tech Solutions, I contribute to the development and maintenance of web applications and software solutions. My primary responsibilities include collaborating with senior developers to design, code, and test new features while ensuring high-quality performance and user experience.</p>
      
      <p>In my role, I have been involved in various projects, including the development of a customer management system using Angular and Node.js. I have actively participated in code reviews, debugging, and troubleshooting to enhance the functionality and efficiency of our software products. Additionally, I have gained experience with version control systems like Git and project management tools such as JIRA.</p>
      
      <p>One of my key achievements includes optimizing an existing application module, resulting in a 20% improvement in performance and a reduction in user-reported issues. I have also been responsible for writing comprehensive documentation and providing support to end-users to ensure smooth software deployment and usability.</p>
      
      <p>My role has also included working closely with cross-functional teams to gather requirements, identify technical challenges, and propose effective solutions. This experience has honed my problem-solving skills and ability to adapt to fast-paced, dynamic environments.</p>
      
      <p>Overall, my time at XYZ Tech Solutions has provided me with a solid foundation in software engineering principles and best practices. I am committed to continuing my professional growth and contributing to impactful software development projects.</p>
      `,
    link: 'https://example.com',
};

/** Sample, copy this if you'd like to add more*/
/* const experience5: Content = {
    name: 'XYZ For Good',
    id:5,
    image: './assets/images/exp.avif',
    position: 'Junior Software Engineer March 2023 – Present',
    text: `
      <p>As a Junior Software Engineer at XYZ Tech Solutions, I contribute to the development and maintenance of web applications and software solutions. My primary responsibilities include collaborating with senior developers to design, code, and test new features while ensuring high-quality performance and user experience.</p>
      
      <p>In my role, I have been involved in various projects, including the development of a customer management system using Angular and Node.js. I have actively participated in code reviews, debugging, and troubleshooting to enhance the functionality and efficiency of our software products. Additionally, I have gained experience with version control systems like Git and project management tools such as JIRA.</p>
      
      <p>One of my key achievements includes optimizing an existing application module, resulting in a 20% improvement in performance and a reduction in user-reported issues. I have also been responsible for writing comprehensive documentation and providing support to end-users to ensure smooth software deployment and usability.</p>
      
      <p>My role has also included working closely with cross-functional teams to gather requirements, identify technical challenges, and propose effective solutions. This experience has honed my problem-solving skills and ability to adapt to fast-paced, dynamic environments.</p>
      
      <p>Overall, my time at XYZ Tech Solutions has provided me with a solid foundation in software engineering principles and best practices. I am committed to continuing my professional growth and contributing to impactful software development projects.</p>
      `,
    link: 'https://example.com',
}; */

export const experienceSection: Section = {
  name: 'Experience',
  primary: true,
  display: true,
  content: [
    experience1, 
    experience2, 
    experience3, 
    experience4,
    //add more below
    //experience5
],
};

/** Writing Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. writing1)
 *  below as well as include your addition in the writingSection.
 */

const writing1: Content = {
  name: 'How In The World Do I Make This Accessible?',
  id: 1,
  image: './assets/images/writing.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'https://example.com',
};

const writing2: Content = {
  name: 'TTOT: Beware the ShipIt Squirrel',
  id: 2,
  image: './assets/images/writing.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'https://example.com',
};

const writing3: Content = {
  name: 'My Time As An Apprentice',
  id: 3,
  image: './assets/images/writing.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'https://example.com',
};

/** Sample, copy this to add more */
/* const writing4: Content = {
    name: 'My Time As An Apprentice',
    id: 4,
    image: './assets/images/writing.avif',
    position: 'string',
    text: 'Lorem impsum herm er askll moded',
    link: 'https://example.com',
  }; */

export const writingSection: Section = {
  name: 'Writings',
  display: true,
  content: [
    writing1, 
    writing2, 
    writing3,
    //add more below:
    //writing4
],
};
