import { connect, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { pairReset } from '../actions';
import { bindActionCreators } from 'redux';
import axios from 'axios';

function PairPreview(props) {

    const dispatch = useDispatch();
    const pairs = props.pair;

    const handleCreate = () => {
        const animal = {
            name:pairs.name[2],
            category:pairs.category,
            age:0,
            quantity:pairs.output[2]
        }
        
          axios.post('http://localhost:3020/livestocks/add', animal)
            .then(res => console.log(res))
            .catch(e => console.log(e));
            
           dispatch(pairReset(1));
    }

    return(
        <Card className="sub-flex">
            <CardContent>
                <div className="grid-pair-1">
                    <p className="gp-l">Name:</p><h3 className="gp-r">{pairs.name[2]}</h3>
                    <p className="gp-l">Output:</p><p className="gp-r">{pairs.output[2] !== 0? pairs.output[2]:<span></span>}</p>
                    <p className="gp-l">Parents:</p><p className="gp-r">{pairs.name[0]}<br/>{pairs.name[1]}</p>
                    <p className="gp-l">Category:</p><p className="gp-r">{pairs.category}</p>
                </div>
            </CardContent>
            <CardActions>
                <div className="grid-pair-2">
                    <Button size="small" variant="contained" onClick={() => dispatch(pairReset(1))}>Clear</Button><Button size="small" variant="contained" color="primary" onClick={handleCreate}>Create</Button>
                </div>
            </CardActions>
            <CardContent>
                Select two animals to create a child.  Production levels will be based on parents stats.
            </CardContent>
        </Card>
    )
}

//Redux connection functions
function mapStateToProps(state){
    return{
        pair: state.pair
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        pairReset:pairReset
      }, dispatch)
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PairPreview);