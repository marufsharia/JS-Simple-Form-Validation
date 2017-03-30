<html>
    <body>
        <?php
        if (!empty($_REQUEST["firstName"]) && !empty($_REQUEST["lastName"]) && !empty($_REQUEST["phoneNO"]) && !empty($_REQUEST["emailId"]) && !empty($_REQUEST["pass"]) && !empty($_REQUEST["firstName"])) {
            echo"<center>";
            echo"<h1>Information</h1>";
            echo"<hr>";
            echo "<table border=1>";
            echo "<th>Firsr Name</th>";
            echo "<th>Last Name</th>";
            echo "<th>Phone No.</th>";
            echo "<th>E-mail Id</th>";
            echo "<th>Password</th>";
            echo "<th>Confirm Password</th>";
            echo"<tr>";
            echo"<td>";
            echo $_POST["firstName"];
            echo"</td>";
            echo"<td>";
            echo $_POST["lastName"];
            echo"</td>";
            echo"<td>";
            echo $_POST["phoneNO"];
            echo"</td>";
            echo"<td>";
            echo $_POST["emailId"];
            echo"</td>";
            echo"<td>";
            echo $_POST["pass"];
            echo"</td>";
            echo"<td>";
            echo $_POST["conPass"];
            echo"</td>";
            echo"</tr>";
            echo "</table>";
            echo"<center>";
        }
        else {
            header('Location:index.html');

        }

        ?>
    </body>
</html>