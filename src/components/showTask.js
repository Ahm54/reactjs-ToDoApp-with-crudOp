import { Typography, Stack, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { FaTasks } from 'react-icons/fa';
import { VscTasklist } from 'react-icons/vsc';
import CreateTask from "./CreateTask";


function ShowTask({ task, onDelete, onUpdate }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(task.id);
    }

    const handleUpdate = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit=(id, updatedTitle, updatedTask)=>{
        setShowEdit(false);
        onUpdate(id, updatedTitle, updatedTask);
    }

    return (
        <Stack sx={{ display: 'flex', border: '2px solid green', borderRadius: '10px', height: '500px', width: '300px', padding: '20px', flexDirection: 'row', alignItems: 'center', margin: '20px' }}>
            {showEdit ? (<CreateTask task={task} taskFormUpdate={true} onUpdate={handleSubmit} />) : (<Stack>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ textAlign: 'left' }}><FaTasks />Göreviniz</Typography>
                    <Typography variant="h6" sx={{ marginBottom: '8px' }}>{task.title}</Typography>
                    <Typography variant="h5" sx={{ textAlign: 'left' }}><VscTasklist sx={{ margin: '8px' }} />Yapılacaklar</Typography>
                    <Typography variant="h6">{task.taskDesc}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button variant="contained" color="error" sx={{ margin: '5px' }} onClick={handleDelete}>SİL</Button>
                    <Button variant="contained" color="primary" sx={{ margin: '5px' }} onClick={handleUpdate}>GÜNCELLE</Button>
                </Box>
            </Stack>)}

        </Stack>
    );
}

export default ShowTask;