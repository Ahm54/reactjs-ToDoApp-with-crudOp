import React from 'react'
import { Stack } from '@mui/material'
import ShowTask from './showTask'


function TaskList({ tasks, onDelete, onUpdate }) {
    return (
        <Stack sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection:'row' }}>
            {tasks.map((task, i) => {
                return (
                    <ShowTask key={i} task={task} onDelete={onDelete} onUpdate={onUpdate} />
                )
            })}
        </Stack>
    )
}

export default TaskList
