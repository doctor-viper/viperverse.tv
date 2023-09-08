<?php require_once($_SERVER['DOCUMENT_ROOT'].'/inc/header.php'); ?>


	<main>

		<article>
	
			<h1>Article Header</h1>
	
			<p>Etiam pretium odio eu mi convallis vitae varius neque pharetra. Nulla vestibulum nisi ut sem cursus sed mattis nisi egestas.</p>
	
			<h2>Article Subhead</h2>
	
			<p>Vestibulum lacus erat, volutpat vel dignissim at, fringilla ut felis.</p>

			<form>
				<fieldset>

					<legend>Personal Info</legend>
					
					<label for="name">Full Name:</label>
					<span class="help-text" id="input-name-help">Single word names are supported.</span>
					<input type="text" id="name" name="name" aria-describedby="input-name-help">
					
					<label for="email">Email:</label>
					<input type="email" id="email" name="email">

				</fieldset>
				
				<label for="password">Password:</label>
				<input type="password" id="password" name="password">

				<input type="checkbox" id="terms" required="required" />
				<label for="terms">I have read and accept the <a href="#" target="_blank">terms and conditions</a>.</label>
				
				<input type="submit" value="Submit">
			</form>
	
		</article>
	
		<aside>
	
			<h2>Sidebar Content</h2>
			
			<p>Vestibulum lacus erat, volutpat vel dignissim at, fringilla ut felis.</p>
	
		</aside>
	
	</main>

	<?php require_once($_SERVER['DOCUMENT_ROOT'].'/inc/footer.php'); ?>