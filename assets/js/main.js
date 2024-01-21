/*=========================================================
　　　　　Misc Functions
=======================================================*/
const scrollBarHandler = function (selector) {
    this.$el = $(selector);

    // always scroll down on every update
    if (selector === '.msg_contents') {
        $('.msg_contents').mCustomScrollbar('scrollTo', 'bottom');
    }

    this.$el.is(':hidden') ? this.appendScrollBar() : this.dynamicScrollBar();
};

scrollBarHandler.prototype.dynamicScrollBar = function () {
    this.$el.get(0).scrollHeight > this.$el.get(0).clientHeight && this.appendScrollBar();
};

scrollBarHandler.prototype.appendScrollBar = function () {
    const commonOptions = {
        scrollInertia: 0,
        mouseWheelPixels: 20,
        autoHideScrollbar: false,
        advanced: {
            updateOnContentResize: true,
            autoScrollOnFocus: true,
        },
    };

    // if target is message contents, start from bottom
    if (this.$el.selector === '.msg_contents') {
        commonOptions.setTop = '-9999999px';
    }

    // apply scrollbar
    this.$el.mCustomScrollbar(commonOptions);
};

const normTextOutput = function (textType) {
    return normTextData[textType];
};

const updateTextOutput = function (textType, index) {
    return updateTextData[textType][index];
};

const msgLogTextOutput = function (textType) {
    return msgLogTextData[textType];
};

const dialogTextOutput = function (textType) {
    return dialogTextData[textType];
};

const launcherMovingHandler = function () {
    $('.move')
        .hover(function () {
            // when the mouse button is hovering and pressed within the area
            $('.movable_overlay').fadeIn(200), enableDrag(true);
        })
        .mouseout(function () {
            // when the mouse button is released within the area
            $('.movable_overlay').fadeOut(200), enableDrag(false);
        });
};

const getLastSelectedSrvIndex = function () {
    try {
        return window.external.getLastSelectedSrvIndex();
    } catch (err) {
        return 0;
    }
};

const setLastSelectedSrvIndex = function (index) {
    try {
        window.external.setLastSelectedSrvIndex(index);
    } catch (err) {}
};

const getServerList = function () {
    try {
        return window.external.getServerList();
    } catch (err) {
        SrvList = false;
        return "<?xml version='1.0' encoding='UTF-8'><server_groups><group idx='1' nam='Rain1'/><group idx='2' nam='Rain2'/><group idx='3' nam='Rain3'/></server_groups>";
    }
};

const minimizeWindow = function () {
    try {
        soundMode && playSound('IDR_WAV_OK');
        window.external.minimizeWindow();
    } catch (err) {}
};

const closeWindow = function (setTime) {
    try {
        soundMode && playSound('IDR_WAV_OK');
        setTimeout(function () {
            window.external.closeWindow();
        }, setTime || 0);
    } catch (err) {}
};

const openPreferences = function () {
    try {
        soundMode && playSound('IDR_WAV_OK');
        window.external.openPreferences();
    } catch (err) {}
};

const openBrowser = function (url) {
    try {
        soundMode && playSound('IDR_WAV_OK');
        window.external.openBrowser(url);
    } catch (err) {}
};

const enableDrag = function (boolean) {
    try {
        window.external.enableDrag(boolean);
    } catch (err) {
        return false;
    }
};

const loginRain = function (username, pass1, pass2) {
    try {
        return window.external.loginRain(username, pass1, pass2);
    } catch (err) {
        return false;
    }
};

const getAuthResult = function () {
    try {
        return window.external.getAuthResult();
    } catch (err) {
        return 'AUTH_NULL';
    }
};

const getSignResult = function () {
    try {
        return window.external.getSignResult();
    } catch (err) {
        return 'SIGN_EFAILED';
    }
};

const getTotalPctOnUpdate = function () {
    try {
        return window.external.getTotalPctOnUpdate();
    } catch (err) {
        return 0;
    }
};

const getFilePctOnUpdate = function () {
    try {
        return window.external.getFilePctOnUpdate();
    } catch (err) {
        return 0;
    }
};

const getUpdateStatus = function () {
    try {
        return String(window.external.getUpdateStatus());
    } catch (err) {
        return 'UM_UPDATE_NG';
    }
};

const getLauncherReturnCode = function () {
    try {
        return String(window.external.getLauncherReturnCode());
    } catch (err) {
        return 'ERR';
    }
};

const restartGame = function () {
    try {
        soundMode && playSound('IDR_WAV_OK');
        window.external.restartGame();
    } catch (err) {}
};

const exitLauncher = function () {
    try {
        window.external.exitLauncher();
    } catch (err) {}
};

const getAllCharData = function () {
    try {
        return window.external.getAllCharData();
    } catch (err) {}
};

const selectCharacter = function (hid, hid) {
    try {
        window.external.selectCharacter(hid, hid);
    } catch (err) {}
};

const playSound = function (soundType) {
    try {
        window.external.playSound(soundType);
    } catch (err) {}
};

const disableElement = function (elm, fadeTime) {
    $(elm).fadeTo(fadeTime, 0.6);
    $(elm).css('pointer-events', 'none');
};

const enableElement = function (elm, fadeTime) {
    $(elm).fadeTo(fadeTime, 1);
    $(elm).css('pointer-events', 'auto');
};

const overrideAnker = function (selector) {
    $(selector)
        .find('a')
        .each(function () {
            const originalURL = $(this).attr('href');
            $(this).attr('href', "javascript:openBrowser('" + originalURL + "');");
        });
};

const getQueryParams = function (key) {
    const uri = new URI(window.location);
    const params = uri.query(true);
    return params[key];
};

const getCookieValue = function (key) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const cookiePair = cookie.split('=');

        if (cookiePair[0].trim() === key.trim()) {
            const cookieValue = decodeURIComponent(cookiePair[1]);
            return cookieValue;
        }
    }

    return '';
};

const initNormTextData = function () {
    $('title').text(normTextOutput('title'));
    $('.movable_overlay_text').html(normTextOutput('movableOlay'));
    $('.connecting_overlay p').text(normTextOutput('connectingOlay'));
    $('.game_start_overlay p').text(normTextOutput('gameStartOlay'));
    $('.launcher_title').html(normTextOutput('launcherTitle'));
    $(logoutBtn).text(normTextOutput('logoutBtn'));
    $('.auth_username').prev().text(normTextOutput('labelUsername'));
    $(inputUsername).attr('placeholder', normTextOutput('labelUsername'));
    $('.auth_password').prev().text(normTextOutput('labelPassword'));
    $(inputPassword).attr('placeholder', normTextOutput('labelPassword'));
    $('.server_selector_group label').text(normTextOutput('labelSrvSel'));
    $(loginBtn).attr('data-btn', normTextOutput('loginBtnText'));
    $('.auto_login').text(normTextOutput('rememberMeBtn'));
    $('.save_username').text(normTextOutput('saveUsernameBtn'));
    $(forgotPassword).text(normTextOutput('forgetCredsBtn'));
    $('.btn_preferences').text(normTextOutput('preferencesBtn'));
    $('.btn_start').attr('data-btn', normTextOutput('startGameBtnText'));
    $('.disclaimer').text(normTextOutput('disclaimer'));
};

const initAsideMenu = function () {
    const menuData = asideMenuData;

    Object.keys(menuData).forEach(function (className) {
        const menuItem = menuData[className];
        const anchor = $('<a>', {
            class: 'menu_contents_anchor sound_on ' + className,
            href: menuItem.url || '#',
            style: menuItem.url ? '' : 'cursor: not-allowed',
        });

        if (className === 'discord') {
            anchor.append('<i class="fa-brands fa-discord discord"></i>').append(menuItem.name);
        } else {
            const iconSpan = $('<span>', {
                class: 'material-symbols-outlined',
                text: menuItem.iconName,
            });

            anchor.append(iconSpan).append(menuItem.name);
        }

        $('.launcher_menu').append(anchor);
    });
};

const initSoundMode = function () {
    !soundMode &&
        ($(
            '.minimize, .close, .lang_sel, .auto_login, .save_username, .btn_preferences, .scroll, .menu_contents_anchor, ' +
                serverSelBtn +
                ', ' +
                forgotPassword +
                ', ' +
                srvListEachItem +
                ', ' +
                logoutBtn +
                ', ' +
                loginBtn +
                ', ' +
                charAddButton +
                ', ' +
                charDelButton +
                ', ' +
                ' .btn_start, .hide_password'
        ).removeClass('sound_on'),
        $('.sound_handle').html('<span class="material-symbols-outlined">volume_off</span>'));
};

const apiUsersAction = function (actionType, obj) {
    $.ajax({
        url: 'https://api.rain-server.com/users/' + actionType,
        type: 'POST',
        data: obj,
        contentType: 'application/json',
        dataType: 'json',
    })
        .done(function (data) {
            switch (data.message) {
                case 'AUTH_SUCCESS': {
                    const loginSuccess = autoLogin
                        ? loginRain(autoLoginUsername, autoLoginPassword, autoLoginPassword)
                        : loginRain($(inputUsername).val(), $(inputPassword).val(), $(inputPassword).val());

                    if (loginSuccess) {
                        // set login user and characters data
                        loginUserData = data.user;
                        loginUsersCharData = data.characters;

                        if (autoLogin) {
                            $('.loading_text').text('Logging In...');

                            loginPollingTimerId = setInterval(startLoginPolling, 1000);
                        } else {
                            addLogMsg(msgLogTextOutput('authSuccess'), 'g', true);

                            loginPollingTimerId = setInterval(startLoginPolling, 1000);
                        }
                    } else {
                        autoLogin ? failedStartUpLauncher(msgLogTextOutput('SIGN_EAPP')) : onAuthError(msgLogTextOutput('SIGN_EAPP'), 'r');
                    }

                    break;
                }

                case 'ADD_CHARACTER': {
                    showAddCharDoneDialog();

                    break;
                }

                case 'DELETE_CHARACTER': {
                    showDelCharDoneDialog();

                    break;
                }

                default:
                    onAuthError(msgLogTextOutput('SIGN_EILLEGAL'), 'r');
            }
        })
        .fail(function (xhr) {
            const res = JSON.parse(xhr.responseText);

            switch (res.message) {
                case 'PARAMS_UNDEFINED': {
                    autoLogin ? failedStartUpLauncher(msgLogTextOutput('paramsUndefined')) : onAuthError(msgLogTextOutput('paramsUndefined'), 'r');

                    break;
                }

                case 'SUSPENDED_USER': {
                    const data = res.suspendedUser;

                    autoLogin
                        ? ((document.cookie = 'autoLoginUserKey=; max-age=0'), failedStartUpLauncher(msgLogTextOutput('suspendedNotice')))
                        : (data.permanent ? onAuthError(msgLogTextOutput('permSuspendedAcc'), 'r') : onAuthError(msgLogTextOutput('suspendedAcc'), 'r'),
                          suspendedUserDialog(data.permanent, data.until_at_date_time, data.reason));

                    break;
                }

                case 'INC_PASSWORD': {
                    autoLogin ? ((document.cookie = 'autoLoginUserKey=; max-age=0'), failedStartUpLauncher(msgLogTextOutput('SIGN_EPASS'))) : onAuthError(msgLogTextOutput('SIGN_EPASS'));

                    break;
                }

                case 'NO_USER': {
                    autoLogin
                        ? ((document.cookie = 'autoLoginUserKey=; max-age=0'), failedStartUpLauncher(msgLogTextOutput('noExistingUser')))
                        : (showRegisterDialog(), onAuthError(msgLogTextOutput('noExistingUser')));

                    break;
                }

                case 'NO_CHARACTERS': {
                    autoLogin ? ((document.cookie = 'autoLoginUserKey=; max-age=0'), failedStartUpLauncher(msgLogTextOutput('noCharacters'))) : onAuthError(msgLogTextOutput('noCharacters'));

                    break;
                }

                case 'NO_LINKED_USER': {
                    autoLogin
                        ? ((document.cookie = 'autoLoginUserKey=; max-age=0'), failedStartUpLauncher(msgLogTextOutput('noLinkedAcc')))
                        : (showLinkDiscordDialog(), onAuthError(msgLogTextOutput('noLinkedAcc')));

                    break;
                }

                case 'NO_REQUIRED_DATA': {
                    addCharacterMode
                        ? showFailAddCharErrNormDialog()
                        : deleteCharacterMode
                        ? showFailDelCharErrNormDialog()
                        : autoLogin
                        ? failedStartUpLauncher(msgLogTextOutput('noRequiredData'))
                        : onAuthError(msgLogTextOutput('noRequiredData'), 'r');

                    break;
                }

                case 'INVALID_TYPE': {
                    autoLogin ? failedStartUpLauncher(msgLogTextOutput('invalidReqType')) : onAuthError(msgLogTextOutput('invalidReqType'));

                    break;
                }

                case 'UNEXPECTED': {
                    addCharacterMode
                        ? showFailAddCharErrNormDialog()
                        : deleteCharacterMode
                        ? showFailDelCharErrNormDialog()
                        : autoLogin
                        ? failedStartUpLauncher(msgLogTextOutput('unexpected'))
                        : onAuthError(msgLogTextOutput('unexpected'), 'r');

                    break;
                }

                default:
                    addCharacterMode
                        ? showFailAddCharErrNormDialog()
                        : deleteCharacterMode
                        ? showFailDelCharErrNormDialog()
                        : autoLogin
                        ? failedStartUpLauncher(res.message ? res.message : msgLogTextOutput('failedAccessApi'))
                        : onAuthError(msgLogTextOutput('failedAccessApi'), 'r');
            }
        });
};

const checkClientUpdate = function (currVer) {
    if (currVer !== clientVer) {
        // need to update
        needsUpdateClient = true;
    }
};

const toggleSound = function () {
    if (soundMode) {
        localStorage.setItem('SoundMode', 'false');

        $(
            '.minimize, .close, .lang_sel, .auto_login, .save_username, .btn_preferences, .scroll, .menu_contents_anchor, ' +
                serverSelBtn +
                ', ' +
                forgotPassword +
                ', ' +
                srvListEachItem +
                ', ' +
                logoutBtn +
                ', ' +
                loginBtn +
                ', ' +
                charAddButton +
                ', ' +
                charDelButton +
                ', ' +
                ' .btn_start, .bnr, .hide_password'
        ).removeClass('sound_on');

        $('.sound_handle').html('<span class="material-symbols-outlined">volume_off</span>');
        soundMode = false;
    } else {
        localStorage.setItem('SoundMode', 'true');

        $(
            '.minimize, .close, .lang_sel, .auto_login, .save_username, .btn_preferences, .scroll, .menu_contents_anchor, ' +
                serverSelBtn +
                ', ' +
                forgotPassword +
                ', ' +
                srvListEachItem +
                ', ' +
                logoutBtn +
                ', ' +
                loginBtn +
                ', ' +
                charAddButton +
                ', ' +
                charDelButton +
                ', ' +
                ' .btn_start, .bnr, .hide_password'
        ).addClass('sound_on');

        $('.sound_handle').html('<span class="material-symbols-outlined">volume_up</span>');
        soundMode = true;
    }
};

const objectEntries = function (obj) {
    let ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i);
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];
    return resArray;
};

const toggleHidePass = function () {
    const passInput = document.getElementById('password');
    const eyeBtn = document.getElementById('eye_btn');

    if (passInput.type === 'text') {
        // hide password
        passInput.type = 'password';
        eyeBtn.textContent = 'visibility_off';
    } else {
        // show password
        passInput.type = 'text';
        eyeBtn.textContent = 'visibility';
    }
};

/*=========================================================
　　　　　Launcher Startup Functions
=======================================================*/
const infoList = '.info_list',
    launcherBanner = '.launcher_bnr',
    availableLanguages = ['ja', 'en'];

let SrvList = true,
    userTimeZone,
    debugMode = false,
    emergMode = false,
    launcherLanguage,
    clientVer,
    forcedClientUpdate,
    swiper,
    normTextData = {},
    asideMenuData = {},
    updateTextData = {},
    msgLogTextData = {},
    dialogTextData = {},
    languageList = {},
    importantInfoData = {},
    defectsAndTroublesInfoData = {},
    managementAndServiceInfoData = {},
    inGameEventsInfoData = {},
    updatesAndMaintenanceInfoData = {},
    needsUpdateClient = false,
    autoLoginUsername,
    autoLoginPassword,
    autoLoginExpiration;

const failedStartUpLauncher = function (errText) {
    $('.loading_bar').remove();
    $('.loading_text').css('color', '#df1528');
    $('.loading_text').text(errText);
    closeWindow(5000);
};

const initUserLocale = function () {
    userTimeZone = encodeURIComponent(moment.tz.guess());

    if (!localStorage.getItem('rainLauncherLanguage')) {
        // default language is taken from the user's system locale
        const agent = navigator.userAgent;
        let lang;

        if (agent.indexOf('MSIE ') > -1 || agent.indexOf('Trident/') > -1) {
            // internet explorer
            const locale = window.navigator.language;
            lang = locale.substring(0, locale.indexOf('-'));
        } else {
            // other browsers
            lang = window.navigator.language;
        }

        return availableLanguages.indexOf(lang) === -1 ? 'en' : lang;
    } else {
        // if the language is manually selected, it is used first.
        return localStorage.getItem('rainLauncherLanguage');
    }
};

const getTextData = function () {
    // get user's language
    launcherLanguage = initUserLocale();

    // set html lang attribute
    document.documentElement.setAttribute('lang', launcherLanguage);

    $.ajax({
        url: '/assets/i18n/' + launcherLanguage + '.yml',
        type: 'GET',
        cache: false,
    }).done(function (data) {
        // get text data in json
        const jsonData = YAML.parse(data);
        normTextData = jsonData['normTextData'];
        asideMenuData = jsonData['asideMenuData'];
        updateTextData = jsonData['updateTextData'];
        msgLogTextData = jsonData['msgLogTextData'];
        dialogTextData = jsonData['dialogTextData'];
        languageList = jsonData['languageList'];

        setUpLauncherData();
    });
};

const setUpLauncherData = function () {
    // set sound mode
    soundMode = localStorage.getItem('SoundMode') === 'true' || localStorage.getItem('SoundMode') === null;

    // check server list
    /* getServerList();
    if (!SrvList) {
        failedStartUpLauncher(msgLogTextOutput('failedAccessApi'));
        return false;
    } */

    // hide unnecessary elms
    $(charSelBox).hide();
    $(maintenanceBox).hide();
    $(updateBox).hide();

    // set window control buttons
    $('.win_ctrls').append(
        '<button class="lang_sel sound_on" onclick="showLangSelectDialog()"><span class="material-symbols-outlined">public</span></button><button class="sound_handle" onclick="toggleSound();"><span class="material-symbols-outlined">volume_up</span></button><button class="move"><span class="material-symbols-outlined">drag_pan</span></button><button class="minimize sound_on" onclick="minimizeWindow();"><span class="material-symbols-outlined">remove</span></button><button class="close sound_on" onclick="closeWindow();"><span class="material-symbols-outlined">close</span></button>'
    );

    // get and set launcher system data
    $.ajax({
        url: 'https://api.rain-server.com/setup-launcher/' + launcherLanguage + '/' + userTimeZone,
        type: 'GET',
        dataType: 'json',
        accepts: { json: 'application/json' },
        cache: false,
    })
        .done(function (data) {
            const launcherSystemData = data.launcherSystem;
            const launcherBannerData = data.launcherBanner;
            const informationData = data.allInformationData;

            // add loaders
            $(launcherBanner).append('<div class="bnr_getting_loader"></div>');
            $(infoList).append(normTextOutput('gettingInfo'));
            $(infoList).append('<div class="info_getting_loader"></div>');

            /* launcher system
            ====================================================*/
            debugMode = launcherSystemData.debug;
            maintenanceData = { RainJP: launcherSystemData.RainJP, RainUS: launcherSystemData.RainUS, RainEU: launcherSystemData.RainEU, RainDebug: false };
            updateEnabled = launcherSystemData.update;
            clientVer = launcherSystemData.client_data[0];
            forcedClientUpdate = launcherSystemData.client_data[1];

            /* launcher banner
            ====================================================*/
            let bnrLiElm;
            launcherBannerData.forEach(function (bnr) {
                const siteURL = !bnr.bnr_url ? '#' : bnr.bnr_url;
                const imgSource = launcherLanguage === 'ja' ? bnr.ja_img_src : bnr.en_img_src;
                const bnrStyle = !bnr.bnr_url ? 'cursor: not-allowed' : 'cursor: pointer';

                bnrLiElm = $('<li>', {
                    class: 'bnr ' + (soundMode && 'sound_on'),
                    html: '<a href="' + siteURL + '"><img src="' + imgSource + '" style="' + bnrStyle + '" alt="' + bnr.bnr_name + '" /></a>',
                });
                $(launcherBanner).append(bnrLiElm);
            });

            // after getting info, hide loader
            $('.bnr_getting_loader').remove();

            // loading bnr
            $(launcherBanner).slick({
                fade: true,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 800,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                draggable: false,
            });

            /* information
            ====================================================*/
            const infoData = {
                important: { name: normTextOutput('important'), data: informationData[0] },
                defects: { name: normTextOutput('defects'), data: informationData[1] },
                management: { name: normTextOutput('management'), data: informationData[2] },
                event: { name: normTextOutput('event'), data: informationData[3] },
                update: { name: normTextOutput('update'), data: informationData[4] },
            };

            let infoUlElm;
            let infoLiElm;
            Object.keys(infoData).forEach(function (infoType) {
                infoUlElm = $('<ul>', {
                    class: 'info_list_item ' + infoType,
                    html: '<div class="info_title">' + infoData[infoType].name + '</div><ul class="info_list_contents"></ul>',
                });
                $(infoList).append(infoUlElm);
                infoData[infoType].data.length === 0 && $('.' + infoType + ' .info_list_contents').append(normTextOutput('noInfoFound'));

                Object.keys(infoData[infoType].data).forEach(function (dataIndex) {
                    infoLiElm = $(
                        '<li class="info_list_contents_item"><span class="date">' +
                            infoData[infoType].data[dataIndex].date_time +
                            '</span><p class="info_list_contents_text"><a href="' +
                            infoData[infoType].data[dataIndex].url +
                            '">' +
                            infoData[infoType].data[dataIndex].title +
                            '</a></p>' +
                            (infoData[infoType].data[dataIndex].is_new_info ? '<span class="new_mark"></span>' : '') +
                            '</li>'
                    );
                    $('.' + infoType + ' .info_list_contents').append(infoLiElm);
                });
            });

            $('.launcher_footer').append(normTextOutput('timeZone') + informationData[0][0].timezone_name + '</p>');

            // after getting info, hide loader
            $('.info_getting').remove();
            $('.info_getting_loader').remove();

            // enable scrolling
            new scrollBarHandler(infoList);

            getAutoLoginData();
        })
        .fail(function (xhr) {
            if (emergMode) {
                /* launcher system
                ====================================================*/
                debugMode = true;
                maintenanceData = { RainJP: false, RainUS: false, RainEU: false, RainDebug: false };
                clientVer = 'N/A';
                forcedClientUpdate = 'not_force';

                /* launcher banner
                ====================================================*/
                $('.bnr_getting_loader').remove();
                $(launcherBanner).append(normTextOutput('failedGetBnr'));

                /* information
                ====================================================*/
                $('.info_getting').remove();
                $('.info_getting_loader').remove();
                $(infoList).append(normTextOutput('failedGetInfo'));

                getAutoLoginData();
            } else {
                switch (xhr.responseText) {
                    case 'PARAMS_UNDEFINED': {
                        failedStartUpLauncher(msgLogTextOutput('paramsUndefined'));

                        break;
                    }

                    case 'NO_SYSTEM_DATA': {
                        failedStartUpLauncher(msgLogTextOutput('noLauncherSysData'));

                        break;
                    }

                    case 'NO_BANNER_DATA': {
                        failedStartUpLauncher(msgLogTextOutput('noBannerData'));

                        break;
                    }

                    case 'NO_INFO_DATA': {
                        failedStartUpLauncher(msgLogTextOutput('noInformationData'));

                        break;
                    }

                    case 'UNEXPECTED': {
                        failedStartUpLauncher(msgLogTextOutput('unexpected'));

                        break;
                    }

                    default:
                        failedStartUpLauncher(xhr.responseText ? xhr.responseText : msgLogTextOutput('failedAccessApi'));
                }
            }
        });
};

const getAutoLoginData = function () {
    $('.loading_text').text('Checking for Updates...');
    const userKey = getCookieValue('autoLoginUserKey');

    if (!userKey) {
        document.cookie = 'autoLoginUserKey=; max-age=0';
        $(loginPanel).append(normalLoginPanel);

        // check client updates
        checkClientUpdate(getQueryParams('ver'));
        needsUpdateClient ? showClientUpdateDialog() : finalizeLauncher();
    } else {
        // auto login mode
        $.ajax({
            url: 'https://api.rain-server.com/users/auto-login/' + userKey + '/' + launcherLanguage + '/' + userTimeZone,
            type: 'GET',
            dataType: 'json',
            accepts: { json: 'application/json' },
            cache: false,
        })
            .done(function (data) {
                // switch auto-login mode with decrypted credentials
                autoLoginUsername = data.username;
                autoLoginPassword = data.password;
                autoLoginExpiration = data.ex_date_time;
                setLastSelectedSrvIndex(data.lastSelectedSrvIndex);
                $(loginPanel).addClass('auto_login_mode');
                $(loginPanel).append(autoLoginPanel);
                $(userSrvNameLabel).text(autoLoginUsername);
                $(logoutCont).append('<button class="btn_logout' + (soundMode ? ' sound_on' : '') + '" onclick="onClickLogOutBtn();"></button>');
                autoLogin = true;
                isAutoLoginCheck = true;
                isMainAutoLogin = true;
                const requestData = JSON.stringify({ username: autoLoginUsername, password: autoLoginPassword, lang: launcherLanguage, timezone: userTimeZone });

                // check client is latest version
                checkClientUpdate(getQueryParams('ver'));
                needsUpdateClient ? showClientUpdateDialog() : apiUsersAction('authenticate', requestData);
            })
            .fail(function (xhr) {
                if (emergMode) {
                    $(loginPanel).append(normalLoginPanel);
                    finalizeLauncher();
                } else {
                    switch (xhr.responseText) {
                        case 'PARAMS_UNDEFINED': {
                            failedStartUpLauncher(msgLogTextOutput('paramsUndefined'));

                            break;
                        }

                        case 'NO_DATA': {
                            document.cookie = 'autoLoginUserKey=; max-age=0';
                            failedStartUpLauncher(msgLogTextOutput('noAutoLoginData'));

                            break;
                        }

                        case 'UNEXPECTED': {
                            failedStartUpLauncher(msgLogTextOutput('unexpected'));

                            break;
                        }

                        default:
                            failedStartUpLauncher(xhr.responseText ? xhr.responseText : msgLogTextOutput('failedAccessApi'));
                    }
                }
            });
    }
};

const finalizeLauncher = function () {
    // add forgot password link
    $(forgotPassword).attr('href', 'https://auth.rain-server.com/' + (launcherLanguage === 'ja' ? 'ja' : 'en') + '/login/?type=reset-password');

    // load moving function
    launcherMovingHandler();

    // initialize normal text
    initNormTextData();

    // initialize aside menu
    initAsideMenu();

    // initial display of msg log
    initializeMsg();

    // init server list
    initSrvSelList();

    // remove sound_on class if sound mode is false
    initSoundMode();

    // convert href on anchor tag to openBrowser function
    overrideAnker('.wrapper');

    // set game logo
    $('.game_logo').attr('src', '/assets/img/logo/' + launcherLanguage + '.png');

    // set check state for checkbox
    getCookieValue('saveUsernameValue') && ($(saveUsernameCheck).prop('checked', true), $(inputUsername).val(getCookieValue('saveUsernameValue')));

    // launcher startup complete
    $('.loading_bar, .loading_text').animate({ opacity: 0 }, { duration: 400, easing: 'swing' });
    setTimeout(function () {
        $('.startup_overlay').fadeOut(500);
    }, 500);
};

/*=========================================================
　　　　　Server Selection Functions
=======================================================*/
const serverSelGroup = '.server_sel_group',
    serverSelBtn = '.srv_sel_btn',
    serverListBox = '.srv_sel_box',
    srvListEachItem = '.srv_sel_box .srv';

let serverListOpen = false,
    serverNotSelected = true;

const initSrvSelList = function () {
    // check from local storage whether users have selected a server before
    serverNotSelected = localStorage.getItem('serverNotSelected') !== 'false';

    // get server list data
    const serverList = getServerList();

    // get the last selected server index
    const lastSelectedSrvIndex = parseInt(getLastSelectedSrvIndex(), 10);

    // remove all children of the server selection list
    $(serverListBox).children().remove();

    // set servers to the list
    $(serverList)
        .find('group')
        .each(function (index, srvItem) {
            const name = $(srvItem).attr('nam');

            // create and append the server element to the server selection list
            $(serverListBox).append($('<li class="srv sound_on" idx="' + index + '">' + name + '</li>'));
        });

    // if the last selected index is out of range, set true to serverNotSelected for initializing
    (lastSelectedSrvIndex < 0 || lastSelectedSrvIndex > $(srvListEachItem).length) && (serverNotSelected = true);

    // if user have previously selected a server, set auth server and assign class to the target server
    serverNotSelected
        ? $(serverSelBtn).text(normTextOutput('serverNotSelected'))
        : (switchAuthSrv($(srvListEachItem)[lastSelectedSrvIndex]), $('.srv').eq(lastSelectedSrvIndex).addClass('selected_srv'));

    // hide the server selection list
    $(serverListBox).hide();

    // add the server selection button to the focus elements and bind the mousedown event to it
    $(serverSelBtn).mousedown(function () {
        serverListOpen ? hideSrvSelList() : showSrvSelList();
    });

    // the mousedown event to each server element to select it as the active server, and hide the server selection list
    $(srvListEachItem).mousedown(function () {
        switchAuthSrv($(this));
        setLastSelectedSrvIndex($(this).attr('idx'));
        selectServerItem($(this));
        serverNotSelected && (localStorage.setItem('serverNotSelected', 'false'), (serverNotSelected = false));
        hideSrvSelList();
    });

    // the click event to the server selection box and button to stop clicks from propagating to the document
    $(serverListBox + serverSelBtn).mousedown(function (e) {
        e.stopPropagation();
    });

    // enable scroll bar on server selector box
    new scrollBarHandler(serverListBox);
};

const selectServerItem = function (targetServer) {
    $('.selected_srv').removeClass('selected_srv');
    $(targetServer).toggleClass('selected_srv');
};

const switchAuthSrv = function (serverElm) {
    $(serverSelBtn).text($(serverElm).text());
};

const showSrvSelList = function () {
    // disable the button
    $(serverSelBtn).prop('disabled', true);

    $(serverListBox).slideDown(300, function () {
        // re-enable the button after the animation is complete
        $(serverSelBtn).prop('disabled', false);
    });

    $(serverSelGroup).addClass('opened_svr_list');

    serverListOpen = true;
};

const hideSrvSelList = function () {
    // disable the button
    $(serverSelBtn).prop('disabled', true);

    $(serverListBox).slideUp(300, function () {
        // re-enable the button after the animation is complete
        $(serverSelBtn).prop('disabled', false);
    });

    // remove class and set open status to false
    $(serverSelGroup).removeClass('opened_svr_list');
    serverListOpen = false;
};

/*=========================================================
　　　　　Language Select Functions
=======================================================*/
const languageSelGroup = '.language_sel_group',
    languageSelBtn = '.lang_sel_btn',
    languageListBox = '.lang_sel_box',
    langListEachItem = '.lang_sel_box .lang';

let languageListOpen = false,
    selectedLang;

const initLanguageList = function () {
    // remove all children of the server language list
    $(languageListBox).children().remove();

    // set languages to the list
    Object.keys(languageList).forEach(function (key, index) {
        if (index === 0) {
            return;
        }

        $(languageListBox).append(
            '<li class="lang ' +
                (soundMode ? 'sound_on' : '') +
                '" id="' +
                key +
                '" data-code="' +
                key +
                '" data-name="' +
                languageList[key]['mainName'] +
                '">' +
                languageList[key]['mainName'] +
                '　<span class="lang_sub">[' +
                languageList[key]['subName'] +
                ']</span>' +
                '</li>'
        );
    });

    // add selected_lang class
    $('#' + launcherLanguage).addClass('selected_lang');

    // hide the language selection list
    $(languageListBox).hide();

    // show / hide language list
    $(languageSelBtn).mousedown(function () {
        languageListOpen ? hideLangSelList() : showLangSelList();
    });

    // select launguage item
    $(langListEachItem).mousedown(function () {
        switchLanguage($(this).data('name'), $(this).data('code'));
        selectLangItem($(this));
        hideLangSelList();
    });

    // the click event to the language selection box and button to stop clicks from propagating to the document
    $(languageListBox + languageSelBtn).mousedown(function (e) {
        e.stopPropagation();
    });

    // enable scroll bar on language selector box
    // new scrollBarHandler(languageListBox); for when more languages are available
};

const selectLangItem = function (targetLang) {
    $('.selected_lang').removeClass('selected_lang');
    $(targetLang).toggleClass('selected_lang');
};

const switchLanguage = function (languageName, langCode) {
    $(languageSelBtn).text(languageName);
    selectedLang = langCode;
};

const showLangSelList = function () {
    // disable the button
    $(languageSelBtn).prop('disabled', true);

    $(languageListBox).slideDown(300, function () {
        // re-enable the button after the animation is complete
        $(languageSelBtn).prop('disabled', false);
    });

    $(languageSelGroup).addClass('opened_lang_list');

    languageListOpen = true;
};

const hideLangSelList = function () {
    // disable the button
    $(languageSelBtn).prop('disabled', true);

    $(languageListBox).slideUp(300, function () {
        // re-enable the button after the animation is complete
        $(languageSelBtn).prop('disabled', false);
    });

    // remove class and set open status to false
    $(languageSelGroup).removeClass('opened_lang_list');

    languageListOpen = false;
};

const changeLanguage = function () {
    localStorage.setItem('rainLauncherLanguage', selectedLang);
    restartGame();
};

/*=========================================================
　　　　　Message Log Functions
=======================================================*/
const messageContents = '.msg_contents';

const initializeMsg = function () {
    $(messageContents).empty();
    addLogMsg('Client Version: ' + (needsUpdateClient ? msgLogTextOutput('needsUpdateClient') : clientVer), 'g');
    autoLogin
        ? (addLogMsg(msgLogTextOutput('initMsg2')), addLogMsg(msgLogTextOutput('autoLoginEx') + autoLoginExpiration, 'b'), addLogMsg(msgLogTextOutput('initMsg3'), 'r'))
        : addLogMsg(msgLogTextOutput('initMsg1'));
};

const addLogMsg = function (message, colorType, isOnlyOneMsg) {
    let color = '';

    // if isOnlyOneMsg is true, add class only
    const only = isOnlyOneMsg === true ? 'only' : '';

    // switch text color based on type
    switch (colorType) {
        case 'g':
            color = 'green';
            break;
        case 'b':
            color = 'blue';
            break;
        case 'y':
            color = 'yellow';
            break;
        case 'r':
            color = 'red';
    }

    // generate msg element
    const logMessage = '<p class="' + color + ' ' + only + '">' + message + '</p>';

    // get all paragraphs
    const texts = $(messageContents + ' ' + 'p')
        .contents()
        .text();

    // if isOnlyOneMsg is true and the text is already existed in SEL_LOG, stop
    if (isOnlyOneMsg && texts.indexOf(message) !== -1) {
        return;
    }

    // append msg to SEL_LOG until scrollable, after that append msg to the generated container
    $('#mCSB_3_container').length ? $('#mCSB_3_container').append(logMessage) : $(messageContents).append(logMessage);

    // set scrollbar
    new scrollBarHandler(messageContents);
};

const clearOnlyLog = function () {
    $(messageContents + ' ' + '.only').remove();
};

/*=========================================================
　　　　　Login and Authentication Functions
=======================================================*/
const loginPanel = '.launcher_login_panel',
    inputUsername = '.username_input',
    inputPassword = '.password_input',
    loginBtn = '.btn_login',
    logoutCont = '.logout_container',
    logoutBtn = '.btn_logout',
    userSrvNameLabel = '.name_srv_label',
    startGameBtn = '.btn_start',
    autoLoginModeCheck = '#auto_login',
    saveUsernameCheck = '#save_username',
    forgotPassword = '.forgot_password',
    maintenanceBox = '.maintenance',
    authenticateBox = '.authenticating',
    normalLoginPanel =
        '<form class="auth_section"><div class="auth_group"><label for="username"></label><div class="auth_username"><span class="user_icon material-symbols-outlined">person</span><input class="username_input" type="text" id="username" autocomplete="off" autocapitalize="off" aria-label="Username" aria-invalid="false" /></div></div><div class="auth_group"><label for="password"></label><div class="auth_password"><span class="password_icon material-symbols-outlined">key</span><input class="password_input" type="password" id="password" autocomplete="off" autocapitalize="off" aria-label="Password" aria-invalid="false" /><span id="eye_btn" class="hide_password material-symbols-outlined sound_on" onclick="toggleHidePass();">visibility_off</span></div></div></form><ul class="server_selector_group"><label for="server_sel"></label><li class="server_sel_group"><span class="server_icon material-symbols-outlined">rss_feed</span><button class="srv_sel_btn sound_on" id="server_sel"></button><span class="srv_sel_arrow_bg"><span class="srv_sel_arrow material-symbols-outlined">expand_more</span></span></li><ul class="srv_sel_box"></ul></ul><button class="btn_login sound_on" onclick="onClickLoginBtn();"></button><div class="auth_alternative"><input style="display: none" id="auto_login" name="auto_login" type="checkbox" /><label class="auto_login sound_on" for="auto_login"></label><input style="display: none" id="save_username" name="save_username" type="checkbox" /><label class="save_username sound_on" for="save_username"></label><a class="forgot_password sound_on"></a></div><div class="msg_logs_area"><div class="msg_contents"></div></div><button class="btn_preferences sound_on" onclick="openPreferences();"></button>',
    autoLoginPanel =
        '<img class="auto_login_emb" src="/assets/img/logo/emblem.png" alt="emblem"><ul class="server_selector_group"><label for="server_sel"></label><li class="server_sel_group auto_login_mode"><span class="server_icon material-symbols-outlined">rss_feed</span><button class="srv_sel_btn sound_on" id="server_sel"></button><span class="srv_sel_arrow_bg"><span class="srv_sel_arrow material-symbols-outlined">expand_more</span></span></li><ul class="srv_sel_box"></ul></ul><button class="btn_start sound_on" onclick="onClickAutoLoginStartGame();"></button><div class="msg_logs_area"><div class="msg_contents"></div></div><button class="btn_preferences sound_on" onclick="openPreferences();"></button>';

let maintenanceData = {},
    soundMode,
    loginPollingTimerId = '',
    autoLogin = false,
    isAutoLoginCheck = false,
    isMainAutoLogin = false,
    startGameMode = false,
    loginUserData = {},
    loginUsersCharData = [];

const onClickLoginBtn = function () {
    serverNotSelected ? (soundMode && playSound('IDR_WAV_OK'), onAuthError(msgLogTextOutput('noSrvSelected'))) : beginAuthProcess();
};

const onClickLogOutBtn = function () {
    $(logoutBtn).remove();
    $(logoutCont).append('<button class="btn_logout" onclick="onClickLogOutBtn();">' + normTextOutput('loggingoutBtn') + '</button>');
    disableElement(logoutBtn, 1);

    // reset login user and characters data
    loginUserData = {};
    loginUsersCharData = [];

    if (isAutoLoginCheck) {
        const userKey = getCookieValue('autoLoginUserKey');

        if (!userKey) {
            showNoUserKeyDialog();
        } else {
            $.ajax({
                url: 'https://api.rain-server.com/users/auto-login/' + userKey,
                type: 'DELETE',
                cache: false,
            })
                .done(function () {
                    isMainAutoLogin ? logOutProcess1() : logOutProcess2();
                })
                .fail(function (xhr) {
                    switch (xhr.responseText) {
                        case 'PARAMS_UNDEFINED': {
                            onAuthError(msgLogTextOutput('paramsUndefined'), 'r');

                            break;
                        }

                        case 'NO_DATA': {
                            document.cookie = 'autoLoginUserKey=; max-age=0';
                            showNoUserKeyDialog();
                            onAuthError(msgLogTextOutput('noAutoLoginData'), 'r');

                            break;
                        }

                        case 'UNEXPECTED': {
                            onAuthError(msgLogTextOutput('unexpected'), 'r');

                            break;
                        }

                        default:
                            onAuthError(msgLogTextOutput('failedAccessApi'), 'r');
                    }
                });
        }
    } else {
        logOutProcess2();
    }
};

const beginAuthProcess = function () {
    const username = $(inputUsername).val();
    const password = $(inputPassword).val();

    isAutoLoginCheck = $(autoLoginModeCheck).is(':checked');

    if ('' === username || '' === password) {
        soundMode && playSound('IDR_WAV_OK');
        onAuthError(msgLogTextOutput('noUsernamePass'));
    } else {
        soundMode && playSound('IDR_WAV_PRE_LOGIN');
        $('.wrapper').css('pointer-events', 'none');
        showAuthenticating(normTextOutput('authText'));
        disableElement('.win_ctrls button', 1);
        disableElement('.bnr', 1);

        // if debugMode or emergMode is true, all processes are skipped
        if (debugMode || emergMode) {
            const loginSuccess = loginRain($(inputUsername).val(), $(inputPassword).val(), $(inputPassword).val());
            if (loginSuccess) {
                loginPollingTimerId = setInterval(startLoginPolling, 1000);
            } else {
                onAuthError(msgLogTextOutput('SIGN_EAPP'), 'r');
            }
        } else {
            const requestData = JSON.stringify({ username: username, password: password, lang: launcherLanguage, timezone: userTimeZone });
            apiUsersAction('authenticate', requestData);
        }
    }
};

const startLoginPolling = function () {
    const authResult = getAuthResult();

    switch (authResult) {
        case 'AUTH_NULL':
        case 'AUTH_PROGRESS':
        case 'DELETE_PROGRESS':
        case 'DELETE_SUCCESS':
        case 'DELETE_ERROR_NET':
        case 'DELETE_ERROR_IVL':
        case 'DELETE_ERROR_MNC': {
            break;
        }

        case 'AUTH_SUCCESS': {
            stopLoginPolling();

            autoLogin
                ? finalizeLauncher()
                : debugMode || emergMode
                ? (addLogMsg(msgLogTextOutput('authSuccess'), 'g', true),
                  afterLoginSuccess(
                      $(serverSelBtn)
                          .text()
                          .replace(/[\s()]/g, '')
                  ))
                : isAutoLoginChecked(
                      $(serverSelBtn)
                          .text()
                          .replace(/[\s()]/g, '')
                  );

            break;
        }

        case 'AUTH_ERROR_NET': {
            stopLoginPolling();
            autoLogin ? failedStartUpLauncher(msgLogTextOutput('SIGN_EFAILED')) : onAuthError(msgLogTextOutput('SIGN_EFAILED'), 'r');

            break;
        }

        case 'AUTH_ERROR_ACC':
        case 'AUTH_ERROR_PWD': {
            stopLoginPolling();

            const signResult = getSignResult();

            switch (signResult) {
                case 'SIGN_EFAILED':
                case 'SIGN_EILLEGAL':
                case 'SIGN_EALERT':
                case 'SIGN_EABORT':
                case 'SIGN_ERESPONSE':
                case 'SIGN_EDATABASE':
                case 'SIGN_EPASS': {
                    autoLogin ? ((document.cookie = 'autoLoginUserKey=; max-age=0'), failedStartUpLauncher(msgLogTextOutput(signResult))) : onAuthError(msgLogTextOutput(signResult), 'r');

                    break;
                }

                default:
                    autoLogin ? failedStartUpLauncher(msgLogTextOutput('SIGN_EOTHER')) : onAuthError(msgLogTextOutput('SIGN_EOTHER'), 'r');
            }

            break;
        }

        default:
            stopLoginPolling();
            autoLogin ? failedStartUpLauncher(msgLogTextOutput('SIGN_EUNK')) : onAuthError(msgLogTextOutput('SIGN_EUNK'), 'r');
    }
};

const stopLoginPolling = function () {
    loginPollingTimerId && clearInterval(loginPollingTimerId);
};

const isAutoLoginChecked = function (serverName) {
    if (isAutoLoginCheck) {
        addLogMsg(msgLogTextOutput('settingAutoLogin'), 'g', true);

        // set encrypted credentials and get user key
        $.ajax({
            url: 'https://api.rain-server.com/users/auto-login',
            type: 'POST',
            data: JSON.stringify({ username: $(inputUsername).val(), password: $(inputPassword).val(), lastSelectedSrvIndex: parseInt(getLastSelectedSrvIndex(), 10) }),
            contentType: 'application/json',
            dataType: 'json',
        })
            .done(function (data) {
                document.cookie = 'autoLoginUserKey=' + data.user_key + '; max-age=' + 60 * 60 * 24 * 30;

                afterLoginSuccess(serverName);
            })
            .fail(function (xhr) {
                switch (xhr.responseText) {
                    case 'NO_REQUIRED_DATA': {
                        onAuthError(msgLogTextOutput('noRequiredData'), 'r');

                        break;
                    }

                    case 'UNEXPECTED': {
                        onAuthError(msgLogTextOutput('unexpected'), 'r');

                        break;
                    }

                    default:
                        onAuthError(msgLogTextOutput('failedAccessApi'), 'r');
                }
            });
    } else {
        afterLoginSuccess(serverName);
    }
};

const afterLoginSuccess = function (serverName) {
    hideAuthenticating();

    maintenanceData[serverName] ? (showMaintenanceDialog(), $(loginPanel).hide(), $(userSrvNameLabel).text($(inputUsername).val() + '@' + $(serverSelBtn).text())) : createCharacters();

    $(saveUsernameCheck).is(':checked')
        ? // if checked, save username
          (document.cookie = 'saveUsernameValue=' + $(inputUsername).val() + '; max-age=' + 60 * 60 * 24 * 30)
        : // if not, delete it
          (document.cookie = 'saveUsernameValue=; max-age=0');
};

const showAuthenticating = function (text) {
    $('.authenticating_text').text(text);

    // diabled login button
    disableElement(loginBtn, 1);

    // show auth progress display
    $(authenticateBox).fadeIn(200);

    // disable inputs
    $(inputUsername).prop('disabled', true);
    $(inputPassword).prop('disabled', true);
};

const hideAuthenticating = function () {
    // enable elements
    enableElement('.win_ctrls button', 1);
    enableElement('.bnr', 1);
    enableElement(loginBtn, 1);
    $('.wrapper').css('pointer-events', '');

    // hide auth progress display
    $(authenticateBox).fadeOut(200);
    $('.authenticating_text').empty();

    // enable inputs
    $(inputUsername).prop('disabled', false);
    $(inputPassword).prop('disabled', false);
};

const onAuthError = function (message, colorType) {
    addLogMsg(message, (colorType = colorType || 'y'), true);
    hideAuthenticating();
};

const logOutProcess1 = function () {
    // set auto login mode to false
    autoLogin = false;
    isMainAutoLogin = false;

    // delete key
    document.cookie = 'autoLoginUserKey=; max-age=0';

    // bring back normal login panel
    returnLoginPanelToNorm();

    // set check state for checkbox
    getCookieValue('saveUsernameValue') && ($(saveUsernameCheck).prop('checked', true), $(inputUsername).val(getCookieValue('saveUsernameValue')));

    // init sound mode and message logs
    initSoundMode();
    initializeMsg();

    // reset server name label
    $(userSrvNameLabel).text('');

    // remove logout button
    $(logoutBtn).remove();
};

const logOutProcess2 = function () {
    // remove start game button
    $(startGameBtn).remove();

    // delete key
    document.cookie = 'autoLoginUserKey=; max-age=0';

    // refresh logs
    clearOnlyLog();

    // show login main panel
    $(loginPanel).show();

    // hide character selection
    $(charSelBox).hide();
    $(charSelBox).empty();

    // reset server name label
    $(userSrvNameLabel).text('');

    // reset user id
    $('.uid_label').text('');

    // remove logout button
    $(logoutBtn).remove();

    // hide maintenance display
    $(maintenanceBox).hide();
    $(maintenanceBox).empty();
};

const returnLoginPanelToNorm = function () {
    // remove auto login class
    $('.auto_login_emb, .btn_start').remove();
    $(loginPanel).removeClass('auto_login_mode');
    $(serverSelGroup).removeClass('auto_login_mode');

    // append proper elements
    $('.server_selector_group').before(
        '<form class="auth_section"><div class="auth_group"><label for="username"></label><div class="auth_username"><span class="user_icon material-symbols-outlined">person</span><input class="username_input" type="text" id="username" autocomplete="off" autocapitalize="off" aria-label="Username" aria-invalid="false" /></div></div><div class="auth_group"><label for="password"></label><div class="auth_password"><span class="password_icon material-symbols-outlined">key</span><input class="password_input" type="password" id="password" autocomplete="off" autocapitalize="off" aria-label="Password" aria-invalid="false" /><span id="eye_btn" class="hide_password material-symbols-outlined sound_on" onclick="toggleHidePass();">visibility_off</span></div></div></form>'
    );
    $('.server_selector_group').after(
        '<button class="btn_login sound_on" onclick="onClickLoginBtn();"></button><div class="auth_alternative"><input style="display: none" id="auto_login" name="auto_login" type="checkbox" /><label class="auto_login sound_on" for="auto_login"></label><input style="display: none" id="save_username" name="save_username" type="checkbox" /><label class="save_username sound_on" for="save_username"></label><a class="forgot_password sound_on"></a>'
    );

    // set forgot password link
    $(forgotPassword).attr('href', 'https://auth.rain-server.com/' + (launcherLanguage === 'ja' ? 'ja' : 'en') + '/login/?type=reset-password');
    overrideAnker('.auth_alternative');

    // init normal text data
    initNormTextData();
};

/*=========================================================
　　　　　Character Selection Functions
=======================================================*/
const charSelBox = '.character_selection',
    charSelUnitBox = charSelBox + ' .swiper-wrapper',
    charSelUnit = charSelBox + ' .unit',
    charAddButton = charSelBox + ' .char_add',
    charDelButton = charSelBox + ' .char_del';

let hunterIds = [],
    addCharacterMode = false,
    deleteCharacterMode = false;

const convWpnNameToClassName = function (wpnJaName) {
    const wpnJaObj = {
        '大剣': 'greatSword',
        'ヘビィボウガン': 'heavyBowgun',
        'ハンマー': 'hammer',
        'ランス': 'lance',
        '片手剣': 'swordAndShield',
        'ライトボウガン': 'lightBowgun',
        '双剣': 'dualSwords',
        '太刀': 'longSword',
        '狩猟笛': 'huntingHorn',
        'ガンランス': 'gunlance',
        '弓': 'bow',
        '穿龍棍': 'tonfa',
        'スラッシュアックスF': 'switchAxeF',
        'マグネットスパイク': 'magnetSpike',
    };

    return wpnJaObj[wpnJaName];
};

const convEntities = function (name) {
    const characterName = String(name);

    // define an object of special characters and their corresponding entity references
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

    // replace special characters with their entity references using regex and the entities object
    return characterName.replace(/[&<>"]/g, function (m) {
        return entities[m];
    });
};

const getCurrentCharData = function () {
    return $('.swiper-slide-active');
};

const createCharacters = function () {
    $(charSelBox).append(
        '<div class="character_units"><div class="scroll scroll_up' +
            (soundMode ? ' sound_on' : '') +
            '"></div><div class="char_unit_wrapper"><div class="swiper-wrapper"></div></div><div class="scroll scroll_down' +
            (soundMode ? ' sound_on' : '') +
            '"></div></div><ul class="character_misc"><li class="char_add' +
            (soundMode ? ' sound_on' : '') +
            '" data-btn="' +
            normTextOutput('charAddBtnText') +
            '" onclick="addCharacter()"></li><li class="char_del' +
            (soundMode ? ' sound_on' : '') +
            '" data-btn="' +
            normTextOutput('charDelBtnText') +
            '" onclick="deleteCharacter()"></li></ul>'
    );

    // swiper settings
    swiper = new Swiper('.char_unit_wrapper', {
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            slideShadows: false,
        },
        mousewheel: true,
        direction: 'vertical',
        speed: 500,
        centeredSlides: true,
        navigation: {
            nextEl: '.scroll_down',
            prevEl: '.scroll_up',
        },
        observer: true,
        observeParents: true,
        spaceBetween: 50,
    });

    const uid = loginUserData.id > 0 ? loginUserData.id : 'No Data';

    // get characters data via external for getting hunter ids
    const characterInfo = $('<div>').html(
        getAllCharData()
            .replace(/'/g, '"')
            .replace(/&apos;/g, "'")
    );

    // if debugMode or emergMode is true, create characters via external
    if (debugMode || emergMode) {
        characterInfo.find('Character').each(function (_, element) {
            $(charSelUnitBox).append(
                createCharUnit(
                    $(element).attr('name'),
                    $(element).attr('hid'),
                    'No Data',
                    'No Data',
                    parseInt($(element).attr('HR'), 10),
                    parseInt($(element).attr('GR'), 10),
                    $(element).attr('weapon'),
                    'No Data',
                    $(element).attr('sex'),
                    'No Data'
                )
            );
        });

        showCharSelection(uid);
    } else {
        // get hunter ids
        characterInfo.find('Character').each(function (_, element) {
            hunterIds.push($(element).attr('hid'));
        });

        // sort characters in asc order based on id
        const sortedCharacters = loginUsersCharData.sort(function (a, b) {
            return a.id - b.id;
        });

        // add hunter id to characters data from rainweb
        sortedCharacters.forEach(function (character, index) {
            if (hunterIds[index] !== undefined) {
                character.hunterId = hunterIds[index];
            }
        });

        // append created characters to select box
        objectEntries(sortedCharacters).map(function (entry) {
            const character = entry[1];

            if (!character.deleted) {
                $(charSelUnitBox).append(
                    createCharUnit(
                        character.name,
                        character.hunterId,
                        uid,
                        character.id,
                        character.hr,
                        character.gr,
                        character.weapon_type_name,
                        character.weapon_id_name,
                        character.is_female,
                        character.last_login_date_time
                    )
                );
            }
        });

        showCharSelection(uid);
    }
};

const createCharUnit = function (name, hunterId, userId, characterId, hr, gr, weaponType, weaponName, gender, lastLogin) {
    const charName = convEntities(name) === '' ? normTextOutput('readyHunt') : convEntities(name);
    const isFemale = typeof gender === 'string' ? gender !== 'M' : gender;

    let wpnClass = String(weaponType);
    // convert weapon name for style usage
    wpnClass = wpnClass.replace(/\s+/g, '').replace(/&/g, 'And');
    wpnClass = wpnClass.toLowerCase().charAt(0) + wpnClass.slice(1);

    // weapon name conversion
    launcherLanguage === 'ja' && (wpnClass = convWpnNameToClassName(weaponType));

    // generate a new div element with the given attributes
    const charUnit = $('<div class="unit swiper-slide" hid="' + hunterId + '" uid="' + userId + '" cid="' + characterId + '" name="' + charName + '" to="0"></div>');

    // character name
    charUnit.append($('<p class="name">' + charName + '</p>'));

    hr === 0
        ? // if the character is new (HR is 0), add a new class and a new element to the div
          (charUnit.addClass('new'), charUnit.append($(normTextOutput('newMsg1') + (autoLogin ? normTextOutput('autoLoginNewMsg2') : normTextOutput('normNewMsg2')))))
        : (charUnit.addClass(wpnClass), // add weapon class for background
          charUnit.append($('<div class="icon' + (wpnClass ? ' ' + wpnClass : '') + '"></div>')), // weapon icon
          charUnit.append(
              // weapon type and name
              $('<p class="wpn_type">≪ ' + weaponType + ' ≫</p><p class="wpn_name">' + weaponName + '</p>')
          ),
          charUnit.append(
              $(
                  '<p class="rank">HR: ' +
                      hr +
                      (gr ? ' / GR: ' + gr : '') +
                      '</p><p class="char_gender">' +
                      (!isFemale ? normTextOutput('genderLabelMale') : normTextOutput('genderLabelFemale')) +
                      '</p><p class="char_id">' +
                      normTextOutput('charIdLabel') +
                      characterId +
                      '</p><p class="last_login">' +
                      normTextOutput('lastOnlineLabel') +
                      lastLogin +
                      '</p>'
              )
          ));

    // add a click event to start the game if the div has the crr class
    charUnit.click(function () {
        $(this).hasClass('swiper-slide-active') && (autoLogin ? (checkUpdateMode($(this).attr('hid')), hideDialog()) : onClickNormStartGame());
    });

    // return the div
    return charUnit;
};

const showCharSelection = function (uid) {
    // setup character select display
    $(loginPanel).hide();
    $(charSelBox).show();
    $(logoutCont).append('<button class="btn_logout' + (soundMode ? ' sound_on' : '') + '" onclick="onClickLogOutBtn();">' + normTextOutput('logoutBtn') + '</button>');
    $(charSelBox).append('<button class="btn_start' + (soundMode ? ' sound_on' : '') + '" data-btn="' + normTextOutput('startGameBtnText') + '" onclick="onClickNormStartGame();"></button>');

    // show logout container
    $('.uid_label').text(normTextOutput('userIdLabel') + uid);
    $(userSrvNameLabel).text($(inputUsername).val() + '@' + $(serverSelBtn).text());

    // delete logs with class name "only"
    clearOnlyLog();

    // if there is no character, disable delete and start game button
    if ($(charSelUnitBox).find('.unit').length === 0) {
        disableElement(charDelButton, 1), disableElement(startGameBtn, 1);
    } else {
        // if there is one character and a new hunter, disable delete button, and enable start game button
        if ($(charSelUnitBox).find('.unit').length === 1 && $(charSelUnit).find('.new').length === 1) {
            disableElement(charDelButton, 1), enableElement(startGameBtn, 1);
            // normally, all buttons are enabled
        } else {
            enableElement(charDelButton, 1), enableElement(startGameBtn, 1);
        }
    }
};

const checkDelID = function (name, cid) {
    cid === $('.del_cid').val() ? showWaitDelCharDialog(name, cid) : showFailDelCharErrMatchDialog(name, cid);
};

const onClickNormStartGame = function () {
    // play a sound
    soundMode && playSound('IDR_WAV_OK');

    // get the current character, and set its hid and name to variables respectively
    const currentCharData = getCurrentCharData();
    const currentCharHid = currentCharData.attr('hid');
    const currentCharId = currentCharData.attr('cid');
    const currentCharName = currentCharData.attr('name');

    // show a dialog box with the character's name and hid
    showStartGameDialog(currentCharName, currentCharHid, currentCharId);
};

const onClickAutoLoginStartGame = function () {
    // play a sound
    soundMode && playSound('IDR_WAV_OK');

    showAutoLoginStartGameDialog();

    // swiper settings
    swiper = new Swiper('.char_unit_wrapper', {
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            slideShadows: false,
        },
        mousewheel: true,
        direction: 'horizontal',
        speed: 500,
        centeredSlides: true,
        navigation: {
            nextEl: '.scroll_down',
            prevEl: '.scroll_up',
        },
        observer: true,
        observeParents: true,
    });

    const uid = loginUserData.id > 0 ? loginUserData.id : 'No Data';

    // get characters data via external for getting hunter ids
    const characterInfo = $('<div>').html(
        getAllCharData()
            .replace(/'/g, '"')
            .replace(/&apos;/g, "'")
    );

    // if debugMode or emergMode is true, create characters via external
    if (debugMode || emergMode) {
        characterInfo.find('Character').each(function (_, element) {
            $(charSelUnitBox).append(
                createCharUnit(
                    $(element).attr('name'),
                    $(element).attr('hid'),
                    'No Data',
                    'No Data',
                    parseInt($(element).attr('HR'), 10),
                    parseInt($(element).attr('GR'), 10),
                    $(element).attr('weapon'),
                    'No Data',
                    $(element).attr('sex'),
                    'No Data'
                )
            );
        });
    } else {
        // get hunter ids
        characterInfo.find('Character').each(function (_, element) {
            hunterIds.push($(element).attr('hid'));
        });

        // sort characters in asc order based on id
        const sortedCharacters = loginUsersCharData.sort(function (a, b) {
            return a.id - b.id;
        });

        // add hunter id to characters data from rainweb
        sortedCharacters.forEach(function (character, index) {
            if (hunterIds[index] !== undefined) {
                character.hunterId = hunterIds[index];
            }
        });

        // append created characters to select box
        objectEntries(sortedCharacters).map(function (entry) {
            const character = entry[1];

            if (character.deleted) {
                return false;
            } else {
                $(charSelUnitBox).append(
                    createCharUnit(
                        character.name,
                        character.hunterId,
                        uid,
                        character.id,
                        character.hr,
                        character.gr,
                        character.weapon_type_name,
                        character.weapon_id_name,
                        character.is_female,
                        character.last_login_date_time
                    )
                );
            }
        });
    }
};

const addCharacter = function () {
    // check if the clicked element is not disabled and a character is not already being deleted
    if (!$(this).hasClass('disabled')) {
        // get the user data of the currently selected character
        const currentCharData = getCurrentCharData();

        // set the name and cid to be deleted
        const addUserId = currentCharData.attr('uid');

        if ($(charSelUnitBox).find('.unit').length >= 3) {
            // can't be added if user own more than 3 characters
            showCantAddCharDialog();
        } else {
            // normally, show addCharDialog
            showAddCharDialog(addUserId);
        }
    }
};

const deleteCharacter = function () {
    // check if the clicked element is not disabled and a character is not already being deleted
    if (!$(this).hasClass('disabled')) {
        // get the user data of the currently selected character
        const currentCharData = getCurrentCharData();

        // set the name and cid to be deleted
        const delCharName = currentCharData.attr('name');
        const delCharId = currentCharData.attr('cid');

        if (delCharName === '狩人申請可能' || delCharName === 'Ready to Hunt') {
            // new character can't be deleted
            showCantDelCharDialog1();
        } else if ($(charSelUnitBox).find('.unit').length === 1) {
            // at least one character is required
            showCantDelCharDialog2();
        } else {
            // show a confirmation dialog for deleting the character
            showDelCharDialog1(delCharName, delCharId);
        }
    }
};

const startGame = function (hid) {
    // select the specified character
    selectCharacter(hid, hid);

    // play a login sound
    soundMode && playSound('IDR_WAV_LOGIN');

    // show game start overlay
    $('.game_start_overlay').show();

    // hidethe dialog
    hideDialog();

    // exit the launcher after a delay of 500 milliseconds
    setTimeout(function () {
        exitLauncher();
    }, 500);
};

/*=========================================================
　　　　　Update Functions
=======================================================*/
const updateBox = '.launcher_update_process',
    updateAnim = updateBox + ' .anim',
    fileProgressBar = '.bar_area .file_progress',
    totalProgressBar = '.bar_area .total_progress',
    progressStateMessage = '.update_msg .progress_state',
    nextActionMessage = '.update_msg .next_action',
    delayTime = 3000,
    progressBarWidth = 302,
    progressBarPercent = 0.01 * progressBarWidth;

let updateEnabled = false,
    updatePolling = true,
    animTimerId = '',
    frameClass = 'f0',
    normAnimSeqIndex = 0,
    finAnimSeqIndex = 0,
    totalProgress = 0;

// define animation sequence
const animSequence = {
    loop: [
        { c: 'f0', delay: 100 },
        { c: 'f1', delay: 300 },
        { c: 'f2', delay: 100 },
        { c: 'f3', delay: 300 },
    ],
    fini: [
        { c: 'f4', delay: 100 },
        { c: 'f5', delay: 50 },
        { c: 'f6', delay: 50 },
        { c: 'f7', delay: 2000 },
    ],
};

const checkUpdateMode = function (hid) {
    // initial settings on update display
    startGameMode = true;
    disableElement(logoutBtn, 1);
    disableElement('.win_ctrls button', 1);
    $(fileProgressBar).width(0);
    $(totalProgressBar).width(0);

    //$('.connecting_overlay').fadeIn(200);

    const update = updateEnabled ? window.external.startUpdate() : false;
    update
        ? // if update is needed, start update process
          (autoLogin ? $(loginPanel).hide() : $(charSelBox).hide(),
          $('.connecting_overlay').hide(),
          $(userSrvNameLabel).text(''),
          $(logoutBtn).hide(),
          $('.uid_label').hide(),
          $(progressStateMessage).text(updateTextOutput('progressState', 0)),
          $(nextActionMessage).text(updateTextOutput('nextActions', 0)),
          $(updateBox).append(
              '<li class="anim f0"></li><li class="progress_area"><div class="bar_area"><div class="file_progress"></div><div class="total_progress"></div></div><div class="pct_area"><p>File:<span class="file_pct">0</span>%</p><p>Total:<span class="total_pct">0</span>%</p></div></li><li class="update_msg"><p class="progress_state"></p><p class="next_action"></p></li>'
          ),
          $(updateBox).show(),
          beginUpdateProcess(hid),
          setTimeout(function () {
              updateProcessPct();
          }, 50))
        : // if not needed, directly proceed to start game
          startGame(hid);
};

const autoLoginPrepareBeginUpdate = function () {
    const currentCharData = getCurrentCharData();
    const currentCharHid = currentCharData.attr('hid');

    checkUpdateMode(currentCharHid);
};

const beginUpdateProcess = function (hid) {
    // clear any existing animation sequence
    clearAnimSq();

    // get the animation element and the current animation frame
    const animElem = $(updateAnim);
    const currentFrame = animSequence.loop[normAnimSeqIndex];

    // update animation element class and frameClass variable
    animElem.removeClass(frameClass).addClass(currentFrame.c);
    frameClass = currentFrame.c;

    // set timeout for next animation sequence
    animTimerId = setTimeout(function () {
        // increment the animation sequence loop index
        normAnimSeqIndex++;

        if (updatePolling) {
            if (animSequence.loop.length <= normAnimSeqIndex) {
                normAnimSeqIndex = 0;
            }
            beginUpdateProcess(hid);
        } else {
            $(progressStateMessage).text(updateTextOutput('progressState', 1));
            $(nextActionMessage).text(updateTextOutput('nextActions', 1));
            if (animSequence.loop.length <= normAnimSeqIndex) {
                finAnimSeqIndex = 0;
                finishUpdateProcess(hid);
            } else {
                beginUpdateProcess(hid);
            }
        }
    }, currentFrame.delay);
};

const finishUpdateProcess = function (hid) {
    // clear any existing animation sequence
    clearAnimSq();

    // get the animation element and the current animation frame
    const animElem = $(updateAnim);
    const currentFrame = animSequence.fini[finAnimSeqIndex];

    // update animation element class and frameClass variable
    animElem.removeClass(frameClass).addClass(currentFrame.c);
    frameClass = currentFrame.c;

    animTimerId = setTimeout(function () {
        // increment animation sequence index
        finAnimSeqIndex++;

        if (animSequence.fini.length > finAnimSeqIndex) {
            if (animSequence.fini.length === finAnimSeqIndex + 1) {
                // play sound effect if next sequence is the last one
                soundMode && playSound('IDR_NIKU');
            }
            finishUpdateProcess(hid);
        } else {
            // initialize after animation is completed
            clearAnimSq();
            setTimeout(function () {
                startGame(hid);
            }, 1100);
        }
    }, currentFrame.delay);
};

const switchUpdateAfterState = function () {
    // get the current update status and launcher return code
    const updateStatus = getUpdateStatus();
    const launcherReturnCode = getLauncherReturnCode();

    switch (updateStatus) {
        // if update was successful
        case 'UM_UPDATE_OK':
            switch (launcherReturnCode) {
                // if normal return code, stop polling
                case 'NORMAL':
                    updatePolling = false;
                    break;

                // if the launcher need to be restarted, wait for delayTime, then exit launcher
                case 'SELFUP':
                    $(progressStateMessage).text(updateTextOutput('progressState', 2));
                    $(nextActionMessage).text(updateTextOutput('nextActions', 2));
                    setTimeout(exitLauncher, delayTime);
                    break;

                // if an error occurs, quit the launcher
                case 'ERR':
                    $(progressStateMessage).text(updateTextOutput('progressState', 3));
                    $(nextActionMessage).text(updateTextOutput('nextActions', 3));
                    setTimeout(exitLauncher, delayTime);
                    break;
            }
            break;

        // if update failed, restart the launcher
        case 'UM_UPDATE_NG':
            $(progressStateMessage).text(updateTextOutput('progressState', 3));
            $(nextActionMessage).text(updateTextOutput('nextActions', 3));
            setTimeout(exitLauncher, delayTime);
            break;
    }

    // update progress percentage after 50ms
    setTimeout(updateProcessPct, 50);
};

const updateProcessPct = function () {
    // get current update status and launcher return code
    const updateStatus = getUpdateStatus();
    const launcherReturnCode = getLauncherReturnCode();

    // calculate progress percentage based on total percentage and progress bar percent
    const progressPercentage = Math.ceil(getTotalPctOnUpdate() * progressBarPercent);

    // update total pct text
    $('.total_pct').text(getTotalPctOnUpdate());

    // if progress percentage is 0
    if (0 === progressPercentage) {
        switch (updateStatus) {
            // if update was successful
            case 'UM_UPDATE_OK':
                switch (launcherReturnCode) {
                    // if normal return code, stop polling
                    case 'NORMAL':
                        updatePolling = false;
                        break;

                    // if the launcher need to be restarted, wait for delayTime, then exit launcher
                    case 'SELFUP':
                        $(progressStateMessage).text(updateTextOutput('progressState', 2));
                        $(nextActionMessage).text(updateTextOutput('nextActions', 2));
                        setTimeout(exitLauncher, delayTime);
                        break;
                }
                break;

            // if update failed, restart the launcher
            case 'UM_UPDATE_NG':
                $(progressStateMessage).text(updateTextOutput('progressState', 3));
                $(nextActionMessage).text(updateTextOutput('nextActions', 3));
                setTimeout(exitLauncher, delayTime);
                break;
        }
    }

    totalProgress < progressPercentage
        ? // if progress pct is greater than current total progress pct, update total progress bar
          ((totalProgress = progressPercentage),
          $(fileProgressBar).width(totalProgress === progressBarWidth ? 0 : progressBarWidth),
          $('.file_pct').text(totalProgress === progressBarWidth ? 0 : 100),
          $(totalProgressBar)
              .stop()
              .animate({ width: totalProgress }, 150, function () {
                  switchUpdateAfterState();
              }))
        : // if not, update file progress bar
          ($(fileProgressBar).width(Math.ceil(getFilePctOnUpdate() * progressBarPercent)), $('.file_pct').text(getFilePctOnUpdate()), switchUpdateAfterState());
};

const clearAnimSq = function () {
    animTimerId && clearTimeout(animTimerId);
};

/*=========================================================
　　　　　Dialog Functions
=======================================================*/
const dialogBox = '.launcher_dialog',
    dialogTexts = '.dialog_text_contents',
    dialogButtons = '.dialog_btnBox',
    dialogEachBtn = '.md_btn',
    dialogStandbyBtn = '.md_btn.standby';

const showDialog = function (text, options, standbyTime) {
    // show the modal dialog
    $(dialogBox).show();

    // initialize child elmemts
    $(dialogTexts).empty();
    $(dialogButtons).empty();

    // set the text of the dialog
    $(dialogTexts).html(text);

    if (options) {
        // loop through each button in the options array and create a corresponding HTML element
        options.forEach(function (option) {
            // generate initial button element
            const button = $('<button></button>').addClass('md_btn');

            // add click and hover event to button
            button.attr({
                onMouseDown: option.cmd,
                onMouseOver: "(soundMode && !startGameMode) && playSound('IDR_WAV_SEL')",
            });

            // if button is set as standby, set stanby class
            option.isStandby && button.addClass('standby');

            // set the text for each button
            button.text(option.label);

            // append the button elements to btnbox
            $(dialogButtons).append(button);
        });
    }

    // hover event for buttons
    $(dialogEachBtn).hover(function () {
        $(this).toggleClass('hover');
    });

    // set opacity of standby buttons
    disableElement(dialogStandbyBtn, 10);

    // enable standby button
    standbyTime &&
        setTimeout(function () {
            enableElement(dialogStandbyBtn, 200);
        }, standbyTime);
};

const hideDialog = function () {
    soundMode && playSound('IDR_WAV_OK');

    // hide dialog body
    $(dialogBox).hide();

    // reset dialog texts
    $(dialogTexts).empty();

    // reset dialog buttons
    $(dialogButtons).empty();
};

/* API Response
====================================================*/
const showNoUserKeyDialog = function () {
    showDialog(dialogTextOutput('noUserKey'));
    setTimeout(function () {
        restartGame();
    }, 5000);
};

const showRegisterDialog = function () {
    showDialog(dialogTextOutput('register'), [
        { label: dialogTextOutput('discordLabel'), cmd: 'openBrowser("discord://discordapp.com/channels/937230168223789066/1001395289233567854/1105105785148686579"); hideDialog();' },
        { label: dialogTextOutput('websiteLabel'), cmd: 'openBrowser("https://auth.rain-server.com/' + (launcherLanguage === 'ja' ? 'ja' : 'en') + '/register"); hideDialog();' },
        { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
    ]);
};

const showLinkDiscordDialog = function () {
    showDialog(dialogTextOutput('linkDiscord'), [
        { label: dialogTextOutput('discordLabel'), cmd: 'openBrowser("discord://discordapp.com/channels/937230168223789066/1001395289233567854/1105105785148686579"); hideDialog();' },
        { label: dialogTextOutput('websiteLabel'), cmd: 'openBrowser("https://auth.rain-server.com/' + (launcherLanguage === 'ja' ? 'ja' : 'en') + '/login/?type=link-discord"); hideDialog();' },
        { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
    ]);
};

const suspendedUserDialog = function (permanent, untilAt, reasonType) {
    permanent
        ? showDialog(
              dialogTextOutput('permSuspendedAcc') +
                  '<p>' +
                  dialogTextOutput('untilAt') +
                  dialogTextOutput('indefinite') +
                  '</p>' +
                  '<p>' +
                  dialogTextOutput('suspendedReason') +
                  dialogTextData['reason'][reasonType] +
                  '</p>',
              [{ label: dialogTextOutput('closeLabel'), cmd: 'closeWindow();' }]
          )
        : showDialog(
              dialogTextOutput('suspendedAcc') + '<p>' + dialogTextOutput('untilAt') + untilAt + '</p>' + '<p>' + dialogTextOutput('suspendedReason') + dialogTextData['reason'][reasonType] + '</p>',
              [{ label: dialogTextOutput('closeLabel'), cmd: 'closeWindow();' }]
          );
};

/* Update Client
====================================================*/
const showClientUpdateDialog = function () {
    showDialog(dialogTextOutput('clientUpdate') + (forcedClientUpdate === 'force' ? dialogTextOutput('updateMandatory') : ''), [
        { label: dialogTextOutput('updateLabel'), cmd: 'openBrowser("https://github.com/Otya063/rain-patch/releases/latest"); closeWindow();' },
        {
            label: dialogTextOutput('laterLabel'),
            cmd: 'updateDialogLater()',
            isStandby: forcedClientUpdate === 'force',
        },
    ]);
};

const updateDialogLater = function () {
    hideDialog();

    if (autoLogin) {
        const requestData = JSON.stringify({ username: autoLoginUsername, password: autoLoginPassword, lang: launcherLanguage, timezone: userTimeZone });
        apiUsersAction('authenticate', requestData);
    } else {
        finalizeLauncher();
    }
};

/* Select Language
====================================================*/
const showLangSelectDialog = function () {
    showDialog(
        dialogTextOutput('langSelect') +
            '<ul class="language_selector_group"><li class="language_sel_group"><span class="global_icon material-symbols-outlined">public</span><button class="lang_sel_btn ' +
            (soundMode ? 'sound_on' : '') +
            '">' +
            languageList['currentLang'] +
            '</button><span class="lang_sel_arrow_bg"><span class="lang_sel_arrow material-symbols-outlined">expand_more</span></span></li><ul class="lang_sel_box"></ul></ul>' +
            dialogTextOutput('langSelectNote'),
        [
            { label: dialogTextOutput('changeLabel'), cmd: 'changeLanguage();' },
            { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
        ]
    );

    initLanguageList();
};

/* Maintenance
====================================================*/
const showMaintenanceDialog = function () {
    // generate maintenance display
    $(maintenanceBox).append('<li class="maintenance_text">' + normTextOutput('maintenanceText') + '</li><li class="maintenance_img"><img src="/assets/img/common/cat.png" alt="maint_cat" /></li>');
    $('.maint_server_name').text($(serverSelBtn).text());
    $(logoutCont).append('<button class="btn_logout' + (soundMode ? ' sound_on' : '') + '" onclick="onClickLogOutBtn();">' + normTextOutput('logoutBtn') + '</button>');

    // show maintenance
    $(maintenanceBox).show();

    showDialog(dialogTextOutput('serverMaint'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

/* Add Character
====================================================*/
const showCantAddCharDialog = function () {
    showDialog(dialogTextOutput('cantAddChar'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

const showAddCharDialog = function (uid) {
    showDialog(dialogTextOutput('addChar'), [
        {
            label: dialogTextOutput('addLabel'),
            cmd: 'showWaitAddCharDialog("' + uid + '"); ' + (soundMode && "playSound('IDR_WAV_OK');") + '',
        },
        { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
    ]);
};

const showWaitAddCharDialog = function (uid) {
    const requestData = JSON.stringify({ user_id: uid });
    addCharacterMode = true;

    showDialog(dialogTextOutput('addCharWait'));
    apiUsersAction('add-character', requestData);
};

const showAddCharDoneDialog = function () {
    addCharacterMode = false;

    showDialog(dialogTextOutput('addCharDone'), [{ label: dialogTextOutput('restartLabel'), cmd: 'restartGame();' }]);
};

const showFailAddCharErrNormDialog = function () {
    addCharacterMode = false;

    showDialog(dialogTextOutput('addCharErrNorm'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

/* Delete Character
====================================================*/
const showCantDelCharDialog1 = function () {
    showDialog(dialogTextOutput('cantDeleteChar1'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

const showCantDelCharDialog2 = function () {
    showDialog(dialogTextOutput('cantDeleteChar2'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

const showDelCharDialog1 = function (name, cid) {
    showDialog(
        '<p>' + dialogTextOutput('delCharPrefix') + name + dialogTextOutput('charIdPart') + cid + '] </span>' + dialogTextOutput('delCharConfirm'),
        [
            {
                label: dialogTextOutput('delCharLabel'),
                cmd: 'showDelCharDialog2("' + name + '", "' + cid + '"); ' + (soundMode && "playSound('IDR_WAV_OK');") + '',
                isStandby: true,
            },
            { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
        ],
        1000
    );
};

const showDelCharDialog2 = function (name, cid) {
    showDialog(
        dialogTextOutput('delCharIdCheck') + dialogTextOutput('delCharIdInputElm'),
        [
            {
                label: dialogTextOutput('delCharLabel'),
                cmd: 'checkDelID("' + name + '", "' + cid + '"); ' + (soundMode && "playSound('IDR_WAV_OK');") + '',
                isStandby: true,
            },
            { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
        ],
        1000
    );
};

const showWaitDelCharDialog = function (name, cid) {
    const requestData = JSON.stringify({ char_id: cid });
    deleteCharacterMode = true;

    showDialog('<p>' + (launcherLanguage === 'ja' ? '「' : '"') + name + dialogTextOutput('charIdPart') + cid + '] </span>' + dialogTextOutput('delCharWait'));
    apiUsersAction('delete-character', requestData);
};

const showDelCharDoneDialog = function () {
    deleteCharacterMode = false;

    showDialog(dialogTextOutput('delCharDone'), [{ label: dialogTextOutput('restartLabel'), cmd: 'restartGame();' }]);
};

const showFailDelCharErrNormDialog = function () {
    deleteCharacterMode = false;

    showDialog(dialogTextOutput('delCharErrNorm'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

const showFailDelCharErrMatchDialog = function (name, cid) {
    deleteCharacterMode = false;

    showDialog(dialogTextOutput('delCharErrPrefix') + name + dialogTextOutput('charIdPart') + cid + '] </span>' + dialogTextOutput('delCharErrMatch'), [
        { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
    ]);
};

/* Start Game
====================================================*/
const showStartGameDialog = function (name, hid, cid) {
    showDialog(dialogTextOutput('startGame') + '<p>' + (launcherLanguage === 'ja' ? '「' : '"') + name + dialogTextOutput('charIdPart') + cid + '] </span>', [
        {
            label: dialogTextOutput('yesLabel'),
            cmd: 'checkUpdateMode("' + hid + '"); hideDialog();',
        },
        {
            label: dialogTextOutput('noLabel'),
            cmd: 'hideDialog();',
        },
    ]);
};

const showAutoLoginStartGameDialog = function () {
    showDialog(
        dialogTextOutput('startGame') +
            '<section class="character_selection auto_login"><div class="character_units"><div class="scroll scroll_up' +
            (soundMode ? ' sound_on' : '') +
            '"></div><div class="char_unit_wrapper"><div class="swiper-wrapper"></div></div><div class="scroll scroll_down' +
            (soundMode ? ' sound_on' : '') +
            '"></div></div></section>',
        [
            {
                label: dialogTextOutput('yesLabel'),
                cmd: 'autoLoginPrepareBeginUpdate(); hideDialog();',
            },
            {
                label: dialogTextOutput('noLabel'),
                cmd: 'hideDialog();',
            },
        ]
    );
};

/*=========================================================
　　　　　IIFE on the Launcher
=======================================================*/
$(function () {
    // by default, launcher window can't be moved
    enableDrag(false);

    // get text data first
    getTextData();

    // prevent user from selecting all texts in the launcher
    $(document).on('selectstart', function (e) {
        !$(e.target).is('input') && e.preventDefault();
    });
    $(document).on('mousedown', function (e) {
        !$(e.target).is('input') && e.preventDefault();
    });

    // play a sound when hovering the element with sound_on class
    $(document).on('mouseover', '.sound_on', function () {
        playSound('IDR_WAV_SEL');
    });

    // play a sound when clicking the element with sound_on class except for login btn
    $(document).on('mousedown', '.sound_on', function (e) {
        e.target !== $(loginBtn).get(0) && playSound('IDR_WAV_OK');
    });

    // focus event on input
    $(document).on('focus', 'input', function () {
        soundMode && playSound('IDR_WAV_OK');
    });

    // play sound on pressing key and begin auth when Enter key
    $(document).on('keypress', 'input', function (e) {
        if (e.keyCode === 13) {
            serverNotSelected ? (soundMode && playSound('IDR_WAV_OK'), onAuthError(msgLogTextOutput('noSrvSelected'))) : $(e.target).is('.username_input, .password_input') && beginAuthProcess();
        } else {
            soundMode && playSound('IDR_WAV_SEL');
        }
    });

    $(document).on('click', function (e) {
        // click outside the server list to close the list
        if (!$(e.target).closest('' + serverSelBtn + ', ' + serverListBox + '').length) {
            serverListOpen && hideSrvSelList();
        }

        // click outside the language list to close the list
        if (!$(e.target).closest('' + languageSelBtn + ', ' + languageListBox + '').length) {
            languageListOpen && hideLangSelList();
        }

        // click outside the inputs to remove focus
        if (!$(e.target).closest('' + inputUsername + ', ' + inputPassword + '').length) {
            $('' + inputUsername + ', ' + inputPassword + '').blur();
        }
    });
});
