<?php 
/***
 * With hidden fields 
 * ***/
if(count($_POST) > 0){
	echo "Form posted";
	echo '<pre>';
	print_r($_POST);
	echo '</pre>';
}

$defaultVal = "test-default-val";
?>
<script src="js/jquery.1.8.2.min.js"></script>
<script src="js/valid.js"></script>
<script type="text/javascript"> 
		$(document).ready(function() {
			var hiddenArr = new Array();
			//hid1 - id of hidden field, gender - id of field who's TEXT needs to go in hidden field          
			//**to pick text 	~text is used
			hiddenArr['hid1~text'] = 'gender';	
			
			//hid2 - id of hidden field, father_name - id of field who's VALUE needs to go in hidden field    
			//**to pick value  	~val is used										
			hiddenArr['hid2~val'] = 'father_name';										
			
			//hid3 - id of hidden field, VALUE DEFINED AS A PHP VARIABLE already in hidden field		  
			//**to pick defualt php value as in hidden field      ~default is used 
			hiddenArr['hid3~default'] = '';												
			validateFrm('frmRegisterHome','registerbtn',hiddenArr);
		});
</script>

<style>
    .red-error{border:1px solid red !important;}
    .spn-error{color:Red;display:none;}
    input[type="text"], input[type="password"], input[type="email"], textarea{padding: 2px 0px;border: 1px solid #CCCCCC;}
</style>

<form method="post" action="signup.php" name="frmRegisterHome" id="frmRegisterHome"> 
	<div>
		<input type="hidden" name="hid1" id="hid1" value="" />
		<input type="hidden" name="hid2" id="hid2" value="" />
		<input type="hidden" name="hid3" id="hid3" value="<?php echo $defaultVal;?>" />
	</div>
<ul>
	<li>
		<span>Your Email ID:</span>
		<label><input name="email_user_actual" type="text" id="email_user_actual" class="required email" /></label> 
	</li>
	<li>
		<span>Your Password:</span>
		<label><input type="password" name="password" id="password" value="" class="required" /></label> 
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
				<option value="Select">Select</option>
				<option value="M">Male</option>
				<option value="F">Female</option>
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
	<a href="#" id="registerbtn">Register</a> 
	</li>  
</ul>
</form>
