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

  var btn = document.querySelector('.btn')

//   btn.addEventListener('click',(elem)=> {
//     // console.log(btn.id);
//     // if(btn.id == 'light'){
//     //     localStorage.setItem('theme','light')
//     //     btn.id = 'dark'
        
//     // }else{
//     //     localStorage.setItem('theme','dark')
//     //     btn.id = 'light'
    
//     // }
//         document.body.classList.toggle("dark");
//   // Optional: Save theme preference to localStorage
//         if (document.body.classList.contains("dark")) {
//             localStorage.setItem("theme", "dark");
//             btn.textContent = "☀ Light Mode";
//             // btn.innerHTML = 'Light'
//         } else {
//             localStorage.setItem("theme", "light");
//             btn.textContent = "🌙 Dark Mode";
//             // btn.innerHTML = 'Light'
//         }
//         // if (document.body.classList.contains("dark")) {
//         //     btn.textContent = "☀ Light Mode";
//         //   } else {
//         //     btn.textContent = "🌙 Dark Mode";
//         //   }
//   })
//   window.addEventListener("DOMContentLoaded", () => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.body.classList.add("dark");
//       //btn.innerHTML = 'Light'
//     }
    
//   });

//   if(localStorage.getItem('theme')=='dark'){
//     document.body.classList.add("dark")
//   }
//   else if(localStorage.getItem('theme')=='light'){
//     document.body.classList.remove("dark")
//   }

  function data(){

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
                    <button id="btn_${index}">${element.buttonText}</button>

                </div>
            
            `
            
    });
        mian.innerHTML =sum;

}
    data()

  let click = true
  mian.addEventListener('click',(details)=>{
    const temp = document.getElementById(details.target.id)
    // console.log(temp.id.split('btn_').join(''));
    const char = temp.id.split('btn_').join('')
    
    if(click){
         //cardsData[char].buttonText = 'Unfollow'
         //console.log(cardsData);
        
        temp.innerHTML = 'Unfollow'
        temp.classList.add('unfollow')
        temp.style.backgroundColor = "white"
        temp.style.color = "#ffb703"
        temp.style.border = "1px solid #ffb703"
        click = false;
    }
    else{
        //cardsData[char].buttonText = 'Follow'
        temp.innerHTML = 'Follow'
        temp.style.backgroundColor = ""
        temp.style.color = ""
        temp.style.border = ""
        click =true
    }
    //data()
    
  })

//   var light = document.querySelector('#light')
//   var dark = document.querySelector('#dark')



////// here position of adding script is very important - if add before dom loading then have to use -> window.addEventlistener('DOMContentLoaded',()=>{})



  btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        localStorage.setItem("theme","dark")
        btn.textContent = '☀ Light Mode'
    }
    else{
        localStorage.setItem("theme","light")
        btn.textContent = '🌙 Dark Mode'
    }
  })
  if(localStorage.getItem("theme")=="dark"){
    document.body.classList.add('dark')
    btn.textContent = '☀ Light Mode'
  }
  else{
    btn.textContent = '🌙 Dark Mode'
  }