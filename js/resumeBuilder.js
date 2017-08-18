/*
The bio of Tykisha Pittman begins below.
*/
var bio = {
    "name": "Tykisha Pittman",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "561-602-5440",
        "email": "tspittma@hotmail.com",
        "github": "tspittma",
        "twitter": "@favouredlady",
        "location": "Indiana"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Hello! Welcome to my online resume!",
    "skills": ["Team Player", "HTML", "CSS", "JavaScript", "Responsive Design"]
};

/*
Display function for bio.
*/

bio.display = function()

{
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);
    $("#header").append(HTMLskillsStart);

    if (bio.skills.length > 0)

    {

        bio.skills.forEach(function(key)

            {

                var formattedSkill = HTMLskills.replace("%data%", key);
                $("#skills").append(formattedSkill);

            }
        );

        bio.contacts.display = function() {
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter);
        };

        bio.contacts.display();

    }
};

/*
Work experience begins below.
*/

var work = {

    jobs: [{
            "employer": "Infosys",
            "title": "Front-End Web Developer",
            "location": "Indianapolis, IN",
            "dates": "Jul 2012 - Current",
            "description": "Front-end web developer for various high-end clients."
        },
        {
            "employer": "Indiana University",
            "title": "Residency Support Specialist (Contract)",
            "location": "Indianapolis, IN",
            "dates": "Nov 2015 - Dec 2016",
            "description": "Assisted Director of Family Medicine Residency in performing administrative details, projects and duties of highly confidential nature in a self-directed role; Contributed to the HRSA grant proposal project of 2015; Provided comprehensive secretarial duties for all residency program needs; Implemented process improvement for scanning & digitizing confidential archived resident files; Daily use of Microsoft Excel, Word, PowerPoint, Outlook, MedHub, MedRez, Adobe Acrobat Pro, Kuali, Copier, Scanner, Fax, and Printer."
        },

        {
            "employer": "Passion4People Ministries",
            "title": "Senior Administrator",
            "location": "Indianapolis, IN",
            "dates": "Apr 2012 - Apr 2015",
            "description": "Provided administrative support, including scheduling, phone calls, and event management; Led, direct, and assist with hospitality services; Created correspondence documents using the Microsoft Office Suite; Coordinated face‐to‐face ministry fellowships,; Maintained the ministry database using Microsoft Excel; Managed system updates and software applications."
        },
        {
            "employer": "Florida Power & Light",
            "title": "Senior Tax Technology Specialist (Contract)",
            "location": "Jupiter, FL",
            "dates": "Oct 2012 - Mar 2013",
            "description": "Assisted Director of Tax Technology with Enterprise Resource Planning (ERP) on behalf of the Tax Technology Department; Aided in administration of OneSource Tax Provision, CorpTax, and SAP software; Coordinated with leadership, internal and external customers, Information Management, and other key stakeholders while building and maintaining customer relationships; Daily use of MS Excel for value‐lookups (V‐lookups) and data manipulation; Created and analyzed reports, organized and maintained security replicator, and reviewed and presented departmental data."
        },
        {
            "employer": "Ascension Health Ministry Service Center",
            "title": "Master Data Manager",
            "location": "Indianapolis, IN",
            "dates": "Apr 2011 - May 2012",
            "description": "Created and implemented process improvement job aids for the organization; Trained and demonstrated workflow processes to various departments; Maintained positive work relationships with members of multiple teams throughout the organization; Communicated effectively to ensure compliance with cross‐team responsibilities was practiced; Daily use of PeopleSoft ERP, SharePoint ERP, Adobe Acrobat Pro, Kronos, Lawson, Microsoft Excel, Word, PowerPoint, Outlook, Copier, Scanner, Fax, Printer, iPhone and iOS."
        }
    ]
};

/*
Display function for work experience.
*/

work.display = function() {
    $('#workExperience').append(HTMLworkStart);

    work.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        $('.work-entry:last').append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(formattedDescription);
        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        $('.work-entry:last').append(formattedLocation);
    });
};

/*
Projects begin below.
*/

var projects = {
    "projects": [{
        "title": "Front-End Development - Animal Trading Card & Portfolio",
        "dates": "Jul 2017",
        "description": "Animal Trading Card and Portfolio created using HTML and CSS.",
        "images": ["images/animal-trading-card.png", "images/dolphinportfolio.png"]
    }]
};

/*
Display function for projects.
*/

projects.display = function() {
    $('#projects').append(HTMLprojectStart);

    projects.projects.forEach(function(project) {
        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace('%data%', image);
                $('.project-entry:last').append(formattedImage);
            });
        }
    });
};

/*
Education begins below.
*/

var education = {
    "schools": [{
            "name": "Kaplan University",
            "location": "Indianapolis, IN",
            "degree": "MS",
            "dates": "Apr 2016 - Current",
            "majors": ["Cybersecurity Management"],
            "url": "https://www.kaplanuniversity.edu/"
        },

        {
            "name": "Kaplan University",
            "location": "Indianapolis, IN",
            "degree": "MS",
            "dates": "Jun 2014 - Apr 2016",
            "majors": ["Information Technology - Information Security & Assurance"],
            "url": "https://www.kaplanuniversity.edu/"
        },

        {
            "name": "Marian College",
            "location": "Indianapolis, IN",
            "degree": "BS",
            "dates": "Aug 2005 - May 2007",
            "majors": ["Management Information Systems"],
            "url": "https://www.marian.edu/"
        },

        {
            "name": "Purdue University",
            "location": "Indianapolis, IN",
            "degree": "Certification",
            "dates": "Aug 2001 - May 2005",
            "majors": ["Computer & Information Technology"],
            "url": "https://www.iupui.edu/"
        }
    ],

    "onlineCourses": [{
            "title": "Six Sigma: Yellow Belt",
            "school": "Ascension Health Ministry Service Center",
            "dates": "May 2012",
            "url": "https://ascension.org/our-work/ascension-ministry-service-center"
        },

        {
            "title": "Windows Operating Systems: Microsoft Certified Technology Specialist",
            "school": "Microsoft Corporation",
            "dates": "Sep 2010",
            "url": "https://www.microsoft.com/en-us/learning/mcts-certification.aspx"
        }
    ],
};

/*
Display function for education.
*/

education.display = function() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(school) {

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
    });

    education.onlineCourses.display = function() {
        $("#education").append(HTMLonlineStart);

        education.onlineCourses.forEach(function(course) {
            var formattedURL = HTMLonlineURL.replace("%data%", course.url);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedURL + formattedTitle + formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedDates);

        });
    };

    education.onlineCourses.display();

};

bio.display();
work.display();
projects.display();
education.display();

/*
Google map that shows markers at locations from data in my resume.
*/

$("#mapDiv").append(googleMap);