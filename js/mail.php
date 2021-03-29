<?php

$userName =  $_POST['name'];
$userSecondName = $_POST['secondName'];
$userPhone = $_POST['phone'];
$userFamilyName =  $_POST['familyName'];
$userGoal = trim($_POST['goal']);
$userMail =  trim($_POST['mail']);
$userApp = trim($_POST['app-choice']);
$userComment = trim($_POST['comment']);

$sendto = 'nstyyyyyyyyy@mail.ru';

$subject = trim($_POST['form_name']);

$msg = "Имя: " . $userName . "\n";
$msg .= "Фамилия: " . $userSecondName . "\n";
$msg .= "Отчество: " . $userFamilyName . "\n";
$msg .= "Номер телефона: " . $userPhone . "\n";
$msg .= "Достижение: " . $userGoal . "\n";
$msg .= "Почта: " . $userMail . "\n";
$msg .= "Приложение: " . $userApp . "\n";
$msg .= "Комментарий: " . $userComment . "\n";

mail($sendto, $subject, $msg);
?>

<?php

$userName =  trim($_POST['Name']);
$userSecondName = trim($_POST['secondName']);
$userPhone =  trim($_POST['Phone']);
$userFamilyName =  trim($_POST['familyName']);
$userGoal = trim($_POST['goal']);
$userMail =  trim($_POST['mail']);
$userApp = trim($_POST['app-choice']);
$userComment = trim($_POST['comment']);

$sendto = 'nstyyyyyyyyy@mail.ru';

$subject = trim($_POST['form_name']);

$msg = "Имя: " . $userName . "\n";
$msg .= "Фамилия: " . $userSecondName . "\n";
$msg = "Отчество: " . $userFamilyName . "\n";
$msg .= "Номер телефона: " . $userPhone . "\n";
$msg = "Достижение: " . $userGoal . "\n";
$msg .= "Почта: " . $userMail . "\n";
$msg = "Приложение: " . $userApp . "\n";
$msg .= "Комментарий: " . $userComment . "\n";
$msg .= "";

mail($sendto, $subject, $msg);
?>
