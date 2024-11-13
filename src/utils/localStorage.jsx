const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Task 1",
          "task_description": "Complete the monthly report",
          "task_date": "2024-11-14",
          "category": "Reporting"
        },
        {
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Task 2",
          "task_description": "Attend the team meeting",
          "task_date": "2024-11-13",
          "category": "Meetings"
        },
        {
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Task 3",
          "task_description": "Complete training module",
          "task_date": "2024-11-12",
          "category": "Training"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Task 1",
          "task_description": "Design the new logo",
          "task_date": "2024-11-15",
          "category": "Design"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Task 2",
          "task_description": "Update website content",
          "task_date": "2024-11-14",
          "category": "Website"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Task 1",
          "task_description": "Analyze project metrics",
          "task_date": "2024-11-10",
          "category": "Analytics"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Task 2",
          "task_description": "Prepare client presentation",
          "task_date": "2024-11-12",
          "category": "Presentations"
        },
        {
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Task 3",
          "task_description": "Send follow-up email to client",
          "task_date": "2024-11-11",
          "category": "Client Communication"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Task 1",
          "task_description": "Organize team building event",
          "task_date": "2024-11-16",
          "category": "Events"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Task 2",
          "task_description": "Update employee handbook",
          "task_date": "2024-11-14",
          "category": "HR"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Task 1",
          "task_description": "Fix bug in application",
          "task_date": "2024-11-12",
          "category": "Development"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Task 2",
          "task_description": "Write API documentation",
          "task_date": "2024-11-14",
          "category": "Documentation"
        },
        {
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Task 3",
          "task_description": "Test new feature in product",
          "task_date": "2024-11-13",
          "category": "Testing"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Task 4",
          "task_description": "Review pull request",
          "task_date": "2024-11-15",
          "category": "Code Review"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      
    }
  ];

  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  export const getLocalStorage = () => {
    const employees =JSON.parse(localStorage.getItem('employees'));
    const admin =JSON.parse(localStorage.getItem('admin'));
   
    
  }

  