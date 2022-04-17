# Simple Software Requirement Specification (SRS)

- **1. Introduction**
    1. **Purpose:** The goal of your project and the objectives it aims to accomplish
        1. To develop a tool for track issues and progress of projects
    2. **Intended audience:** Describe which part of the SRS document is intended for which reader. Include a list of all stakeholders of the project, developers, project managers, and testers for better clarity.
        1. Personal, Developer, Engineering Manager, Recruiter, Hiring Manager
    3. **Scope:** Specify how the software goals align with the overall business goals and outline the benefits of the project to business.
        1. Allows for issues tracking and project progress to stay organized and on track of development goals
- **2. General Description**
    
    **2.1 Product features:** A high level summary of the functions the software would perform and the features to be included.
    
    1. **User class and characteristics:** A categorization and profiling of the users the software is intended for and their classification into different user classes
        1. Project Managers and Software Developers
    2. **Operating environment:** Specification of the environment the software is being designed to operate in.
        1. Web-based within the common browsers (Chrome, Safari, Firefox) on both  desktop and mobile devices.
    3. **Constraints:** Any limiting factors that would pose challenge to the development of the software. These include both design as well as implementation constraints.
        1. Limited features may be available on mobile devices or the User Interface may be quite small
    4. **Assumptions and dependencies:** A list of all assumptions that you have made regarding the software product and the environment along with any external dependencies which may affect the project
        1. Python/Django
            1. Speed of Development
            2. Simplicity
            3. Structure
            4. Commonality
        2. Authorization and Authentication (Third Party): AuthO
- **3. System Requirements**
    
    **3.1 Functional requirements**
    
    All the requirements within the system or sub-system in order to determine the output that the software is expected to give in relation to the given input. These consist of the design requirements, graphics requirements, operating system requirements and constraints if any.
    
    1. Common everyday laptops using browsers
        1. Dual Core i5 or greater 4GB RAM 128Gb HD computer
            1. Similar to or slightly less than capabilities of Raspberry Pi 4
    
    **3.2 Design Pattern**
    
    Design pattern used within the project architecture
    
    1. Model View Controller (MVC)
- **4.External Interface Requirements**
    
    **4.1 User Interfaces**
    
    The logic behind the interactions between the users and the software. This includes the sample screen layout, buttons and functions that would appear on every screen, messages to be displayed on each screen and the style guides to be used.
    
    1. Login & Registration with User Profile Page
    2. Project Overview
    3. Single Issue
    
    **4.2 Hardware Interfaces**
    
    All the hardware-software interactions with the list of supported devices on which the software is intended to run on, the network requirements along with the list of communication protocols to be used.
    
    1. Single Local Computer run in the development environment
    
    **4.3 Communications Interfaces**
    
    Determination of all the communication standards to be utilized by the software as a part of the project****
    
    1. HTTP
    
    **4.4 Software Interfaces**
    
    The interaction of the software to be developed with other software components such as frontend and the backend framework to the used, the database management system and libraries describing the need and the purpose behind each of them.
    
    1. Python Language
    2. Django Backend
    3. SqLite Database
- **5. Non-Functional Requirements**
    
    **5.1 Performance requirements**
    
    The performance requirements need to be specified for every functional requirement. The rationale behind it also needs to be elaborated upon.
    
    1. Not sure yet
    
    **5.2 Security requirements**
    
    Privacy and data protection regulations that need to be adhered to while designing of the product
    
    1. Authentication and Authorization
    
    **5.3 Software quality attributes**
    
    Detailing on the additional qualities that need to be incorporated within the software like maintainability, adaptability, flexibility, usability, reliability, portability etc.
    
    1. Highly maintianable and following clean code principles