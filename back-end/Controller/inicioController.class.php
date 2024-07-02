<?php
	class inicioController
	{
		public function index()
		{
			
			$produtoController = new produtoController();
			$retorno = $produtoController->buscar_produtos();
			require_once "views/menu.php";
		}
	}
?>