<?php
  $dir = dirname(__FILE__);
  include_once ($dir . '/assets/tpl/config.php');
?><!DOCTYPE html>
<html lang="ja">
<head>
  <link rel="stylesheet" href="/assets/css/loading.css" media="all">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title><?php echo SITE_NAME; ?></title>
  <meta charset="utf-8">
  <meta name="description" content="<?php echo SITE_DESCRIPTION; ?>">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="<?php echo SITE_NAME; ?>">
  <meta property="og:title" content="<?php echo SITE_NAME; ?>">
  <meta property="og:description" content="<?php echo SITE_DESCRIPTION; ?>">
  <meta property="og:url" content="<?php echo SITE_URL; ?>">
  <meta property="og:image" content="<?php echo SITE_URL; ?>/ogp.png">

  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="<?php echo SITE_NAME; ?>">
  <meta property="twitter:description" content="<?php echo SITE_DESCRIPTION; ?>">
  <meta property="twitter:image" content="<?php echo SITE_URL; ?>/ogp.png">

  <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.ico">
  <link rel="stylesheet" href="/assets/css/main.css" media="all">
</head>

<body>
<div id="loading" class="active"></div>

<div id="wrapper">
<?php include_once ($dir . '/assets/tpl/header.php'); ?>

  <main id="container">

  </main>

  <?php include_once ($dir . '/assets/tpl/footer.php'); ?>
</div>


<script src="/assets/js/main.js"></script>
</body>
</html>
