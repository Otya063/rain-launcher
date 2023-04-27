var updateDisabled = true;

function addEvent() {} // error occurs when deleting, leave this as it is

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
    defaultSrv:
        "<?xml version='1.0' encoding='UTF-8'><server_groups><group idx='1' nam='Rain1'/><group idx='2' nam='Rain2'/><group idx='3' nam='Rain3'/><group idx='4' nam='Rain4'/><group idx='5' nam='Rain5'/></server_groups>",
    readyNewChara: 'You can create a new character. <br> Press [Start Game] to create your character.',
    noSrvSelected: 'No server is currently selected. Please select one from the list.',
    unknownError: 'Unknown error occurred.',
    noUseridPass: 'First, please enter both your User ID and Password.',
    serverMaint: 'The server is currently under maintenance and cannot be joined.<br>Please try again later.',
    SIGN_EFAILED: 'Failed to connect to authentication server.',
    SIGN_EILLEGAL: 'Authentication cancelled due to wrong input.',
    SIGN_EALERT: 'A processing error has occured with the authentication server.',
    SIGN_EALERT_COOP:
        'The entered ID has not completed COG integration, <br> or a server was selected that you cannot log in to with this ID.',
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
};

const dialogTextData = {
    // Start the Game
    startTheGame: '<p class="caution">Are you sure to start the game with the following character?</p>',

    // Add Character
    createChar:
        '<p>Add a new character to your account.<br>Click "Add Now" below, and your browser will open automatically.</p>',
    createCharWait: '<p>Once you have finished adding a character,<br>click "Refresh" below.</p>',

    // Delete Character
    delCharPrefix: 'Do you really want to delete character',
    delCharFirstConf: '<p class="caution">Once deleted, your character data cannot be restored.</p>',
    delLastChar:
        '<p class="warning">You are trying to delete your last character. If all characters are deleted, only [Ready to Hunt] will be displayed as in the initial state.</p>',
    delCharFinalConf: '<p class="caution">Enter your ID of the selected character then click the [Delete] button.</p>',
    delCharUidInput:
        "<input class='del_uid' type='text' name='del_uid' placeholder='Enter your ID here.' autocomplete='off' autocapitalize='off' aria-label='ID' aria-invalid='false'>",
    delLastCharDone:
        'so the character selection will return to its initial state.</p><p class="warning">If you want to delete the first character, you will be able to do so after 7 days from today.</p>',
    delCharErrMatch: '<p class="caution">The specified character ID does not match the entered ID.</p>',
    delCharErrUnk: '<p class="caution">Failed to delete the character.</p><p>Please try again later.</p>',
    delCharErrNeedDays:
        '<p class="caution">Failed to delete the character.</p><p>To delete the last character,<br>please try again at least 7 days after creation.</p>',

    // Server Maintenance
    serverMaint:
        '<p class="caution">Unable to log in due to server maintenance.</p><p>Please wait for a while until the end of maintenance.</p>',
};

function textOutput(textType) {
    return decodeURIComponent(textData[textType]);
}

function dialogTextOutput(textType) {
    return decodeURIComponent(dialogTextData[textType]);
}

function launcherMovingHandler() {
    $('.move')
        .hover(function () {
            // when the mouse button is hovering and pressed within the area
            $('.overlay').fadeIn(200), DoBeginDrag(true);
        })
        .mouseout(function () {
            // when the mouse button is released within the area
            $('.overlay').fadeOut(200), DoBeginDrag(false);
        });
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
        return textOutput('defaultSrv');
    }
}

function DoMinimizeWindow() {
    'use strict';

    playSound('IDR_WAV_OK');
    window.external.minimizeWindow();
}

function DoCloseWindow() {
    'use strict';

    playSound('IDR_WAV_OK');
    window.external.closeWindow();
}

function DoOpenMhlConfig() {
    'use strict';

    playSound('IDR_WAV_OK');
    window.external.openMhlConfig();
}

function DoOpenBrowser(e) {
    'use strict';

    playSound('IDR_WAV_OK'), window.external.openBrowser(e);
}

function DoBeginDrag(e) {
    'use strict';
    try {
        window.external.beginDrag(e);
    } catch (e) {}
}

function DoLoginCog(userId, pass1, pass2) {
    'use strict';
    try {
        return window.external.loginCog(userId, pass1, pass2);
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

function DoGetLauncherReturnCode() {
    'use strict';

    try {
        return String(window.external.getLauncherReturnCode());
    } catch (e) {
        return 'NULL';
    }
}

function exitLauncher() {
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

function getCharacterInfo() {
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

function selectCharacter(name, uid) {
    'use strict';
    try {
        window.external.selectCharacter(name, uid);
    } catch (e) {}
}

function playSound(soundType) {
    'use strict';
    try {
        window.external.playSound(soundType);
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

function overrideAnker(selector) {
    $(selector)
        .find('a')
        .each(function () {
            const originalURL = $(this).attr('href');
            $(this).attr('href', "javascript:DoOpenBrowser('" + originalURL + "');");
        });
}

let infoList = '.info_list';

function beginLoadInfo() {
    'use strict';
    $.ajax({
        type: 'GET',
        url: '/launcher/en/info_list.html',
        dataType: 'text',
        cache: false,
        success: function (infoListData) {
            $(infoList).html(infoListData);
            overrideAnker(infoList);
            new scrollBarHandler(infoList);
        },
    });
}

let currentCharIndex = 0,
    CHR_DEF = 0,
    CHR_UNIT_Y = [0, 18, 60, 102, 120],
    CHR_UNIT_I = Math.floor(0.5 * CHR_UNIT_Y.length),
    CHR_SCR = !1,
    delCharName = '',
    delCharUid = '',
    charSelBox = '.character_selection',
    charSelUnit = charSelBox + ' .unit',
    charSelUpArrow = charSelBox + ' .scroll.up',
    charSelDownArrow = charSelBox + ' .scroll.down',
    charAddButton = charSelBox + ' .char_add',
    charDelButton = charSelBox + ' .char_del';

const convLastLoginDate = function (date) {
    // convert unix timestamp to a date object
    const convDate = new Date(1000 * date);

    // get the language attribute of html tag for locale
    const lang = $('html')[0].lang;

    // set options for the date string and locale based on the language
    const options =
        lang === 'en'
            ? { year: 'numeric', month: 'short', day: 'numeric' }
            : { year: 'numeric', month: 'long', day: 'numeric' };
    const locale = lang === 'en' ? 'en-US' : 'ja-JP';

    // return the localized date string
    return convDate.toLocaleDateString(locale, options);
};

const convEntities = function (name) {
    // define an object of special characters and their corresponding entity references
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

    // replace special characters with their entity references using regex and the entities object
    return name.replace(/[&<>"]/g, function (m) {
        return entities[m];
    });
};

const createCharUnit = function (index, name, uid, hr, gr, weapon, gender, lastLogin) {
    // convert weapon name for style usage
    let weaponStyle = weapon.replace(/\s+/g, '').replace(/&/g, 'And');
    weaponStyle = weaponStyle.toLowerCase().charAt(0) + weaponStyle.slice(1);

    // generate a new div element with the given attributes
    const $charUnit = $(
        '<div class="unit swiper-slide" uid="' + uid + '" name="' + name + '" hr="' + hr + '" to="0"></div>'
    );

    // add a number element, a sign element, and a name element to the div
    $charUnit.append($('<div class="num n' + index + '"></div>'));
    $charUnit.append($('<div class="sign"></div>'));
    $charUnit.append($('<p class="name">' + convEntities(name) + '</p>'));

    hr === 0
        ? // if the character is new (HR is 0), add a new class and a new element to the div
          ($charUnit.addClass('new'),
          $charUnit.append($('<p class="new">' + textOutput('readyNewChara') + '</p>')),
          $charUnit.append(
              $(
                  '<p class="data">HR' +
                      hr +
                      (gr ? '　GR' + gr : '') +
                      '　' +
                      (gender === 'M' ? '♂' : '♀') +
                      '<br>ID:<span class="data_uid">' +
                      uid +
                      '</span><br>' +
                      'Last Login' +
                      ':' +
                      convLastLoginDate(lastLogin) +
                      '</p>'
              )
          ))
        : // if not, add an icon element, a weapon element, and a data element to the div
          ($charUnit.addClass(weaponStyle),
          $charUnit.append($('<div class="icon' + (weaponStyle ? ' ' + weaponStyle : '') + '"></div>')),
          $charUnit.append($('<p class="wp">' + 'Weapon' + '<br>' + weapon + '</p>')),
          $charUnit.append(
              $(
                  '<p class="data">HR' +
                      hr +
                      (gr ? '　GR' + gr : '') +
                      '　' +
                      (gender === 'M' ? '♂' : '♀') +
                      '<br>ID:<span class="data_uid">' +
                      uid +
                      '</span><br>' +
                      'Last Login' +
                      ':' +
                      convLastLoginDate(lastLogin) +
                      '</p>'
              )
          ));

    // add a cover element to the div for none-current character
    //$charUnit.append($('<div class="cover"></div>'));

    // add a click event to start the game if the div has the crr class
    $charUnit.click(function () {
        $(this).hasClass('crr') && gameStart();
    });

    // return the div
    return $charUnit;
};

const getCurrentCharData = function () {
    return $($(charSelUnit)[currentCharIndex]);
};

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
        currentCharIndex += e;
        var E = $(charSelUnit).length;
        (currentCharIndex = Math.max(0, Math.min(currentCharIndex, E - 1))),
            'easeOutBounce' === r && (updateScrollBtnState(), updateCharCtrlBtnState()),
            $(charSelUnit).each(function (E, t) {
                $(t).stop();
                var e = E - currentCharIndex + CHR_UNIT_I;
                e < 0
                    ? ($(t).css('top', CHR_UNIT_Y[0] + 'px'),
                      $(t).css('display', 'none'),
                      $(t).css('z-index', '0'),
                      $(t).removeClass('crr'),
                      $($(t).children('.cover')[0]).stop().fadeTo(100, 1))
                    : CHR_UNIT_Y.length <= e
                    ? ($(t).css('top', CHR_UNIT_Y[CHR_UNIT_Y.length - 1] + 'px'),
                      $(t).css('display', 'none'),
                      $(t).css('z-index', '0'),
                      $(t).removeClass('crr'),
                      $($(t).children('.cover')[0]).stop().fadeTo(100, 1))
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
                                      60 < e
                                          ? E === currentCharIndex &&
                                            ($($(t).children('.cover')[0]).stop().fadeTo(100, 0), $(t).addClass('crr'))
                                          : $(t).removeClass('crr');
                              },
                              complete: function () {
                                  (CHR_SCR = !1),
                                      E === currentCharIndex &&
                                          'easeOutBounce' !== r &&
                                          (currentCharIndex !== CHR_DEF
                                              ? scrollCharUni(1, 'swing')
                                              : (updateScrollBtnState(),
                                                updateCharCtrlBtnState(),
                                                $(charSelBox).show()));
                              },
                          }
                      ));
            });
    }
}

function updateScrollBtnState() {
    'use strict';
    var e = $(charSelUnit).length;
    1 < e
        ? (0 !== currentCharIndex ? $(charSelUpArrow).removeClass('disabled') : $(charSelUpArrow).addClass('disabled'),
          currentCharIndex !== e - 1
              ? $(charSelDownArrow).removeClass('disabled')
              : $(charSelDownArrow).addClass('disabled'),
          $(charSelBox + ' .scroll').show())
        : $(charSelBox + ' .scroll').hide();
}

function updateCharCtrlBtnState() {
    'use strict';
    $(charSelUnit).length < 11
        ? ($(charAddButton).removeClass('disabled'),
          $(charAddButton).fadeTo(100, 1),
          $(charAddButton).attr('onMouseOver', "playSound('IDR_WAV_SEL');"))
        : ($(charAddButton).attr('onMouseOver', ''),
          $(charAddButton).removeAttr('onMouseOver'),
          $(charAddButton).addClass('disabled'),
          $(charAddButton).fadeTo(200, 0.4)),
        '0' !== getCurrentCharData().attr('hr')
            ? ($(charDelButton).removeClass('disabled'),
              $(charDelButton).fadeTo(100, 1),
              $(charDelButton).attr('onMouseOver', "playSound('IDR_WAV_SEL');"))
            : ($(charDelButton).attr('onMouseOver', ''),
              $(charDelButton).removeAttr('onMouseOver'),
              $(charDelButton).addClass('disabled'),
              $(charDelButton).fadeTo(200, 0.4));
}

const showCharSelector = function () {
    // set CHR_DEF and currentCharIndex to 0, then clear the log
    (CHR_DEF = currentCharIndex = 0), clearOnlyLog();

    // hide launcher_login_panel, launcher_update_progress, and character selection box
    $('.launcher_login_panel').hide();
    $('#launcher_update_progress').hide();
    $(charSelBox).show();

    // show the logout button
    $('.btn_logout').show();

    // clear the character unit to init state
    $(charSelBox + ' .char_units_wrapper' + ' .units' + ' .swiper-wrapper').empty();

    // get character information and convert it
    const characterInfo = $('<div>').html(
        getCharacterInfo()
            .replace(/'/g, '"')
            .replace(/&apos;/g, "'")
    );

    // set CHR_DEF to the default character index
    const defaultUid = $(characterInfo.find('CharacterInfo')[0]).attr('defaultUid');

    characterInfo.find('Character').each(function (index, element) {
        $(element).attr('uid') === defaultUid && (CHR_DEF = index);

        // create a new character unit and append it to the character selection box
        $(charSelBox + ' .char_units_wrapper' + ' .units' + ' .swiper-wrapper').append(
            createCharUnit(
                index + 1,
                $(element).attr('name'),
                $(element).attr('uid'),
                parseInt($(element).attr('HR'), 10),
                parseInt($(element).attr('GR'), 10),
                $(element).attr('weapon'),
                $(element).attr('sex'),
                parseInt($(element).attr('lastLogin'), 10)
            )
        );
    });
};

function charDelPolling() {
    // get the auth result to check whether the deletion was successful or not
    const authResult = DoGetLastAuthResult();

    switch (authResult) {
        case 'AUTH_NULL':
        case 'AUTH_PROGRESS':
        case 'AUTH_SUCCESS':
        case 'AUTH_ERROR_NET':
        case 'AUTH_ERROR_ACC':
        case 'AUTH_ERROR_PWD':
        case 'DEL_PROGRESS':
            // do nothing
            break;

        case 'DEL_SUCCESS':
            // switch the dialog display according to the number of characters owned
            1 < $(charSelUnit).length
                ? showDoneDelNormCharDialog(delCharName, delCharUid)
                : showDoneDelLastCharDialog(delCharName, delCharUid);
            break;

        case 'DEL_ERROR_NET':
        case 'DEL_ERROR_IVL':
        case 'DEL_ERROR_MNC':
            // show the fail dialog
            showFailDelCharDialog($(charSelUnit).length);
            break;
    }
}

function charDelReset() {
    ((delCharName = ''), (delCharUid = '')), hideModalDialog();
}

function charDelete() {
    DoDeleteCharacter(delCharUid),
        setTimeout(function () {
            charDelPolling();
        }, 1000);
}

function initializing(uid) {
    // select the specified character
    alert(uid);
    selectCharacter(uid, uid);

    // play a login sound
    playSound('IDR_WAV_LOGIN');

    // show initializing overlay
    $('#launcher_game_start_wait').show();

    // hidethe dialog
    hideModalDialog();

    // exit the launcher after a delay of 500 milliseconds
    setTimeout(function () {
        exitLauncher();
    }, 500);
}

function gameStart() {
    // play a sound
    playSound('IDR_WAV_OK');

    // get the current character, and set its uid and name to variables respectively
    //const currentCharData = getCurrentCharData();
    //const currentCharUid = currentCharData.attr('uid');
    //const currentCharName = currentCharData.attr('name');

    const currentCharName = $('.swiper-slide-active .name').text();
    const currentCharUid = $('.swiper-slide-active .data .data_uid').text();

    // show a dialog box with the character's name and uid
    showGameStartDialog(currentCharName, currentCharUid);
}

function checkDelID(name, uid) {
    uid === $('.del_uid').val() ? showWaitDelCharDialog(name, uid) : showWaitdelCharUidErrorDialog(name, uid);
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
    UPD_ANIM_TimerID = null;

function clearAnimSq() {
    'use strict';
    if (UPD_ANIM_TimerID) {
        try {
            clearTimeout(UPD_ANIM_TimerID);
        } catch (e) {}
        UPD_ANIM_TimerID = null;
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
        (UPD_ANIM_TimerID = setTimeout(function () {
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
        (UPD_ANIM_TimerID = setTimeout(function () {
            UPD_FRM_FINI++,
                UPD_ANIM_SEQ.fini.length > UPD_FRM_FINI
                    ? (UPD_ANIM_SEQ.fini.length === UPD_FRM_FINI + 1 && playSound('IDR_NIKU'),
                      updateProgressAnimationFinish())
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
                        exitLauncher();
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
                            exitLauncher();
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
        : ($('#launcher_update_progress .bar_area .file_progress').width(
              Math.ceil(DoGetUpdatePercentageFile() * UPD_BAR_PER)
          ),
          switchUpdateAfterState());
}

function finishUpdateProcess() {
    'use strict';
    DoCheckIsEnableSessionId()
        ? showCharSelector()
        : ($('.launcher_login_panel').hide(),
          $('#launcher_update_progress').hide(),
          $('.msg_logs_area').hide(),
          showMaintenanceDialog());
}

function startUpdateProcess() {
    'use strict';
    $('#launcher_update_progress .bar_area .file_progress').width(0);
    $('#launcher_update_progress .bar_area .total_progress').width(0);
    $('.launcher_login_panel').hide();

    UPD_POLLING
        ? DoStartUpdate()
            ? ((UPD_FRM_LOOP = 0),
              updateProgressAnimation(),
              $('#launcher_update_progress').show(),
              setTimeout(function () {
                  progressUpdatePercentage();
              }, 50))
            : (updateDisabled ? finishUpdateProcess() : $('.launcher_login_panel').show(),
              onAuthError(textOutput('serverMaint')))
        : finishUpdateProcess();
}

let AT_TimerID = null,
    authStatus = 'AUTH_NULL',
    inputUserId = '.userid_input',
    userId = '',
    inputPassword = '.password_input',
    password = '',
    serverSelBtn = '.srv_sel_btn',
    serverListBox = '.srv_sel_box',
    srvListEachItem = '.srv_sel_box .srv',
    serverListOpen = false,
    serverNotSelected = true,
    loginBtn = '.btn_login',
    saveUserIdCheck = '.check_save_id',
    isChecked = false,
    credsForgot = '.btn_forgot';

function showMhfMaintenanceDialog() {
    'use strict';
    $('.launcher_login_panel').hide(),
        $('#launcher_auth_maintenance').addClass('mhf'),
        $('#launcher_auth_maintenance').show();
}

function onAuthError(e, E) {
    'use strict';
    e && addLogMsg(e, (E = E || 'y'), true), hideAuthProgress();
}

function stopLoginPolling() {
    'use strict';
    if (AT_TimerID) {
        try {
            clearInterval(AT_TimerID);
        } catch (e) {}
        AT_TimerID = null;
    }
}

function loginPolling() {
    'use strict';
    var e = DoGetLastAuthResult();

    switch (e) {
        case 'AUTH_NULL':
        case 'AUTH_PROGRESS':
        case 'DELETE_PROGRESS':
        case 'DELETE_SUCCESS':
        case 'DELETE_ERROR_NET':
        case 'DELETE_ERROR_IVL':
        case 'DELETE_ERROR_MNC':
            break;

        case 'AUTH_SUCCESS':
            stopLoginPolling();
            hideAuthProgress();
            $('.id_srv_label').text($(inputUserId).val() + '@' + $(serverSelBtn).text());
            $(saveUserIdCheck).is(':checked')
                ? (localStorage.setItem('UserID', $(inputUserId).val()),
                  localStorage.setItem('Password', $(inputPassword).val()),
                  localStorage.setItem('IsChecked', 'true'))
                : (localStorage.removeItem('UserID'),
                  localStorage.removeItem('Password'),
                  localStorage.removeItem('IsChecked'));
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
                case 'SIGN_EPASS':
                    onAuthError(textOutput(E));
                    break;
                default:
                    onAuthError(textOutput('SIGN_EOTHER'));
            }
            break;
        default:
            stopLoginPolling(), onAuthError(textOutput('unknownError') + ' [' + authStatus + ']');
    }
}

function createShortLifeAuthKeyDone() {
    const loginSuccess = DoLoginCog($(inputUserId).val(), $(inputPassword).val(), $(inputPassword).val());

    // if loginSuccess is true, loginPolling will be run; if false, error handling will be run with onAuthError
    loginSuccess ? (AT_TimerID = setInterval(loginPolling, 1000)) : onAuthError(textOutput('SIGN_EAPP'), 'r');
}

function showCogMaintenanceDialog() {
    'use strict';
    $('.launcher_login_panel').hide(), $('#launcher_auth_maintenance').show();
}

function selectServerItem(target_elm) {
    'use strict';

    $('.selected_srv').removeClass('selected_srv'), $(target_elm).toggleClass('selected_srv');
}

function switchAuthSrv(serverElm) {
    $(serverSelBtn).text($(serverElm).text());
}

function showSrvSelList() {
    // disable the button
    $(serverSelBtn).prop('disabled', true);

    $(serverListBox).slideDown(300, function () {
        // re-enable the button after the animation is complete
        $(serverSelBtn).prop('disabled', false);
    }),
        $(serverSelBtn).addClass('opened_svr_list'),
        (serverListOpen = true);
}

function hideSrvSelList() {
    // disable the button
    $(serverSelBtn).prop('disabled', true);

    $(serverListBox).slideUp(300, function () {
        // re-enable the button after the animation is complete
        $(serverSelBtn).prop('disabled', false);
    }),
        $(serverSelBtn).removeClass('opened_svr_list'),
        (serverListOpen = false);
}

function initSrvSelList() {
    'use strict';

    // check from local storage whether users have selected a server before
    serverNotSelected = localStorage.getItem('NeverSelectedSrv') !== 'false';

    // get server list xml data and wrap it in a div element
    const serverList = DoGetServerList();

    // get the index of the last selected server from ini settings and convert it to an integer
    let lastSelectedIndex = DoGetIniLastServerIndex();
    lastSelectedIndex = parseInt(lastSelectedIndex, 10);

    // remove all children of the server selection list
    $(serverListBox).children().remove();

    // loop through each group in the server list xml data and add a server element to the server selection list for each one
    $(serverList)
        .find('group')
        .each(function (index, srvItem) {
            const name = $(srvItem).attr('nam');

            // create and append the server element to the server selection list
            $(serverListBox).append($('<li class="srv" idx="' + index + '">' + name + '</li>'));
        });

    // if the last selected index is out of bounds, set true to the variable for initializing
    (lastSelectedIndex < 0 || lastSelectedIndex > $(srvListEachItem).length) && (serverNotSelected = true);

    // if user have previously selected a server, set auth server and assign class to the target server
    serverNotSelected
        ? $(serverSelBtn).text('Select Your Server')
        : (switchAuthSrv($(srvListEachItem)[lastSelectedIndex]),
          $('.srv').eq(lastSelectedIndex).addClass('selected_srv'));

    // hide the server selection list
    $(serverListBox).hide();

    // the mouseover event to sever select button to play a sound when hovering
    $(serverSelBtn).mouseover(function () {
        playSound('IDR_WAV_SEL');
    });

    // add the server selection button to the focus elements and bind the mousedown event to it
    $(serverSelBtn).mousedown(function () {
        playSound('IDR_WAV_OK'), serverListOpen ? hideSrvSelList() : showSrvSelList();
    });

    // the mouseover event to each server element to play a sound when hovering
    $(srvListEachItem).mouseover(function () {
        playSound('IDR_WAV_SEL');
    });

    // the mousedown event to each server element to select it as the active server, and hide the server selection list
    $(srvListEachItem).mousedown(function () {
        playSound('IDR_WAV_OK');
        switchAuthSrv($(this));
        const index = parseInt($(this).attr('idx'), 10);
        DoSetIniLastServerIndex(String(index));
        selectServerItem($(this));
        serverNotSelected && (localStorage.setItem('NeverSelectedSrv', 'false'), (serverNotSelected = false));
        hideSrvSelList();
    });

    // the click event to the server selection box and button to stop clicks from propagating to the document
    $(serverListBox + serverSelBtn).mousedown(function (e) {
        e.stopPropagation();
    });
}

function showAuthProgress() {
    // diabled login button
    $(loginBtn).addClass('disabled');
    $(loginBtn).fadeTo(1, 0.6);

    // show auth progress display
    $('.progress').fadeIn(200);
}

function hideAuthProgress() {
    // enabled login button
    $(loginBtn).fadeTo(1, 1);
    $(loginBtn).removeClass('disabled');

    // hide auth progress display
    $('.progress').fadeOut(200);
}

function beginAuthProcess() {
    const userId = $(inputUserId).val();
    const password = $(inputPassword).val();

    $(charSelBox).is(':visible') && switchAuthMode();

    '' === userId || '' === password
        ? // if credentials are not entered, return error
          (playSound('IDR_WAV_OK'), onAuthError(textOutput('noUseridPass'), 'r'))
        : // if credentials are entered, proceed to auth process
          (playSound('IDR_WAV_PRE_LOGIN'), showAuthProgress(), createShortLifeAuthKeyDone());
}

function switchAuthMode() {
    // hide update display
    $('#launcher_update_progress').hide();

    // hide character selection
    $(charSelBox).hide();

    // show login main panel
    $('.launcher_login_panel').show();

    // reset server name label
    $('.id_srv_label').text('');

    // hide logout button
    $('.btn_logout').hide();
}

function initAuth() {
    // initialize server selector list
    initSrvSelList();

    // enable scroll bar on server selector box
    new scrollBarHandler('.srv_sel_box');

    // login button click event
    $(loginBtn).click(function () {
        serverNotSelected
            ? (playSound('IDR_WAV_OK'), onAuthError(textOutput('noSrvSelected'), 'r'))
            : beginAuthProcess();
    });

    // set user_id and focus event
    userId = localStorage.getItem('UserID');
    $(inputUserId).val(userId);
    $(inputUserId).focus(function () {
        playSound('IDR_WAV_OK');
    });

    // set password and focus event
    password = localStorage.getItem('Password');
    $(inputPassword).val(password);
    $(inputPassword).focus(function () {
        playSound('IDR_WAV_OK');
    });

    // set check state for saveUserIdCheck
    isChecked = localStorage.getItem('IsChecked') === 'true';
    isChecked === true ? $(saveUserIdCheck).prop('checked', true) : $(saveUserIdCheck).prop('checked', false);

    // set launcher display to initial state
    switchAuthMode();
}

let messageContents = '.msg_contents';

function addLogMsg(message, type, isOnlyOneMsg) {
    if (message) {
        let color = '';

        // if isOnlyOneMsg is true, add class only
        const only = isOnlyOneMsg === true ? 'only' : '';

        // switch text color based on type
        switch (type) {
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
        $('#mCSB_3_container').length
            ? $('#mCSB_3_container').append(logMessage)
            : $(messageContents).append(logMessage);

        // set scrollbar
        new scrollBarHandler(messageContents);
    }
}

function clearOnlyLog() {
    $(messageContents + ' ' + '.only').remove();
}

function getExLog() {
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
}

/*=========================================================
　　　　　Dialog Functions
=======================================================*/
let dialogTexts = '.dialog_text_contents',
    dialogButtons = '.dialog_btnBox',
    dialogEachBtn = '.md_btn',
    dialogStandbyBtn = '.md_btn.standby';

function showModalDialog(text, options, standbyTime) {
    // show the modal dialog
    $('.launcher_dialog').show();

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

            // default onclick sound is IDR_WAV_OK, but if noSound is true, set no sound
            const sound = option.noSound === true ? '' : 'playSound("IDR_WAV_OK");';

            // add click and hover event to button
            button.attr({
                onclick: sound + ' ' + option.cmd,
                onMouseOver: "playSound('IDR_WAV_SEL')",
            });

            // if button is set as standby, disable hover and click events
            option.isStandby && button.addClass('standby').css('pointer-events', 'none');

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
    $(dialogStandbyBtn).fadeTo(10, 0.4);

    // enable standby button
    if (standbyTime) {
        setTimeout(function () {
            $(dialogStandbyBtn).fadeTo(200, 1, function () {
                $(dialogStandbyBtn).css('pointer-events', 'auto').removeClass('standby');
            });
        }, standbyTime);
    }
}

function hideModalDialog() {
    // hide dialog body
    $('.launcher_dialog').hide();

    // reset dialog texts
    $(dialogTexts).empty();

    // reset dialog buttons
    $(dialogButtons).empty();
}

function showMaintenanceDialog() {
    showModalDialog(dialogTextOutput('serverMaint'), [{ label: 'Close', cmd: 'hideModalDialog();' }]);
}

function showAddCharDialog() {
    const createCharURL = 'https://development.rain-server.workers.dev/en';

    showModalDialog(dialogTextOutput('createChar'), [
        {
            label: 'Add Now',
            cmd:
                'DoLoginCog("' +
                $(inputUserId).val() +
                '+' +
                '", "' +
                $(inputPassword).val() +
                '","' +
                $(inputPassword).val() +
                '"); DoOpenBrowser("' +
                createCharURL +
                '"); showWaitCharAddDialog();',
        },
        { label: 'Not Add', cmd: 'hideModalDialog();' },
    ]);
}

function showWaitCharAddDialog() {
    showModalDialog(dialogTextOutput('createCharWait'), [
        { label: 'Refresh', cmd: 'beginAuthProcess(); hideModalDialog();' },
    ]);
}

function showDelCharDialog(name, uid) {
    showModalDialog(
        '<p>' +
            dialogTextOutput('delCharPrefix') +
            ' "' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>?</p>' +
            dialogTextOutput('delCharFirstConf'),
        [
            { label: 'Delete', cmd: 'showDelCharDialog2("' + name + '", "' + uid + '");', isStandby: true },
            { label: 'Cancel', cmd: 'charDelReset();' },
        ],
        1000
    );
}

function showDelCharDialog2(name, uid) {
    if (1 < $(charSelUnit).length) {
        // if user still has more than one character, skip this function
        showDelCharDialog3(name, uid);
    } else {
        showModalDialog(
            '<p>' +
                dialogTextOutput('delCharPrefix') +
                ' "' +
                name +
                '"<span class="uid">（ID: ' +
                uid +
                '）</span>?</p>' +
                dialogTextOutput('delLastChar'),
            [
                {
                    label: 'Delete',
                    cmd: 'showDelCharDialog3("' + name + '", "' + uid + '");',
                    isStandby: true,
                },
                { label: 'Cancel', cmd: 'charDelReset();' },
            ],
            1000
        );
    }
}

function showDelCharDialog3(name, uid) {
    showModalDialog(
        '<p>' +
            dialogTextOutput('delCharPrefix') +
            ' "' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>?</p>' +
            dialogTextOutput('delCharFinalConf') +
            dialogTextOutput('delCharUidInput'),
        [
            { label: 'Delete', cmd: 'checkDelID("' + name + '", "' + uid + '");', isStandby: true },
            { label: 'Cancel', cmd: 'charDelReset();' },
        ],
        1000
    );
}

function showWaitdelCharUidErrorDialog(name, uid) {
    showModalDialog(
        '<p>Could not delete character' +
            ' "' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>.</p>' +
            dialogTextOutput('delCharErrMatch'),
        [{ label: 'Close', cmd: 'charDelReset();' }]
    );
}

function showWaitDelCharDialog(name, uid) {
    showModalDialog(
        '<p>"' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>' +
            'is being deleted.</p><p>Please wait a moment.</p>'
    ),
        charDelete();
}

function showFailDelCharDialog(numOwnedChars) {
    showModalDialog(dialogTextOutput(1 < numOwnedChars ? 'delCharErrUnk' : 'delCharErrNeedDays'), [
        { label: 'Close', cmd: 'charDelReset();' },
    ]);
}

function showDoneDelNormCharDialog(name, uid) {
    showModalDialog(
        '<p>Character' + ' "' + name + '"<span class="uid">（ID: ' + uid + '）</span>' + 'has been deleted.</p>',
        [{ label: 'Close', cmd: 'beginAuthProcess(); charDelReset();' }]
    );
}

function showDoneDelLastCharDialog(name, uid) {
    showModalDialog(
        '<p>The last character' +
            ' "' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>' +
            'has been deleted,<br>' +
            dialogTextOutput('delLastCharDone'),
        [{ label: 'Close', cmd: 'charDelReset();' }]
    );
}

function showGameStartDialog(name, uid) {
    showModalDialog(
        dialogTextOutput('startTheGame') +
            '<p style="font-size: 2.1rem;">"' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>',
        [
            {
                label: 'Yes',
                cmd: 'initializing("' + uid + '");',
                noSound: true,
            },
            {
                label: 'No',
                cmd: 'hideModalDialog();',
            },
        ]
    );
}

$(function () {
    // play a sound when hovering logout button
    $('.btn_logout').mouseover(function () {
        playSound('IDR_WAV_SEL');
    });

    // play a sound when clicking logout button
    $('.btn_logout').click(function () {
        playSound('IDR_WAV_OK');
    });

    // play a sound when hovering preferences button
    $('.btn_preferences_text').mouseover(function () {
        playSound('IDR_WAV_SEL');
    });

    // play a sound when clicking preferences button
    $('.btn_preferences').click(function () {
        DoOpenMhlConfig();
    });

    // play a sound when hovering the element with sound_on class
    $('.sound_on').mouseover(function () {
        playSound('IDR_WAV_SEL');
    });

    // play a sound when clicking the element with sound_on class except for login btn
    $('.sound_on').click(function (e) {
        e.target !== $(loginBtn).get(0) && playSound('IDR_WAV_OK');
    });

    // play a sound when clicking up arrow on character selection, and move a unit
    $(charSelUpArrow).click(function () {
        playSound('IDR_WAV_OK'), scrollCharUni(-1);
    });

    // play a sound when clicking down arrow on character selection, and move a unit
    $(charSelDownArrow).click(function () {
        playSound('IDR_WAV_OK'), scrollCharUni(1);
    });

    // add a character
    $(charAddButton).click(function () {
        $(this).hasClass('disabled') || showAddCharDialog();
    });

    // delete a character
    $(charDelButton).click(function () {
        // check if the clicked element is not disabled and a character is not already being deleted
        if (!$(this).hasClass('disabled') && !delCharUid && !delCharName) {
            // get the user data of the currently selected character
            const currentCharData = getCurrentCharData();

            // set the name and UID of the character to be deleted
            delCharName = currentCharData.attr('name');
            delCharUid = currentCharData.attr('uid');

            // show a confirmation dialog for deleting the character
            showDelCharDialog(delCharName, delCharUid);
        }
    });

    $(charSelBox + ' .btn_start').click(function () {
        gameStart();
    });

    // initial authentication, including server and id or password setup
    initAuth();

    // initial display of msg log
    setTimeout(function () {
        getExLog();
    }, 100);

    // set information section
    beginLoadInfo();

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

    /* $(charSelBox + ' .swiper-wrapper').append(createCharUnit(1, 'name1', '123451', 1, 0, 'Great Sword', 'M', 1));
    $(charSelBox + ' .swiper-wrapper').append(createCharUnit(2, 'name2', '123452', 1, 0, 'Great Sword', 'M', 1));
    $(charSelBox + ' .swiper-wrapper').append(createCharUnit(3, 'name3', '123453', 0, 0, 'Great Sword', 'M', 1)); */
});

$(function () {
    const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        // 取得に成功したときの処理
        success: function (data) {
            console.log(JSON.stringify(data, null, 2));
        },
        // 完了したときの処理
        complete: function () {
            console.log('通信が完了しました。');
        },
        // 失敗したときの処理
        error: function () {
            console.log('通信に失敗しました。');
        },
    });
});
