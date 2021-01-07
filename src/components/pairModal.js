import React from 'react';
import Modal from '@material-ui/core/Modal';
import { connect, useDispatch } from 'react-redux';
import { modTog } from '../actions';
import { bindActionCreators } from 'redux';
import PairPreview from './pairPreview';

function PairModal(props) {

    const dispatch = useDispatch();
    const open = props.pair.mod;
    
      const handleClose = () => {
        dispatch(modTog());
      };

    return(
        <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
            <div className="modal-preview">
                <PairPreview/>
            </div>
        </Modal>
      </div>
    )
}

function mapStateToProps(state){
    return{
        pair: state.pair
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        modTog:modTog
      }, dispatch)
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PairModal);