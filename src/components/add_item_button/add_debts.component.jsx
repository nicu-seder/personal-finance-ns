import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {connect} from 'react-redux';
import {toggleOnDebtForm} from "../../redux/debt/debt.action.creator";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            position:'fixed',
            // top: '800px',
            bottom:'3px',
            right: '3px',
            'background-color':'#005F6A'

        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const  AddDebts = ({toggleOnDebtForm})=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add" onClick={toggleOnDebtForm}>
                <AddIcon />
            </Fab>

        </div>
    );
};

const mapDispatchToProps = (dispatch)=>{
    return {
        toggleOnDebtForm: ()=>dispatch(toggleOnDebtForm())
    }
};

export default connect(null, mapDispatchToProps)(AddDebts);