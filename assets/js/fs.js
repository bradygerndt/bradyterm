/**
 * Simulated file system for terminal.
 * Hierarchy of file system follows JSON key value hierarchy.
 */
export const fs = {
    'summary.txt': `I am an IT professional with 5 years of experience implementing technology in the automotive industry. I've spent time as a systems analyst, innovation architect, infrastructure analyst and front-end developer for an ITSM platform. I employ creativity, adaptability and professionalism to solve problems with the technology at hand. My greatest career revelation is that culture drives success.`,
    'links.txt': `
    GitHub -> https://github.com/bradygerndt
    LinkedIn -> https://www.linkedin.com/in/bradygerndt
    
    `,
    'experience': {
        'sr-configuration-mgmt-analyst.txt': `

Senior Configuration Management Analyst • February 2018 — Present

Harley-Davidson Motor Company

I currently lead the configuration management capability at H-D. I develop tools, process and data to ensure the consistent performance of thousands of compute resources. In this position, I closely collaborate with various infrastructure and application teams to ensure that tech is delivered as defined. I lean heavily on ServiceNow, automation and communication to succeed.

`,
        'infrastructure-analyst.txt': `
Infrastructure Analyst • July, 2017 — February, 2018

Harley-Davidson Motor Company

Researched H-D's Windows and Linux infrastructure to identify components due for decommission. I developed monitoring and discovery tools with ServiceNow, Flexera, SCCM, Stealthwatch and Solarwinds to measure the usage and state of IT assets. Through application analysis I determined ownership and dependencies to minimize decommisson impact. Most importantly, I partnered with business relationship managers to successfully disposition unused infrastructure.

`,
        'servicenow-developer.txt': `
ServiceNow Developer • November, 2016 — July, 2017
        
Harley-Davidson Motor Company

Developed internal service portal for our IT service management application. I worked with our internal IT department to improve the usability to meet our users needs. I led usability and customer insight research to gain a better grasp on customer needs. Based on user feedback I developed maintainable and scalable features to drive adoption of the portal as the primary digital interface with IT. In order to deliver these features I got familiar with AngularJS, Bootstrap and Sass.

`,
        'innovation-architect.txt': `
        
Innovation Architect • February, 2016 — November, 2016

Harley-Davidson Motor Company

Served as a technologist to carry out proof of concepts for H-Ds IT innovation team. I piloted and prototyped technologies ranging from VR to IoT in support of our manufacturing, marketing and sales functions. Most significantly, I led an initiative to deliver an AR application and traveled to Australia to demo it. I was also responsible for supporting the innovation life cycle and contributed to an innovation challenge that provided employees with a platform to pitch new ideas.

        `},
        'skills' : {
            'solution-design.txt': `
            
Solution Design
    -Technology analysis and design 
    -Solution scoping 
    -Organizational awareness and change management
    -Service transition 
    -Proof of concept development

            `,
            'web-dev.txt' : `
            
Web Development
    -JavaScript 
    -NodeJS 
    -HTML 
    -CSS 
    -AngularJS cd ..
    -Bootstrap
    -Sass
    -Git
    -Jenkins
    -Lambda

            `,
            'servicenow.txt': `
            
ServiceNow
    -Administration
    -Application development
    -Service portal development
    -Discovery/ITOM
    -Configuration management
    -ITSM

            `
        },
        'education': {
'bs_is.txt': `
Marquette University
Bachelor of Science, Information Technology • 2011 — 2015
`,
            'ms_comp.txt': `
Marquette University
Master of Science, Computing • 2016 — 2018
Specializing in Information Assurance and Cyber Security
`
        },
        'certification': {
            'aws_sa.txt': "AWS Certified Solutions Architect -> https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2019-12-10&ci=AWS01104726"
        },
        'projects': {
            'baz.txt': 'Hello this is file baz.txt',
            'quux.txt': "Lorem Ispum (quux.txt)",
            'foo.txt': "test, World!",
            'bar.txt': "Wellcome to the bar",
            "terminal": {
                "foo": {
                    "bar.txt": "hello bar",
                    "baz.txt": "baz content"
                }
            }
        }
    };
