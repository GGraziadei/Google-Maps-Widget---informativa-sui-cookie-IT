<?php 
$dirty = false;
foreach(headers_list() as $header) {
    if($dirty) continue; // I already know it needs to be cleaned
    if(preg_match('/Set-Cookie/',$header)) $dirty = true;
}
if($dirty) {
    $phpversion = explode('.',phpversion());
    if($phpversion[1] >= 3) {
        header_remove('Set-Cookie'); // php 5.3
    } else {
        header('Set-Cookie:'); // php 5.2
    }        
}
