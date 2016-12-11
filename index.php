<?php
require __DIR__ . '/vendor/autoload.php';

use Nacmartin\PhpExecJs\PhpExecJs;

$pages = json_encode([
  'home' => [
    'title' => 'Homepage',
    'body' => 'Welcome to the homepage of this website.'
  ],
  'about' => [
    'title' => 'About Us',
    'body' => 'My name is Boyd and this is being server side rendered!'
  ],
  'contact' => [
    'title' => 'Contact',
    'body' => 'Want to contact us? Use the form down below!'
  ]
]);

$server_props = json_encode([
  'currentPage' => 'about',
  'pages' => $pages,
]);

function renderReact($sanitized_props) {
  $phpexecjs = new PhpExecJs();

  $server_bundle = file_get_contents('./build/server.js');
  $server_render_code = <<<JS
(function() {
  return LightSpeedServerRenderer.render($sanitized_props);
})();
JS;

  return $phpexecjs->evalJs($server_bundle . ' ' . $server_render_code);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React render</title>
</head>
<body>
  <div id="app"><?= renderReact($server_props); ?></div>

  <script type="text/javascript">
    window.__REACT_INITIAL_PROPS = <?= $server_props ?>;
  </script>

  <script src="./build/client.js"></script>
</body>
</html>
