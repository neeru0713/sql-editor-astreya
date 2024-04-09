
## Instructions:

1. **Clone the Repository**:
   Clone the repository containing the SQL editor tool codebase:
   ```bash
   git clone https://github.com/neeru0713/sql-editor-astreya
   cd sql-editor-astreya


## Flowchart

```mermaid
graph LR;
    A(Frontend_Client)--> (1) Write SQL Query ---B(Backend_Server);
    B(Backend_Server)--> (2) Execute Query  ---C(Google_BigQuery_Snowflake)
    C(Google_BigQuery_Snowflake)--> (3) Query Execution  ---B(Backend_Server)
    B(Backend_Server)--> (4) Send Query Result ---A(Frontend_Client)
    A(Frontend_Client)--> (5) Display Result ---D(User)
  






