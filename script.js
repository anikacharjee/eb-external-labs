function generateAssignment() {
    const rollNumber = document.getElementById('rollNumber').value;

    if (!rollNumber || isNaN(rollNumber)) {
        alert('Please enter a valid roll number.');
        return;
    }

    const rollNo = parseInt(rollNumber);

    let assignment;

    if (rollNo >= 1 && rollNo <= 50) {
        // Determine the assignment based on the roll number range and parity
        if (rollNo >= 1 && rollNo <= 10) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Car Parking Management System Analysis and Billing Using Pandas in Python

                Background
                In a car parking management system, efficiently managing and analyzing parking data is crucial for operational success. 
                Using Python's Pandas library, we can handle tasks such as data analysis and billing effectively by leveraging its powerful data manipulation capabilities. 
                This problem will involve creating a simplified model of a car parking system where parking data is analyzed for usage patterns and billing is processed dynamically 
                based on parking duration and vehicle type.
                
                Objective
                Develop a Python program that uses Pandas to manage and analyze parking data, and calculate billing for parked vehicles.
                The system should allow for analyzing parking lot usage and dynamically calculating bills based on parking duration and vehicle type.
                
                Requirements
                - Use Pandas for data manipulation and analysis.
                - Implement 'if-else' statements to handle different billing rates based on vehicle type.
                - Use loops to iterate through DataFrame rows for data analysis and billing calculations.
                
                
                Entities
                1. Parking Records: A DataFrame containing records of parked vehicles including vehicle ID, type, check-in time, and check-out time.
                2. Billing Rates: A DataFrame listing hourly rates for different types of vehicles.
                3. Analysis and Billing Functions: Functions to analyze parking lot usage and calculate total bills.
                
                Sample Input and Output
                
                Input DataFrames:
                1. Parking Records:
                
                   Vehicle ID  Type    Check-In                Check-Out
                   1           Car     2024-05-07 08:00:00     2024-05-07 10:00:00
                   2           Truck   2024-05-07 09:30:00     2024-05-07 12:30:00
                
                2. Billing Rates:
                
                   Type    Rate
                   Car     2
                   Truck   3
                
                
                Output:
                
                Analysis:
                Total Cars Parked: 1
                Total Trucks Parked: 1
                Average Parking Duration: 2.5 hours
                
                Billing Information:
                Vehicle ID: 1, Type: Car, Total Bill: $4.0
                Vehicle ID: 2, Type: Truck, Total Bill: $9.0                
                </pre>
                ` :
                `<pre>
                Problem Statement: Hospital Management System Using Polymorphism in Python

                Background
                In a hospital management system, various entities such as patients, doctors, and billing processes interact in complex ways. 
                Using Python's object-oriented programming capabilities, particularly polymorphism, can help simulate these interactions effectively. 
                This problem will involve creating a simplified model of a hospital system where patients can be registered, and billing and invoicing processes are handled 
                dynamically based on patient types and services.
                
                
                Objective
                Develop a Python program that uses polymorphism to create classes representing different types of patients and a billing system. 
                The system should allow dynamic calculation of bills based on patient types (e.g., insured vs. uninsured) and services rendered.
                
                Requirements
                - Use polymorphism to demonstrate dynamic method behavior based on object type.
                - Implement 'if-else' statements to handle logical decisions within the program.
                - Use loops to iterate through lists of patients and services.
                
                Entities
                1. Patient: A base class with common attributes like name, age, and patient ID.
                2. InsuredPatient and UninsuredPatient: Subclasses that inherit from Patient, each with specific billing methods.
                3. BillingSystem: A class that processes billing based on the type of patient and services rendered.
                
                
                Output:
                
                Patient: John Doe, Patient ID: 001, Insured: Yes
                Services: General Consultation, X-Ray
                Total Bill: $50
                
                Patient: Jane Smith, Patient ID: 002, Insured: No
                Services: General Consultation
                Total Bill: $100
                </pre>
                `;
        } else if (rollNo >= 11 && rollNo <= 20) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Car Parking Management System Using Multiple Inheritance in Python

                Background
                In a car parking management system, various types of vehicles such as cars, motorcycles, and 
                trucks are parked in a designated parking lot. The system needs to manage the parking process efficiently, 
                handling different vehicle types and their respective parking fees based on the duration of parking.
                
                Objective
                Develop a Python program that uses multiple inheritance to create classes representing different types of 
                vehicles and a parking lot. The system should allow vehicles to be parked, calculate parking fees based on the duration, 
                and manage the availability of parking spaces.
                
                Requirements
                - Use multiple inheritance to demonstrate the relationships between classes.
                - Implement 'if-else' statements to handle logical decisions within the program.
                - Use loops to iterate through lists of vehicles and parking spaces.
                
                Entities
                1. Vehicle: A base class with common attributes like vehicle number and type.
                2. Car, Motorcycle, Truck: Subclasses that inherit from Vehicle, each with specific attributes or methods if necessary.
                3. ParkingLot: A class that manages multiple parking spaces and calculates fees.
                
                
                
                Output:
                Parking Lot Status:
                Slot 1: Car - Plate XYZ123 - Parked for 2 hours - Fee: $10
                Slot 2: Motorcycle - Plate ABC123 - Parked for 3 hours - Fee: $4.5
                Slot 3: Empty
                
                </pre>` :
                `<pre>
                Problem Statement: Hospital Management System Using Polymorphism in Python

                Background
                In a hospital management system, various entities such as patients, doctors, and billing processes interact in complex ways. 
                Using Python's object-oriented programming capabilities, particularly polymorphism, can help simulate these interactions effectively. 
                This problem will involve creating a simplified model of a hospital system where patients can be registered, and billing and invoicing processes are handled
                dynamically based on patient types and services.
                
                
                Objective
                Develop a Python program that uses polymorphism to create classes representing different types of patients and a billing system. 
                The system should allow dynamic calculation of bills based on patient types (e.g., insured vs. uninsured) and services rendered.
                
                Requirements
                - Use polymorphism to demonstrate dynamic method behavior based on object type.
                - Implement 'if-else' statements to handle logical decisions within the program.
                - Use loops to iterate through lists of patients and services.
                
                Entities
                1. Patient: A base class with common attributes like name, age, and patient ID.
                2. InsuredPatient and UninsuredPatient: Subclasses that inherit from Patient, each with specific billing methods.
                3. BillingSystem: A class that processes billing based on the type of patient and services rendered.
                
                
                Output:
                
                Patient: John Doe, Patient ID: 001, Insured: Yes
                Services: General Consultation, X-Ray
                Total Bill: $50
                
                Patient: Jane Smith, Patient ID: 002, Insured: No
                Services: General Consultation
                Total Bill: $100
                </pre>` ;
        } else if (rollNo >= 21 && rollNo <= 30) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Analyzing Prompt Engineer Distribution in an IT MNC Using Numpy in Python

                Background
                In a global IT MNC, understanding the distribution of prompt engineers across different regions of the world is crucial for strategic planning and resource allocation. 
                Using Python's Numpy library, we can analyze and manage data related to the geographical distribution of prompt engineers effectively.
                
                Objective
                Develop a Python program that uses Numpy to analyze the distribution of prompt engineers across different parts of the world in an IT MNC. 
                The system should allow for data input regarding the number of prompt engineers in each region, perform analysis to determine the distribution, and 
                identify regions with the highest and lowest number of prompt engineers.
                
                Requirements
                - Use Numpy for handling and analyzing data.
                - Implement 'if-else' statements to handle conditions such as finding maximum and minimum values.
                - Use loops to iterate through arrays for data manipulation and analysis.
                
                Entities
                1. Prompt Engineer Distribution Data: A Numpy array containing the number of prompt engineers in each part of the world.
                2. Region Names: A Numpy array containing names of the regions corresponding to the distribution data.
                
                Sample Input and Output
                
                Input:
                - Prompt Engineer counts in five different parts of the world: [150, 200, 120, 180, 100]
                - Corresponding regions: ["North America", "Europe", "Asia", "South America", "Africa"]
                
                Output:
                
                Total Prompt Engineers: 750
                Region with Most Prompt Engineers: Europe - 200 Prompt Engineers
                Region with Fewest Prompt Engineers: Africa - 100 Prompt Engineers

                CSV File Structure

                For importing data into the system, the CSV file should include the following columns:

                - Region: The name of the region.
                - Prompt Engineer Count: The number of engineers in that region.


                Sample CSV Content

                Region,Prompt Engineer Count
                North America,150
                Europe,200
                Asia,120
                South America,180
                Africa,100

                
                </pre>`:
                `<pre>
                Problem Statement: Car Parking Management System Analysis and Billing Using Pandas in Python

                Background
                In a car parking management system, efficiently managing and analyzing parking data is crucial for operational success. 
                Using Python's Pandas library, we can handle tasks such as data analysis and billing effectively by leveraging its powerful data manipulation capabilities. 
                This problem will involve creating a simplified model of a car parking system where parking data is analyzed for usage patterns and 
                billing is processed dynamically based on parking duration and vehicle type.
                
                Objective
                Develop a Python program that uses Pandas to manage and analyze parking data, and calculate billing for parked vehicles. 
                The system should allow for analyzing parking lot usage and dynamically calculating bills based on parking duration and vehicle type.
                
                Requirements
                - Use Pandas for data manipulation and analysis.
                - Implement 'if-else' statements to handle different billing rates based on vehicle type.
                - Use loops to iterate through DataFrame rows for data analysis and billing calculations.
                
                
                Entities
                1. Parking Records: A DataFrame containing records of parked vehicles including vehicle ID, type, check-in time, and check-out time.
                2. Billing Rates: A DataFrame listing hourly rates for different types of vehicles.
                3. Analysis and Billing Functions: Functions to analyze parking lot usage and calculate total bills.
                
                Sample Input and Output
                
                Input DataFrames:
                1. Parking Records:
                
                   Vehicle ID  Type    Check-In                Check-Out
                   1           Car     2024-05-07 08:00:00     2024-05-07 10:00:00
                   2           Truck   2024-05-07 09:30:00     2024-05-07 12:30:00
                
                2. Billing Rates:
                
                   Type    Rate
                   Car     2
                   Truck   3
                
                
                Output:
                
                Analysis:
                Total Cars Parked: 1
                Total Trucks Parked: 1
                Average Parking Duration: 2.5 hours
                
                Billing Information:
                Vehicle ID: 1, Type: Car, Total Bill: $4.0
                Vehicle ID: 2, Type: Truck, Total Bill: $9.0

                
                </pre>`;
        } else if (rollNo >= 31 && rollNo <= 40) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Learner Management System in an Edtech Company Using Numpy in Python

                Background
                An Edtech company offers various courses to learners across the globe. 
                To manage the learners efficiently, the company needs a Learner Management System (LMS) that can handle learner data, including their personal information, 
                courses enrolled, and performance metrics. Using Python's Numpy library, we can create a simplified model of an LMS that performs these tasks efficiently.
                
                Objective
                Develop a Python program that uses Numpy to manage learner data in an Edtech company. 
                The system should allow for adding new learner records, updating course enrollment, and calculating performance metrics based on scores.
                
                Requirements
                - Use Numpy for handling learner data.
                - Implement 'if-else' statements to handle different operations such as adding, updating, and calculating performance.
                - Use loops to iterate through arrays for data manipulation and calculations.
                
                Entities
                1. Learner Data: A Numpy array containing learner IDs, names, and other personal information.
                2. Course Enrollment: A Numpy array linking learner IDs with courses they are enrolled in.
                3. Performance Metrics: A Numpy array containing scores for each learner in their respective courses.
                
                Sample Input and Output
                
                Input:
                - Add a new learner: Learner ID = 101, Name = "John Doe", Course = "Python Programming"
                - Update course enrollment: Learner ID = 101, New Course = "Data Science"
                - Calculate performance: Learner ID = 101, Scores = [85, 92, 78]
                
                Output:
                
                Learner Added: ID = 101, Name = John Doe, Course = Python Programming
                Course Updated: ID = 101, New Course = Data Science
                Performance Metrics: ID = 101, Average Score = 85

                CSV File Structure for Learner Management System

                For the Learner Management System in an Edtech company, the CSV file should include the following columns based on the requirements:

                - Learner ID: A unique identifier for each learner.
                - Name: The name of the learner.
                - Course: The course in which the learner is enrolled.
                - Scores: A list of scores obtained by the learner in the course.

                Sample CSV Content

                Here is a sample CSV content for 10 datasets, which you can use to populate your Learner Management System:


                Learner ID, Name, Course, Scores
                101,John Doe,Python Programming,"[85, 92, 78]"
                102,Jane Smith,Data Science,"[88, 90, 93]"
                103,Bob Johnson,Machine Learning,"[75, 84, 79]"
                104,Alice Williams,Artificial Intelligence,"[91, 88, 90]"
                105,Chris Davis,Web Development,"[82, 80, 85]"
                106,Patricia Brown,Cloud Computing,"[89, 90, 87]"
                107,Michael Miller,Cyber Security,"[92, 91, 94]"
                108,Linda Wilson,Data Analysis,"[78, 81, 79]"
                109,Elizabeth Moore,Software Engineering,"[85, 87, 89]"
                110,David Taylor,Network Administration,"[80, 82, 84]"
                
                </pre>` :
                `<pre>
                Problem Statement: Hospital Management System Using Pandas in Python


                Background
                In a hospital management system, managing patient records and billing efficiently is crucial. 
                Using Python's Pandas library, we can handle these tasks effectively by leveraging its powerful data manipulation capabilities. 
                This problem will involve creating a simplified model of a hospital system where patient records are managed and billing is processed dynamically 
                based on various conditions.
                
                Objective
                Develop a Python program that uses Pandas to manage patient records and billing. 
                The system should allow for adding new patient records, updating existing records, and calculating bills 
                based on services rendered and patient insurance status.
                
                Requirements
                - Use Pandas for data manipulation.
                - Implement 'if-else' statements to handle different billing conditions.
                - Use loops to iterate through DataFrame rows for record updates and billing calculations.
                
                Entities
                1. Patient Records: A DataFrame containing patient details such as ID, name, age, and insurance status.
                2. Services Rendered: A DataFrame listing services provided to patients along with associated costs.
                3. Billing: A function to calculate total bills based on insurance status and services rendered.
                
                Sample Input and Output
                
                Input DataFrames:
                1. Patient Records:
                   
                   ID   Name   Age  Insurance
                   1    John   30   Yes
                   2    Jane   25   No
                   
                2. Services Rendered:
                   
                   ID   Service        Cost
                   1    Consultation   200
                   1    X-Ray          150
                   2    Consultation   200
                                   
                
                Output:
                
                Billing Information:
                ID: 1, Name: John, Total Bill: $175.0
                ID: 2, Name: Jane, Total Bill: $200.0
                                
                </pre>`;
        } else if (rollNo >= 41 && rollNo <= 50) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: University Management System Using Multiple Inheritance in Python

                Background
                In a university management system, multiple entities such as students, professors, and courses interact in various ways.
                Using Python's object-oriented programming capabilities, particularly multiple inheritance, can help simulate these interactions effectively. 
                This problem will involve creating a simplified model of a university system where students can enroll in courses and professors can assign grades.
                
                Objective
                Develop a Python program that uses multiple inheritance to create classes representing students, professors, and courses. The system should allow:
                1. Students to enroll in courses.
                2. Professors to assign grades to students for courses they teach.
                
                Requirements
                - Use multiple inheritance to demonstrate the relationships between classes.
                - Implement 'if-else' statements to handle logical decisions within the program.
                - Use loops to iterate through lists of students and courses.
                
                Entities
                1. Person: A base class with common attributes like name and age.
                2. Student: Inherits from Person, has attributes to store enrolled courses and grades.
                3. Professor: Inherits from Person, capable of teaching courses and assigning grades.
                4. Course: A class that includes course-related details and enrolled students.
                
                
                Output
                
                Course: Python Programming
                Enrolled Students: Alice, Bob
                Alice's Grade: A
                Bob's Grade: B
                
                </pre>` :
                `<pre>
                Problem Statement: Analyzing Prompt Engineer Distribution in an IT MNC Using Numpy in Python

                Background
                In a global IT MNC, understanding the distribution of prompt engineers across different regions of the world is crucial for strategic planning and resource allocation. 
                Using Python's Numpy library, we can analyze and manage data related to the geographical distribution of prompt engineers effectively.
                
                Objective
                Develop a Python program that uses Numpy to analyze the distribution of prompt engineers across different parts of the world in an IT MNC. 
                The system should allow for data input regarding the number of prompt engineers in each region, perform analysis to determine the distribution, 
                and identify regions with the highest and lowest number of prompt engineers.
                
                Requirements
                - Use Numpy for handling and analyzing data.
                - Implement 'if-else' statements to handle conditions such as finding maximum and minimum values.
                - Use loops to iterate through arrays for data manipulation and analysis.
                
                Entities
                1. Prompt Engineer Distribution Data: A Numpy array containing the number of prompt engineers in each part of the world.
                2. Region Names: A Numpy array containing names of the regions corresponding to the distribution data.
                
                Sample Input and Output
                
                Input:
                - Prompt Engineer counts in five different parts of the world: [150, 200, 120, 180, 100]
                - Corresponding regions: ["North America", "Europe", "Asia", "South America", "Africa"]
                
                Output:
                
                Total Prompt Engineers: 750
                Region with Most Prompt Engineers: Europe - 200 Prompt Engineers
                Region with Fewest Prompt Engineers: Africa - 100 Prompt Engineers
                
                CSV File Structure

                For importing data into the system, the CSV file should include the following columns:

                    - Region: The name of the region.
                    - Prompt Engineer Count: The number of engineers in that region.

                Sample CSV Content

                    Region,Prompt Engineer Count
                    North America,150
                    Europe,200
                    Asia,120
                    South America,180
                    Africa,100
                
                </pre>
                `;
        }

        const assignmentContainer = document.getElementById('assignmentContainer');
        assignmentContainer.innerHTML = `<p>${assignment}</p>`;
    } else {
        alert('Please enter a valid roll number between 1 and 50.');
    }
}
