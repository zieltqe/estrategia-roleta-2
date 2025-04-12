<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Roleta Estratégica</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Roleta Estratégica</h1>

  <input type="number" id="numeroInput" placeholder="Digite o número de 0 a 36" />
  <br>
  <button onclick="registrarNumero()">Registrar</button>
  <button onclick="limparDados()">Limpar</button>

  <div id="resultado"></div>
  <ul id="listaNumeros"></ul>
  <div id="repetidos"></div>
  <div id="sequenciasRepetidas"></div>

  <script src="script.js"></script>
</body>
</html>
