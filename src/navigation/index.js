import './style.css';

function Navigation() {
	return (<nav class="nav-area">
				<div class="menu-wrapper">
		         	<div class="anchor-wrapper">
						<a class="home-logo" href="/">Nolan & Co</a>
					</div>
					<div class="navigate">
						<ul>
							<li><a href="/work">Our Work</a></li>
							<li><a href="/services">Our Services</a></li>
							<li><a href="/company">Company</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>);
}

export default Navigation;