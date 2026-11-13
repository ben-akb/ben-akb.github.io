
/*
  PERSONAL PORTFOLIO WEBSITE

  EASY WEBSITE UPDATES

  1. Add project photos and videos to their project folders.
  2. Add new project entries inside PORTFOLIO_PROJECTS.
  3. Add school photos and albums inside SCHOOL_LIFE_PHOTOS.
  4. You can add multiple photos and videos to each project.
  5. Use hoverDescription for a longer explanation.

  IMPORTANT:
  - Use forward slashes (/) in file paths.
  - File and folder names are case-sensitive on GitHub Pages.
  - Keep filenames simple whenever possible.
*/


// ==========================================
// PROJECTS
// ==========================================



window.PORTFOLIO_PROJECTS = [

  // 1. TEACHER COMMENT ASSISTANT
  {
    title: "Teacher Comment Assistant – Simplifying Report Writing",

    description: "A desktop application I developed to help teachers prepare student report comments more efficiently. It provides a separate workspace before transferring comments to the school's reporting platform.",

    hoverDescription: "The application reduces repetitive navigation between student records and reporting pages. It provides teachers with a more convenient way to organise and prepare their comments.",

    cover: "assets/projects/teacher_comment_assistant/1.png",
    coverAlt: "Teacher Comment Assistant desktop application",

    media: [
      {
        type: "image",
        src: "assets/projects/teacher_comment_assistant/1.png",
        caption: "Teacher Comment Assistant interface"
      },
      {
        type: "image",
        src: "assets/projects/teacher_comment_assistant/2.png",
        caption: "Preparing and organising student comments"
      },
      {
        type: "image",
        src: "assets/projects/teacher_comment_assistant/3.png",
        caption: "A simpler reporting workflow"
      }
    ]
  },


  // 2. AI-POWERED ROBOTIC EYE
  {
    title: "AI-Powered Robotic Eye – Interactive Human Movement Tracking",

    description: "An interactive robot that uses a camera to detect faces, blinking and head movements, then mirrors these movements. It combines image processing, AI, Python, Arduino C++, electronics and 3D printing.",

    hoverDescription: "Developed through the AI and Engineering CCA, this project expanded an original robotic-eye prototype into an interactive system. More than ten custom-designed and 3D-printed components work together with the camera, electronics and programming.",

    cover: "assets/projects/AI_ENgineering_CCA/1.jpg",
    coverAlt: "AI-powered interactive robotic eye",

    media: [
      {
        type: "image",
        src: "assets/projects/AI_ENgineering_CCA/1.jpg",
        caption: "The interactive robotic eye"
      },
      {
        type: "image",
        src: "assets/projects/AI_ENgineering_CCA/2.jpg",
        caption: "Camera-based face detection"
      },
      {
        type: "image",
        src: "assets/projects/AI_ENgineering_CCA/3.jpg",
        caption: "Tracking eye and head movements"
      },
      {
        type: "image",
        src: "assets/projects/AI_ENgineering_CCA/4.jpg",
        caption: "3D modelling and mechanical design"
      },
      {
        type: "video",
        src: "assets/projects/AI_ENgineering_CCA/5.mp4",
        caption: "Demonstrating the robotic system"
      },
      {
        type: "video",
        src: "assets/projects/AI_ENgineering_CCA/6.mp4",
        caption: "Testing the interactive movements"
      }
    ]
  },


  // 3. ORIGINAL ROBOTIC EYE
  {
    title: "A Robotic Eye – Simulating Human Eye Movement",

    description: "Two Grade 10 students designed and built a robotic eye that can blink and move its eyeball from side to side.",

    hoverDescription: "The project introduced students to robotics, mechanical movement and prototyping. It also became the starting point for a more advanced interactive robotic-eye project.",

    cover: "assets/projects/human_eye/1.jpg",
    coverAlt: "Student-built robotic eye model",

    media: [
      {
        type: "video",
        src: "assets/projects/human_eye/1.mp4",
        caption: "Demonstrating blinking and eye movement"
      }
    ]
  },


  // 4. HUMAN MOVEMENT TRACKING
  {
    title: "Human Movement Tracking with Blender",

    description: "An application that tracks human body movements and displays a digital simulation on screen. It connects movement tracking with 3D visualisation using Blender.",

    hoverDescription: "This project explores the connection between real-world movement and digital modelling. It introduces students to motion tracking, programming and interactive 3D environments.",

    cover: "assets/projects/human_body_movement_trackers/1.jpg",
    coverAlt: "Human body movement tracking application",

    media: [
      {
        type: "image",
        src: "assets/projects/human_body_movement_trackers/1.jpg",
        alt: "Human movement tracking application",
        caption: "The movement tracking application"
      },
      {
        type: "video",
        src: "assets/projects/human_body_movement_trackers/1.mp4",
        caption: "Demonstrating movement tracking and Blender visualisation"
      }
    ]
  },


  // 5. AI AND MACHINE LEARNING
  {
    title: "From Data to Prediction – Introduction to AI and Machine Learning",

    description: "Grade 8 students explored AI, different types of data and supervised and unsupervised learning. They used publicly available datasets to design an application that makes predictions.",

    hoverDescription: "Students investigated how different types and qualities of input data affect prediction accuracy. They then applied their understanding by developing and testing their own machine learning application.",

    cover: "assets/projects/G8_ML_AI/1.png",
    coverAlt: "Grade 8 students learning about AI and machine learning",

    media: [
      {
        type: "image",
        src: "assets/projects/G8_ML_AI/1.png",
        caption: "Introduction to artificial intelligence"
      },
      {
        type: "image",
        src: "assets/projects/G8_ML_AI/2.png",
        caption: "Exploring different types of data"
      },
      {
        type: "image",
        src: "assets/projects/G8_ML_AI/3.png",
        caption: "Understanding supervised and unsupervised learning"
      },
      {
        type: "image",
        src: "assets/projects/G8_ML_AI/4.png",
        caption: "Exploring how data affects AI predictions"
      },
      {
        type: "image",
        src: "assets/projects/G8_ML_AI/5.png",
        caption: "Working with public datasets"
      },
      {
        type: "image",
        src: "assets/projects/G8_ML_AI/6.png",
        caption: "Developing the prediction application"
      },
      {
        type: "image",
        src: "assets/projects/G8_ML_AI/7.png",
        caption: "Testing the predictions"
      },
      {
        type: "image",
        src: "assets/projects/G8_ML_AI/8.jpg",
        caption: "Applying machine learning concepts"
      }
    ]
  },


  // 6. FOIL BOAT CHALLENGE
  {
    title: "The Foil Boat Challenge – Learning Through Design Thinking",

    description: "Students applied a four-stage problem-solving cycle (Prepare, Try, Reflect and Define) to design aluminium foil boats that could carry as much weight as possible. Each group then wrote a reflection report about the process.",

    hoverDescription: "Through this hands-on engineering challenge, students explored teamwork, experimentation and structured problem-solving. They reflected on their decisions and how they applied each stage of the cycle.",

    cover: "assets/school-life/Problem_solving_cycle/1.jpg",
    coverAlt: "Students participating in an aluminium foil boat challenge",

    media: [
      {
        type: "image",
        src: "assets/school-life/Problem_solving_cycle/1.jpg",
        caption: "The aluminium foil boat challenge"
      },
      {
        type: "image",
        src: "assets/school-life/Problem_solving_cycle/2.jpg",
        caption: "Designing the boats"
      },
      {
        type: "image",
        src: "assets/school-life/Problem_solving_cycle/3.jpg",
        caption: "Building and testing designs"
      },
      {
        type: "image",
        src: "assets/school-life/Problem_solving_cycle/4.jpg",
        caption: "Testing how much weight the boats can carry"
      },
      {
        type: "image",
        src: "assets/school-life/Problem_solving_cycle/5.jpg",
        caption: "Working together on the challenge"
      },
      {
        type: "image",
        src: "assets/school-life/Problem_solving_cycle/6.jpg",
        caption: "Reflecting on the problem-solving process"
      }
    ]
  },


  // 7. RASPBERRY PI AND IOT
  {
    title: "Raspberry Pi and IoT – Connecting Code to the Real World",

    description: "Raspberry Pi allows students to explore programming, electronics and connected devices. Projects can include smart security cameras, sensors, automation, image processing and robotics.",

    hoverDescription: "Students can investigate how software interacts with the physical world by building practical IoT and physical computing projects. Raspberry Pi also provides opportunities to explore computer vision and more advanced engineering applications.",

    cover: "assets/projects/iot_project/6.png",
    coverAlt: "Raspberry Pi and Internet of Things projects",

    media: [
      {
        type: "image",
        src: "assets/projects/iot_project/6.png",
        caption: "Exploring Raspberry Pi and physical computing"
      },
      {
        type: "image",
        src: "assets/projects/iot_project/5.jpg",
        caption: "Building connected electronic devices"
      },
      {
        type: "image",
        src: "assets/projects/iot_project/4.jpg",
        caption: "Experimenting with sensors and automation"
      },
      {
        type: "image",
        src: "assets/projects/iot_project/3.jpg",
        caption: "Exploring camera-based image processing"
      },
      {
        type: "image",
        src: "assets/projects/iot_project/2.jpg",
        caption: "Developing practical IoT applications"
      },
      {
        type: "image",
        src: "assets/projects/iot_project/1.jpg",
        caption: "Connecting programming with real-world applications"
      },
      {
        type: "image",
        src: "assets/projects/iot_project/7.jpg",
        caption: "Exploring physical computing"
      }
    ]
  },


  // 8. PYTHON SNAKE GAME
  {
    title: "Python Snake Game – Learning Through Game Development",

    description: "A classic Snake game developed using Python and the Turtle graphics library. Players control the snake, collect food, grow longer and increase their speed.",

    hoverDescription: "The project introduces object-oriented programming, functions, loops, collision detection and keyboard controls. Students can learn how different programming concepts work together to create an interactive game.",

    cover: "assets/projects/snake_game/Python Snake Game Cover Page.png",
    coverAlt: "Python Snake game developed using Turtle graphics",

    media: [
      {
        type: "video",
        src: "assets/projects/snake_game/1.mp4",
        caption: "Demonstration of the Python Snake game"
      }
    ]
  },


  // 9. US STATES GAME
  {
    title: "The 50 US States Challenge – An Interactive Python Game",

    description: "An educational geography game developed using Python and Turtle graphics. Players identify the 50 US states and locate their names in the correct positions on a map.",

    hoverDescription: "The project demonstrates how Python can create interactive learning applications. Playing the game also helps students recognise US states and remember their geographical locations.",

    // Check that this cover filename matches your actual image.
    cover: "assets/projects/States_of_usa/cover.png",
    coverAlt: "Interactive Python game showing a map of the 50 US states",

    media: [
      {
        type: "video",
        src: "assets/projects/States_of_usa/States of USA.mp4",
        caption: "Demonstration of the 50 US States geography game"
      }
    ]
  },


  // 10. POMODORO TIMER
  {
    title: "Python Pomodoro Timer – Building Apps for Productivity",

    description: "A desktop productivity application developed using Python and Tkinter. It uses focused work sessions and scheduled breaks to help students organise their study time.",

    hoverDescription: "Students can learn how to design a graphical user interface and connect buttons, labels and timers to Python functions. The application also introduces the Pomodoro technique as a practical way to organise homework and study sessions.",

    cover: "assets/projects/pomodoro_python/1.jpg",
    coverAlt: "Python Pomodoro timer with a graphical user interface",

    media: [
      {
        type: "image",
        src: "assets/projects/pomodoro_python/1.jpg",
        alt: "Python Pomodoro timer interface",
        caption: "The Pomodoro timer interface"
      },
      {
        type: "video",
        src: "assets/projects/pomodoro_python/1.mp4",
        caption: "Demonstration of the Python Pomodoro application"
      }
    ]
  },


  // 11. FLASHCARD APP
  {
    title: "Python Flashcard App – Making Vocabulary Learning Interactive",

    description: "A Python application that helps students practise Chinese characters, Pinyin and English meanings using interactive flashcards. It can also be adapted for Chinese-speaking students learning English vocabulary.",

    hoverDescription: "Students can explore how programming can support language learning while creating a useful application. The flashcards help learners review unfamiliar words and gradually build their vocabulary.",

    cover: "assets/projects/flash_card_app/1.png",
    coverAlt: "Python vocabulary flashcard application",

    media: [
      {
        type: "image",
        src: "assets/projects/flash_card_app/1.png",
        alt: "Interactive vocabulary flashcard application",
        caption: "The flashcard application interface"
      },
      {
        type: "video",
        src: "assets/projects/flash_card_app/1.mp4",
        caption: "Demonstration of the interactive flashcard application"
      }
    ]
  },


  // 12. COMPUTER CLUB WEBSITE
  {
    title: "Computer Club Website",

    description: "A website developed for our school computer club to introduce its activities, events and student projects. It provides a central online space to share the club's work with the school community.",

    hoverDescription: "The project brings together web development, programming and student creativity. It also provides an opportunity to showcase the club's robotics and technology activities.",

    cover: "assets/projects/webdeloping_cs_club/1.png",
    coverAlt: "School computer club website homepage",

    media: [
      {
        type: "image",
        src: "assets/projects/webdeloping_cs_club/1.png",
        caption: "Computer club website homepage"
      },
      {
        type: "image",
        src: "assets/projects/webdeloping_cs_club/2.png",
        caption: "Introducing the club and its activities"
      },
      {
        type: "image",
        src: "assets/projects/webdeloping_cs_club/3.png",
        caption: "Student website content"
      },
      {
        type: "image",
        src: "assets/projects/webdeloping_cs_club/4.png",
        caption: "Showcasing the club's work"
      }
    ]
  }

];



// ==========================================
// SCHOOL LIFE
// ==========================================

window.SCHOOL_LIFE_PHOTOS = [

{
  caption: "Head of Student Development – Student Leadership and School Life",

  note: "SCHOOL LEADERSHIP",

  alt: "Student leadership, school assemblies, official visits and student-led activities",

  cover: "assets/school-life/head_of_studentLeaderShip/1.jpeg",

  hoverDescription: "During my time as Head of Student Development, I was responsible for coordinating and supporting activities that encouraged students to become more actively involved in school life. My responsibilities included organising weekly assemblies, coordinating student involvement in visits from distinguished guests, including ambassadors and a prime minister, and supporting the Student Council in planning and delivering activities throughout the academic year. Students took active responsibility for preparing official visits, leading school activities and organising events such as the school prom. Through these opportunities, students developed leadership, communication, teamwork and organisational skills. My role focused on coordinating these initiatives, supporting student leaders and creating opportunities for students to contribute to the school community and develop beyond the classroom.",

  media: [
    {
      type: "image",
      src: "assets/school-life/head_of_studentLeaderShip/1.jpeg",
      caption: "Student development and school leadership"
    },
    {
      type: "image",
      src: "assets/school-life/head_of_studentLeaderShip/2.jpeg",
      caption: "Organising and leading school assemblies"
    },
    {
      type: "image",
      src: "assets/school-life/head_of_studentLeaderShip/3.jpeg",
      caption: "Preparing students for distinguished guest visits"
    },
    {
      type: "image",
      src: "assets/school-life/head_of_studentLeaderShip/4.jpeg",
      caption: "Encouraging student leadership"
    },
    {
      type: "image",
      src: "assets/school-life/head_of_studentLeaderShip/5.jpeg",
      caption: "Supporting Student Council activities"
    },
    {
      type: "image",
      src: "assets/school-life/head_of_studentLeaderShip/6.jpeg",
      caption: "Building an engaged school community"
    }
  ]
},


{
  src: "assets/school-life/creative_poster/1.jpg",

  alt: "A Grade 6 student's creative three-dimensional robot poster",

  caption: "A creative twist on a classroom poster",

  hoverDescription: "During a Grade 6 poster-design lesson, students were asked to create a poster around the message 'Be quiet when your teacher is talking.' One student came up with a particularly creative idea. He designed a robot's face and cut an opening in the poster so that, when he held it in front of himself, his own hair appeared through the opening as the robot's hair. What started as a simple poster assignment became a fun three-dimensional design. I was impressed by his imagination and encouraged him to develop his idea. His creativity was recognised with a reward.",

  note: "STUDENT CREATIVITY"
},

{
  caption: "What Is a Computer? – Grade 7 ICT Activity",

  note: "GRADE 7 ICT",

  alt: "Grade 7 students creating and presenting posters about what counts as a computer",

  cover: "assets/school-life/what're_computers/3.jpg",

  hoverDescription: "In this Grade 7 ICT activity, students explored a simple but interesting question: What is a computer, and what is not? Working independently and in groups, they researched different examples, selected and printed pictures, and created posters to explain their ideas. At the end of the lesson, students presented their posters to their classmates and explained why they considered each example to be a computer or not. The activity encouraged critical thinking, research skills, creativity and communication while helping students develop a broader understanding of computing.",

  media: [
    {
      type: "image",
      src: "assets/school-life/what're_computers/3.jpg",
      caption: "Exploring what counts as a computer"
    },
    {
      type: "image",
      src: "assets/school-life/what're_computers/2.jpg",
      caption: "Researching and selecting examples"
    },
    {
      type: "image",
      src: "assets/school-life/what're_computers/1.jpg",
      caption: "Creating posters to explain their ideas"
    },
    {
      type: "image",
      src: "assets/school-life/what're_computers/4.jpg",
      caption: "Presenting ideas to classmates"
    },
  ]
},


{
  caption: "STEAM Fair 2025 – Smart Homes and Sustainable Cities",

  note: "STEAM FAIR",

  alt: "Student-built smart home and sustainable city models displayed at the STEAM Fair",

  cover: "assets/school-life/steam_fair/1.jpg",

  hoverDescription: "During our STEAM Fair, students developed interactive models exploring how technology can make homes and cities smarter and more sustainable. Using UNIHIKER boards as their project controllers, they created models of smart home appliances, including an air conditioner, microwave and vending machine. Some groups focused on smart homes, designing lighting systems that automatically turn on when it gets dark and switch off when there is enough light. Other groups explored renewable energy by using wind power to generate electricity for their model city. Through these projects, students applied programming, electronics and engineering concepts to practical challenges. They explored automation, energy efficiency and sustainable living while developing their creativity, teamwork and problem-solving skills.",

  media: [
    {
      type: "image",
      src: "assets/school-life/steam_fair/1.jpg",
      caption: "Exploring smart home technology"
    },
    {
      type: "image",
      src: "assets/school-life/steam_fair/2.jpg",
      caption: "Automating everyday home appliances"
    },
    {
      type: "image",
      src: "assets/school-life/steam_fair/3.jpg",
      caption: "Smart home lighting systems"
    },
    {
      type: "image",
      src: "assets/school-life/steam_fair/4.jpg",
      caption: "Building interactive smart devices"
    },
    {
      type: "image",
      src: "assets/school-life/steam_fair/5.jpg",
      caption: "Designing a model smart city"
    },
    {
      type: "image",
      src: "assets/school-life/steam_fair/6.jpg",
      caption: "Exploring wind energy and renewable power"
    },
    {
      type: "image",
      src: "assets/school-life/steam_fair/7.jpg",
      caption: "Presenting student engineering projects"
    }
  ]
},

{
  caption: "3D Printing Club – From Digital Design to Real Objects",

  note: "3D PRINTING CLUB",

  alt: "Students designing and producing 3D-printed models",

  cover: "assets/projects/3d_printing/10.png",

  hoverDescription: "In our 3D Printing Club, students explore how digital designs can be transformed into physical objects. They can create their own models using computer-aided design software such as Blender and SolidWorks, experiment with online 3D modelling tools, or select existing 3D models from online libraries. Once their designs are ready, students work together to prepare and print their models using 3D printers. Through these activities, they develop digital design skills, spatial awareness and an understanding of the 3D printing process, from an initial idea to a finished object.",

  media: [
    {
      type: "image",
      src: "assets/projects/3d_printing/10.png",
      caption: "Exploring digital 3D modelling"
    },
    {
      type: "image",
      src: "assets/projects/3d_printing/11.png",
      caption: "Preparing models for 3D printing"
    },
    {
      type: "image",
      src: "assets/projects/3d_printing/12.png",
      caption: "Turning digital designs into physical objects"
    }
  ]
},


{
  caption: "Talking in Binary – A Creative Grade 7 ICT Activity",

  note: "GRADE 7 ICT",

  alt: "Grade 7 students creating posters using binary numbers and ASCII codes",

  cover: "assets/school-life/talk_binary/1.jpg",

  hoverDescription: "In this Grade 7 ICT activity, students explored how computers represent and process text using binary numbers. They were challenged to create posters using binary, converting the words and messages in their designs into sequences of zeros and ones. Through this activity, students learned about binary numbers, ASCII and Extended ASCII character codes, and how text characters can be represented using binary. They applied their knowledge by encoding messages and combining computing concepts with visual creativity, making an abstract topic more engaging and practical.",

  media: [
    {
      type: "image",
      src: "assets/school-life/talk_binary/1.jpg",
      caption: "Exploring how computers represent text"
    },
    {
      type: "image",
      src: "assets/school-life/talk_binary/2.jpg",
      caption: "Converting messages into binary"
    },
    {
      type: "image",
      src: "assets/school-life/talk_binary/3.jpg",
      caption: "Creating posters using zeros and ones"
    },
    {
      type: "image",
      src: "assets/school-life/talk_binary/4.jpg",
      caption: "Putting binary and ASCII knowledge into practice"
    }
  ]
},


{
  caption: "Vector Graphics – From Computer Science Concepts to Creative Designs",

  note: "GRADE 8 ICT",

  alt: "Grade 8 students creating their own artwork using vector graphics software",

  cover: "assets/school-life/Vector_graphics/1.jpg",

  hoverDescription: "In this Grade 8 ICT activity, students explored the differences between vector and pixel-based images. They learned that vector graphics use mathematically defined paths, lines, curves and shapes to create images, while pixel-based images are made up of individual pixels. Students compared the advantages and disadvantages of both formats, including image quality, scalability and their different uses. After learning the concepts, they used a vector graphics application to create their own digital artwork. The activity helped students connect theoretical knowledge with practical digital design while developing their creativity and understanding of computer graphics.",

  media: [
    {
      type: "image",
      src: "assets/school-life/Vector_graphics/1.jpg",
      caption: "Understanding vector and pixel images"
    },
    {
      type: "image",
      src: "assets/school-life/Vector_graphics/2.jpg",
      caption: "Exploring vector graphics tools"
    },
    {
      type: "image",
      src: "assets/school-life/Vector_graphics/3.PNG",
      caption: "Creating original digital artwork"
    },
    {
      type: "image",
      src: "assets/school-life/Vector_graphics/4.PNG",
      caption: "Showcasing student vector designs"
    }
  ]
},


{
  caption: "Beyond the Classroom – Exploring Science and Mathematics",

  note: "SCIENCE & MATHS",

  alt: "Students taking part in hands-on science and mathematics activities during school events",

  cover: "assets/school-life/pi_days/1.jpg",

  hoverDescription: "Throughout the school year, special events such as Pi Day and Science Day give students opportunities to explore science and mathematics beyond the classroom. Through hands-on experiments, interactive challenges and practical activities, students discover how the concepts they learn in lessons can be applied to real-world situations. Teachers facilitate these experiences to encourage curiosity, creativity and critical thinking, helping students make connections between classroom learning and the world around them.",

  media: [
    {
      type: "image",
      src: "assets/school-life/pi_days/1.jpg",
      caption: "Discovering mathematics through practical activities"
    },
    {
      type: "image",
      src: "assets/school-life/pi_days/2.jpg",
      caption: "Exploring mathematical ideas beyond the classroom"
    },
    {
      type: "image",
      src: "assets/school-life/pi_days/3.jpg",
      caption: "Learning through hands-on experiments"
    },
    {
      type: "image",
      src: "assets/school-life/pi_days/4.jpg",
      caption: "Putting scientific ideas into practice"
    },
    {
      type: "image",
      src: "assets/school-life/pi_days/5.jpg",
      caption: "Taking part in interactive challenges"
    },
    {
      type: "image",
      src: "assets/school-life/pi_days/7.jpg",
      caption: "Exploring real-world applications of science"
    },
    {
      type: "image",
      src: "assets/school-life/pi_days/8.jpg",
      caption: "Developing curiosity through exploration"
    },
    {
      type: "image",
      src: "assets/school-life/pi_days/9.jpeg",
      caption: "Learning, experimenting and discovering together"
    }
  ]
},


{
  caption: "Student Enterprise – Turning Festival Ideas into a Business",

  note: "ENTREPRENEURSHIP CLUB",

  alt: "Students running their student-led business during the school festival",

  cover: "assets/school-life/Entrepenuership_club/1.jpg",

  hoverDescription: "As part of the Entrepreneurship Club, students planned and ran a small business during a school festival. They began by researching customer demand and identifying hamburgers and milk tea as popular products. They contacted local shops, compared prices and looked for suitable suppliers. After receiving approval from the school leadership team, they created promotional posters, collected orders from students and arranged the purchases. During the festival, they organised the delivery of the products and managed their sales. Through this experience, students developed practical skills in market research, planning, communication, teamwork, marketing and basic business management.",

  media: [
    {
      type: "image",
      src: "assets/school-life/Entrepenuership_club/1.jpg",
      caption: "Exploring the business opportunity"
    },
    {
      type: "image",
      src: "assets/school-life/Entrepenuership_club/2.jpg",
      caption: "Researching customer demand"
    },
    {
      type: "image",
      src: "assets/school-life/Entrepenuership_club/3.jpg",
      caption: "Comparing products and suppliers"
    },
    {
      type: "image",
      src: "assets/school-life/Entrepenuership_club/4.jpg",
      caption: "Preparing promotional posters"
    },
    {
      type: "image",
      src: "assets/school-life/Entrepenuership_club/5.jpg",
      caption: "Getting ready for the school festival"
    },
    {
      type: "image",
      src: "assets/school-life/Entrepenuership_club/6.PNG",
      caption: "Organising student orders"
    },
    {
      type: "image",
      src: "assets/school-life/Entrepenuership_club/7.jpg",
      caption: "Delivering products during the festival"
    },
    {
      type: "image",
      src: "assets/school-life/Entrepenuership_club/8.jpg",
      caption: "The student enterprise in action"
    }
  ]
},


{
  caption: "House Leadership and Tutoring – Supporting Student Life and Development",

  note: "HOUSE & TUTORING",

  alt: "Students participating in house activities and wider school life",

  cover: "assets/school-life/house_life/1.jpg",

  hoverDescription: "Through my responsibilities as a House Master and Tutor, I worked to create a positive and engaging school experience for students. I encouraged them to participate in house activities, school events and extracurricular programmes, helping them build friendships, develop teamwork and feel more connected to the school community. Alongside these activities, my role as a Tutor involved supporting students in their academic progress and wider personal development. I aimed to create a supportive environment where students could balance their academic responsibilities with meaningful school experiences. I believe that a positive school life, strong relationships and opportunities to participate are important parts of a student's overall development.",

  media: [
    {
      type: "image",
      src: "assets/school-life/house_life/1.jpg",
      caption: "Building a positive house community"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/2.jpg",
      caption: "Encouraging participation in school activities"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/3.jpg",
      caption: "Developing teamwork and friendships"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/4.jpeg",
      caption: "Creating memorable school experiences"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/5.jpg",
      caption: "Supporting students beyond the classroom"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/6.jpeg",
      caption: "Encouraging students to get involved"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/7.jpg",
      caption: "Sharing experiences as a school community"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/8.jpg",
      caption: "Supporting student development"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/9.jpeg",
      caption: "Promoting a balanced school experience"
    },
    {
      type: "image",
      src: "assets/school-life/house_life/10.jpeg",
      caption: "Building connections beyond academic learning"
    }
  ]
},


{
  caption: "Professional Development – Learning, Sharing and Growing Together",

  note: "PROFESSIONAL DEVELOPMENT",

  alt: "Professional learning and teacher development activities",

  cover: "assets/school-life/PD/1.jpg",

  hoverDescription: "Professional development plays an important role in maintaining and improving the quality of teaching. It gives educators opportunities to revisit important educational principles, reflect on everyday classroom practices and explore new approaches that may otherwise be overlooked in busy school routines. Through Cambridge programmes, online courses and school-based professional development across different subjects, teachers can exchange ideas, share experiences and learn from one another. Emerging areas such as artificial intelligence and the effective use of technology in the classroom also create valuable opportunities to explore new possibilities for teaching and learning. I believe professional development should go beyond simply attending training sessions. It should encourage reflection, collaboration and the sharing of practical ideas that teachers can bring into their classrooms.",

  media: [
    {
      type: "image",
      src: "assets/school-life/PD/1.jpg",
      caption: "Cambridge professional development"
    },
    {
      type: "image",
      src: "assets/school-life/PD/2.jpg",
      caption: "Learning through online professional development"
    },
    {
      type: "image",
      src: "assets/school-life/PD/3.jpg",
      caption: "Sharing ideas and professional practice"
    },
    {
      type: "image",
      src: "assets/school-life/PD/4.jpeg",
      caption: "Sharing ideas and professional practice"
    }
  ]
},


{
  caption: "Head of Student Development – Student Leadership and School Life",

  note: "SCHOOL LEADERSHIP",

  alt: "Student leadership, school assemblies, official visits and student-led activities",

  cover: "assets/school-life/nobel_winner/1.jpeg",

  hoverDescription: "As Head of Student Development, I was responsible for coordinating and supporting activities that encouraged students to become more actively involved in school life. This included organising weekly assemblies, preparing students to welcome distinguished visitors, including ambassadors, a prime minister and a Nobel laureate, and supporting the Student Council in planning and delivering activities throughout the academic year. Students took active responsibility for preparing official visits, supporting school events and organising activities such as the school prom. Through these experiences, students developed leadership, communication, teamwork and organisational skills. I believe that giving students opportunities to take responsibility, contribute to their school community and meet people who have made significant contributions to society can broaden their perspectives and encourage them to think big and aim high.",

  media: [

  ]
},



{
  caption: "School Festivals – Building a Positive School Community",

  note: "SCHOOL COMMUNITY",

  alt: "Teachers and students participating in school festivals and activities",

  cover: "assets/school-life/Festivals/1.jpeg",

  hoverDescription: "I believe teachers' participation in school festivals and activities helps create a positive and supportive school environment. Sharing these experiences with students and colleagues builds stronger relationships, encourages teamwork and creates a greater sense of belonging. A happy and engaged school community makes learning more enjoyable for everyone.",

  media: [
    {
      type: "image",
      src: "assets/school-life/Ffestivals/1.jpeg",
      caption: "Celebrating together"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/2.jpg",
      caption: "Sharing school experiences"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/3.jpg",
      caption: "Building connections"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/4.jpg",
      caption: "Teachers and students together"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/5.jpg",
      caption: "Enjoying school activities"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/6.jpg",
      caption: "Teamwork and participation"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/7.jpg",
      caption: "Celebrating school traditions"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/8.jpg",
      caption: "Creating happy memories"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/9.jpg",
      caption: "A connected school community"
    },
    {
      type: "image",
      src: "assets/school-life/Ffestivals/10.jpg",
      caption: "Growing together"
    }
  ]
},





];
