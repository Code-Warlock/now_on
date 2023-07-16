from datetime import *
import random
_services = [
    {
        "slug": "consultation-services",
        "excerpt": "We offer security tips, and follow through training to an organization's already present security officers.",
        "title": "Consultation Services",
        "image" : random.choice(["consultation", "consultation2"]) + ".jpg",
        "content": """At NOWON, we offer comprehensive consultation services to assist businesses and individuals in assessing their security needs and developing effective strategies to safeguard their assets and ensure the safety of their personnel. Our team of highly skilled security professionals brings years of experience and expertise to provide tailored security solutions.
        Protecting your assets, people, and reputation is paramount. Our consultation service is designed to equip you with the knowledge and tools necessary to achieve optimal security. Contact us today to schedule a consultation with our experienced security consultants and take the first step toward a robust security framework.
        Our consultants provide support during the implementation phase, working closely with your team to ensure the smooth integration of security measures. We offer guidance on selecting appropriate vendors, overseeing installations, and conducting system tests.
        We believe in maintaining long-term partnerships with our clients. Our consultants provide continuous support, periodic evaluations, and updates to ensure the effectiveness and relevance of your security measures. We adapt strategies as your security needs evolve. """
    },
    {
        "slug": "mobile-security-services",
        "excerpt": "Our mobile security service provides comprehensive protection during outings ensuring utmost security and peace of mind even in motion",
       "title": "Mobile Security",
        "image" : random.choice(["mobile_security", "mobile_security2"]) + ".jpg",
        "content": """We understand the importance of safeguarding your mobile assets and ensuring the secure transport of valuable goods. Our Mobile/Transport Security Services offer comprehensive solutions tailored to protect your mobile operations, whether it's transporting valuable goods, cash, sensitive documents, or ensuring the safety of high-profile individuals during transit.
        With a team of highly trained security professionals and years of industry expertise, [Security Company Name] is committed to providing top-notch security services to mitigate risks and ensure the safety of your mobile assets. We employ advanced technologies, stringent protocols, and a strategic approach to safeguard your assets throughout their journey.
        Our team of security experts conducts comprehensive threat assessments and risk analyses to identify potential vulnerabilities in your mobile operations. We develop customized security plans, implement proactive measures, and provide ongoing monitoring to mitigate risks and enhance the security of your assets.
        At NOWON, we prioritize the safety and security of your mobile assets. Our Mobile/Transport Security Services offer comprehensive solutions backed by expertise, advanced technology, and a commitment to excellence. Trust us to protect your valuable assets, ensure secure transportation, and provide peace of mind throughout their journey. Contact us today to discuss your specific security requirements and let us tailor a solution that fits your needs perfectly."""
    },
    {
        "slug": "vip-services",
        "excerpt": "Premium security service designed exclusively for VIPs, ensuring utmost protection, confidentiality, and peace of mind.",
       "title": "VIP Services",
        "image" : random.choice(["canine_security","canine_security2","canine_security3"]) + ".jpg",
        "content": """Welcome to NOWON's VIP Security Service, where your safety and peace of mind are our top priorities. Our specialized VIP security team is dedicated to providing exceptional protection and tailored security solutions for high-profile individuals, executives, celebrities, and VIPs.
        We understand that every VIP has unique security requirements. Our VIP security service begins with a comprehensive security assessment to identify potential threats, vulnerabilities, and specific security needs. This assessment allows us to develop a personalized security plan that meets your individual requirements.
        We understand the importance of maintaining your privacy and confidentiality. Our VIP security team operates with the utmost discretion, ensuring that your personal and sensitive information remains secure. We adhere to strict confidentiality protocols to protect your privacy at all times.
        Our VIP security service offers round-the-clock support and assistance. We have a dedicated team available 24/7 to address any security concerns, answer your questions, or provide immediate assistance when required. Your safety is our top priority, and we are always just a phone call away."""
    },
    {
        "slug": "fire-safety-services",
        "excerpt": "Our fire safety service provides comprehensive solutions to protect lives and property from the risk of fire incidents.",
        "title": "Fire Safety Services",
        "image" : random.choice(["fire_safety", "fire_safety2"]) + ".jpg",
        "content": """Welcome to NOWON's Fire Security Service, where we are dedicated to protecting lives and properties from the devastating effects of fires. Our team of highly trained professionals is committed to providing comprehensive fire safety solutions tailored to meet the specific needs of our clients. With our expertise and state-of-the-art equipment, we offer a range of fire security services to ensure optimal safety and peace of mind.
        Our team conducts thorough fire risk assessments to identify potential hazards and vulnerabilities within your premises. We assess the layout, equipment, materials, and processes to develop a comprehensive understanding of fire risks. Based on our findings, we provide detailed reports and recommendations to enhance fire safety measures.
        Our experienced fire safety consultants provide expert advice and guidance to help you navigate fire safety regulations, compliance requirements, and best practices. We assist in developing fire safety policies, reviewing existing fire safety measures, and recommending improvements to enhance overall fire security.
        We prioritize the safety of our clients and their properties. With our comprehensive fire security services, you can trust us to safeguard your premises against fire risks and ensure a secure environment for all. Contact us today to discuss your fire security needs and let us create a tailored solution for you."""
    },
    {
        "slug": "access-control-services",
        "excerpt": "With the integration of advanced technology,We offers services to revolutionize your security system,personalised to your taste.",
        "title": "Access Control Services",
        "image" : random.choice(["access_control","access_control2"]) + ".jpg",
        "content": """Nowon offers the best service in secured IT management. The field of IT management is a vital component in the success of an organization as information technology serves as the backbone of virtually every aspect of business operations. IT management involves the administration, direction, and control of various technological resources to meet the objectives of an organization through effective management of IT personnel and resources. It encompasses the strategic decision making, deployment and maintenance of a range of information technology assets including hardware, software, databases, and networks, as well as the optimization of technology use to enhance an organization's productivity and performance.
        Risk Assessment and Management: Conducting regular risk assessments to identify potential vulnerabilities and threats within the IT infrastructure. This involves evaluating security risks, determining their potential impact, and implementing appropriate risk mitigation strategies.
        Security Monitoring and Auditing: Implementing security monitoring tools and systems to detect and respond to security incidents in real-time. This involves monitoring system logs, network traffic, and user activities to identify potential threats. Regular security audits should also be conducted to assess the effectiveness of security controls and identify areas for improvement."""
    },
    {
        "slug": "training-services",
        "excerpt": "Specialized training for security personnel to enhance their skills, knowledge, and preparedness for optimal protection and risk mitigation.",
        "title": "Training Services",
        "image" : random.choice(["training","training2"]) + ".jpg",
        "content": """At NOWON, we prioritize the safety and security of our clients. To ensure that we deliver the highest level of professional service, we have established a comprehensive Training and Personnel Training Security Service. This service is designed to equip our security personnel with the necessary skills, knowledge, and expertise to handle various security challenges effectively. With a strong focus on continuous learning and development, we are dedicated to maintaining a highly trained and competent security 
        We encourage our security team to pursue continuous professional development to enhance their skills and stay updated with industry advancements Opportunities for certifications, workshops, seminars, and industry conferences are provided to further expand their knowledge base. By investing in the growth and development of our personnel, we ensure that they remain at the forefront of the security industry.
        Our rigorous training programs ensure that our security personnel possess the necessary skills and knowledge to handle security challenges effectively. They are equipped to assess risks, respond to emergencies, and maintain a safe and secure environment for our clients.
        Our Training and Personnel Training Security Service is a cornerstone of our commitment to excellence in security provision. We believe that a well-trained and highly skilled security team is crucial to maintaining the safety and peace of mind of our clients. By investing in ongoing training and professional development, we ensure that our security personnel are always prepared to meet the diverse security challenges of our clients and provide them with the highest level of protection."""
    },
]

tabs = {
  "Access-control" : "Access-control Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis aperiam est praesentium, quos iste consequuntur omnis",
  "Goals" : "Goals Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis aperiam est praesentium, quos iste consequuntur omnis",
  
}

sp_services = [
  {
        "slug": "secured-managed-it",
        "excerpt": "Secured ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur",
        "title": "Secured Managed IT",
        "image" : random.choice(["consultation", "consultation2"]) + ".jpg",
        "content": """Nowon offers the best service in secured IT management. The field of IT management is a vital component in the success of an organization as information technology serves as the backbone of virtually every aspect of business operations. IT management involves the administration, direction, and control of various technological resources to meet the objectives of an organization through effective management of IT personnel and resources. It encompasses the strategic decision making, deployment and maintenance of a range of information technology assets including hardware, software, databases, and networks, as well as the optimization of technology use to enhance an organization's productivity and performance.
          Here are some key aspects of our secured IT management:
          Conducting regular risk assessments to identify potential vulnerabilities and threats within the IT infrastructure. This involves evaluating security risks, determining their potential impact, and implementing appropriate risk mitigation strategies.
          Security Policies and Procedures: Developing and enforcing comprehensive security policies and procedures that outline acceptable use of IT resources, password management, data handling practices, incident response protocols, and other security-related guidelines. These policies should be communicated to all employees and regularly updated to address emerging threats.""",
        "options" : [
          {
            "slug": "access-control-services",
            "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur",
            "title": "Access Control Services",
            "image" : random.choice(["access_control","access_control2"]) + ".jpg",
            "content": """
              Implementing strong access control mechanisms to ensure that only authorized individuals have access to sensitive systems and data. This involves using techniques like user authentication, role-based access control (RBAC), and multi-factor authentication (MFA) to verify user identities and restrict access privileges.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
              aperiam est praesentium, quos iste consequuntur omnis exercitationem quam
              velit labore vero culpa ad mollitia? Quis architecto ipsam nemo. Odio.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
              aperiam est praesentium, quos iste consequuntur omnis exercitationem quam
              velit labore vero culpa ad mollitia? Quis architecto ipsam nemo. Odio.
            """
        },
        {
        "slug": "order",
        "excerpt": "Tega ipsum dolor sit amet, consectetur adipiscing elit,quos ivelit labore vero culpa sed do eiusmod tempor sit amet, dolor consectetur",
        "title": "Make an Order",
        "image" : random.choice(["consultation", "consultation2"]) + ".jpg",
        "content": """
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
          aperiam est praesentium, quos iste consequuntur omnis exercitationem quam
          velit labore vero culpa ad mollitia? Quis architecto ipsam nemo. Odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
          aperiam est praesentium, quos iste consequuntur omnis exercitationem quam
          velit labore vero culpa ad mollitia? Quis architecto ipsam nemo. Odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
          aperiam est praesentium, quos iste consequuntur omnis exercitationem quam
          velit labore vero culpa ad mollitia? Quis architecto ipsam nemo. Odio.
        """
    },
        {
        "slug": "request",
        "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur",
        "title": "Request Delivery",
        "image" : random.choice(["access_control","access_control2"]) + ".jpg",
        "content": """
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
          aperiam est praesentium, quos iste consequuntur omnis exercitationem quam
          velit labore vero culpa ad mollitia? Quis architecto ipsam nemo. Odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
          aperiam est praesentium, quos iste consequuntur omnis exercitationem quam
          velit labore vero culpa ad mollitia? Quis architecto ipsam nemo. Odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
          aperiam est praesentium, quos iste consequuntur omnis exercitationem quam
          velit labore vero culpa ad mollitia? Quis architecto ipsam nemo. Odio.
        """
        }
        ]
    }
  ]