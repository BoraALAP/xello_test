/*
	
	 ######   ######     ###      ####   ######   #######   #####    #####   ######      #     ######
	 #     #  #     #   #   #    #    #  #     #  #        #     #  #     #  #     #     #     #     #
	 #     #  #     #  #     #  #        #     #  #        #        #        #     #    ###    #     #
	 ######   ######   #     #  #   ###  ######   #####     #####    #####   ######     # #    ######
	 #        #   #    #     #  #     #  #   #    #              #        #  #     #   #####   #   #
	 #        #    #    #   #    #    #  #    #   #        #     #  #     #  #     #   #   #   #    #
	 #        #     #    ###      #####  #     #  #######   #####    #####   ######   ##   ##  #     #
	
	
*/


const progressbar = document.querySelector('.progress-bar');
const highlight = document.querySelector('.highlight');

const info = {
	valuenow: parseInt(progressbar.getAttribute('aria-valuenow')),
	valuemax: parseInt(progressbar.getAttribute('aria-valuemax')),
	valuemin: parseInt(progressbar.getAttribute('aria-valuemin'))
}

function progressGet () {

	highlight.innerText = info.valuenow;
	let result = `width: ${info.valuenow * 100 / info.valuemax}%`;
	progressbar.setAttribute('style', result);
}

progressGet();





/*
	########  #######   #######  ##       ######## #### ########
	   ##    ##     ## ##     ## ##          ##     ##  ##     ##
	   ##    ##     ## ##     ## ##          ##     ##  ##     ##
	   ##    ##     ## ##     ## ##          ##     ##  ########
	   ##    ##     ## ##     ## ##          ##     ##  ##
	   ##    ##     ## ##     ## ##          ##     ##  ##
	   ##     #######   #######  ########    ##    #### ##
*/


$(function () {
	$('[data-toggle="tooltip"]').tooltip('hide')
	// .tooltip({
	// 	"html": true,
	// 	"container": $('[data-toggle="tooltip"]'),
	// 	"template": `<div class="tooltip" role="tooltip">
	// 	<div class="tooltip-inner">
	// 	<div class="left-color"></div>
	// 	<div class="tip">
	// 	<h6>This course requires a Pre-requisite.</h6> 
	// 	<a href="#">Add One.</a>
	// 	</div>
	// 	</div>
	// 	<div class="arrow"></div>
	// 	</div>`

	// })
	
})




/*
	########   #######  ########  ##     ## ##          ###    ######## ########     ######   #######  ##    ## ######## ######## ##    ## ########
	##     ## ##     ## ##     ## ##     ## ##         ## ##      ##    ##          ##    ## ##     ## ###   ##    ##    ##       ###   ##    ##
	##     ## ##     ## ##     ## ##     ## ##        ##   ##     ##    ##          ##       ##     ## ####  ##    ##    ##       ####  ##    ##
	########  ##     ## ########  ##     ## ##       ##     ##    ##    ######      ##       ##     ## ## ## ##    ##    ######   ## ## ##    ##
	##        ##     ## ##        ##     ## ##       #########    ##    ##          ##       ##     ## ##  ####    ##    ##       ##  ####    ##
	##        ##     ## ##        ##     ## ##       ##     ##    ##    ##          ##    ## ##     ## ##   ###    ##    ##       ##   ###    ##
	##         #######  ##         #######  ######## ##     ##    ##    ########     ######   #######  ##    ##    ##    ######## ##    ##    ##
*/

const year_9 = $('#year_9 ul');
const year_10 = $('#year_10 ul');
const year_11 = $('#year_11 ul');
const year_12 = $('#year_12 ul');

let years = [];
    
function populateCourses(res){

	res.year_9.forEach((item) => {

		let filled = `
				<li>
					<div class="card flex-row filled">
						<div class="left-color">
							<i class="fas fa-plus"></i>
						</div>
						<div class="info">
							<div class="d-flex flex-row justify-content-between mb-1">
								<h4 class="course_name">${item.course_name}</h4>
								${item.tooltip ? `
								
								<a href="#" data-toggle="tooltip" class="red-circle" title="${item.tooltip}">!</a>
								<div class="tooltip" role="tooltip">
								<div class="tooltip-inner">
								<div class="left-color"></div>
								<div class="tip">
								<h6>${item.tooltip}</h6> 
								<a href="#">Add One.</a>
								</div>
								</div>
								<div class="arrow"></div>
								</div>
								
								
								
							` : ` `}
							</div>
							<div class="d-flex flex-row justify-content-between">
								<div class="d-flex flex-row">
									<h5 class="course_code border-right pr-2">${item.course_code}</h5>
									<h6 class="course_title ml-2">${item.course_title}</h6>
								</div>
								<h6 class="course_credit">${item.course_credit}</h6>
							</div>
						</div>
					</div>
				</li>
				`

		let fill = `<li>
						<div class="card flex-row fill">
							<div class="left-color">
								<button>
									<i class="fas fa-plus"></i>
								</button>
							</div>
							<div class="info">
								<div class="mb-1"> 
									<h4 class="course_name">${item.course_name}</h4> 
								</div>
								<div>
									<h6 class="course_credit">${item.course_credit}</h6>
								</div>
							</div>
						</div>
					</li>`

		let empty = `
						<li>
							<div class="card empty">
								<div>
									<h4 class="course_name">Available Slot</h4> 
								</div>
							</div>
						</li>`

		if (item.status === 'filled'){
			year_9.append(filled);
			
		} else if (item.status === 'fill') {
			year_9.append(fill);
			
		} else {
			year_9.append(empty);
		}
	})
	



	res.year_10.forEach((item) => {

		let filled = `
				<li>
					<div class="card flex-row filled">
						<div class="left-color">
							<i class="fas fa-plus"></i>
						</div>
						<div class="info">
							<div class="d-flex flex-row justify-content-between mb-1">
								<h4 class="course_name">${item.course_name}</h4>
								${item.tooltip ? `
								<a href="#" data-toggle="tooltip" class="red-circle" title="This course requires a Pre-requisite">!</a>
								<div class="tooltip bs-tooltip-top" role="tooltip">
									<div class="tooltip-inner">
										<div class="left-color">
											
										</div>
										<div class="tip">
										<h6>This course requires a Pre-requisite.</h6> 
										<a href="#">Add One.</a>
										</div>
										
									</div>
									<div class="arrow"></div>
								</div>
								
							` : ` `}
							</div>
							<div class="d-flex flex-row justify-content-between">
								<div class="d-flex flex-row">
									<h5 class="course_code border-right pr-2">${item.course_code}</h5>
									<h6 class="course_title ml-2">${item.course_title}</h6>
								</div>
								<h6 class="course_credit">${item.course_credit}</h6>
							</div>
						</div>
					</div>
				</li>
				`

		let fill = `<li>
						<div class="card flex-row fill">
							<div class="left-color">
								<button>
									<i class="fas fa-plus"></i>
								</button>
							</div>
							<div class="info">
								<div class="mb-1"> 
									<h4 class="course_name">${item.course_name}</h4> 
								</div>
								<div>
									<h6 class="course_credit">${item.course_credit}</h6>
								</div>
							</div>
						</div>
					</li>`

		let empty = `
						<li>
							<div class="card empty">
								<div>
									<h4 class="course_name">Available Slot</h4> 
								</div>
							</div>
						</li>`

		if (item.status === 'filled'){
			year_10.append(filled);
			
		} else if (item.status === 'fill') {
			year_10.append(fill);
			
		} else {
			year_10.append(empty);
		}
	})

	res.year_11.forEach((item) => {

		let filled = `
				<li>
					<div class="card flex-row filled">
						<div class="left-color">
							<i class="fas fa-plus"></i>
						</div>
						<div class="info">
							<div class="d-flex flex-row justify-content-between mb-1">
								<h4 class="course_name">${item.course_name}</h4>
								${item.tooltip ? `
								<a href="#" data-toggle="tooltip" class="red-circle" title="This course requires a Pre-requisite">!</a>
								<div class="tooltip bs-tooltip-top" role="tooltip">
									<div class="tooltip-inner">
										<div class="left-color">
											
										</div>
										<div class="tip">
										<h6>This course requires a Pre-requisite.</h6> 
										<a href="#">Add One.</a>
										</div>
										
									</div>
									<div class="arrow"></div>
								</div>
								
							` : ` `}
							</div>
							<div class="d-flex flex-row justify-content-between">
								<div class="d-flex flex-row">
									<h5 class="course_code border-right pr-2">${item.course_code}</h5>
									<h6 class="course_title ml-2">${item.course_title}</h6>
								</div>
								<h6 class="course_credit">${item.course_credit}</h6>
							</div>
						</div>
					</div>
				</li>
				`

		let fill = `<li>
						<div class="card flex-row fill">
							<div class="left-color">
								<button>
									<i class="fas fa-plus"></i>
								</button>
							</div>
							<div class="info">
								<div class="mb-1"> 
									<h4 class="course_name">${item.course_name}</h4> 
								</div>
								<div>
									<h6 class="course_credit">${item.course_credit}</h6>
								</div>
							</div>
						</div>
					</li>`

		let empty = `
						<li>
							<div class="card empty">
								<div>
									<h4 class="course_name">Available Slot</h4> 
								</div>
							</div>
						</li>`

		if (item.status === 'filled'){
			year_11.append(filled);
			
		} else if (item.status === 'fill') {
			year_11.append(fill);
			
		} else {
			year_11.append(empty);
		}
	})

	res.year_12.forEach((item) => {

		let filled = `
				<li>
					<div class="card flex-row filled">
						<div class="left-color">
							<button>
								<i class="fas fa-plus"></i>
							</button>
						</div>
						<div class="info">
							<div class="d-flex flex-row justify-content-between mb-1">
								<h4 class="course_name">${item.course_name}</h4>
								${item.tooltip ? `
								<a href="#" data-toggle="tooltip" class="red-circle" title="This course requires a Pre-requisite">!</a>
								<div class="tooltip bs-tooltip-top" role="tooltip">
									<div class="tooltip-inner">
										<div class="left-color">
											
										</div>
										<div class="tip">
										<h6>This course requires a Pre-requisite.</h6> 
										<a href="#">Add One.</a>
										</div>
										
									</div>
									<div class="arrow"></div>
								</div>
								
							` : ` `}
							</div>
							<div class="d-flex flex-row justify-content-between">
								<div class="d-flex flex-row">
									<h5 class="course_code border-right pr-2">${item.course_code}</h5>
									<h6 class="course_title ml-2">${item.course_title}</h6>
								</div>
								<h6 class="course_credit">${item.course_credit}</h6>
							</div>
						</div>
					</div>
				</li>
				`

		let fill = `<li>
						<div class="card flex-row fill">
							<div class="left-color">
								<i class="fas fa-plus"></i>
							</div>
							<div class="info">
								<div class="mb-1"> 
									<h4 class="course_name">${item.course_name}</h4> 
								</div>
								<div>
									<h6 class="course_credit">${item.course_credit}</h6>
								</div>
							</div>
						</div>
					</li>`

		let empty = `
						<li>
							<div class="card empty">
								<div>
									<h4 class="course_name">Available Slot</h4> 
								</div>
							</div>
						</li>`

		if (item.status === 'filled'){
			year_12.append(filled);
			
		} else if (item.status === 'fill') {
			year_12.append(fill);
			
		} else {
			year_12.append(empty);
		}
	})

}


const link = "public/js/courses.json";

fetch(link, { headers: { "Content-Type": "application/json; charset=utf-8" }})
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    
	.then(response => { 
		populateCourses(response.years);
	})
    .catch(err => {
        console.log(err)
        console.error("sorry, there are no results for your search")
    });


/*
	##     ##  #######  ##     ## ######## ########
	##     ## ##     ## ##     ## ##       ##     ##
	##     ## ##     ## ##     ## ##       ##     ##
	######### ##     ## ##     ## ######   ########
	##     ## ##     ##  ##   ##  ##       ##   ##
	##     ## ##     ##   ## ##   ##       ##    ##
	##     ##  #######     ###    ######## ##     ##
*/


const yearCards = document.querySelectorAll('.year');



function displayCard() {
	this.classList.add('mouseon');
	let footer = this.querySelector('.card-footer');
	footer.classList.add('display');
	setTimeout(() => footer.classList.contains('display') && footer.classList.add('display-animate'), 150);
}

function hideCard() {
	this.classList.remove('mouseon');
	let footer = this.querySelector('.card-footer');
	footer.classList.remove('display-animate');
	setTimeout(() => {
		if (footer.classList.contains('display-animate') !== false){  
			footer.classList.remove('display')
		}
	}, 150);
	
}

yearCards.forEach( card => card.addEventListener('mouseenter', displayCard));
yearCards.forEach( card => card.addEventListener('mouseleave', hideCard));

