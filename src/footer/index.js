import './style.css';

function Footer() {
	return (<div class="footer">	    			    	
		    	<div class="second-container">
		    		<div class="company-info">
		    			<ul>
		    				<li><a href="work.html">Our Work</a></li>
		    				<li><a href="services.html">Our Services</a></li>
		    				<li><a href="company.html">Company</a></li>
		    				<li><a href="contact.html">Contact</a></li>
		    			</ul>
		    		</div>
		    		<div class="made-with">
		    			<span class="made-with-2">
		    				<span class="made-with-3">Made with</span>	
		    				<a class="link" href="squarespace.html">Squarespace</a>
		    			</span>
		    		</div>
		    	</div>
		    	<div class="fixed-button">
		    		<a href="sign-up.html">
		    			<img class="squarespace" src="http://assets.squarespace.com/universal/images-v6/damask/logo-light.svg?20181218" />
		    			<div class="try-it">
		    				<div class="create">Create a Site Like This</div>
		    				<div class="free">Free trial. Instant access.</div>
		    			</div>
		    		</a>
		    	</div>
		    </div>);
}

export default Footer;