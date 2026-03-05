<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $a = $_POST["a"];
        $b = $_POST["b"];
        $operacao = $_POST["operacao"];

        if ($operacao == "Somar") {
            $resultado = $a + $b;
        } elseif ($operacao == "Diminuir") {
            $resultado = $a - $b;
        } elseif ($operacao == "Multiplicar") {
            $resultado = $a * $b;
        } elseif ($operacao == "Dividir") {
            $resultado = $a / $b;
        }
}
      //  echo 'Resultado: ' . $soma;
    //  http://localhost/daw/soma.php?a=2&b=3
?>
<!DOCTYPE html>
<html>
<body>
<h1><?php echo 'Minha Calculadora!';?></h1>

<form method='POST' action='calculadora.php'>
    a:<input type=text name='a'><br>
    b:<input type=text name='b'>
    Escolha a operação que deseja realizar.
    <input type="submit" name="operacao" value="Somar">
    <input type="submit" name="operacao" value="Diminuir">
    <input type="submit" name="operacao" value="Multiplicar">
    <input type="submit" name="operacao" value="Dividir">
    <br><br>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo 'Resultados: ' . $operacao; 
}
?>
    
</body>
</html>