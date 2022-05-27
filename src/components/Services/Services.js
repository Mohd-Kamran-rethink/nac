import React from 'react'

const Services = () => {
    const ServicesData=[{
        id:1,
        serviceImg:"./home2/network/1.png",
        heading:"Network",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been theindustry’s standard dummy text ever since the 1500s.",
    },
    {
        id:2,
        serviceImg:"./home2/network/2.png",
        heading:"Live",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been theindustry’s standard dummy text ever since the 1500s.",
    },
    {
        id:3,
        serviceImg:"./home2/network/3.png",
        heading:"Investment",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been theindustry’s standard dummy text ever since the 1500s.",
    },
    {
        id:4,
        serviceImg:"./home2/network/4.png",
        heading:"Ballot",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been theindustry’s standard dummy text ever since the 1500s.",
    },

]
  return (
    <>
        <section className="network">
     	   <div className="container">
                {ServicesData.map((item)=>{
                    return (
                        <div key={item.id} className="col-lg-3 col-md-3 col-sm-3 col-xl-12">
                        <img src={item.serviceImg}/>
                        <div><b>{item.heading}</b></div>
                        <p>{item.desc}</p>
                        <a href="">Know More</a>
                    </div>)})}
     	   	</div>
        </section>

    </>
  )
}
export default Services