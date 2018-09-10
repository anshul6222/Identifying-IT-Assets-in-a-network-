import React from 'react';
import Info from './Info';
var jsPDF = require('jspdf');

class Page extends React.Component
{
	onSubmit = ()=>
	{
		var pageWidth = 8.5,
		lineHeight = 1.2,
		margin = 0.5,
		maxLineWidth = pageWidth - margin * 2,
		fontSize = 22,
		ptsPerInch = 72,
		oneLineHeight = fontSize * lineHeight / ptsPerInch,
		text = this.props.info.info,
		doc = new jsPDF({
			unit: 'in',
			lineHeight: lineHeight
		}).setProperties({ title: this.props.info.host });

		var textLines = doc
			.setFont('helvetica', 'neue')
			.setFontSize(fontSize)
			.splitTextToSize(text, maxLineWidth);

		doc.text(textLines, margin, margin + 2 * oneLineHeight);

		doc
			.setFontStyle('bold')
			.text('Current IP: '+this.props.info.host, margin, margin + oneLineHeight)
			.save(this.props.info.host+".pdf");

	}

	render()
	{
		var display = this.props.info.info.map((val,i)=>
			<Info key = {i} name = {i} value = {val} />
		);
		return(
		<div>
	    	<h1>{this.props.info.host}</h1>
	        <div>{display}</div>
	        <input className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6" type = "submit" onClick={this.onSubmit} value="Save as PDF" />
	    </div>
	    );
	}
}

export default Page;