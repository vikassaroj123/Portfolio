import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';


export const projectsData = [
    {
        id: 1,
        name: 'StudyNotion Edtech-Project',
        description: "Study Notion EdTech Platform is a cutting-edge solution revolutionizing education. It offers efficient course management and seamless communication through user roles for Admin, Instructor, and Student. Secure payments via Razorpay, Nodemailer for email communication, and Cloudinary for multimedia storage ensure a robust learning environment. With a focus on user security, Study Notion employs advanced authentication mechanisms. Powered by React.js, Node.js, MongoDB, and other modern technologies, Study Notion is reshaping the future of learning.",
        tools: ['Express', 'MongoDB', 'React','Express','NodesMailer', 'Cloudenry', 'Authentication','OTP Authentication'],
        role: 'MERN Stack',
        code: 'https://github.com/vikassaroj123/Study_Notion_Mega_Project',
        demo: 'https://study-notion-peach-nine.vercel.app/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Spice Savor - Online Hotel Reservation Platform',
        description: 'Spice Savor: Your go-to for hassle-free hotel reservations. With React.js, we have crafted a captivating UI for seamless user interaction. Our Node.js and Express.js backend powers secure reservation handling and authentication, while MongoDB ensures scalability and performance. Experience hospitality redefined with Spice Savor.',
        tools:['Express', 'MongoDB', 'React','Express','NodesMailer', 'Cloudenry', 'Authentication','OTP Authentication'],
        role: 'MERN Stack',
        code: 'https://github.com/vikassaroj123/SpiceSavor_MERN_WEB',
        demo: 'https://spice-savor-mern-web.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: ' Festiva- Hall Booking',
        description: 'Festiva simplifies hall bookings with real-time updates and secure transactions. Our React.js interface ensures seamless user experience, while Node.js and Express.js power swift transactions and MongoDB stores data reliably. With JWT authentication and an intuitive admin panel, managing bookings and accessing analytics is effortless. Experience hassle-free event planning with Festiva.',
        tools: ['Express', 'MongoDB', 'React','Express','NodesMailer'],
        code: 'https://github.com/vikassaroj123/MERN_STACK_EVENT_PROJECT',
        role: 'MERN Stack',
        demo: 'https://mern-stack-event-project-woad.vercel.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Hotel - Backend System',
        description: "The hotel backend system mirrors our project methodology, utilizing Node.js and Express.js for seamless operations. MongoDB serves as our data hub, while JWT ensures secure user access. This cohesive approach promises efficiency and reliability in managing hotel operations and guest interactions.",
        tools: ['NodeJS', 'ExpressJS', 'MongoDB', 'JWT'],
        code: 'https://github.com/vikassaroj123/Hotel_Backend',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];
