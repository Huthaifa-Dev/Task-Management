import React from "react";

const TaskContext = React.createContext({
    tasks: [
        {
            title: 'UX Adjustments',
            tag: 'Research',
            description: 'It just needs to adabt the UI from what you did before.',
            state: 'todo',
            date: new Date(2021, 2, 28)
        },
        {
            title: 'Design System',
            tag: 'UI Design',
            description: 'Create a consistent look and feel both on weeb and mobile.',
            state: 'qa',
            date: new Date(2021, 2, 28)
        },
        {
            title: 'Presentation',
            tag: 'Planning',
            description: 'Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.',
            state: 'completed',
            date: new Date(2021, 2, 28)
        },
        {
            title: 'Moodboards',
            tag: 'UI Design',
            description: 'Add a field in the portal to let the user connect their Slack account.',
            state: 'in work',
            date: new Date(2021, 2, 28)
        }],
    addTask: (task) => { },
    moveTask: (id) => { },
});

export default TaskContext;