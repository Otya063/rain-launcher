var updateDisabled = true;

function trackPageView(e, E) {
    console.log('trackPageView:\ne=' + e + '\nE=' + E);
    return;
}

function trackEvent(e, E, t, r) {
    var m = '<br>EVENT > e=' + e + ':E=' + E + ':t=' + t + ':r=' + r;
    console.log(m);
}

function scrollBarHandler(selector) {
    this.$el = $(selector);
    this.$el.is(':hidden') ? this.appendScrollBar() : this.dynamicScrollBar();
}

scrollBarHandler.prototype.dynamicScrollBar = function () {
    this.$el.get(0).scrollHeight > this.$el.get(0).clientHeight && this.appendScrollBar();
};

scrollBarHandler.prototype.appendScrollBar = function () {
    this.$el.mCustomScrollbar({
        scrollInertia: 0,
        mouseWheelPixels: 20,
        autoHideScrollbar: false,
        advanced: {
            updateOnContentResize: true,
            autoScrollOnFocus: true,
        },
    });
};

const textData = {
    xhrspr: '<!--###content###-->',
    dmsrvs: "<?xml version='1.0' encoding='UTF-8'><server_groups><group idx='1' nam='Rain1'/><group idx='2' nam='Rain2'/><group idx='3' nam='Rain3'/><group idx='4' nam='Rain4'/><group idx='5' nam='Rain5'/></server_groups>",
    anch: 'You can create a new character. <br> Press [Start Game] to create your character.',
    cwpt: 'Weapon',
    pcst: 'Last Login',
    afac: 'You do not have permission to do this.',
    afde: 'Character encoding not supported.',
    nosrvsel: 'No server is currently selected. Please select one from the list.',
    afipe: 'Wrong ID/Password.',
    af102: 'The server is busy at the moment.<br>Please try again later.',
    af301: 'The ID you have entered is temporarily suspended.',
    af304: 'Authentication has been temporarily halted due to entering multiple incorrect passwords.<br>Please wait an hour and log in again.',
    aferr: 'Unknown error occurred.',
    af321: 'The security card data is different.',
    noidpass: 'First, please enter both your User ID and Password.',
    uflm0: 'The server is currently under maintenance and cannot be joined.<br>Please try again later.',
    dmb0: 'Register now',
    dmb1: 'Refresh',
    dmb2: 'Delete',
    dmb3: 'Cancel',
    dmb4: 'Close',
    dmb5: 'Yes',
    dmb6: 'No',
    dmb7: 'Add now',
    dmb8: 'Ignore',
    dmb9: 'Ignore',
    dmt0: 'Trial course registration is required.<br>Register for a trial course below.<br>(You can register for free .',
    dmt1: 'Once you have registered for the trial course,<br>please wait a moment and then press the [Refresh] button below.',
    dmca0: 'Would you like to add a new character?<br>Press [Add now] below.',
    dmca1: 'A new character slot will be requested momentarily,<br>please wait a few seconds and then press<br>the [Refresh] button below.',
    dmcd0: 'The selected character will be deleted<br>',
    dmcd1: "<span class='uid'> (ID:",
    dmcd2: "  </span><br><div class='sp'></div>",
    dmcd3: "<span class='attention'>Deleted characters will not revert to [Ready to Hunt] status,<br>but will be completely deleted.</span> Proceed?",
    dmcd4: "<span class='notes'>[Warning]<br>You will lose the ability to add characters once an additional character has been deleted.<br>You will need to purchase a new<br>add character license to make one.</span>",
    dmcd4_2:
        "<span class='notes'>You're about to remove the last character.<br>If you delete all the characters, you will be provided<br>with one character under your basic contract guarantee!</span>",
    dmcd5: '<br>',
    dmcd6: '  </span> will be deleted.<br>',
    dmcd7: "<span class='attention'>Enter the ID of the selected character then click the <br> [Delete] button.</span><br><div class='sp'></div>",
    dmcd8: "<form action='javascript:void(0 ;'><input type='text' border='0' align='left' name='del_uid' id='del_uid'></form>",
    dmcd9: "The character could not be deleted.<br><div class='sp'></div><span class='attention'>The selected character ID and entered ID do not match.</span>",
    dmcd10: ' <br>is being deleted. <br> Please wait.',
    dmcd11: 'This character cannot be deleted. <br> Please try again later.',
    dmcd12: 'This character cannot be deleted. <br> A period of 7 days from the last deletion<br>must pass in order to delete all characters.',
    dmcd13: "<span class='attention'>One character is guaranteed and provided<br>under the terms of the basic contract</span> <br> All characters have been deleted. <br> You will be provided with one character<br>under your basic contract guarantee!</span><br><span class='notes'>※ A period of 7 days from today is required<br>in order to delete this character.</span>",
    dmcd14: 'Character deleted.',
    dmhl0: 'The Hunter Life Course has expired. <br> Please purchase the Hunter Life course<br>by clicking [Buy now]. <br> (Browser will open ',
    dmhl1: 'Once you have purchased the Hunter Life Course, <br> please wait a moment and then <br> press the [Refresh] button below.',
    dmgs0: 'Selected character <br>',
    dmgs1: ' </span><br><br>Log in and start the game <br> with the selected character?',
    SIGN_EFAILED: 'Failed to connect to authentication server.',
    SIGN_EILLEGAL: 'Authentication cancelled due to wrong input.',
    SIGN_EALERT: 'A processing error has occured with the authentication server.',
    SIGN_EALERT_COOP: 'The entered ID has not completed COG integration, <br> or a server was selected that you cannot log in to with this ID.',
    SIGN_EABORT: 'Internal process at the authentication server has crashed.',
    SIGN_ERESPONSE: 'Process terminated due to abnormal authentication response.',
    SIGN_EDATABASE: 'Failed to access database.',
    SIGN_ESUSPEND: 'This account has been temporarily suspended..',
    SIGN_EELIMINATE: 'This account has been permanently suspended.',
    SIGN_ECLOSE_EX: 'Login failed due to too much traffic.',
    SIGN_EIPADDR: 'You cannot connect to the game server from your region.',
    SIGN_EOTHER: 'Failed to authenticate ID.',
    SIGN_EAPP: 'Authentication failed with an unexpected error in the client.',
    SIGN_EPASS: 'Wrong ID/Password.',
    SRV_MNT: "<span class='attention'>Unable to log in due to maintenance being performed.</span>",
};

function textOutput(textType) {
    try {
        return decodeURIComponent(textData[textType]);
    } catch (e) {
        return 'Text Data Not Found.';
    }
}

let MODE_BRANCH = true,
    AT_MOVE_MODE_ENABLED = false;

function launcherMovingHandler() {
    $('.move')
        .hover(function () {
            // when the mouse button is hovering and pressed within the area
            AT_MOVE_MODE_ENABLED !== true && $('.overlay').fadeIn(200), (AT_MOVE_MODE_ENABLED = true), DoBeginDrag(true);
        })
        .mouseout(function () {
            // when the mouse button is released within the area
            AT_MOVE_MODE_ENABLED !== false && $('.overlay').fadeOut(200), (AT_MOVE_MODE_ENABLED = false), DoBeginDrag(false);
        });
}

function DoGetMhfBootMode() {
    'use strict';

    try {
        return window.external.getMhfBootMode();
    } catch (e) {
        return '_MHF_NORMAL';
    }
}

function DoGetIniLastServerIndex() {
    'use strict';

    try {
        return window.external.getIniLastServerIndex();
    } catch (e) {
        return 0;
    }
}

function DoSetIniLastServerIndex(e) {
    'use strict';
    try {
        window.external.setIniLastServerIndex(e);
    } catch (e) {}
}

function DoGetServerList() {
    'use strict';
    try {
        return window.external.getServerList();
    } catch (e) {
        return textOutput('dmsrvs');
    }
}

function DoGetMhfMutexNumber() {
    'use strict';

    try {
        return window.external.getMhfMutexNumber();
    } catch (e) {
        return 0;
    }
}

function DoMinimizeWindow() {
    'use strict';

    DoPlaySound('IDR_WAV_OK');
    window.external.minimizeWindow();
}

function DoCloseWindow() {
    'use strict';

    DoPlaySound('IDR_WAV_OK');
    window.external.closeWindow();
}

function DoOpenMhlConfig() {
    'use strict';

    DoPlaySound('IDR_WAV_OK');
    window.external.openMhlConfig();
}

function DoRestartMhf() {
    'use strict';

    DoPlaySound('IDR_WAV_OK');
    window.external.restartMhf();
}

function DoOpenBrowser(e) {
    'use strict';

    window.external.openBrowser(e);
}

function DoBeginDrag(e) {
    'use strict';
    try {
        window.external.beginDrag(e);
    } catch (e) {}
}

function DoGetUserId() {
    'use strict';

    try {
        return window.external.getUserId() || '';
    } catch (e) {
        return '';
    }
}

function DoGetPassword() {
    'use strict';

    try {
        return window.external.getPassword() || '';
    } catch (e) {
        return '';
    }
}

function DoLoginCog(e, E, t) {
    'use strict';
    try {
        return window.external.loginCog(e, E, t);
    } catch (e) {}
}

function DoLoginHangame() {
    'use strict';
    try {
        window.external.loginHangame();
    } catch (e) {}
}

function DoLoginDmm() {
    'use strict';
    try {
        window.external.loginDmm();
    } catch (e) {}
}

function DoGetLastAuthResult() {
    'use strict';

    try {
        return window.external.getLastAuthResult();
    } catch (e) {
        return 'NULL';
    }
}

function DoGetSignResult() {
    'use strict';

    try {
        return window.external.getSignResult();
    } catch (e) {
        return 'SIGN_EFAILED';
    }
}

function DoStartUpdate() {
    'use strict';

    try {
        return updateDisabled ? false : window.external.startUpdate();
    } catch (e) {
        return true;
    }
}

function DoGetUpdatePercentageTotal() {
    'use strict';

    try {
        return window.external.getUpdatePercentageTotal();
    } catch (e) {
        return 0;
    }
}

function DoGetUpdatePercentageFile() {
    'use strict';

    try {
        return window.external.getUpdatePercentageFile();
    } catch (e) {
        return 0;
    }
}

function DoGetUpdateStatus() {
    'use strict';
    try {
        return String(window.external.getUpdateStatus());
    } catch (e) {
        return 'UM_UPDATE_OK';
    }
}

function DoGetAccountRights() {
    'use strict';

    try {
        return window.external.getAccountRights();
    } catch (e) {
        return '';
    }
}

function DoGetLauncherReturnCode() {
    'use strict';

    try {
        return String(window.external.getLauncherReturnCode());
    } catch (e) {
        return 'NULL';
    }
}

function DoExitLauncher() {
    'use strict';
    try {
        window.external.exitLauncher();
    } catch (e) {}
}

function DoCheckIsEnableSessionId() {
    'use strict';
    try {
        return window.external.isEnableSessionId();
    } catch (e) {
        return !0;
    }
}

function DoGetCharacterInfo() {
    'use strict';

    try {
        return window.external.getCharacterInfo();
    } catch (e) {
        return '';
    }
}

function DoDeleteCharacter(e) {
    'use strict';

    try {
        return window.external.deleteCharacter(e);
    } catch (e) {
        return true;
    }
}

function DoSelectCharacter(e, E) {
    'use strict';
    try {
        window.external.selectCharacter(e, E);
    } catch (e) {}
}

function DoPlaySound(e) {
    'use strict';
    try {
        window.external.playSound(e);
    } catch (e) {}
}

function DoExtractLog(e) {
    'use strict';
    try {
        return window.external.extractLog(e);
    } catch (e) {
        return '';
    }
}

var EXE_MUTEX = 0,
    EVT_PHASE = 'prepare',
    STORAGE = {},
    TRG_STORAGE_KEY = {},
    HOSTS = {},
    COG_MODE = !0,
    NHN_MODE = !0,
    IE_STATE = {},
    CS_ELMS = {},
    ABS_DOC = null,
    IS_MODAL = !1;

function switchEvtPhase(e) {
    'use strict';
    EVT_PHASE = e;
}

function addEvent(e) {
    'use strict';
    trackEvent('launcher', EVT_PHASE, e);
}

var _KEY_ACT_MODAL = function () {},
    KEY_ACT_DEF;

function resetKeyActDefMode() {
    'use strict';
    KEY_ACT_DEF = function (e) {
        switch (e.which) {
            case 9:
                return !1;
        }
        return !0;
    };
}

function openDefBrowser(e) {
    'use strict';
    DoPlaySound('IDR_WAV_OK'), trackPageView(e, ''), DoOpenBrowser(e);
}

function overrideAnker(selector) {
    $(selector)
        .find('a')
        .each(function () {
            const originalURL = $(this).attr('href');
            $(this).attr('href', "javascript:openDefBrowser('" + originalURL + "');");
        });
}

function getIEVer() {
    'use strict';
    var e = { isIE: !1, version: 0 },
        E = window.navigator.userAgent.toLowerCase();
    if (E.match(/(msie|MSIE)/) || E.match(/(T|t)rident/)) {
        e.isIE = !0;
        var t = E.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3];
        e.version = parseInt(t, 10);
    }
    trackEvent('launcher', 'ie', e.version);
}

function modeCheck(e, E) {
    'use strict';
    return e.indexOf(E) + E.length === e.length;
}

function isTrEnabled() {
    'use strict';
    var e = DoGetAccountRights();
    e = e.toLowerCase();
    var E = $('<div>' + e + '</div>'),
        t = !1;
    return (
        E.find('right').each(function (e, E) {
            if ('trial' === $(E).attr('name')) return !(t = !0);
        }),
        t
    );
}

function isHlEnabled() {
    'use strict';
    var e = DoGetAccountRights();
    e = e.toLowerCase();
    var E = $('<div>' + e + '</div>'),
        t = !1;
    return (
        E.find('right').each(function (e, E) {
            if ('basic' === $(E).attr('name')) return !(t = !0);
        }),
        t
    );
}

function readCookie() {
    'use strict';
    var e = '';
    STORAGE = {};
    try {
        e = document.cookie;
    } catch (e) {}
    if ('' !== e) {
        e = e.split(';');
        for (var E = 0; E < e.length; E++) {
            var t = e[E].split('='),
                r = t[0].split(' ').join('');
            TRG_STORAGE_KEY[r] = r && (STORAGE[r] = decodeURIComponent(t[1]));
        }
    }
    STORAGE['cogid' + EXE_MUTEX] || (STORAGE['cogid' + EXE_MUTEX] = ''), STORAGE['pw' + EXE_MUTEX] || (STORAGE['pw' + EXE_MUTEX] = '');
}

function writeCookie() {
    'use strict';
    var e = [];
    for (var E in STORAGE) STORAGE.hasOwnProperty(E) && e.push(E + '=' + STORAGE[E]);
    if (e.length) {
        var t = new Date();
        t.setDate(t.getDate() + 365);
        try {
            for (var r = 0; r < e.length; r++) document.cookie = e[r] + '; expires=' + t.toGMTString();
        } catch (e) {}
    }
}

function delCoockie(e) {
    'use strict';
    if (STORAGE[e])
        try {
            document.cookie = e + '=' + STORAGE[e] + '; expires=' + new Date(0).toGMTString();
        } catch (e) {}
}
resetKeyActDefMode(),
    (function () {
        'use strict';
        getIEVer(), (EXE_MUTEX = DoGetMhfMutexNumber()), ((TRG_STORAGE_KEY = {})['cogid' + EXE_MUTEX] = !0);
    })(),
    (function () {
        'use strict';
        var e,
            E,
            t,
            r = location.host;

        if (((COG_MODE = -1 !== r.indexOf('')), (NHN_MODE = -1 !== r.indexOf('hangame-')), (t = COG_MODE ? 'cog-' : NHN_MODE ? 'hangame-' : 'dmm-'), modeCheck(r, 'mhf-z.jp')))
            (MODE_BRANCH = !1), (e = ''), (E = 'jp');
        else {
            if (!modeCheck(r, 'mhf-z.net')) return;
            (MODE_BRANCH = !0), (e = -1 !== r.indexOf('stage') ? 'stage-' : 'debug-'), (E = 'net');
        }
    })();

let INF_URL = '/launcher/en/launcher_list.html',
    INF_SEL_LI = '.launcher_info_list',
    INF_SEL_US = '.launcher_info_list img, .launcher_info_list a';

function beginLoadInfo() {
    'use strict';
    $.ajax({
        type: 'GET',
        url: INF_URL,
        dataType: 'text',
        cache: false,
        success: function (e) {
            $(INF_SEL_LI).html(e);
            overrideAnker(INF_SEL_LI);
            new scrollBarHandler(INF_SEL_LI);
        },
    });
}

var CHR_CRR = 0,
    CHR_DEF = 0,
    CHR_UNIT_Y = [0, 18, 60, 102, 120],
    CHR_UNIT_I = Math.floor(0.5 * CHR_UNIT_Y.length),
    CHR_SCR = !1,
    CHR_UID = null,
    CHR_HR = null,
    CHR_DEL_TOI = null,
    CHR_DEL_STATE = 'NULL',
    CHR_DEL_NAME = '',
    CHR_DEL_UID = null,
    CHR_SEL_BOX = '#launcher_character_select',
    CHR_SEL_UNIT = CHR_SEL_BOX + ' .unit',
    CHR_SEL_UP = CHR_SEL_BOX + ' .scroll.up',
    CHR_SEL_DOWN = CHR_SEL_BOX + ' .scroll.down',
    CHR_SEL_ADD = CHR_SEL_BOX + ' .btn_add',
    CHR_SEL_DEL = CHR_SEL_BOX + ' .btn_del',
    CHR_IS_WAIT = !1;

function convWpType(e) {
    'use strict';
    var E = {
        'Sword%20%26%20Shield': 'onehandsword',
        '%E7%89%87%E6%89%8B%E5%89%A3': 'onehandsword',
        'Dual%20Swords': 'twinsword',
        '%E5%8F%8C%E5%89%A3': 'twinsword',
        'Great%20Sword': 'largesword',
        '%E5%A4%A7%E5%89%A3': 'largesword',
        'Long%20Sword': 'longsword',
        '%E5%A4%AA%E5%88%80': 'longsword',
        Hammer: 'hammer',
        '%E3%83%8F%E3%83%B3%E3%83%9E%E3%83%BC': 'hammer',
        'Hunting%20Horn': 'horn',
        '%E7%8B%A9%E7%8C%9F%E7%AC%9B': 'horn',
        Lance: 'lance',
        '%E3%83%A9%E3%83%B3%E3%82%B9': 'lance',
        Gunlance: 'gunlance',
        '%E3%82%AC%E3%83%B3%E3%83%A9%E3%83%B3%E3%82%B9': 'gunlance',
        Tonfa: 'senryukon',
        '%E7%A9%BF%E9%BE%8D%E6%A3%8D': 'senryukon',
        'Switch%20Axe%20F': 'slashaxe',
        '%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%A2%E3%83%83%E3%82%AF%E3%82%B9': 'slashaxe',
        '%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%A2%E3%83%83%E3%82%AF%E3%82%B9F': 'slashaxe',
        '%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%A2%E3%83%83%E3%82%AF%E3%82%B9%EF%BC%A6': 'slashaxe',
        'Magnet%20Spike': 'magnetspike',
        '%E3%83%9E%E3%82%B0%E3%83%8D%E3%83%83%E3%83%88%E3%82%B9%E3%83%91%E3%82%A4%E3%82%AF': 'magnetspike',
        'Light%20Bowgun': 'lbowgun',
        '%E3%83%A9%E3%82%A4%E3%83%88%E3%83%9C%E3%82%A6%E3%82%AC%E3%83%B3': 'lbowgun',
        'Heavy%20Bowgun': 'hbowgun',
        '%E3%83%98%E3%83%93%E3%82%A3%E3%83%9C%E3%82%A6%E3%82%AC%E3%83%B3': 'hbowgun',
        Bow: 'bow',
        '%E5%BC%93': 'bow',
    };
    return E[encodeURIComponent(e)] || '';
}

function convLastDateStr(e) {
    'use strict';
    var E = new Date(1e3 * e);
    return E.getFullYear() + '.' + (E.getMonth() + 1) + '.' + E.getDate();
}

function entityRef(e) {
    'use strict';
    return (e = (e = (e = (e = e.split('&').join('&amp;')).split('<').join('&lt;')).split('>').join('&gt;')).split('"').join('&quot;'));
}

function createCharUnit(e, E, t, r, a, _, s, n) {
    'use strict';
    _ = _.split('F').join('Ｆ');
    E = E.split('狩人申請可能').join('Ready to Hunt');
    var o = $('<div class="unit" uid="' + t + '" name="' + E + '" hr="' + r + '" to="0"></div>');
    if ((o.append($('<div class="num n' + e + '"></div>')), o.append($('<div class="sign"></div>')), o.append($('<p class="name">' + entityRef(E) + '</p>')), 0 === r))
        o.addClass('new'), o.append($('<p class="new">' + textOutput('anch') + '</p>'));
    else {
        var i = convWpType(_);
        o.addClass(i),
            o.append($('<div class="icon' + ('' !== i ? ' ' + i : '') + '"></div>')),
            o.append($('<p class="wp">' + textOutput('cwpt') + '<br>' + translateWeapon(_) + '</p>')),
            o.append($('<p class="data">HR' + r + (0 < a ? '　GR' + a : '') + '　' + ('M' === s ? '♂' : '♀') + '<br>ID:' + t + '<br>' + textOutput('pcst') + ':' + convLastDateStr(n) + '</p>'));
    }
    return (
        o.append($('<div class="cover"></div>')),
        o.click(function () {
            $(this).hasClass('crr') && gameStart();
        }),
        o
    );
}

function removeStampe() {}

function addStamp() {}

function getCrrChar() {
    'use strict';
    return $($(CHR_SEL_UNIT)[CHR_CRR]);
}

function convTop2Z(e) {
    'use strict';
    var E = Math.max(0, Math.min(120, parseInt($(e).css('top'), 10)));
    return 100 - (Math.abs(E - 60) / 60) * 100;
}

function scrollCharUni(e, r) {
    'use strict';
    if (!CHR_SCR) {
        CHR_SCR = !0;
        var a = 'easeOutBounce' !== (r = r || 'easeOutBounce') ? 1 : 400;
        CHR_CRR += e;
        var E = $(CHR_SEL_UNIT).length;
        (CHR_CRR = Math.max(0, Math.min(CHR_CRR, E - 1))),
            'easeOutBounce' === r && (updateScrollBtnState(), updateCharCtrlBtnState()),
            $(CHR_SEL_UNIT).each(function (E, t) {
                $(t).stop();
                var e = E - CHR_CRR + CHR_UNIT_I;
                e < 0
                    ? ($(t).css('top', CHR_UNIT_Y[0] + 'px'),
                      $(t).css('display', 'none'),
                      $(t).css('z-index', '0'),
                      $(t).removeClass('crr'),
                      $($(t).children('.cover')[0]).stop().fadeTo(100, 1),
                      removeStampe(t))
                    : CHR_UNIT_Y.length <= e
                    ? ($(t).css('top', CHR_UNIT_Y[CHR_UNIT_Y.length - 1] + 'px'),
                      $(t).css('display', 'none'),
                      $(t).css('z-index', '0'),
                      $(t).removeClass('crr'),
                      $($(t).children('.cover')[0]).stop().fadeTo(100, 1),
                      removeStampe(t))
                    : ($(t).css('display', 'block'),
                      $($(t).children('.cover')[0])
                          .stop()
                          .fadeTo(a, Math.min(0.85, 0.65 * Math.abs(e - CHR_UNIT_I))),
                      $(t).animate(
                          { top: CHR_UNIT_Y[e] },
                          {
                              duration: a,
                              easing: r,
                              progress: function () {
                                  var e = convTop2Z(t);
                                  $(this).css('z-index', e),
                                      60 < e ? E === CHR_CRR && ($($(t).children('.cover')[0]).stop().fadeTo(100, 0), $(t).addClass('crr'), addStamp(t)) : ($(t).removeClass('crr'), removeStampe(t));
                              },
                              complete: function () {
                                  (CHR_SCR = !1),
                                      E === CHR_CRR &&
                                          'easeOutBounce' !== r &&
                                          (CHR_CRR !== CHR_DEF ? scrollCharUni(1, 'swing') : (addStamp(t), updateScrollBtnState(), updateCharCtrlBtnState(), $(CHR_SEL_BOX).show()));
                              },
                          }
                      ));
            });
    }
}

function updateScrollBtnState() {
    'use strict';
    var e = $(CHR_SEL_UNIT).length;
    1 < e
        ? (0 !== CHR_CRR ? $(CHR_SEL_UP).removeClass('disabled') : $(CHR_SEL_UP).addClass('disabled'),
          CHR_CRR !== e - 1 ? $(CHR_SEL_DOWN).removeClass('disabled') : $(CHR_SEL_DOWN).addClass('disabled'),
          $(CHR_SEL_BOX + ' .scroll').show())
        : $(CHR_SEL_BOX + ' .scroll').hide(),
        kdCharSelMode();
}

function updateCharCtrlBtnState() {
    'use strict';
    $(CHR_SEL_UNIT).length < 11
        ? ($(CHR_SEL_ADD).removeClass('disabled'), $(CHR_SEL_ADD).fadeTo(100, 1), $(CHR_SEL_ADD).attr('onMouseOver', "DoPlaySound('IDR_WAV_SEL');"))
        : ($(CHR_SEL_ADD).attr('onMouseOver', ''), $(CHR_SEL_ADD).removeAttr('onMouseOver'), $(CHR_SEL_ADD).addClass('disabled'), $(CHR_SEL_ADD).fadeTo(200, 0.4)),
        '0' !== getCrrChar().attr('hr')
            ? ($(CHR_SEL_DEL).removeClass('disabled'), $(CHR_SEL_DEL).fadeTo(100, 1), $(CHR_SEL_DEL).attr('onMouseOver', "DoPlaySound('IDR_WAV_SEL');"))
            : ($(CHR_SEL_DEL).attr('onMouseOver', ''), $(CHR_SEL_DEL).removeAttr('onMouseOver'), $(CHR_SEL_DEL).addClass('disabled'), $(CHR_SEL_DEL).fadeTo(200, 0.4));
}

function kdCharSelMode() {
    'use strict';
    KEY_ACT_DEF = function (e) {
        if (IS_MODAL) return !1;
        var E = !0;
        switch (e.which) {
            case 38:
            case 33:
                CHR_SCR || !$(CHR_SEL_UP).is(':visible') || $(CHR_SEL_UP).hasClass('disabled') || $(CHR_SEL_UP).click(), (E = !1);
                break;
            case 40:
            case 34:
                CHR_SCR || !$(CHR_SEL_DOWN).is(':visible') || $(CHR_SEL_DOWN).hasClass('disabled') || $(CHR_SEL_DOWN).click(), (E = !1);
                break;
            case 13:
                CHR_IS_WAIT || ((CHR_IS_WAIT = !0), $(CHR_SEL_BOX + ' .btn_start').click()), (E = !1);
                break;
            case 9:
                E = !1;
        }
        return E;
    };
}

function translateWeapon(e) {
    var E = {
        'Sword & Shield': 'Sword & Shield',
        片手剣: 'Sword & Shield',
        'Dual Swords': 'Dual Swords',
        双剣: 'Dual Swords',
        'Great Sword': 'Great Sword',
        大剣: 'Great Sword',
        'Long Sword': 'Long Sword',
        太刀: 'Long Sword',
        Hammer: 'Hammer',
        ハンマー: 'Hammer',
        'Hunting Horn': 'Hunting Horn',
        狩猟笛: 'Hunting Horn',
        Lance: 'Lance',
        ランス: 'Lance',
        Gunlance: 'Gunlance',
        ガンランス: 'Gunlance',
        Tonfa: 'Tonfa',
        穿龍棍: 'Tonfa',
        'Switch Axe F': 'Switch Axe F',
        スラッシュアックスＦ: 'Switch Axe F',
        'Magnet Spike': 'Magnet Spike',
        マグネットスパイク: 'Magnet Spike',
        'Heavy Bowgun': 'Heavy Bowgun',
        ヘビィボウガン: 'Heavy Bowgun',
        'Light Bowgun': 'Light Bowgun',
        ライトボウガン: 'Light Bowgun',
        Bow: 'Bow',
        弓: 'Bow',
    };
    return E[e] || 'Unknown';
}

function showCharSelector() {
    'use strict';
    switchEvtPhase('standby'),
        (CHR_DEF = CHR_CRR = 0),
        (CHR_IS_WAIT = !1),
        $('#launcher_login_panel').hide(),
        $('#launcher_update_progress').hide(),
        $('.msg_logs_area').hide(),
        $(CHR_SEL_BOX).hide(),
        $('.btn_logout').show(),
        $(CHR_SEL_BOX + ' .units').html(''),
        $(CHR_SEL_BOX + ' .scroll').hide();

    var e = DoGetCharacterInfo();
    (e = (e = e.split("'").join('"')).split('&apos;').join("'")), (e = $('<div>' + e + '</div>'));

    var t = $(e.find('CharacterInfo')[0]).attr('defaultUid');
    e.find('Character').each(function (e, E) {
        $(E).attr('uid') === t && (CHR_DEF = e),
            $(CHR_SEL_BOX + ' .units').append(
                createCharUnit(
                    e + 1,
                    $(E).attr('name'),
                    $(E).attr('uid'),
                    parseInt($(E).attr('HR'), 10),
                    parseInt($(E).attr('GR'), 10),
                    $(E).attr('weapon'),
                    $(E).attr('sex'),
                    parseInt($(E).attr('lastLogin'), 10)
                )
            );
    }),
        $(CHR_SEL_UNIT).each(function (e, E) {
            $(E).removeClass('crr'), $(E).css('display', 'none'), $(E).css('z-index', '0');
            var t = e - CHR_CRR + CHR_UNIT_I;
            t < 0
                ? $(E).css('top', CHR_UNIT_Y[0] + 'px')
                : CHR_UNIT_Y.length <= t
                ? $(E).css('top', CHR_UNIT_Y[CHR_UNIT_Y.length - 1] + 'px')
                : ($(E).css('top', CHR_UNIT_Y[t] + 'px'),
                  $(E).css('display', 'block'),
                  $(E).css('z-index', convTop2Z(E)),
                  t === CHR_UNIT_I
                      ? ($(E).addClass('crr'), $($(E).children('.cover')[0]).stop().fadeTo(0, 1), addStamp(E))
                      : $($(E).children('.cover')[0])
                            .stop()
                            .fadeTo(0, Math.min(0.75, 0.45 * Math.abs(t - CHR_UNIT_I))));
        }),
        CHR_CRR !== CHR_DEF ? scrollCharUni(1, 'swing') : (updateScrollBtnState(), updateCharCtrlBtnState(), $(CHR_SEL_BOX).show());
}

function charDelPolling() {
    'use strict';
    stopCharDelPolling();
    var e = DoGetLastAuthResult();
    if (e !== CHR_DEL_STATE)
        switch ((CHR_DEL_STATE = e)) {
            case 'AUTH_NULL':
            case 'AUTH_PROGRESS':
            case 'AUTH_SUCCESS':
            case 'AUTH_ERROR_NET':
            case 'AUTH_ERROR_ACC':
            case 'AUTH_ERROR_PWD':
            case 'DEL_PROGRESS':
                break;
            case 'DEL_SUCCESS':
                return 1 < $(CHR_SEL_UNIT).length ? showCompleteDelCharDialog() : showAddGuaranteeCharDialog(), showCharSelector(), void (CHR_DEL_UID = null);
            case 'DEL_ERROR_NET':
            case 'DEL_ERROR_IVL':
            case 'DEL_ERROR_MNC':
                return void showFailDelCharDialog($(CHR_SEL_UNIT).length);
        }
    CHR_DEL_TOI = setTimeout(function () {
        charDelPolling();
    }, 1e3);
}

function stopCharDelPolling() {
    'use strict';
    if (CHR_DEL_TOI) {
        try {
            clearTimeout(CHR_DEL_TOI);
        } catch (e) {}
        CHR_DEL_TOI = null;
    }
}

function charDelReset() {
    'use strict';
    (CHR_DEL_UID = null), hideModalDialog();
}

function charDelete() {
    'use strict';
    stopCharDelPolling(),
        (CHR_DEL_STATE = 'NULL'),
        DoDeleteCharacter(CHR_DEL_UID),
        (CHR_DEL_TOI = setTimeout(function () {
            charDelPolling();
        }, 1e3));
}

function waitGameStart() {
    'use strict';
    DoSelectCharacter(CHR_UID, CHR_UID),
        DoPlaySound('IDR_WAV_LOGIN'),
        $('#launcher_game_start_wait').show(),
        hideModalDialog(),
        setTimeout(function () {
            DoExitLauncher();
        }, 500);
}

function checkHasHL() {
    'use strict';
    100 <= CHR_HR ? (isHlEnabled() ? waitGameStart() : (DoPlaySound('IDR_WAV_OK'), showGetHLDialog())) : waitGameStart();
}

function gameStartCalcel() {
    'use strict';
    (CHR_IS_WAIT = !1), hideModalDialog();
}

function gameStart() {
    'use strict';
    DoPlaySound('IDR_WAV_OK');
    var e = getCrrChar();
    (CHR_UID = e.attr('uid')), (CHR_HR = parseInt(e.attr('hr'), 10)), showGameStartDialog(e.attr('name'), e.attr('uid'));
}

function checkDelID() {
    'use strict';
    CHR_DEL_UID === $('#del_uid').val() ? showWaitDelCharDialog(CHR_DEL_NAME, CHR_DEL_UID) : showWaitDelCharIdErrorDialog();
}
var UPD_ANIM_SEQ = { loop: [] };
UPD_ANIM_SEQ.loop.push({ c: 'f0', delay: 100 }),
    UPD_ANIM_SEQ.loop.push({ c: 'f1', delay: 300 }),
    UPD_ANIM_SEQ.loop.push({ c: 'f2', delay: 100 }),
    UPD_ANIM_SEQ.loop.push({ c: 'f3', delay: 300 }),
    (UPD_ANIM_SEQ.fini = []),
    UPD_ANIM_SEQ.fini.push({ c: 'f4', delay: 100 }),
    UPD_ANIM_SEQ.fini.push({ c: 'f5', delay: 50 }),
    UPD_ANIM_SEQ.fini.push({ c: 'f6', delay: 50 }),
    UPD_ANIM_SEQ.fini.push({ c: 'f7', delay: 2e3 });

var UPD_POLLING = !0,
    UPD_PRE = 'f0',
    UPD_FRM_LOOP = 0,
    UPD_FRM_FINI = 0,
    UPD_TOTAL = 0,
    UPD_BAR_WID = 302,
    UPD_BAR_PER = 0.01 * UPD_BAR_WID,
    EXIT_WAIT = 3e3,
    UPD_ANIM_TOI = null;

function clearAnimSq() {
    'use strict';
    if (UPD_ANIM_TOI) {
        try {
            clearTimeout(UPD_ANIM_TOI);
        } catch (e) {}
        UPD_ANIM_TOI = null;
    }
}

function updateProgressAnimation() {
    'use strict';
    clearAnimSq();
    var e = $('#launcher_update_progress .anim'),
        E = UPD_ANIM_SEQ.loop[UPD_FRM_LOOP];
    e.removeClass(UPD_PRE),
        (UPD_PRE = E.c),
        e.addClass(E.c),
        (UPD_ANIM_TOI = setTimeout(function () {
            UPD_FRM_LOOP++,
                UPD_POLLING
                    ? (UPD_ANIM_SEQ.loop.length <= UPD_FRM_LOOP && (UPD_FRM_LOOP = 0), updateProgressAnimation())
                    : UPD_ANIM_SEQ.loop.length <= UPD_FRM_LOOP
                    ? ((UPD_FRM_FINI = 0), updateProgressAnimationFinish())
                    : updateProgressAnimation();
        }, E.delay));
}

function updateProgressAnimationFinish() {
    'use strict';
    clearAnimSq();
    var e = $('#launcher_update_progress .anim'),
        E = UPD_ANIM_SEQ.fini[UPD_FRM_FINI];
    e.removeClass(UPD_PRE),
        (UPD_PRE = E.c),
        e.addClass(E.c),
        (UPD_ANIM_TOI = setTimeout(function () {
            UPD_FRM_FINI++,
                UPD_ANIM_SEQ.fini.length > UPD_FRM_FINI
                    ? (UPD_ANIM_SEQ.fini.length === UPD_FRM_FINI + 1 && DoPlaySound('IDR_NIKU'), updateProgressAnimationFinish())
                    : (clearAnimSq(), finishUpdateProcess());
        }, E.delay));
}

function switchUpdateAfterState() {
    'use strict';
    switch (DoGetUpdateStatus()) {
        case 'UM_UPDATE_OK':
            switch (DoGetLauncherReturnCode()) {
                case 'NORMAL':
                    return void (UPD_POLLING = !1);
                case 'SELFUP':
                    return void setTimeout(function () {
                        DoExitLauncher();
                    }, EXIT_WAIT);
                case 'ERR':
                    return void switchAuthMode();
            }
            break;
        case 'UM_UPDATE_NG':
            return void switchAuthMode();
    }
    setTimeout(function () {
        progressUpdatePercentage();
    }, 50);
}

function progressUpdatePercentage() {
    'use strict';
    var e = Math.ceil(DoGetUpdatePercentageTotal() * UPD_BAR_PER);
    if (0 === e)
        switch (DoGetUpdateStatus()) {
            case 'UM_UPDATE_OK':
                switch (DoGetLauncherReturnCode()) {
                    case 'NORMAL':
                        return void (UPD_POLLING = !1);
                    case 'SELFUP':
                        return void setTimeout(function () {
                            DoExitLauncher();
                        }, EXIT_WAIT);
                }
                break;
            case 'UM_UPDATE_NG':
                return void switchAuthMode();
        }
    UPD_TOTAL < e
        ? ((UPD_TOTAL = e),
          $('#launcher_update_progress .bar_area .file_progress').width(UPD_TOTAL === UPD_BAR_WID ? 0 : UPD_BAR_WID),
          $('#launcher_update_progress .bar_area .total_progress')
              .stop()
              .animate({ width: UPD_TOTAL }, 150, function () {
                  switchUpdateAfterState();
              }))
        : ($('#launcher_update_progress .bar_area .file_progress').width(Math.ceil(DoGetUpdatePercentageFile() * UPD_BAR_PER)), switchUpdateAfterState());
}

function finishUpdateProcess() {
    'use strict';
    DoCheckIsEnableSessionId()
        ? (showCharSelector(), $('.btn_preferences').show())
        : ($('#launcher_login_panel').hide(), $('#launcher_update_progress').hide(), $('.msg_logs_area').hide(), showMaintenanceDialog());
}

function startUpdateProcess() {
    'use strict';
    $('.btn_preferences').hide(),
        switchEvtPhase('update'),
        (KEY_ACT_DEF = function (e) {
            switch (e.which) {
                case 9:
                    return !1;
                default:
                    return !0;
            }
        });
    $('#launcher_update_progress .bar_area .file_progress').width(0);
    $('#launcher_update_progress .bar_area .total_progress').width(0);
    $('#launcher_login_panel').hide();

    UPD_POLLING
        ? DoStartUpdate()
            ? ((UPD_FRM_LOOP = 0),
              updateProgressAnimation(),
              $('#launcher_update_progress').show(),
              setTimeout(function () {
                  progressUpdatePercentage();
              }, 50))
            : (updateDisabled ? finishUpdateProcess() : $('#launcher_login_panel').show(), onAuthError(textOutput('uflm0')))
        : finishUpdateProcess();
}

let AT_IS_ENABLED = !0,
    AT_ID = '',
    AT_PW = '',
    AT_FRAME = null,
    AT_FRAME_CB = Math.floor(1e3 * Math.random()),
    AT_TOI = null,
    AT_STATUS = 'AUTH_NULL',
    AT_SEL_ID = '.userid_input',
    AT_SEL_PW = '.password_input',
    AT_SRV_SEL_BTN = '.srv_sel_btn',
    AT_SRV_LIST_BOX = '.srv_sel_box',
    AT_SRV_LIST_ITEM = '.srv_sel_box .srv',
    AT_SEL_LBTN = '#launcher_login_panel .btn_login',
    AT_SEL_ICHK = '#launcher_login_panel .check_save_id',
    AT_SEL_PFGT = '#launcher_login_panel .btn_forgot',
    AT_SBOX_TOI = null,
    AT_SBOX_SEL_ENABLED = false,
    AT_SBOX_IS_OPENED = false,
    AT_ANIM_TOI = null,
    AT_IS_AUTOLC = !1,
    AT_MODE = '',
    AT_FOCUS_ELMS = [],
    AT_FOCUS_IDX = 0,
    AT_BB_TOI = null,
    AT_SVID,
    AT_SVID_DEF = '1000',
    AT_IS_UNSELECTED_SRV = true;

function onReceiveMsg(evt) {
    'use strict';
    var res;
    if (modeCheck(evt.origin, 'capcom-onlinegames.jp'))
        switch ((eval('res = ' + evt.data), String(res.action))) {
            case 'standby':
                parent.cslak.postMessage('{id:"' + AT_ID + '", pw:"' + AT_PW + '", svid:"' + (AT_SVID || AT_SVID_DEF) + '", lifetime:"60", action:"login"}', evt.origin);
                break;
            default:
                filteShortLifeAuthKeyResponse(res);
        }
}

function showMhfMaintenanceDialog() {
    'use strict';
    $('#launcher_login_panel').hide(), $('#launcher_auth_maintenance').addClass('mhf'), resetKeyActDefMode(), $('#launcher_auth_maintenance').show();
}

function onAuthError(e, E) {
    'use strict';
    switchEvtPhase('prepare'),
        e && addLogMsg(e, (E = E || 'y'), true),
        hideAuthProgress(),
        unlockAuthEdit(),
        setTimeout(function () {
            $(AT_SEL_LBTN).fadeTo(200, 1, function () {
                $(AT_SEL_LBTN).removeClass('disabled'), (AT_IS_ENABLED = !0);
            });
        }, 5e3);
}

function stopLoginPolling() {
    'use strict';
    if (AT_TOI) {
        try {
            clearInterval(AT_TOI);
        } catch (e) {}
        AT_TOI = null;
    }
}

function loginPolling() {
    'use strict';
    var e = DoGetLastAuthResult();
    if (e !== AT_STATUS)
        switch ((AT_STATUS = e)) {
            case 'AUTH_NULL':
            case 'AUTH_PROGRESS':
            case 'DELETE_PROGRESS':
            case 'DELETE_SUCCESS':
            case 'DELETE_ERROR_NET':
            case 'DELETE_ERROR_IVL':
            case 'DELETE_ERROR_MNC':
                break;
            case 'AUTH_SUCCESS':
                if (
                    (stopLoginPolling(),
                    hideAuthProgress(),
                    COG_MODE &&
                        ($(AT_SEL_ICHK).hasClass('checked') && ((STORAGE['cogid' + EXE_MUTEX] = $(AT_SEL_ID).val()), writeCookie()),
                        ((STORAGE['pw' + EXE_MUTEX] = $(AT_SEL_PW).val()), writeCookie()),
                        $('.id_srv_label').text($(AT_SEL_ID).val() + '@' + $(AT_SRV_SEL_BTN).text()),
                        !isTrEnabled()))
                )
                    return void showNoTRDialog();
                startUpdateProcess();
                break;
            case 'AUTH_ERROR_NET':
                stopLoginPolling(), onAuthError(textOutput('SIGN_EFAILED'), 'r');
                break;
            case 'AUTH_ERROR_ACC':
            case 'AUTH_ERROR_PWD':
                stopLoginPolling();

                var E = DoGetSignResult();
                switch (E) {
                    case 'SIGN_EFAILED':
                    case 'SIGN_EILLEGAL':
                    case 'SIGN_EABORT':
                    case 'SIGN_ERESPONSE':
                    case 'SIGN_EDATABASE':
                        onAuthError(textOutput(E), 'r');
                        break;
                    case 'SIGN_EALERT':
                        if ('1018' === AT_SVID) onAuthError(textOutput('SIGN_EALERT_COOP'));
                        else {
                            var t = $(AT_SRV_SEL_BTN).text();
                            0 <= t.indexOf('④')
                                ? onAuthError(textOutput('SIGN_EALERT_COOP'))
                                : 0 <= t.toUpperCase().indexOf('XBOX')
                                ? onAuthError(textOutput('SIGN_EALERT_COOP'))
                                : onAuthError(textOutput(E), 'r');
                        }
                        break;
                    case 'SIGN_ESUSPEND':
                    case 'SIGN_EELIMINATE':
                    case 'SIGN_ECLOSE_EX':
                    case 'SIGN_EIPADDR':
                        onAuthError(textOutput(E));
                        break;
                    case 'SIGN_ECLOSE':
                    case 'SIGN_ENOTREADY':
                    case 'SIGN_EALREADY':
                        onAuthError(), showMhfMaintenanceDialog();
                        break;
                    case 'SIGN_ERIGHT':
                        isTrEnabled() ? onAuthError(textOutput('SIGN_EOTHER')) : (onAuthError(), showNoTRDialog());
                        break;
                    case 'SIGN_EPASS':
                        onAuthError(textOutput(E));
                        break;
                    default:
                        onAuthError(textOutput('SIGN_EOTHER'));
                }
                break;
            default:
                stopLoginPolling(), onAuthError(textOutput('aferr') + ' [' + AT_STATUS + ']');
        }
}

function createShortLifeAuthKeyDone(e) {
    'use strict';
    !(AT_STATUS = 'AUTH_NULL') === DoLoginCog($(AT_SEL_ID).val(), $(AT_SEL_PW).val(), $(AT_SEL_PW).val())
        ? onAuthError(textOutput('SIGN_EAPP'), 'r')
        : (AT_TOI = setInterval(function () {
              loginPolling();
          }, 1e3));
}

function createShortLifeAuthKey(e, E) {
    //"use strict"; "" !== _EXT_MODE ? (AT_ID = e, AT_PW = E, AT_FRAME ? (AT_FRAME.attr("src", ""), AT_FRAME.attr("src", _HOSTS[AT_COG_MODE] + "./bnr/launcher.html?q=" + AT_FRAME_CB)) : ((AT_FRAME = $('<iframe id="cslak" name="cslak" width="1" height="1" style="overflow:hidden; position:fixed; left:-500px; top:-700px; visibility:hidden;"></iframe>')).attr("src", _HOSTS[AT_COG_MODE] + "./bnr/launcher.html?q=" + AT_FRAME_CB), $(document.body).append(AT_FRAME)), AT_FRAME_CB++) :
    filteShortLifeAuthKeyResponse({ code: '000' });
}

function showCogMaintenanceDialog() {
    'use strict';
    $('#launcher_login_panel').hide(), resetKeyActDefMode(), $('#launcher_auth_maintenance').show();
}

function filteShortLifeAuthKeyResponse(e) {
    'use strict';
    switch ((e.code && clearBBTO(), '000' !== String(e.code) && addEvent('code_' + String(e.code)), String(e.code))) {
        case '000':
            createShortLifeAuthKeyDone(e.skey);
            break;
        case '777':
        case '202':
        case '220':
        case '221':
        case '227':
            onAuthError(textOutput('afac') + ' [' + e.code + ']', 'r');
            break;
        case '200':
            onAuthError(textOutput('afde'));
            break;
        case '201':
        case '300':
        case '302':
        case '320':
            onAuthError(textOutput('afipe'));
            break;
        case '102':
            onAuthError(textOutput('af102'));
            break;
        case '301':
            onAuthError(textOutput('af301'));
            break;
        case '304':
            onAuthError(textOutput('af304'), 'r');
            break;
        case '235':
        case '309':
        case '360':
            onAuthError(textOutput('aferr') + '（' + e.code + '）');
            break;
        case '321':
            onAuthError(textOutput('af321'));
            break;
        case '9000':
            onAuthError(), showCogMaintenanceDialog();
            break;
        default:
            e.code ? onAuthError(textOutput('aferr') + '（' + e.code + '）') : onAuthError(textOutput('aferr'));
    }
}

function selectServerItem(target_elm) {
    $('.selected_srv').removeClass('selected_srv'), $(target_elm).toggleClass('selected_srv');
}

function lockAuthEdit() {
    'use strict';
    (AT_SBOX_SEL_ENABLED = !1), $(AT_SEL_ID).attr('disabled', !0), $(AT_SEL_PW).attr('disabled', !0);
}

function unlockAuthEdit() {
    'use strict';
    (AT_SBOX_SEL_ENABLED = !0), $(AT_SEL_ID).attr('disabled', !1), $(AT_SEL_PW).attr('disabled', !1), $('.btn_preferences').show();
}

function switchAuthSrv(e) {
    'use strict';
    (AT_SVID = $(e).attr('svid')), $(AT_SRV_SEL_BTN).text($(e).text());
}

function showSrvSelList() {
    'use strict';
    // disable the button
    $(AT_SRV_SEL_BTN).prop('disabled', true);

    $(AT_SRV_LIST_BOX).slideDown(300, function () {
        // re-enable the button after the animation is complete
        $(AT_SRV_SEL_BTN).prop('disabled', false);
    }),
        $(AT_SRV_SEL_BTN).addClass('opened_svr_list'),
        (AT_SBOX_IS_OPENED = true);
}

function hideSrvSelList() {
    'use strict';
    // disable the button
    $(AT_SRV_SEL_BTN).prop('disabled', true);

    $(AT_SRV_LIST_BOX).slideUp(300, function () {
        // re-enable the button after the animation is complete
        $(AT_SRV_SEL_BTN).prop('disabled', false);
    }),
        $(AT_SRV_SEL_BTN).removeClass('opened_svr_list'),
        (AT_SBOX_IS_OPENED = false);
}

function initSrvSelList() {
    'use strict';

    // check from local storage whether users have selected a server before
    AT_IS_UNSELECTED_SRV = localStorage.getItem('NeverSelectedSrv') !== 'false';

    // get server list xml data and wrap it in a div element
    const serverList = DoGetServerList();

    // get the index of the last selected server from INI settings and convert it to an integer
    // in local environment, lastSelectedIndex = 0;
    let lastSelectedIndex = DoGetIniLastServerIndex();
    lastSelectedIndex = parseInt(lastSelectedIndex, 10);

    // remove all children of the server selection list
    $(AT_SRV_LIST_BOX).children().remove();

    // loop through each group in the server list xml data and add a server element to the server selection list for each one
    $(serverList)
        .find('group')
        .each(function (index, srvItem) {
            const svid = $(srvItem).attr('svid') ? $(srvItem).attr('svid') : AT_SVID_DEF;
            const isBlocked = $(srvItem).attr('ip') === '';
            const name = $(srvItem).attr('nam');

            // create and append the server element to the server selection list
            $(AT_SRV_LIST_BOX).append($('<li' + (isBlocked ? ' block="true"' : '') + ' class="srv" idx="' + index + '" svid="' + svid + '">' + name + '</li>'));
        });

    // if the last selected index is out of bounds, set true to the variable for initializing
    (lastSelectedIndex < 0 || lastSelectedIndex > $(AT_SRV_LIST_ITEM).length) && (AT_IS_UNSELECTED_SRV = true);

    // if user have previously selected a server, set auth server and assign class to the target server
    AT_IS_UNSELECTED_SRV ? $(AT_SRV_SEL_BTN).text('Select Your Server') : (switchAuthSrv($(AT_SRV_LIST_ITEM)[lastSelectedIndex]), $('.srv').eq(lastSelectedIndex).addClass('selected_srv'));

    // hide the server selection list
    $(AT_SRV_LIST_BOX).hide();

    // the mouseover event to sever select button to play a sound when hovering
    $(AT_SRV_SEL_BTN).mouseover(function () {
        DoPlaySound('IDR_WAV_SEL');
    });

    // add the server selection button to the focus elements and bind the mousedown event to it
    $(AT_SRV_SEL_BTN).mousedown(function () {
        AT_SBOX_SEL_ENABLED && (DoPlaySound('IDR_WAV_OK'), AT_SBOX_IS_OPENED ? hideSrvSelList() : showSrvSelList());
    });

    // the mouseover event to each server element to play a sound when hovering
    $(AT_SRV_LIST_ITEM).mouseover(function () {
        DoPlaySound('IDR_WAV_SEL');
    });

    // the mousedown event to each server element to select it as the active server, and hide the server selection list
    $(AT_SRV_LIST_ITEM).mousedown(function () {
        DoPlaySound('IDR_WAV_OK');
        AT_SBOX_TOI && (clearTimeout(AT_SBOX_TOI), (AT_SBOX_TOI = null));
        switchAuthSrv($(this));
        const index = parseInt($(this).attr('idx'), 10);
        DoSetIniLastServerIndex(String(index));
        selectServerItem($(this));
        AT_IS_UNSELECTED_SRV && (localStorage.setItem('NeverSelectedSrv', 'false'), (AT_IS_UNSELECTED_SRV = false));
        hideSrvSelList();
    });

    // the click event to the server selection box and button to stop clicks from propagating to the document
    $(AT_SRV_LIST_BOX + AT_SRV_SEL_BTN).mousedown(function (e) {
        e.stopPropagation();
    });
}

function showAuthProgress() {
    'use strict';
    var e = 0;
    (AT_ANIM_TOI = setInterval(function () {
        $('#launcher_login_panel .progress .anim').removeClass('f' + e), (e = 11 <= e ? 0 : e + 1), $('#launcher_login_panel .progress .anim').addClass('f' + e);
    }, 100)),
        $('#launcher_login_panel .progress').fadeIn(200);
}

function hideAuthProgress() {
    'use strict';
    $('#launcher_login_panel .progress')
        .stop()
        .fadeOut(200, function () {
            AT_ANIM_TOI && (clearInterval(AT_ANIM_TOI), (AT_ANIM_TOI = null));
        });
}

function showBackboneTimeoutDialog() {
    'use strict';
    $('#launcher_login_panel').hide(), $('#launcher_auth_maintenance').addClass('error'), resetKeyActDefMode(), $('#launcher_auth_maintenance').show();
}

function clearBBTO() {
    'use strict';
    if (AT_BB_TOI) {
        try {
            clearTimeout(AT_BB_TOI);
        } catch (e) {}
        AT_BB_TOI = null;
    }
}

function onBackboneTimeout() {
    'use strict';
    clearBBTO(), onAuthError(), showBackboneTimeoutDialog();
}

function authExec() {
    'use strict';
    return !0;
}

function beginAuthProcess(e) {
    'use strict';
    if (($('.btn_preferences').hide(), e && ((AT_IS_ENABLED = !0), clearLog()), AT_IS_ENABLED))
        if ((switchEvtPhase('auth'), switchAuthMode(), COG_MODE)) {
            if ('' === $(AT_SEL_ID).val() || '' === $(AT_SEL_PW).val()) DoPlaySound('IDR_WAV_OK'), onAuthError(textOutput('noidpass'), 'r');
            else if (authExec()) {
                DoPlaySound('IDR_WAV_PRE_LOGIN'), (AT_IS_ENABLED = !1), lockAuthEdit(), showAuthProgress(), clearBBTO();
                var E = setTimeout(function () {
                    onBackboneTimeout();
                }, 6e4);
                (AT_BB_TOI = E), $(AT_SEL_LBTN).addClass('disabled'), $(AT_SEL_LBTN).fadeTo(200, 0.6), createShortLifeAuthKey($(AT_SEL_ID).val(), $(AT_SEL_PW).val());
            }
        } else
            NHN_MODE
                ? ((AT_IS_ENABLED = !1), lockAuthEdit(), showAuthProgress(), (AT_STATUS = 'AUTH_NULL'), DoLoginHangame())
                : ((AT_IS_ENABLED = !1), lockAuthEdit(), showAuthProgress(), (AT_STATUS = 'AUTH_NULL'), DoLoginDmm()),
                (AT_TOI = setInterval(function () {
                    loginPolling();
                }, 1e3));
}

function isAutoLogin() {
    'use strict';
    var e = !1;
    switch ((AT_MODE = DoGetMhfBootMode())) {
        case '_MHF_SELFUP':
        case '_MHF_DMM_SELF_UPDATE':
        case '_MHF_AUTOLC':
        case '_MHF_DMM_AUTO_LAUNCH':
            e = !0;
    }
    return e;
}

function removeAuthHover(e) {
    'use strict';
    for (var E = 0; E < AT_FOCUS_ELMS.length; E++) $(AT_FOCUS_ELMS[E]).removeClass('hover');
    e && (AT_FOCUS_IDX = -1);
}

function setAuthHover(e) {
    'use strict';
    for (var E = 0; E < AT_FOCUS_ELMS.length; E++) e === AT_FOCUS_ELMS[E] ? ((AT_FOCUS_IDX = E), $(AT_FOCUS_ELMS[E]).addClass('hover')) : $(AT_FOCUS_ELMS[E]).removeClass('hover');
}

function switchAuthMode() {
    'use strict';
    $('#launcher_update_progress').hide(),
        $(CHR_SEL_BOX).hide(),
        $('.msg_logs_area').show(),
        $('#launcher_login_panel').show(),
        $('.id_srv_label').text(''),
        $('.btn_logout').hide(),
        $(AT_FOCUS_ELMS[AT_FOCUS_IDX]).addClass('hover'),
        (KEY_ACT_DEF = function (e) {
            if (IS_MODAL) return !1;
            var E = AT_FOCUS_IDX,
                t = !0;
            switch (e.which) {
                case 13:
                    if (AT_IS_ENABLED)
                        switch (AT_FOCUS_ELMS[E]) {
                            case AT_SRV_SEL_BTN:
                                AT_SBOX_IS_OPENED || $(AT_SRV_SEL_BTN).mousedown();
                                break;
                            default:
                                $(AT_FOCUS_ELMS[E]).click();
                        }
                    t = !1;
                    break;
                case 9:
                    if ((removeAuthHover(), AT_IS_ENABLED)) {
                        if ((e.shiftKey ? (E = --E < 0 ? AT_FOCUS_ELMS.length - 1 : E) : (E++, (E = AT_FOCUS_ELMS.length <= E ? 0 : E)), $(AT_FOCUS_ELMS[E]).hasClass('disabled')))
                            return (AT_FOCUS_IDX = E), KEY_ACT_DEF(e);
                        $(AT_FOCUS_ELMS[E]).addClass('hover');
                    }
                    t = !1;
            }
            return (AT_FOCUS_IDX = E), t;
        }),
        unlockAuthEdit(),
        $(AT_SEL_LBTN).fadeTo(1, 1),
        $(AT_SEL_LBTN).removeClass('disabled'),
        (AT_IS_ENABLED = !0);
}

function initAuth() {
    'use strict';
    if (
        (COG_MODE && initSrvSelList(),
        // enable scroll bar on server selector box
        new scrollBarHandler('.srv_sel_box'),
        AT_FOCUS_ELMS.push(AT_SEL_LBTN),
        COG_MODE && (AT_FOCUS_ELMS.push(AT_SEL_ICHK), AT_FOCUS_ELMS.push(AT_SEL_PFGT)),
        $(AT_SEL_LBTN).click(function () {
            AT_IS_UNSELECTED_SRV ? (DoPlaySound('IDR_WAV_OK'), onAuthError(textOutput('nosrvsel'), 'r')) : beginAuthProcess();
        }),
        (AT_IS_AUTOLC = isAutoLogin()),
        COG_MODE)
    ) {
        readCookie();
        var e = '';
        '' === e && STORAGE['cogid' + EXE_MUTEX] && (e = STORAGE['cogid' + EXE_MUTEX]),
            $(AT_SEL_ID).val(e),
            $(AT_SEL_ID).focus(function () {
                DoPlaySound('IDR_WAV_OK');
            });

        var E = '';
        if (
            ('' === E && STORAGE['pw' + EXE_MUTEX] && (E = STORAGE['pw' + EXE_MUTEX]),
            (E = '' !== E ? E : $(AT_SEL_PW).attr('default')),
            $(AT_SEL_PW).val(E),
            $(AT_SEL_PW).focus(function () {
                DoPlaySound('IDR_WAV_OK'), setAuthHover(AT_SEL_PW);
            }),
            $(AT_SEL_ID + ',' + AT_SEL_PW).keydown(function (e) {
                switch (e.which) {
                    case 117:
                        return !1;
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                    case 65:
                    case 66:
                    case 67:
                    case 68:
                    case 69:
                    case 70:
                    case 71:
                    case 72:
                    case 73:
                    case 74:
                    case 75:
                    case 76:
                    case 77:
                    case 78:
                    case 79:
                    case 80:
                    case 81:
                    case 82:
                    case 83:
                    case 84:
                    case 85:
                    case 86:
                    case 87:
                    case 88:
                    case 89:
                    case 90:
                    case 96:
                    case 97:
                    case 98:
                    case 99:
                    case 100:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                    case 107:
                    case 109:
                    case 110:
                    case 111:
                    case 186:
                    case 187:
                    case 188:
                    case 189:
                    case 190:
                    case 191:
                    case 192:
                    case 219:
                    case 220:
                    case 221:
                    case 222:
                    case 226:
                        DoPlaySound('IDR_WAV_SEL');
                }
            }),
            $(AT_SEL_ICHK).click(function () {
                $(AT_SEL_ICHK).toggleClass('checked'), DoPlaySound('IDR_WAV_OK'), !$(AT_SEL_ICHK).hasClass('checked') && (delCoockie('cogid' + EXE_MUTEX), delCoockie('pw' + EXE_MUTEX));
            }),
            $(AT_SEL_ICHK).hover(
                function () {
                    setAuthHover(AT_SEL_ICHK);
                },
                function () {
                    removeAuthHover();
                }
            ),
            $(AT_SEL_PFGT).hover(
                function () {
                    setAuthHover(AT_SEL_PFGT);
                },
                function () {
                    removeAuthHover();
                }
            ),
            STORAGE['cogid' + EXE_MUTEX] && !AT_IS_AUTOLC && $(AT_SEL_ICHK).addClass('checked'),
            AT_IS_AUTOLC && '' !== e && '' !== E)
        )
            '_MHF_AUTOLC' === AT_MODE && $(AT_SEL_ICHK).toggleClass('checked'), beginAuthProcess();
        else if ('' !== e && '' !== E)
            for (var t = 0; t < AT_FOCUS_ELMS.length; t++)
                if (AT_FOCUS_ELMS[t] === AT_SEL_LBTN) {
                    AT_FOCUS_IDX = t;
                    break;
                }
    } else AT_IS_AUTOLC && beginAuthProcess();
    switchAuthMode();
}
!(function () {
    'use strict';
    try {
        window.addEventListener ? window.addEventListener('message', onReceiveMsg, !1) : window.attachEvent ? window.attachEvent('onmessage', onReceiveMsg) : (window.onmessage = onReceiveMsg);
    } catch (e) {}
})();

let SEL_LOG = '.msg_contents',
    CACHE_CR1 = '',
    CACHE_CR2 = '',
    LOG_TOI = null,
    LOG_INT = 100,
    BTNS_IS_ENABLED = null,
    DIALOG_BTN_TOI = null,
    CONF_SND_BLOCK = false,
    ENTERDOWN_TOI = null,
    LAST_KEYDOWN = 0;

function addLogMsg(message, type, isOnlyOneMsg) {
    'use strict';
    if (message) {
        let prefix = '';
        let suffix = '</span>';

        switch (type) {
            case 'g':
                prefix = '<span class="green">';
                break;
            case 'b':
                prefix = '<span class="blue">';
                break;
            case 'y':
                prefix = '<span class="yellow">';
                break;
            case 'r':
                prefix = '<span class="red">';
        }
        let logMessage = prefix + message + suffix;

        if (isOnlyOneMsg) {
            $(SEL_LOG + ' p').html(CACHE_CR1 + logMessage + '<br>');
            CACHE_CR2 = logMessage;
            new scrollBarHandler('.msg_contents');
        } else {
            if (CACHE_CR2 !== '') {
                logMessage = CACHE_CR2 + '<br>' + logMessage;
                CACHE_CR2 = '';
            }
            // accumulate elements
            CACHE_CR1 += logMessage + '<br>';
            $(SEL_LOG + ' p').html(CACHE_CR1);
            new scrollBarHandler('.msg_contents');
        }
    }
}

function clearLog() {
    'use strict';
    (CACHE_CR1 = ''), $(SEL_LOG + ' p').html('');
}

function getExLog() {
    'use strict';

    // stop logging before starting
    stopExLog();

    // extract logs and sanitize them for display
    const extractedLog = DoExtractLog();
    if (extractedLog) {
        // split logs into individual messages
        const messages = extractedLog
            .split('&')
            .join('&amp;')
            .split('"')
            .join('&quot;')
            .split('<')
            .join('&lt;')
            .split('>')
            .join('&gt;')
            .replace(/[\n\r]/g, '<br>')
            .replace(/[\r]/g, '<br>')
            .replace(/[\n]/g, '<br>')
            .split('<br>');

        // process each message and determine its type
        let isOnlyOneMsg = false;
        messages.forEach(function (message) {
            let type = '';

            // determine message type based on its contents
            if (/再度お試しください|失敗|できませんでした/.test(message)) {
                type = 'y'; // yellow
            } else if (/^Launcher Ver/.test(message)) {
                type = 'g'; // green
                isOnlyOneMsg = true;
            } else if (/^AUTH_SUCCESS/.test(message)) {
                type = 'b'; // blue
            } else if (/^\[.*%\]/.test(message)) {
                type = 'y'; // yellow
                isOnlyOneMsg = true;
            }

            // add message to log
            addLogMsg(message, type, isOnlyOneMsg);
            isOnlyOneMsg = false;
        });
    }

    // start logging again
    startExLog();
}

function stopExLog() {
    'use strict';
    if (LOG_TOI) {
        try {
            clearTimeout(LOG_TOI);
        } catch (e) {}
        LOG_TOI = null;
    }
}

function startExLog() {
    'use strict';
    LOG_TOI = setTimeout(function () {
        getExLog();
    }, LOG_INT);
}

function resetModalDialogBtnWaitTimer() {
    'use strict';
    if (DIALOG_BTN_TOI) {
        try {
            clearTimeout(DIALOG_BTN_TOI);
        } catch (e) {}
        DIALOG_BTN_TOI = null;
    }
}
var kuModalAction = function () {};

function showModalDialog(e, E, t) {
    'use strict';
    resetModalDialogBtnWaitTimer(),
        (IS_MODAL = !0),
        (_KEY_ACT_MODAL = function () {}),
        (t = t || {}),
        $('#launcher_modal .dialog p').html(e),
        $('#launcher_modal .dialog p').removeClass(),
        t.elmClass && $('#launcher_modal .dialog p').addClass(t.elmClass),
        $('#launcher_modal .dialog .btns').html('<ul></ul>'),
        (BTNS_IS_ENABLED = t.wait);
    for (var r = 0; r < E.length; r++) {
        var a = $('<div></div>');
        a.addClass('md_btn');
        var _ = '';
        'IDR_SILENCE' !== E[r].snd && (_ = 'DoPlaySound("' + (_ = E[r].snd ? ('IDR_SILENCE' !== E[r].snd ? E[r].snd : null) : 'IDR_WAV_OK') + '");'),
            E[r].isWait
                ? (a.addClass('wait'),
                  a.attr('onMouseOver', 'if (_BTNS_IS_ENABLED) {return; } else {DoPlaySound("IDR_WAV_SEL");}'),
                  '' !== _ && (_ = ' ' + _),
                  a.attr('onclick', 'if (_BTNS_IS_ENABLED) {return false;} else {' + _ + ' ' + E[r].cmd + '}'))
                : (a.attr('onMouseOver', 'DoPlaySound("IDR_WAV_SEL");'), a.attr('onclick', _ + ' ' + E[r].cmd)),
            E[r].fcs && a.addClass('hover'),
            a.text(E[r].label);
        var s = $('<li></li>');
        s.append(a.clone()), E[r].key && s.append($('<div class="sign key_' + E[r].key + '"></div>')), $('#launcher_modal .dialog .btns ul').append(s.clone());
    }
    $('#launcher_modal .dialog .btns ul li div').hover(
        function () {
            $('#launcher_modal .dialog .btns ul li div').removeClass('hover'), $(this).addClass('hover');
        },
        function () {
            $(this).removeClass('hover');
        }
    ),
        $('#launcher_modal .dialog .btns .wait').fadeTo(10, 0.4),
        $('#launcher_modal').show(),
        t.wait &&
            (DIALOG_BTN_TOI = setTimeout(function () {
                $('#launcher_modal .dialog .btns .wait').fadeTo(200, 1, function () {
                    (BTNS_IS_ENABLED = !1), $('#launcher_modal .dialog .btns .wait').removeClass('wait');
                });
            }, t.wait));
}

function hideModalDialog() {
    'use strict';
    (_KEY_ACT_MODAL = function () {}), (kuModalAction = function () {}), $('#launcher_modal').hide(), resetModalDialogBtnWaitTimer(), (IS_MODAL = !1);
}

function showNoTRDialog() {
    'use strict';
    showModalDialog(textOutput('dmt0'), [
        {
            label: textOutput('dmb0'),
            cmd:
                'openDefBrowser("' +
                (COG_MODE ? 'http://www.capcom-onlinegames.jp/pc/right?m=6&service=mhf&right=free' : 'http://members.mh-frontier.jp/auth/dmm_regist/regist.php') +
                '"); showWaitTRDialog();',
        },
    ]);
}

function showWaitTRDialog() {
    'use strict';
    showModalDialog(textOutput('dmt1'), [{ label: textOutput('dmb1'), cmd: 'beginAuthProcess(true); hideModalDialog();' }]);
}

function showMaintenanceDialog() {
    'use strict';
    showModalDialog(textOutput('SRV_MNT'), [{ label: textOutput('dmb4'), cmd: 'DoCloseWindow();' }]);
}

function showAddCharDialog() {
    'use strict';
    var e = 'http://';
    (e += COG_MODE ? 'cog' : NHN_MODE ? 'hangame' : 'dmm'),
        (e += '-members.mhf-z.jp/sp/payment/charadd.html'),
        showModalDialog(textOutput('dmca0'), [
            { label: textOutput('dmb7'), cmd: 'DoLoginCog("' + $(AT_SEL_ID).val() + '+' + '", "' + $(AT_SEL_PW).val() + '","' + $(AT_SEL_PW).val() + '"); showWaitCharAddDialog();' },
            { label: textOutput('dmb8'), cmd: 'hideModalDialog();' },
        ]);
}

function showWaitCharAddDialog() {
    'use strict';
    showModalDialog(textOutput('dmca1'), [{ label: textOutput('dmb1'), cmd: 'beginAuthProcess(true); hideModalDialog();' }]);
}

function showDelCharDialog(e, E) {
    'use strict';
    showModalDialog(
        textOutput('dmcd0') + e + textOutput('dmcd1') + E + textOutput('dmcd2') + textOutput('dmcd3'),
        [
            { label: textOutput('dmb2'), cmd: 'showDelCharDialog2("' + e + '", "' + E + '");', isWait: !0 },
            { label: textOutput('dmb3'), cmd: 'charDelReset();' },
        ],
        { elmClass: 'alert', wait: 3e3 }
    );
}

function showDelCharDialog2(e, E) {
    'use strict';
    showModalDialog(
        textOutput('dmcd0') + e + textOutput('dmcd1') + E + textOutput('dmcd2') + (1 < $(CHR_SEL_UNIT).length ? textOutput('dmcd4') : textOutput('dmcd4_2')),
        [
            { label: textOutput('dmb2'), cmd: 'showDelCharDialog3("' + e + '", "' + E + '");', isWait: !0 },
            { label: textOutput('dmb3'), cmd: 'charDelReset();' },
        ],
        { elmClass: 'alert', wait: 2e3 }
    );
}

function showDelCharDialog3(e, E) {
    'use strict';
    showModalDialog(
        textOutput('dmcd5') + e + textOutput('dmcd1') + E + textOutput('dmcd6') + textOutput('dmcd7') + textOutput('dmcd8'),
        [
            { label: textOutput('dmb2'), cmd: 'checkDelID();', isWait: !0 },
            { label: textOutput('dmb3'), cmd: 'charDelReset();' },
        ],
        { elmClass: 'alert', wait: 1e3 }
    ),
        $('input#del_uid').keydown(function (e) {
            switch (e.which) {
                case 13:
                    return !1;
            }
        }),
        (_KEY_ACT_MODAL = function (e) {
            switch (e.which) {
                case 13:
                    return !1;
            }
        });
}

function showWaitDelCharIdErrorDialog() {
    'use strict';
    showModalDialog(textOutput('dmcd9'), [{ label: textOutput('dmb4'), cmd: 'charDelReset();' }]);
}

function showWaitDelCharDialog(e, E) {
    'use strict';
    showModalDialog(e + ' (ID:' + E + textOutput('dmcd10'), []), charDelete();
}

function showFailDelCharDialog(e) {
    'use strict';
    showModalDialog(textOutput(1 < e ? 'dmcd11' : 'dmcd12'), [{ label: textOutput('dmb4'), cmd: 'charDelReset();' }]);
}

function showAddGuaranteeCharDialog() {
    'use strict';
    showModalDialog(textOutput('dmcd13'), [{ label: textOutput('dmb4'), cmd: 'charDelReset();' }], { elmClass: 'alert' });
}

function showCompleteDelCharDialog() {
    'use strict';
    showModalDialog(textOutput('dmcd14'), [{ label: textOutput('dmb4'), cmd: 'charDelReset();' }]);
}

function showGetHLDialog() {
    'use strict';
    var e = COG_MODE
        ? 'http://www.capcom-onlinegames.jp/pc/right?m=5&service=mhf&templateName=hunterlife'
        : NHN_MODE
        ? 'http://hangame-members.mhf-z.jp/sp/payment/basic.html#basic_price'
        : 'http://dmm-members.mhf-z.jp/sp/payment/basic.html#basic_price';
    showModalDialog(textOutput('dmhl0'), [
        { label: textOutput('dmb7'), cmd: 'openDefBrowser("' + e + '"); showWaitCharAddDialog();' },
        { label: textOutput('dmb9'), cmd: 'waitGameStart();', snd: 'IDR_SILENCE' },
    ]);
}

function showWaitHLDialog() {
    'use strict';
    showModalDialog(textOutput('dmhl1'), [{ label: textOutput('dmb1'), cmd: 'beginAuthProcess(true); hideModalDialog();' }]);
}

function clearEnterDownTimeout() {
    'use strict';
    if (ENTERDOWN_TOI) {
        try {
            clearTimeout(ENTERDOWN_TOI);
        } catch (e) {}
        ENTERDOWN_TOI = null;
    }
}

function showGameStartDialog(e, E) {
    'use strict';
    showModalDialog(
        textOutput('dmgs0') + e + textOutput('dmcd1') + E + textOutput('dmgs1'),
        [
            {
                label: textOutput('dmb5'),
                cmd: 'checkHasHL();',
                snd: 'IDR_SILENCE',
                fcs: !0,
                key: 'y',
            },
            {
                label: textOutput('dmb6'),
                cmd: 'gameStartCalcel();',
                key: 'n',
            },
        ],
        {
            elmClass: 'alert',
        }
    ),
        (LAST_KEYDOWN = 0),
        (ENTERDOWN_TOI = null),
        (_KEY_ACT_MODAL = function (e) {
            var E,
                t,
                r = new Date().getTime();
            if (r - LAST_KEYDOWN < 100) return !0;
            switch (((LAST_KEYDOWN = r), e.which)) {
                case 13:
                    return (
                        (E = '#launcher_modal .dialog .btns ul li div.md_btn'),
                        -1 !==
                            (t = (function () {
                                for (var e = 0; e < $(E).length; e++) if ($($(E)[e]).hasClass('hover')) return e;
                                return -1;
                            })()) &&
                            (clearEnterDownTimeout(),
                            (ENTERDOWN_TOI = setTimeout(function () {
                                $($(E)[t]).click();
                            }, 100))),
                        !1
                    );
                case 89:
                    return clearEnterDownTimeout(), checkHasHL(), !1;
                case 27:
                case 78:
                    return clearEnterDownTimeout(), DoPlaySound('IDR_WAV_OK'), gameStartCalcel(), !1;
                case 9:
                case 38:
                case 40:
                    if (
                        ((E = '#launcher_modal .dialog .btns ul li div.md_btn'),
                        (t = (function () {
                            for (var e = 0; e < $(E).length; e++) if ($($(E)[e]).hasClass('hover')) return e;
                            return -1;
                        })()),
                        $(E).removeClass('hover'),
                        -1 !== t)
                    ) {
                        t += e.shiftKey || 37 === e.which || 38 === e.which ? -1 : 1;
                        var a = $(E).length - 1;
                        t = t < 0 ? a : a < t ? 0 : t;
                    } else t = 0;
                    return $($(E)[t]).addClass('hover'), !1;
            }
        });
}

function openMemberSite() {
    'use strict';
    openDefBrowser('http://' + (COG_MODE ? 'cog-members.mhf-z.jp/' : NHN_MODE ? 'members-mhf-z.hange.jp/' : 'dmm-members.mhf-z.jp/'));
}

function openInquiry() {
    'use strict';
    openDefBrowser('http://' + (COG_MODE ? 'cog' : NHN_MODE ? 'hangame' : 'dmm') + '-members.mhf-z.jp/sp/inquiry/');
}

function openManual() {
    'use strict';
    openDefBrowser('http://' + (COG_MODE ? 'cog' : NHN_MODE ? 'hangame' : 'dmm') + '-members.mhf-z.jp/sp/manual/');
}

function doEval() {
    try {
        addLogMsg(eval(document.getElementById('console').value), 'w');
    } catch (e) {
        addLogMsg('Error on doEval: ' + e, 'r');
    }
}

$(function () {
    'use strict';

    $('html').keydown(function (e) {
        return !!_KEY_ACT_MODAL(e) || (!1 !== _KEY_ACT_MODAL(e) && KEY_ACT_DEF(e));
    });
    (!IE_STATE.isIE || 8 <= IE_STATE.version) && beginLoadInfo(),
        $('a').bind('focus', function () {
            this.blur && this.blur();
        });

    // play a sound when hovering logout button
    $('.btn_logout').mouseover(function () {
        DoPlaySound('IDR_WAV_SEL');
    });

    // play a sound when clicking logout button
    $('.btn_logout').click(function () {
        DoPlaySound('IDR_WAV_OK');
    });

    // play sound when hovering preferences button
    $('.btn_preferences_text').mouseover(function () {
        CONF_SND_BLOCK ? ((CONF_SND_BLOCK = false), startExLog()) : DoPlaySound('IDR_WAV_SEL');
    });

    // play a sound when clicking preferences button
    $('.btn_preferences').click(function () {
        (CONF_SND_BLOCK = true), stopExLog(), DoOpenMhlConfig();
    });

    $('#launcher_menu a,.selsnd,.btn').mouseover(function () {
        DoPlaySound('IDR_WAV_SEL');
    });

    $(CHR_SEL_UP).click(function () {
        DoPlaySound('IDR_WAV_OK'), scrollCharUni(-1);
    });
    $(CHR_SEL_DOWN).click(function () {
        DoPlaySound('IDR_WAV_OK'), scrollCharUni(1);
    });
    $(CHR_SEL_DEL).click(function () {
        if (!$(this).hasClass('disabled') && !CHR_DEL_UID) {
            DoPlaySound('IDR_WAV_OK');
            var e = getCrrChar();
            (CHR_DEL_NAME = e.attr('name')), (CHR_DEL_UID = e.attr('uid')), showDelCharDialog(CHR_DEL_NAME, CHR_DEL_UID);
        }
    });
    $(CHR_SEL_ADD).click(function () {
        $(this).hasClass('disabled') || (DoPlaySound('IDR_WAV_OK'), showAddCharDialog());
    });
    $(CHR_SEL_BOX + ' .btn_start').click(function () {
        gameStart();
    });
    initAuth();

    // initial display of msg log
    startExLog();

    // prevent user from selecting all texts in the launcher
    $(document).on('selectstart', function (e) {
        !$(e.target).is('input') && e.preventDefault();
    });
    $(document).on('mousedown', function (e) {
        !$(e.target).is('input') && e.preventDefault();
    });

    // load grabing function
    launcherMovingHandler();

    // rotate banner
    $('.launcher_bnr').slick({
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

    // by default, launcher window can't be moved
    DoBeginDrag(false);
});
