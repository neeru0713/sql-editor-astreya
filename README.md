## App Preview
<img width="1727" alt="Screenshot 2024-04-10 at 11 32 01 PM" src="https://github.com/neeru0713/sql-editor-astreya/assets/123808700/bf3b07a1-2a12-474a-bdb8-79cf7bb58ec6">


## Instructions:

1. **Clone the Repository**:
   Clone the repository containing the SQL editor tool codebase:

   ```bash
   git clone https://github.com/neeru0713/sql-editor-astreya
   cd sql-editor-astreya

2. **Install Dependencies**:
    Install the dependencies for both the frontend and backend applications:

    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install

3. **Set Up Environment Variables**:
    Set up environment variables for connecting to Google BigQuery and Snowflake. Create a .env file in the backend directory and define the following variables:

    ```bash
    BIGQUERY_KEY_FILE=your-bigquery-key-file-path
    SNOWFLAKE_ACCOUNT=your-snowflake-account-url
    SNOWFLAKE_USER=your-snowflake-username
    SNOWFLAKE_PASSWORD=your-snowflake-password
    SNOWFLAKE_DATABASE=your-snowflake-database
    SNOWFLAKE_WAREHOUSE=your-snowflake-warehouse
    SNOWFLAKE_SCHEMA=your-snowflake-schema

4. **Start the Backend Server**:
    Start the backend server application:

    ```bash
    cd ../backend
    npm start

5. **Start the Frontend Application**:
    Open a new terminal window and start the frontend application:

    ```bash
    cd ../frontend
    npm start

6. **Access the SQL Editor**:
    Open your web browser and navigate to http://localhost:3000 to access the SQL editor tool. You should see the editor interface where you can write SQL queries and execute them against Google BigQuery or Snowflake.


## Flowchart

```mermaid
graph LR;
    A(Frontend_Client)-- (1) Write SQL Query --->B(Backend_Server);
    B(Backend_Server)-- (2) Execute Query  --->C(Google_BigQuery_Snowflake)
    C(Google_BigQuery_Snowflake)-- (3) Query Execution  --->B(Backend_Server)
    B(Backend_Server)-- (4) Send Query Result --->A(Frontend_Client)
    A(Frontend_Client)-- (5) Display Result --->D(User)
  






