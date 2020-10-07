import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useSelector} from "react-redux";
import store from "../../store";
import {searchable} from "../../store/actions/HeaderActions";
import TextField from '@material-ui/core/TextField';

export default function Modal() {
    const isSearchEnable=useSelector(state=>state.NavReducer.searchEnable)
    const [open, setOpen] = React.useState(isSearchEnable);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        store.dispatch(searchable())
    };

    useEffect(()=>{
        setOpen(isSearchEnable)
    })

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Search Movie"}</DialogTitle>
                <DialogContent>
                    <TextField id="standard-basic" label="Search Movie" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Search
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}