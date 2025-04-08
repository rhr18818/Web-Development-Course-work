const cardsData = [
    {
      status: "Online",
      rate: "$22/hr",
      imageUrl: "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ratul Hasan",
      title: "Full-Stack Developer",
      skills: ["JS", "Python", "C++", "+4"],
      description: "Ratul is a 23-year-old Full-Stack Developer with an impressive portfolio behind him.",
      buttonText: "Follow"
    },
    {
      status: "Offline",
      rate: "$35/hr",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "John Smith",
      title: "Frontend Developer",
      skills: ["HTML", "CSS", "React", "Vue", "+2"],
      description: "John specializes in creating responsive and intuitive user interfaces.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$40/hr",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Alice Green",
      title: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "+3"],
      description: "Alice builds robust and scalable server-side applications.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$50/hr",
      imageUrl: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Bob White",
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Research", "+1"],
      description: "Bob designs engaging user experiences and beautiful interfaces.",
      buttonText: "Follow"
    },
    {
      status: "Offline",
      rate: "$30/hr",
      imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Charlie Brown",
      title: "DevOps Engineer",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Charlie ensures smooth deployment and infrastructure management.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$45/hr",
      imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "David Lee",
      title: "Data Scientist",
      skills: ["Python", "R", "SQL", "TensorFlow", "+2"],
      description: "David extracts insights from complex datasets to drive decisions.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$28/hr",
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Eva Martinez",
      title: "Mobile App Developer",
      skills: ["Swift", "Kotlin", "React Native", "Firebase"],
      description: "Eva creates native and cross-platform mobile applications.",
      buttonText: "Follow"
    },
    {
      status: "Offline",
      rate: "$38/hr",
      imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Fiona Clark",
      title: "QA Engineer",
      skills: ["Selenium", "JUnit", "Postman", "Jira", "+1"],
      description: "Fiona ensures software quality through rigorous testing.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$55/hr",
      imageUrl: "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "George Hill",
      title: "Cloud Architect",
      skills: ["Azure", "GCP", "AWS", "Terraform"],
      description: "George designs and implements secure cloud solutions.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$25/hr",
      imageUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hannah Scott",
      title: "Junior Web Developer",
      skills: ["HTML", "CSS", "JavaScript","+2"],
      description: "Hannah is passionate about learning and building web experiences.",
      buttonText: "Follow"
    },
    {
      status: "Offline",
      rate: "$42/hr",
      imageUrl: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ian Walker",
      title: "Security Analyst",
      skills: ["Penetration Testing", "Network", "Cryptography", "+2"],
      description: "Ian protects systems and data from security threats.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$33/hr",
      imageUrl: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Julia Adams",
      title: "Project Manager",
      skills: ["Agile", "Scrum", "Jira", "Communication"],
      description: "Julia leads teams to deliver projects on time and within budget.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$48/hr",
      imageUrl: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Kevin Baker",
      title: "Full-Stack Developer",
      skills: ["Java", "Spring", "Angular", "PostgreSQL", "+3"],
      description: "Kevin develops end-to-end web applications using modern frameworks.",
      buttonText: "Follow"
    },
    {
      status: "Offline",
      rate: "$29/hr",
      imageUrl: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Laura Nelson",
      title: "Content Writer",
      skills: ["SEO", "Copywriting", "Blogging", "Marketing"],
      description: "Laura creates engaging and optimized content for various platforms.",
      buttonText: "Follow"
    },
    {
      status: "Online",
      rate: "$36/hr",
      imageUrl: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Mike Carter",
      title: "Game Developer",
      skills: ["Unity", "C#", "Blender", "Game Design", "+1"],
      description: "Mike brings interactive game worlds to life.",
      buttonText: "Follow"
    }
  ];
  
  var mian = document.querySelector('.main')
  var sum = ""

  cardsData.forEach((element,index) => {
        sum+= `
            <div class="card">
                <h3 class="${element.status == "Online" ? "online" : "offline"}">${element.status}</h3>
                <h5 class="rate">${element.rate}</h5>
                <img src=${element.imageUrl} alt="">
                <h1>${element.name}</h1>
                <h2>${element.title}</h2>
                <ul class="skill">
                ${element.skills.map((skill) => `<li>${skill}</li>`).join('')}
                    
                </ul>
                <p>${element.description}</p>
                <button>Follow</button>

            </div>
        
        `
        
  });

  mian.innerHTML =sum;