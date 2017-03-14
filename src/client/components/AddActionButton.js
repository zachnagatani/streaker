import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddActionButton = props => {
    return (
        <div className="row">
            <div className="col-xs-3 col-xs-offset-9 text-right">
                <FloatingActionButton className="add-action-button" onTouchTap={() => props.handleOpen()}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        </div>
    );
};

export default AddActionButton;