import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

  constructor() { }
  serviceDetails = {
    blasting: {
      heading: "Blasting Service",
      description: `We are engaged in offering our prestigious client a very highly premium quality range of Blasting Services. With the aim of attaining pinnacle success in the market, we are engaged in rendering premium grade Abrasive Blasting Services. Owing to the rich 
      expertise of our team members we are able to provide premium grade protective coating for varied surfaces. We make sure to conduct rigorous 
      quality tests and render industry compliant services to strip imperfections, paint, rust and other contaminants from machined components. Further, 
      we are rendering these services for diverse industrial terrains with the assurance of competitive price `,
      key: ["Rendered by skilled professionals", "Committed to timely execution", "Compliance with set guidelines"],
      categories: [
        {src:"./assets/img/cover.jpg",name:"Grit / Shot Blasting"},
        {src:"./assets/img/cover.jpg",name:"Sand Blasting"},
        {src:"./assets/img/cover.jpg",name:"Copper Slag Blasting"},
        {src:"./assets/img/cover.jpg",name:"Abrasive Blasting"},
        {src:"./assets/img/cover.jpg",name:"Aluminum Oxide Blasting"},
        {src:"./assets/img/cover.jpg",name:"Industrial Copper Slag Blasting"}
      ]
    },
    painting:{
      heading: "Painting Service",
      description: `We are engaged in offering a wide range of Painting Services. 

      We are well known entity involved in rendering high quality Painting Services. We make sure to win strong client trust by offering top rated sewices 
      for painting with remarkable efficiency and assurance offastertumaround times. Ourteam members are highly trained and utilizing the best in class 
      technology and tools for spray painting. Further, we make sure to adhere to the safety standards and rendering these services for diverse industrial 
      terrains with assurance of faster execution and market leading price. `,
      key: [
        "Trained experts.",
        "Professionally managed.",
        "High grade resources"
      ],
      categories: [
        {src:"./assets/img/cover.jpg",name:"Epoxy brush painting"},
        {src:"./assets/img/cover.jpg",name:"Polyurea / polyurethane coating"},
        {src:"./assets/img/cover.jpg",name:"Industrial painting"},
        {src:"./assets/img/cover.jpg",name:"Tank painting"},
        {src:"./assets/img/cover.jpg",name:"Anti corrosion coating"},
        {src:"./assets/img/cover.jpg",name:"Protective coating"},
        {src:"./assets/img/cover.jpg",name:"Chemical coating"},
        {src:"./assets/img/cover.jpg",name:"All coating services"}
      ]
    },
    grouting:{
      heading: "Drilling / Grouting / Soil Nailing Service",
      description: `Grouting generally refers to improving the rock. Grouting is used during new dam construction and for remedial work. The process involves drilling 
      holes and injecting a fluid grout under moderate pressures into the subgrade to seal the rockto reduce its permeability. The process has been in use 
      since the late 1920's and has evolved to a verytechnical process.`,
      key: [
        "Soil nailing is a technique used to reinforce and strengthen existing ground.",
        "Soil nailing consists of installing closely spaced bars into a slope or excavation as construction proceeds from top down.",
        "lts is an effective and economical method of constructing retaining wall for excavation support, support of hill cuts, bridge abutments and high ways.",
        "This process is effective in cohesive soil, broken rock, shale orfixed face conditions."
      ],
      categories: []
    },
    fire:{
      heading: "Fire Protection Service",
      description: `We offer reliable Fireproofing Services to ourvalued customers. 

      We have attained wide reputation in the market by rendering best quality Fireproofing Insulation Spray On Structures. We employ the most 
      advanced techniques to render fire protective coating on industrial and civil stnicture. The offered services are rendered with help of most advanced 
      spraying mechanism and by applying a certification listed fireproofing system that help our clients to attain the fireproof rating. Further we adhere to 
      the set industry standards and render proficient services atthe best price. `,
      key: [
        "Timely delivered output.",
        "Compliance with safety standards.",
        "Trained professionals"
      ],
      categories: [
        {src:"./assets/img/cover.jpg",name:"Intumescent coating"},
        {src:"./assets/img/cover.jpg",name:"Cementitius fire protection coating"},
        {src:"./assets/img/cover.jpg",name:"Spray fire proofing"}
      ]
    },
    guniting:{
      heading: "Guniting Service",
      description: `Guniting Services is the process of conveying desire mixer of dry cement. sand and /or aggregate under air pressure at high velocity with iust 
      sufficient quantity ofwaterin process like rehabilitation, carrying out repair as well as for restoration works. 
      
      We have gained prominence in the domain by providing high in demand Guniting Services. The offered services are garnered thoughtfully to our 
      esteemed patrons who seek an efficient and reliable treatment for damaged concrete structures. Ideal for restoration and rehabilitation of RCC 
      columns and beams the offered services are gaining strong trustfor our clients from commercial and residential segments. Demanded widelyfor its 
      immense benefits of long lasting quality, the offered services are ideal for repairing of pools and tunnels and can be availed at a nominal price. `,
      key: [
        "Optimum performance.",
        "Adaptation to advanced techniques.",
        "Client centric approach."
      ],
      categories: []
    },
    shortcret:{
      heading: "Shortcret Service",
      description: `Dry ShortCret process, cement and moistaggregate are mixed and then placed into a devicethatmetersthe mixed material into a stream ofcompressed air. 
      Material is carried by the compressed airthrough a delivery hose to the nozzle where water is added under pressure through a perforated ring. The 
      waterthoroughlywetsthe other ingredients asthe mixture is jettedfrom the nozzle at high velocity onto the surface to be shotcreted.
      Wet ShortCret, In the wet-mix process, all ingredients arefirst mixed to produce mortar or concrete. The mortar or concrete is then placed into delivery equipment. 
The material isforced through a delivery hosetothe nozzle where compressed air is injected to increase velocity.`,
      key: [],
      categories: []
    },
    cementmortar:{
      heading: "Cement Mortar Lining Service",
      description: `We offer reliable Cement Mortar Lining Sonics to ourvalued customers. 

      We are well known enterprise engaged in providing high in demand 
      Cement Mortar Lining Services. The robustness of cement lining 
      increases its demand in wide number of areas such as fittings, flanges, 
      and special spool pieces. In order to win strong client trust we conduct 
      rigorous market studies and work hard to line these surfaces by hand. 
      Further, we strive to meet the highest standards and are engaged in 
      renderings the industry compliant lining services as per the clients' 
      specifications at a leading price. `,
      key: [
        "Authorized technicians.",
        "Client oriented approach.",
        "On time execution."
      ],
      categories: []
    }
  }
}
