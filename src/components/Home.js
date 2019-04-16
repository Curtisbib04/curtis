import React, { Component } from 'react';

function Home() {
  return(
    <div class="side">
      <ul class="menu">
        <li class="menu__list"><a href="#">Пункт 1</a>
          <ul class="menu__drop">
            <li><a href="#">hello</a></li>
            <li><a href="#">Подпункт 2</a></li>
            <li><a href="#">Подпункт 3</a></li>
            <li><a href="#">Подпункт 4</a></li>
            <li><a href="#">Подпункт 5</a></li>
          </ul>
        </li>
        <li><a href="#">Пункт 2</a></li>
        <li class="menu__list"><a href="#">Пункт 3</a>
          <ul class="menu__drop">
            <li><a href="#">Подпункт 1</a></li>
            <li><a href="#">Подпункт 2</a></li>
            <li><a href="#">Подпункт 3</a></li>
            <li><a href="#">Подпункт 4</a></li>
            <li><a href="#">Подпункт 5</a></li>
          </ul>
        </li>
        <li><a href="#">Пункт 4</a></li>
        <li class="menu__list"><a href="#">Пункт 5</a>
          <ul class="menu__drop">
            <li><a href="#">Подпункт 1</a></li>
            <li><a href="#">Подпункт 2</a></li>
            <li><a href="#">Подпункт 3</a></li>
            <li><a href="#">Подпункт 4</a></li>
            <li><a href="#">Подпункт 5</a></li>
          </ul>
        </li>
      </ul>
    </div>﻿
  );
}

export default Home;
