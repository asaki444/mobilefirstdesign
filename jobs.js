const jobsJSON = [
    {title: "DevOps Engineer",
    company:"Ladders Inc.",
    location: "New York, NY",
    description: "Deploying and configuring production systems, with a particular focus on ease of configuration, reduction of human error, repeatability, and security."
    },
    {
     title: "Software Engineer in Test",
     company: "Ladders Inc.",
     location: "New York, NY ",
     description: "Participate in the requirements definition, design and development of a robust, extensible test harness for the company's functional test automation."
    },
    {
     title: "Software Engineer (C#, WPF/MVVM, ASP.NET/MVC, Angular)",
     company: "Skadden Arps",
     location: "New York, NY",
     description: "Creates databases and application interfaces based on analysis of requirements within established guidelines."
    },
    {
    title: "IT / Enterprise : Senior Windows Systems Engineer",
    company: "Confidential Company",
    location: "New York, NY",
    description: "Searching for a (UI + Drupal ) - Technical Lead / Architect with at least 4 years of experience in Drupal development and administration - theming, module building, core updates etc."
  },{
      title: "Full Stack Java / UI Software Engineer - Treasury Services",
      company:"JPMorgan Chase",
      location: "Jersey City, NJ",
      description: "The Treasury Services team is seeking a Full Stack Java / UI Software Engineer. This individual will work with a team that develops smart and scalable solutions to provide a solid experience for our users"
  }
]

function toggleMenu(){
    let exit = document.getElementById("exit");
    let menu = document.getElementsByTagName("div")[0]
    if(menu.hasAttribute("class"))
    {   menu.removeAttribute("class");
        exit.innerHTML = "<" ;
    }
    else{
        menu.className = "hide";
        exit.innerHTML = ">" ;
    }
}
let jobs = document.getElementById("jobs")
function seeJobs(){
    for(let i = 0; i < jobsJSON.length; i++){
    let job = jobsJSON[i]
    let jobInfo = `
    <div class="details">
    <h4> ${job["title"]}</h4>
    <h5> ${job["company"]}</h5>
    <h6>${job["location"]}</h6>
    <p>${job["description"]}</p>
    </div>
    `
    jobs.innerHTML+=jobInfo
    console.log(jobs)
    }
}

window.seeJobs();

