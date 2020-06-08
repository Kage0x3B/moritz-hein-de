# Moritz-Hein.de [![Build Status](https://ci.syscy.de/buildStatus/icon?job=Moritz-Hein.de)](https://ci.syscy.de/job/Moritz-Hein.de/)

This repository contains my personal website at https://Moritz-Hein.de.

As it currently consists of only a single page (besides the small imprint page), instead of utilizing a bigger library like React for example, I decided on using a simple Webpack setup, building the finished HTML5 page.
The webpack setup uses a modified version of [lifenautjoe/webpack-starter-basic](https://github.com/lifenautjoe/webpack-starter-basic) to add support for
* minimizing the output HTML page
* a second page
* webp images, as an alternative to jpeg if the browser supports it (better quality and slightly lower file size)
