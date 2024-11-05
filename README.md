<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button with Compiled SCSS Styles</title>
    <style>
        /* Compiled CSS */
        body {
            background-color: #f5f5f5;
        }

        body .button {
            background-color: #FF5733;
            color: #FFFFFF;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        body .button:hover {
            background-color: #cc462a;
        }
    </style>
</head>
<body>
    <button class="button" onclick='radix.launchApp("com.cpuid.cpu_z")'>Cpu app Button</button>
</body>
</html>
