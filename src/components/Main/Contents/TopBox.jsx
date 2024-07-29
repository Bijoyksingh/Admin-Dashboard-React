import PropTypes from 'prop-types'; 



TopBox.propTypes={
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default function TopBox(props) {

  return (
    <div className="d-flex border rounded-pill col-4 p-4 justify-content-between overflow-hidden">
          <h3>{props.title}</h3><h5>{props.value}</h5>
    </div>
  )
}

