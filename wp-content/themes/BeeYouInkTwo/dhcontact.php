<?php
session_start();


$firstname = $_POST['firstName'];
$lastname = $_POST['lastname'];
$phone = $_POST['pNumber'];
$email = $_POST['email'];
$comment = $_POST['comments'];

$connection = mysqli_connect('localhost','helvin','dora0411','mrrymer');

//$connection = mysqli_connect('localhost','helvin','dora0411','helvin');

$query = "insert into maniacink(first_name, last_name, phone, email, comments) values('$firstname', '$lastname', '$phone', '$email', '$comment');";

mysqli_query($connection,$query);
mysqli_close($connection);

$to = "Melii@ManiacInk.com, Helvin@HelvinRymer.com,Meliisart03@gmail.com
"; // this is your Email address
$from = $email; // this is the sender's Email address
$subject = "Form submission";
$subject2 = "Thank you!";
$message = "$firstname $lastname sent the following details:
Email: $email
Phone: $phone
Comments: $comment";

$message2 = "Thank you for your email. I'll be in touch as soon as possible."
."\n"."
Melii
ManiacInk.com
Melii@ManiacInk.com";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender

// header('location:index.php');
?>
