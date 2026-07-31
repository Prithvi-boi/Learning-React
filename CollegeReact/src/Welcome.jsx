// import PropTypes from 'prop-types'

export default function Welcome(props){
    return ( <h1 className="bg-amber-400" >Hello {props.name}!</h1>
    );
}

// Welcome.propTypes = {
//     name: PropTypes.string.isRequired
// }