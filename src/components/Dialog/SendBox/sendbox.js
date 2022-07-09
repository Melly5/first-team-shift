import React from 'react';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { InputBase } from '@mui/material';
import './sendbox.css';

const Sendbox = () => {
    return (
        <div className='send-box'>
            <AttachFileOutlinedIcon sx={{ color: "#C5C5C5" }}/>
            <div className='input-message'>
                <InputBase
                    sx={{ ml: 2, mt: 0.5, input: { color: '#C5C5C5' }  }}
                    placeholder="Введите сообщение..."                               
                />
            </div>
            <SendRoundedIcon sx={{ color: "#C5C5C5" }}/>
        </div>
  )
}

export default Sendbox