import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {connect} from 'react-redux';
import {toggleOnUtilityForm} from "../../redux/utility/utility.action.creator";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            position:'absolute',
            top: '800px',
            right: '30px',
            'background-color':'#005F6A'

        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const  AddUtilities = ({toggleOnUtilityForm})=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add" onClick={toggleOnUtilityForm}>
                <AddIcon />
            </Fab>

        </div>
    );
};

const mapDispatchToProps = (dispatch)=>{
    return {
        toggleOnUtilityForm: ()=>dispatch(toggleOnUtilityForm())
    }
};

export default connect(null, mapDispatchToProps)(AddUtilities);