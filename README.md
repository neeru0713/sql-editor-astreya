## App Preview
<img width="1727" alt="Screenshot 2024-04-10 at 11 32 01 PM" src="https://github.com/neeru0713/sql-editor-astreya/assets/123808700/bf3b07a1-2a12-474a-bdb8-79cf7bb58ec6">


## Instructions:

#Clone the Repository**:
   Clone the repository containing the SQL editor tool codebase:
   
   ```bash
   git clone https://github.com/neeru0713/sql-editor-astreya
   cd sql-editor-astreya

# SQL Editor Tool Setup Guide

## Install Dependencies
Install the dependencies for both the frontend and backend applications:

```bash
cd frontend
npm install
cd ../backend
npm install


## Flowchart

```mermaid
graph LR;
    A(Frontend_Client)-- (1) Write SQL Query --->B(Backend_Server);
    B(Backend_Server)-- (2) Execute Query  --->C(Google_BigQuery_Snowflake)
    C(Google_BigQuery_Snowflake)-- (3) Query Execution  --->B(Backend_Server)
    B(Backend_Server)-- (4) Send Query Result --->A(Frontend_Client)
    A(Frontend_Client)-- (5) Display Result --->D(User)
  






