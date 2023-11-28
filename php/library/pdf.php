<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

require('fpdf/fpdf.php');

//establece la fecha en la que se maneja la página
date_default_timezone_set("America/Mexico_City");

//fecha en español
$diasSemana = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

$fechaActual = $diasSemana[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') ;

// Crear un nuevo PDF con FPDF
//crear archivo pdf
$pdf = new FPDF('P', 'mm', 'A4');
$pdf -> AddPage();
$pdf -> SetTopMargin(25);
$pdf -> SetLeftMargin(15);
$pdf -> SetRightMargin(15);

//agregar imagen pdf
$pdf -> Image('logo.png', 172, 12, 11);
//agregar titulo
$pdf -> SetFont('Arial', 'B', 26);
$pdf -> SetTextColor(255, 0, 0);
$pdf -> Cell(0, 15, 'Componentes PC ', 0, 1, 'C');
$pdf -> SetTextColor(0, 0, 0);
//$pdf -> Cell(0, 15, '       Bicicletas y Accesorios RVL', 0, 1);
$pdf -> SetFont('Arial', 'B', 18);
$pdf -> Ln(0.2);
$pdf -> Cell(0, 15, 'Componentes PC agradece su compra', 0, 1, 'C');
$pdf -> Ln();

//agregar texto
$pdf -> SetFont('Arial', '', 14);
$pdf -> Cell(0, 7, $fechaActual, 0, 1, 'L');
$pdf -> Cell(0, 7, utf8_decode('Recibo de compra de '.$nombre), 0, 0, 'L');
$pdf -> Ln();
$pdf -> Ln();

//agregar tablas y productos
$pdf -> SetFont('Arial', 'B', 14);
$pdf -> Cell(30, 10, 'Cantidad', 1, 0, 'C');
$pdf -> Cell(105, 10, 'Producto', 1, 0, 'C');
$pdf -> Cell(42, 10, 'Precio', 1, 0,'C');
$pdf -> Ln();
$pdf -> SetFont('Arial', '', 14);
$pdf -> Cell(30, 10, '1', 1, 0, 'C');
$pdf -> Cell(105, 10, utf8_decode('    Hola2 Hola2 Hola2 Hola2 Hola2 Hola2'), 1, 0);
$pdf -> Cell(42, 10, '$Esta caro 5000', 1, 0, 'C');
$pdf -> Ln();

//columnas vacías
for($i = 0; $i < 3; $i++){
  $pdf -> Cell(30, 10, '', 1, 0, 'C');
  $pdf -> Cell(105, 10, utf8_decode(''), 1, 0);
  $pdf -> Cell(42, 10, '', 1, 0, 'C');
  $pdf -> Ln();
}

//pie de página
$pdf -> SetY(260);
$pdf -> SetFont('Arial', 'BI', 12);
$pdf -> SetTextColor(65, 106, 150);
$pdf -> Cell(0, 10, utf8_decode('C. Nueva Escocia 1885, 44630 Guadalajara, Jal.  Teléfono: 33-3641-3250'), 0, 0, 'C');
$pdf -> Ln(5);
$pdf -> Cell(0, 10, utf8_decode('© 2023 "Componentes PC"'), 0, 0, 'C');
$pdf -> SetTextColor(0, 0, 0);
  
$fechaYHora = date("d-m-y-His");
$nombreArchivo = '-' . $fechaYHora . '.pdf';
//salida de archivo en carpeta actual y nombre
$pdf -> Output('F', $nombreArchivo);

$mail = new PHPMailer(true);

try {
    //Configuraciones del Servidor
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;

    $mail->Username   = 'riostorresGamer@gmail.com';
    $mail->Password   = 'dfbyzrwikkenkgsf';

    $mail->SMTPSecure = 'TLS';
    $mail->Port       = 587;
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    $mail->setFrom('riostorresGamer@gmail.com', 'Componentes PC');
    $mail->addAddress('a22110096@ceti.mx');
    $mail->addAttachment($nombreArchivo);

    $mail->isHTML(true);
    $mail->Subject = 'Recibo de Compra';
    $mail->Body = 'Agradecemos tu compra en Componentes PC, a continuación tienes tu recibo de compra ';

    $mail->send();
} catch (Exception $e) {
    echo "No se pudo enviar el correo. Correo Error: {$mail->ErrorInfo}";
}