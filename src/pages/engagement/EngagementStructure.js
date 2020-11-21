import React from "react"
import '../../Css/Engagement/Engagement.css'

class EngagementStructure extends React.Component {
/*
    constructor(props) {
        super(props);
    }*/
    render() {
        const epg = this.props.engagementpagedata
        return (
          <div className="total-grid-engagement">

		<div className="headings">
			<div className="article-topic">
				<h1>Dunk of the Dunkin</h1>
			</div>

			  <div className="sub-nav" id="task-nav">
				<a href="#all">OVERVIEW</a>
				<a href="#Started">REVIEW</a>
				<a href="#Completed">AI REVIEW</a>
				<a href="#ondisplay" className="active">ENGAGEMENT</a>

			</div>
		</div>
		<div className="overview">
					<div className="overview-box">


						<div className="individual-box">
							<div className="box-heading">
								<h3> Reads </h3>
							</div>

							<div className="box-value">
							       {epg.reads}
							</div>
						</div>



						<div className="individual-box">
							<div className="box-heading">
								<h3> Reviews </h3>
							</div>

							<div className="box-value">
								{epg.reviews}
							</div>
						</div>



				    </div>
		</div>

		<div className="engagement-box">
			<div className="engagement-content">
						<div className="content-box">
							<div className="gif">
								Enagement photo / GIF
							</div>

							<div className="reaction-count">
								{epg.gif1}
							</div>

						</div>
			</div>


			<div className="engagement-content">
				<div className="content-box">
					<div className="gif">
						Enagement photo / GIF
					</div>

					<div className="reaction-count">
						{epg.gif2}
					</div>

				</div>
			</div>


			<div className="engagement-content">
				<div className="content-box">
					<div className="gif">
						Enagement photo / GIF
					</div>

					<div className="reaction-count">
						{epg.gif3}
					</div>

				</div>
			</div>



			<div className="engagement-content">
				<div className="content-box">
					<div className="gif">
						Enagement photo / GIF
					</div>

					<div className="reaction-count">
						{epg.gif4}
					</div>

				</div>
			</div>



			<div className="engagement-content">
				<div className="content-box">
					<div className="gif">
						Enagement photo / GIF
					</div>

					<div className="reaction-count">
						{epg.gif5}
					</div>

				</div>
			</div>

		</div>






		<div className="footer">
					footer
		</div>


	</div>
        );
    }
}

export default EngagementStructure
