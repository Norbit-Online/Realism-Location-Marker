// ==UserScript==
// @name         Realism Location Marker
// @namespace    https://missionchief-unofficial.com
// @version      6.0.0
// @description  Realism location markers in game
// @author       MissionChief Unofficial Team
// @icon         https://rlm.missionchief-unofficial.com/static/assets/images/RLM-Marker.png
// @match        https://www.missionchief.com/*
// @match        https://police.missionchief.com/*
// @match        https://www.missionchief.co.uk/*
// @match        https://police.missionchief.co.uk/*
// @match        https://www.missionchief-australia.com/*
// @match        https://police.missionchief-australia.com/*
// @match        https://www.leitstellenspiel.de/*
// @match        https://polizei.leitstellenspiel.de/*
// @match        https://www.jogo-operador112.com/*
// @match        https://policia.jogo-operador112.com/*
// @match        https://www.centro-de-mando.es/*
// @match        https://www.meldkamerspel.com/*
// @match        https://politie.meldkamerspel.com/*
// @match        https://www.operatorratunkowy.pl/*
// @match        https://policja.operatorratunkowy.pl/*
// @match        https://www.larmcentralen-spelet.se/*
// @match        https://polis.larmcentralen-spelet.se/*
// @match        https://www.operatore112.it/*
// @match        https://polizia.operatore112.it/*
// @match        https://www.operateur112.fr/*
// @match        https://police.operateur112.fr/*
// @match        https://www.dispetcher112.ru/*
// @match        https://www.operacni-stredisko.cz/*
// @match        https://www.112-merkez.com/*
// @match        https://www.dyspetcher101-game.com/*
// @downloadURL  https://github.com/Missionchiefunofficial/Realism-Location-Marker/raw/refs/heads/main/loader.user.js
// @updateURL    https://github.com/Missionchiefunofficial/Realism-Location-Marker/raw/refs/heads/main/loader.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    console.log('RLM V6 Loader starting...');

    // Configuration
    const config = {
        apiBaseUrl: 'https://rlm.missionchief-unofficial.com',
        apiEndpoints: {
            pois: '/api/pois',
            reverseGeocode: '/api/reverse-geocode',
            poiTypes: '/api/poi-types',
            version: '/api/version'
        }
    };

    function loadServerScript() {
        console.log('RLM V6 attempting to load server script...');

        // Add configuration before loading the server script
        window.RLMConfig = config;
        console.log('RLM V6 config set:', config);

        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://rlm.missionchief-unofficial.com/rlm/realism-location-marker.user.js',
            onload: function(response) {
                try {
                    console.log('RLM V6 Server Script loaded, evaluating...');
                    eval(response.responseText);
                    console.log('RLM V6 Server Script evaluated successfully');
                } catch (error) {
                    console.error('RLM V6 Error evaluating Server Script:', error);
                }
            },
            onerror: function(error) {
                console.error('RLM V6 Error loading Server Script:', error);
            }
        });
    }

    // Wait for document to be ready
    if (document.readyState === 'loading') {
        console.log('RLM V6 Document loading, waiting for DOMContentLoaded...');
        document.addEventListener('DOMContentLoaded', loadServerScript);
    } else {
        console.log('RLM V6 Document already loaded, executing immediately...');
        loadServerScript();
    }
})();
