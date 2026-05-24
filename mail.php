<?php
// mail.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// PHPMailer 불러오기
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

// 폼 데이터 받기
$name    = $_POST['name'] ?? '';
$email   = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// PHPMailer 객체 생성
$mail = new PHPMailer(true);

try {

    // =========================
    // SMTP 설정
    // =========================
$mail->isSMTP();

$mail->Host       = 'smtp.naver.com';
$mail->SMTPAuth   = true;

$mail->Username   = 'natsu93@naver.com';
$mail->Password   = '985CLX42XN6M';

$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port       = 465;

    // 한글 설정
    $mail->CharSet = 'UTF-8';

    // 보내는 사람
    $mail->setFrom(
        'natsu93@naver.com',
        '홈페이지 문의'
    );

    // 받는 사람
    $mail->addAddress('natsu93@naver.com');

    // 사용자가 입력한 이메일로 답장 가능하게
    $mail->addReplyTo($email, $name);

    // 메일 제목
    $mail->Subject = "[홈페이지 문의] {$name}님께서 문의하셨습니다.";

    // 메일 내용
    $mail->Body = "
이름 : {$name}

이메일 : {$email}

문의내용 :
{$message}
";

    // 메일 전송
    $mail->send();

    echo "
    <script>
        alert('메일이 성공적으로 전송되었습니다.');
        location.href='main.html';
    </script>
    ";

} catch (Exception $e) {
    echo "<h2>메일 전송 실패</h2>";
    echo "<p><b>에러:</b> " . $mail->ErrorInfo . "</p>";

    // 디버깅용
    echo $mail->ErrorInfo;
}
?>