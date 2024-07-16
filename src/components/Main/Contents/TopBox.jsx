import PropTypes from 'prop-types'; 



TopBox.propTypes={
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default function TopBox(props) {

  return (
    <div className="d-flex border rounded-pill col-4 p-4 justify-content-between overflow-hidden">
          <h4>{props.title}</h4><p>{props.value}</p>
    </div>
  )
}

