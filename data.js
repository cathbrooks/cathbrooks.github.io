export const bio = [
  "Hello! I'm Catherine Brooks, a recent graduate in mathematics and computer science from Tulane University.",
  "I am passionate about AI, data science, and programming in general. I'm constantly looking to gain experience in software development and widen my knowledge of how different systems can benefit businesses. Take a look at my projects where I work with Large Language Models, Neural Networks, interactive web features, and data science.",
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python, Java, C++, JavaScript",
    color: "1",
    percentage: "100",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "React.js, Django, PyTorch, scikit-learn, numPy, JAX",
    color: "6",
    percentage: "100",
  },
  {
    title: "Design",
    skillName: "HTML, CSS, Wix",
    color: "4",
    percentage: "100",
  },
  {
    title: "Version Control",
    skillName: "GitHub, Git",
    color: "7",
    percentage: "100",
  },
  {
    title: "Tools",
    skillName: "Debugging, VS Code, Jupyter Notebook, Matplotlib, MatLab",
    color: "3",
    percentage: "100",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      //needs work
      projectName: "Large Language Model Evaluation",
      image: "images/expoPoster.png",
      summary:
        "This project taught me database and workflow management with a team, along with many different softwares and systems, such as React and Supabase. We improved Sawt, a civic tool for the New Orleans community built using large language model with a Retrieval-Augmented Generation (RAG) pipeline. We created a feedback system with React, Supabase, and Google Cloud, and used a framework called DeepEval to compare human and LLM-based performance ratings, which is displayed on the SAWT website. Our work revealed patterns in model bias and accuracy, informing improvements for transparency and trust in generative AI.",
      preview: "https://cathbrooks.github.io/llmProject",
      techStack: ["Retrieval-Augmented Generation (RAG)", "Large Language Models (LLMs)", "React.js", "Database Organization"],
    },
    {
      projectName: "Physics-Informed Neural Networks (PINNs) Academic Essay",
      image: "images/NN.png",
      summary:
        "I chose this topic for my mathematics capstone because of my interest in scientific computing and the math behind neural networks. I evaluated two computational methods for solving partial differential equations (PDEs): finite difference methods, and Physics-Informed Neural Networks (PINNs). This required coding my own neural networks and PINNs using python and utilizing JAX.",
      preview: "https://cathbrooks.github.io/PINNSProject",
      techStack: ["Scientific Computing", "Neural Networks", "PINNS", "JAX"],
    },
    {
      projectName: "Return on Investment Estimator",
      image: "images/ROICalc.png",
      summary:
        "I designed and coded this interactive ROI calculator for EnergiSpot’s website to help customers estimate potential returns from investing in the company's EV charging stations. Through this project, I strengthened my skills in front-end development, JavaScript, and user-centered design to model real-world financial scenarios.",
      preview: "https://www.energispot.com/roi-estimator",
      techStack: ["HTML", "Wix", "JavaScript", "Web Design"],
    },
    {
      projectName: "SAWT LLM Feedback Tool",
      image: "images/SAWT.png",
      summary:"",
      preview: "https://www.sawt.us/feedback",
      techStack: ["LLM", "Full Stack Development", "Web Design", "JavaScript", "React"]
    },
    {
      projectName: "Data Science Project",
      image: "images/DataScience.png",
      summary:
        "This project required extensive data sourcing and data cleaning, including merging multiple datasets, handling missing values, and engineering new features. We used Pandas to group, normalize, and reshape the data, and converted percentage features into model-ready formats. After preparing the multiple datasets, we built and evaluated logistic regression models to classify data. The model's performance was assessed using cross-validation, accuracy scores, and confusion matrices, with visualizations created in Seaborn and Matplotlib.",
      preview: "https://cathbrooks.github.io/datascienceproject.github.io/",
      techStack: ["Machine Learning", "Data Cleaning", "Data Sourcing", "Data Modeling", "Pandas", "Matplotlib", "Seaborn", ]
    },
  ],
};

export const experience = [
  {
    title: "EnergiSpot",
    duration: "May 2024 - September 2024",
    subtitle: "Intern - Marketing, Web Design, Automation Programming",
    details: [
      `Performed in-depth analyses of companies and adjacent markets to explore high-potential investment opportunities, driving informed decision-making and strategic growth.`,
      `Programmed and designed a custom savings calculator and visual from the ground up for the company website, enabling both customers and our salespeople to accurately project cost savings and enhancing customer engagement.`,
      `Sourced and filtered data to build comprehensive datasets for actionable insights on potential customers, creating visual charts and analyses.`,],
    tags: ["Market Analysis", "Data Visualization", "Web Development", "JavaScript", "Wix", "Data Cleaning", "Customer Insights"],
    icon: "truck ", //change
  },
  {
    title: "Eye On Surveillance",
    duration: "August 2023 - May 2024",
    subtitle: "Intern – Large Language Models, Data Science",
    details: [
      `Spearheaded refinement of a large language model, enhancing accessibility to local government proceedings and general information.`,
      `Developed a user feedback webtool to gather community insights, conducting outreach sessions to collect crucial feedback data.`,
      `Conducted research to identify and mitigate biases within large-language models.`,
    ],
    tags: ["Large Language Models", "Bias Mitigation", "AI Ethics", "JavaScript", "Web Development", "Nodejs", "User Research", "Data Science"],
    icon: "heartbeat", //change
  },
  {
    title: "TripleBlind",
    duration: "May 2021 - August 2021",
    subtitle: "Intern – AI Data Privacy ",
    details: [
      `Designed and implemented JUnit test suites, ensuring software reliability and improving development efficiency.`,
      `Contributed to research and design of AI-powered webtools within the Django framework.`,
      `Gained expertise in data privacy and AI blinding technology.`,
    ],
    tags: ["AI Privacy", "Django", "JUnit", "Software Testing", "Python", "Web Security", "Machine Learning"],
    icon: "qrcode", //change
  },
  {
    title: "Steamboat Ski Resort",
    duration: "November 2021 - December 2022",
    subtitle: "Server, Retail",
    details: [
      `Selected as 1 of the 40 individuals out of 833 employees to receive a raise in acknowledgement of exceptional and devoted work.`,
      `Provided exceptional service at fine dining establishments, honing communication skills with diverse clientele.`,
      `Held multiple retail positions within the Steamboat Ski Resort at one time, fostering teamwork and problem-solving abilities across multiple teams.`,
    ],
    tags: ["Customer Service", "Retail Operations", "POS Systems", "Sales", "Teamwork", "Hospitality"],
    icon: "group", 
  },
];

export const education = [
  {
    title: "B.S. in Mathematics and Computer Science",
    duration: "Graduated in Feb. 2025",
    subtitle: "Tulane University",
    details: [],
    tags: [             
      "Data Science",
      "Machine Learning",
      "Cyber Security",
      "Computer Systems & Networks",
      "Ordinary Differential Equations",
      "Scientific Computing",
      "Linear Algebra",
      "Real Analysis"
    ],
    icon: "graduation-cap",
  },
  {
    title: "Study in Tokyo",
    duration: "Sep 2024 - Feb 2025",
    subtitle: "Sophia University",
    details: [],
    tags: [               
      "Data Science",
      "Machine Learning",
      "Computer Studies",
      "Japanese Language",
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
  // {
  //   label: "Dev Profiles",
  //   data: [
      // {
      //   text: "Stackoverflow",
      //   link: "https://stackoverflow.com/users/8461233/vinay-somawat",
      // },
      // {
      //   text: "GitHub",
      //   link: "https://github.com/cathbrooks",
      // },
      // {
      //   text: "LeetCode",
      //   link: "https://leetcode.com/somawatvinay/",
      // },
    // ],
  // },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/brooks-catherine/",
      },
      {
        text: "GitHub",
        link: "https://github.com/cathbrooks",
      },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      // {
      //   text: "Buy me a coffee",
      //   link: "https://www.buymeacoffee.com/r194dME8y",
      // },
      // {
      //   text: "Github/vinaysomawat.github.io",
      //   link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      // },
    ],
  },
  {
    label: "copyright-text",
    data: [
      // "Made with &hearts; by Vinay Somawat.",
      // "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];