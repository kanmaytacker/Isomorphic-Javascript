'use strict';

import React from 'react';

const typeMap = {
  'G': 'Gold',
  'S': 'Silver',
  'B': 'Bronze'
};

class Medal extends React.Component {
	render() {
		return (
			<li className="medal">
				<span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
        		<span className="year">{this.props.year}</span>
       			<span className="city"> {this.props.city}</span>
       	 		<span className="event"> ({this.props.event})</span>
        		<span className="category"> {this.props.category}</span>
      		</li>	
			);
	}
}

Medal.propTypes = {
	type: React.PropTypes.string.isRequired,
	year: React.PropTypes.number.isRequired,
	city: React.PropTypes.string.isRequired,
	event: React.PropTypes.string.isRequired,
	category: React.PropTypes.string.isRequired
};