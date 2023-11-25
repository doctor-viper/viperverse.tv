<?php

    // Array of various fake NPM packages
    $vipos_packages = array(
        "steak-&-eggs v2.86",
        "rock-n-roll_phd v3.14",
        "cigar v1.0",
        "cowoboy-hat v6.6.6",
        "movies v1.2.3",
        "viper-guide v3.7",
        "sfx_pkg v8.6.7"
    );

    // Gets a random amount of packages
    function get_random_packages($num = 3) {
        global $vipos_packages;
        shuffle($vipos_packages);
        return array_slice($vipos_packages, 0, $num);
    }

?>