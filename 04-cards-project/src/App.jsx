import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/cards'

const jobs = [
  {
    logo: "https://tse4.mm.bing.net/th/id/OIP.AkKVWkjzwnxK7k_L-G1IYQHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Airbnb",
    jobTitle: "Frontend Developer Intern",
    jobPosted: "3 days ago",
    tags: ["Remote", "Junior"],
    pay: "$25/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png",
    companyName: "Google",
    jobTitle: "Software Engineer Intern",
    jobPosted: "5 days ago",
    tags: ["Onsite", "Internship"],
    pay: "$30/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://i.pinimg.com/736x/b7/e3/7b/b7e37bee1f2100449ba6f5783577bb1b.jpg",
    companyName: "Microsoft",
    jobTitle: "Web Developer",
    jobPosted: "1 week ago",
    tags: ["Hybrid", "Junior"],
    pay: "$28/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://tse1.mm.bing.net/th/id/OIP.yNY6186gY0gQoltLDdtdAwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Figma",
    jobTitle: "React Developer",
    jobPosted: "2 days ago",
    tags: ["Remote", "Full-time"],
    pay: "$35/hr",
    location: "Remote, India"
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.ENCPRAEHrihtzfWeLS5kpwHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=204&h=204&c=7&dpr=1.5&o=7&rm=3",
    companyName: "Amazon",
    jobTitle: "UI Engineer",
    jobPosted: "4 days ago",
    tags: ["Remote", "Mid-level"],
    pay: "$40/hr",
    location: "Remote, India"
  },
  {
    logo: "https://tse1.mm.bing.net/th/id/OIP.SENN3rv7rd-_qEIJ1mLgAQHaHa?cb=ucfimg2&ucfimg=1&w=1500&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Aramco",
    jobTitle: "Java Developer",
    jobPosted: "6 days ago",
    tags: ["Onsite", "Fresher"],
    pay: "$15/hr",
    location: "Pune, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gKGk8lcZvD1_WCB9xyZX4vWumzCmb3cYAg&s",
    companyName: "TCS",
    jobTitle: "Backend Developer",
    jobPosted: "1 day ago",
    tags: ["Hybrid", "Junior"],
    pay: "$18/hr",
    location: "Noida, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFzptQOZyaIEhi15BkLR1IayO9l8eueIulA&s",
    companyName: "Wipro",
    jobTitle: "Python Developer",
    jobPosted: "3 days ago",
    tags: ["Onsite", "Entry-level"],
    pay: "$16/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png",
    companyName: "Flipkart",
    jobTitle: "Frontend Engineer",
    jobPosted: "2 weeks ago",
    tags: ["Hybrid", "Junior"],
    pay: "$22/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWeoFdisV4C7lv6dEFKP-zjWbRvs2BB4f9A&s",
    companyName: "Zomato",
    jobTitle: "UI/UX Developer",
    jobPosted: "5 hours ago",
    tags: ["Remote", "Contract"],
    pay: "$20/hr",
    location: "Gurugram, India"
  }
];



const App = () => {
  return (
  <div>
    <div className='parent'>

    {/* a simple card */}
    {/* <div className="card">
      <div>
        <div className="top">
        <img src="https://tse4.mm.bing.net/th/id/OIP.AkKVWkjzwnxK7k_L-G1IYQHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <button>Save <Bookmark size={15}/> </button>
      </div>

      <div className="middle">
        <h3>Airbnb <span>5 days ago</span></h3>
        <h1>Junior UI/UX Designer</h1>
        <div className="tag">
          <h4>Contract</h4>
          <h4>Remote</h4>
        </div>
      </div>
      </div>

      <div className="bottom">
        <div className="rate">
          <h3>$100/hr</h3>
          <p>Delhi, India</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div> */}

    {/* this is the cards project using props and reusable components */}
     {/* <div className='boss'>
      <Card user='Airbnb' job='Junior UI/UX Designer' type1='Remote' type2='Contract' money='$60/hr' loc='Delhi, India' age='5 days ago' img='https://tse4.mm.bing.net/th/id/OIP.AkKVWkjzwnxK7k_L-G1IYQHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'/>

      <Card user='Google' job='Graphic Designer' type1='In office' type2='Full-Time' money='$100/hr' loc='Hyderabad, India' age='15 days ago'img='https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png'/>

      <Card user='Microsoft' job='Product Designer' type1='Part-Time' type2='Flexible Schedule' money='$120/hr' loc='Bengaluru, India' age='7 days ago' img='https://i.pinimg.com/736x/b7/e3/7b/b7e37bee1f2100449ba6f5783577bb1b.jpg'/>

      <Card user='Figma' job='UI Designer' type1='Senior Level' type2='Remote' money='$100/hr' loc='Kanpur, India' age='10 days ago' img='https://tse1.mm.bing.net/th/id/OIP.yNY6186gY0gQoltLDdtdAwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' />

      <Card user='Amazon' job='Product Manager' type1='Contract' type2='Remote' money='$120/hr' loc='Pune, India' age='20 days ago' img='https://tse2.mm.bing.net/th/id/OIP.ENCPRAEHrihtzfWeLS5kpwHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=204&h=204&c=7&dpr=1.5&o=7&rm=3' />

      <Card user='Aramco' job='Database Administrator' type1='Senior Level' type2='In office' money='$150/hr' loc='Dhahran, Saudi Arabia' age='1 days ago' img='https://tse1.mm.bing.net/th/id/OIP.SENN3rv7rd-_qEIJ1mLgAQHaHa?cb=ucfimg2&ucfimg=1&w=1500&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3'/>
    </div> */}


    {/* this is card section using array of objects  */}
    <div className='boss'>
    {jobs.map(function(ele, idx) {
       return <div key={idx}>
        <Card user={ele.companyName} job={ele.jobTitle} type1={ele.tags[0]} type2={ele.tags[1]} money={ele.pay} loc={ele.location} age={ele.jobPosted} img={ele.logo}/>
       </div>
      })}
      </div>
    </div>
  </div>
  )
}

export default App
