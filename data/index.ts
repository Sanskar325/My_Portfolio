import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    
    { name: "Contact", link: "#contact" },
    { name: "My Bio", link: 'https://profilesanskar.netlify.app/' },
    
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Currently Learning bonding between VLSI and JAVA  ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm a Space and Tech Enthusiast",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My Tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "<p> Intrested domain - web Design <br> Cloud Computing <br> App Design </p>",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently learning more in java ",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a Project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      
    },
    {
      id: 2,
      title: "Smart Waste Managnment Website",
      des: "Efficiently manage waste with our smart, user-friendly waste managment platform.",
      img: "/smartwaste.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg","/html.svg"],
      
    },
    {
      id: 3,
      title: "Different Landing pages - Amazon, VIT Vellore, shoes etc.",
      des: "Optimize user experiences and conversions with our stunning functional landing pages.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/html.svg","/css.svg", "/c.svg"],
      
    },
    {
      id: 4,
      title: "AHB2APB Bridge Development(VLSI)",
      des: "Develop an AHB TO APB bridge ensuring efficient data transfer,lower latency and seamless integration of peripherals in embedded system ",
      img: "/vlsi1.png",
      iconLists: [  "/vlsi.png", "/gsap.svg"],
      link: 'project.pdf',
      
    },
    {
      id: 5,
      title: "Portfolio Website",
      des: "Showcase of my skills in electronics, coding, and design, featuring projects, blog, and contact info. ",
      img: "/profile.png",
      iconLists: [  "/vlsi.png",  "/gsap.svg","/html.svg","/css.svg"],
      href: 'https://profilesanskar.netlify.app/',
      link: 'https://profilesanskar.netlify.app/'
      
    },
    {
      id: 6,
      title: "To-Do App",
      des: "Create an app which Organize tasks, set reminders, track progress, and stay productive with a simple, intuitive to-do app. ",
      img: "/TO-DO.png",
      iconLists:  ["/re.svg", "/tail.svg", "/ts.svg","/html.svg","/three.svg" ],
      link: 'https://todolo3t.netlify.app/',
      href: "https://todolo3t.netlify.app/"
    },
  ];

  
  
  
  export const workExperience = [
    {
      id: 1,
      title: "App-Development Internship at Teachnook",
      desc: "Assisted in the development of a Application based platform using App studio, kotlin, Fluter SDK, React.js for enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
      
    },
    
    {
      id: 2,
      title: "ISRO(INDIAN SPACE RESEARCH ORGANISATION) - Start Program ",
      desc: "Successfully compleated ISRO START (Space Technology Academic Reachout) program which promotes space technology education and research in academic institutions.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
      pdf: "D:\codes'\waste managment\waste managment\waste managment\projects\nextjs\public\isro.pdf"
      
    },
    {
      id: 3,
      title: "Ex-Intern at Maven Silicon",
      desc: "Developed different Projects like AHB2APB Bridge and Alarm clock design using VLSI and Different Softwares.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    
    },
    {
      id: 4,
      title: "Participated in Different Hackathon ",
      desc: "Participated in Different Hackathon like Amazon, Adobe, Devsoc in which Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    
  ];
