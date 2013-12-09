<?php 
if(count($_POST) > 0){
	echo "Form posted";
}
?>
<script src="js/jquery.1.8.2.min.js"></script>
<script src="js/valid.js"></script>
<script type="text/javascript"> 
		$(document).ready(function() { 
			validateFrm('frmLoginHome','loginbtn');
		});
</script>

<style>
    .red-error{border:1px solid red !important;}
    .spn-error{color:Red;display:none;}
    input[type="text"], input[type="password"], input[type="email"], textarea{padding: 2px 0px;border: 1px solid #CCCCCC;}
</style>

<form method="post" action="signup.php" name="frmLoginHome" id="frmLoginHome"> 
<ul>
	<li>
		<span>Your Email ID:</span>
		<label><input name="emailzz" type="text" id="emailzz" class="required email" /></label> 
	</li>
	<li>
		<span>Your Password:</span>
		<label><input type="password" name="opassword" id="opassword" value="" class="required" /></label> 
	</li>
	<li>
		<span>Your Name:</span>
		<label><input type="text" name="name" id="name" class="required" /></label> 
	</li>
	<li>
		<span>Your Age:</span>
		<label><input type="text" name="age" id="age" class="required" onkeypress="return isNumberKey(event);" maxlength="3"/></label> 
	</li>
	<li>
		<span>Your Office Address:</span>
		<label><textarea name="office_address" id="office_address" row="10" columns="10" class="anyone" rel="group1"></textarea></label> 
	</li>
	<li>
		<span>Your Home Address:</span>
		<label><textarea name="home_address" id="home_address" row="10" columns="10" class="anyone" rel="group1"></textarea></label> 
	</li>
	<li>
		<span>Your Phone:</span>
		<label><input type="text" name="phone" id="phone" class="required minlen maxlen" onkeypress="return isNumberKey(event);" maxlength="10" minlength="10"/></label> 
	</li>
	<li>
		<span>Your Gender:</span>
		<label>
			<select name="gender" id="gender" class="required">
				<option vlaue="">Select</option>
				<option vlaue="M">Male</option>
				<option vlaue="F">Female</option>
			</select>
		</label> 
	</li>
	<li>
		<span>Your Father Name:</span>
		<label><input type="text" name="father_name" id="father_name" class="anyone minlen-choice" rel="group2" maxlength="20" minlength="20"/></label> 
	</li>
	<li>
		<span>Your Mother Name:</span>
		<label><input type="text" name="mother_name" id="mother_name" class="anyone minlen-choice" rel="group2" maxlength="20" minlength="20"/></label> 
	</li>
	<li>
	<a href="#" id="loginbtn">Log In</a> 
	</li>  
</ul>
</form>
