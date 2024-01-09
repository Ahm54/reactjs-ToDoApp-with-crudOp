import { Stack, Button, Box, TextField, InputLabel, Typography } from '@mui/material';
import React, { useState } from 'react';


function CreateTask({ onCreate, task, taskFormUpdate, onUpdate }) {

    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskFormUpdate) {
            onUpdate(task.id, title, taskDesc)
        }
        else {
            onCreate(title, taskDesc)
        }
        setTaskDesc('');
        setTitle('');
    }

    const handleDelete = () => {
        setTitle('');
        setTaskDesc('');
    }

    const handleTaskChange = (e) => {
        setTaskDesc(e.target.value);
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <Stack>
            {' '}
            {taskFormUpdate ?
                <div style={{ width: '100%' }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', height: '500px' }}>
                        <Typography variant='h5'>Lütfen Taskı düzenleyiniz</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
                            <InputLabel sx={{ color: 'black', paddingRight: '10px', marginTop: '15px', textAlign: 'left' }}>Başlığı düzenleyiniz</InputLabel>
                            <TextField sx={{ width: '300px', borderRadius: '4px' }} value={title} onChange={handleChange} />
                        </Box>
                        <br />
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
                            <InputLabel sx={{ color: 'black', paddingRight: '10px', marginTop: '10px', textAlign: 'left' }}>Taskı düzenleyiniz</InputLabel>
                            <TextField
                                value={taskDesc}
                                onChange={handleTaskChange}
                                multiline
                                maxRows={15}
                                minRows={5}
                                sx={{ width: '300px', borderRadius: '4px' }}
                            />
                        </Box>
                        <br />
                        <Button variant='contained' color="inherit" sx={{ width: '300px' }} onClick={handleSubmit}>DÜZENLE</Button>
                    </Stack>
                </div> : <div style={{ width: '100%' }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <InputLabel sx={{ color: 'black', paddingRight: '10px', marginTop: '15px', textAlign: 'left' }}>Başlık</InputLabel>
                            <TextField sx={{ width: '300px', borderRadius: '4px' }} value={title} onChange={handleChange} />
                        </Box>
                        <br />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <InputLabel sx={{ color: 'black', paddingRight: '10px', marginTop: '10px', textAlign: 'left' }}>Task Giriniz</InputLabel>
                            <TextField
                                value={taskDesc}
                                onChange={handleTaskChange}
                                multiline
                                maxRows={15}
                                minRows={5}
                                sx={{ width: '300px', borderRadius: '4px' }}
                            />
                        </Box>
                        <br />
                        <Button variant='contained' color="success" sx={{ width: '300px' }} onClick={handleSubmit}>OLUŞTUR</Button>
                        <br />
                        <Button variant='contained' color="error" sx={{ width: '300px' }} onClick={handleDelete}>TEMİZLE</Button>
                    </Stack>
                </div>
            }
        </Stack>
    )
}

export default CreateTask
