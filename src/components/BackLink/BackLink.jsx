const { Link } = require("react-router-dom")

const BackLink = ({to}) => {
	return (
		<Link to={to}>
			Go Back
		</Link>
	)
}

export default BackLink;