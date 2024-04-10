## App Preview
<img width="1728" alt="Screenshot 2024-04-10 at 11 30 07 PM" src="https://github.com/neeru0713/sql-editor-astreya/assets/123808700/f1ca5641-448b-46ca-b4ad-11d0a2ca8eef">


## Instructions:

1. **Clone the Repository**:
   Clone the repository containing the SQL editor tool codebase:
   ```bash
   git clone https://github.com/neeru0713/sql-editor-astreya
   cd sql-editor-astreya


## Flowchart

```mermaid
graph LR;
    A(Frontend_Client)-- (1) Write SQL Query --->B(Backend_Server);
    B(Backend_Server)-- (2) Execute Query  --->C(Google_BigQuery_Snowflake)
    C(Google_BigQuery_Snowflake)-- (3) Query Execution  --->B(Backend_Server)
    B(Backend_Server)-- (4) Send Query Result --->A(Frontend_Client)
    A(Frontend_Client)-- (5) Display Result --->D(User)
  






