<?php

  header('Content-type: text/html; charset="utf8"');

  $data = array(
    array('uid' => 1, 'uname' => 'zhangsan'),
    array('uid' => 2, 'uname' => 'lisi'),
    array('uid' => 3, 'uname' => 'wangwu'),
    array('uid' => 4, 'uname' => 'zhaoliu'),
    array('uid' => 5, 'uname' => 'haha'),
    array('uid' => 6, 'uname' => 'hehe')
  );

  echo json_encode(
    array(
      'list' => $data,
      'errcode' => 0,
      'success' => true
    )
  );