<?php

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
	header('Access-Control-Allow-Credentials: true');

	file_put_contents('archivo/probando.txt', 'escribiendo');

	//include 'credenciales-mysql.php';

	/*if(false && $_GET['method'] == "load_news") {
		header("Content-Type: application/json; charset=UTF-8");
		$conn = new mysqli($detalles['servidor'], $detalles['usuario'],$detalles['contrasenia'], $detalles['basededatos']);

		var_dump($conn);die;

		$result = $conn->query("SELECT * FROM usuarios");
		
		$data=array();
		while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
			$row=array();
		   $row['nombre']=addslashes($rs["nombre"]);
		   $row['id']=addslashes($rs["id"]);
		   $row['dni']=addslashes($rs["dni"]);
		   
		   $data[]=$row;
			
		}

		$jsonData=array();
		$jsonData['records']=$data;
	 
		$conn->close();
		echo json_encode($jsonData);
	}*/

	$usuario = array('nombre' => 'Joaquin', 'contrasenia' => 'la-contrasenia');
	

	echo json_encode($usuario);
	/*echo '<pre>';
		print_r($detalles);
	echo '</pre>';*/

?>