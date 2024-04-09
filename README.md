
## Instructions:

1. **Clone the Repository**:
   Clone the repository containing the SQL editor tool codebase:
   ```bash
   git clone https://github.com/neeru0713/sql-editor-astreya
   cd sql-editor-astreya


## Flowchart

```mermaid
graph LR;
    Frontend_Client -->|(1) Write SQL Query| Backend_Server;
    Backend_Server -->|(2) Execute Query| Google_BigQuery_Snowflake;
    Google_BigQuery_Snowflake -->|(3) Query Execution| Backend_Server;
    Backend_Server -->|(4) Send Query Result| Frontend_Client;
    Frontend_Client -->|(5) Display Result| User;






