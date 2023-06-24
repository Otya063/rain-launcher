const normTextData = {
    important: 'Important Info',
    defects: 'Defects and Troubles Info',
    management: 'Management and Service Info',
    event: 'In-Game Events Info',
    update: 'Updates and Maintenance Info',
    noInfoFound: '<p class="no_info_found">No Information Found</p>',
};

const msgLogTextData = {
    noSrvSelected: 'No server is currently selected. Please select one from the list.',
    noUsernamePass: 'First, please enter both your Username and Password.',
    serverMaint: 'The server is currently under maintenance and cannot be joined.<br>Please try again later.',
    SIGN_EFAILED: 'Failed to connect to authentication server.',
    SIGN_EILLEGAL: 'Authentication cancelled due to wrong input.',
    SIGN_EABORT: 'Internal process at the authentication server has crashed.',
    SIGN_ERESPONSE: 'Process terminated due to abnormal authentication response.',
    SIGN_EDATABASE: 'Failed to access database.',
    SIGN_EOTHER: 'ID authentication failed.',
    SIGN_EPASS: 'Password is incorrect.',
    SIGN_EAPP: 'Authentication failed due to an unexpected error in the application.',
    SIGN_EUNK: 'Unknown error occurred.',
};

const dialogTextData = {
    // Start the Game
    startGame: '<p class="caution">Are you sure to start the game with the following character?</p>',

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

/*=========================================================
　　　　　Functions Needed Later
=======================================================*/
const scrollBarHandler = function (selector) {
    this.$el = $(selector);
    this.$el.is(':hidden') ? this.appendScrollBar() : this.dynamicScrollBar();
};

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

const normTextOutput = function (textType) {
    return decodeURIComponent(normTextData[textType]);
};

const msgLogTextOutput = function (textType) {
    return decodeURIComponent(msgLogTextData[textType]);
};

const dialogTextOutput = function (textType) {
    return decodeURIComponent(dialogTextData[textType]);
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
        return window.external.getIniLastServerIndex();
    } catch (error) {
        return 0;
    }
};

const setLastSelectedSrvIndex = function (index) {
    try {
        window.external.setIniLastServerIndex(index);
    } catch (error) {}
};

const getServerList = function () {
    try {
        return window.external.getServerList();
    } catch (error) {
        return "<?xml version='1.0' encoding='UTF-8'><server_groups><group idx='1' nam='Rain1'/><group idx='2' nam='Rain2'/><group idx='3' nam='Rain3'/></server_groups>";
    }
};

const minimizeWindow = function () {
    playSound('IDR_WAV_OK');
    try {
        window.external.minimizeWindow();
    } catch (error) {}
};

const closeWindow = function () {
    playSound('IDR_WAV_OK');
    try {
        window.external.closeWindow();
    } catch (error) {}
};

const openPreferences = function () {
    playSound('IDR_WAV_OK');
    try {
        window.external.openMhlConfig();
    } catch (error) {}
};

const openBrowser = function (url) {
    try {
        playSound('IDR_WAV_OK'), window.external.openBrowser(url);
    } catch (error) {}
};

const enableDrag = function (boolean) {
    try {
        window.external.beginDrag(boolean);
    } catch (error) {
        return false;
    }
};

const loginRain = function (username, pass1, pass2) {
    try {
        return window.external.loginCog(username, pass1, pass2);
    } catch (error) {
        return false;
    }
};

const getAuthResult = function () {
    return window.external.getLastAuthResult();
};

const getSignResult = function () {
    return window.external.getSignResult();
};

const getTotalPctOnUpdate = function () {
    return window.external.getUpdatePercentageTotal();
};

const getFilePctOnUpdate = function () {
    return window.external.getUpdatePercentageFile();
};

const getUpdateStatus = function () {
    return String(window.external.getUpdateStatus());
};

const getLauncherReturnCode = function () {
    return String(window.external.getLauncherReturnCode());
};

const exitLauncher = function () {
    window.external.exitLauncher();
};

const isSrvAvailable = function () {
    return window.external.isEnableSessionId();
};

const getAllCharData = function () {
    return window.external.getCharacterInfo();
};

const deleteCharacter = function (uid) {
    return window.external.deleteCharacter(uid);
};

const selectCharacter = function (name, uid) {
    window.external.selectCharacter(name, uid);
};

const playSound = function (soundType) {
    try {
        window.external.playSound(soundType);
    } catch (e) {}
};

const extractInitialLogs = function () {
    try {
        return window.external.extractLog();
    } catch (error) {
        return '';
    }
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

const connectRainWeb = function () {
    return $.ajax({
        //url: 'https://cors.rain-server.workers.dev/about',
        url: 'http://localhost:5173/admin',
        type: 'GET',
        dataType: 'html',
        cache: false,
    });
};

const getDataFromRainWeb = function (html_data, data_name) {
    const regex = /const data = (\[.*?\]);/g;
    const raw_data = regex.exec(html_data)[1];
    const obj_data = new Function('return ' + raw_data)()[1]['data'];
    return (rerutn_data = obj_data[data_name]);
};

/*=========================================================
　　　　　Server Selection Functions
=======================================================*/
const serverSelBtn = '.srv_sel_btn',
    serverListBox = '.srv_sel_box',
    srvListEachItem = '.srv_sel_box .srv';

let serverListOpen = false,
    serverNotSelected = true;

const initSrvSelList = function () {
    // check from local storage whether users have selected a server before
    serverNotSelected = localStorage.getItem('NeverSelectedSrv') !== 'false';

    // get server list xml data and wrap it in a div element
    const serverList = getServerList();

    // get the index of the last selected server from ini settings and convert it to an integer
    let lastSelectedSrvIndex = getLastSelectedSrvIndex();
    lastSelectedSrvIndex = parseInt(lastSelectedSrvIndex, 10);

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
    (lastSelectedSrvIndex < 0 || lastSelectedSrvIndex > $(srvListEachItem).length) && (serverNotSelected = true);

    // if user have previously selected a server, set auth server and assign class to the target server
    serverNotSelected
        ? $(serverSelBtn).text('Select Your Server')
        : (switchAuthSrv($(srvListEachItem)[lastSelectedSrvIndex]),
          $('.srv').eq(lastSelectedSrvIndex).addClass('selected_srv'));

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
        setLastSelectedSrvIndex(String(index));
        selectServerItem($(this));
        serverNotSelected && (localStorage.setItem('NeverSelectedSrv', 'false'), (serverNotSelected = false));
        hideSrvSelList();
    });

    // the click event to the server selection box and button to stop clicks from propagating to the document
    $(serverListBox + serverSelBtn).mousedown(function (e) {
        e.stopPropagation();
    });
};

const selectServerItem = function (targetServer) {
    $('.selected_srv').removeClass('selected_srv'), $(targetServer).toggleClass('selected_srv');
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
    }),
        $(serverSelBtn).addClass('opened_svr_list'),
        (serverListOpen = true);
};

const hideSrvSelList = function () {
    // disable the button
    $(serverSelBtn).prop('disabled', true);

    $(serverListBox).slideUp(300, function () {
        // re-enable the button after the animation is complete
        $(serverSelBtn).prop('disabled', false);
    }),
        $(serverSelBtn).removeClass('opened_svr_list'),
        (serverListOpen = false);
};

/*=========================================================
　　　　　Message Log Functions
=======================================================*/
const messageContents = '.msg_contents';

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

const getExtractedLog = function () {
    // extract logs and sanitize them for display
    const extractedLog = extractInitialLogs();
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
            let colorType = '';

            // determine message type based on its contents
            if (/再度お試しください|失敗|できませんでした/.test(message)) {
                colorType = 'y'; // yellow
            } else if (/^Launcher Ver/.test(message)) {
                colorType = 'g'; // green
            } else if (/^AUTH_SUCCESS/.test(message)) {
                colorType = 'b'; // blue
            } else if (/^\[.*%\]/.test(message)) {
                colorType = 'y'; // yellow
                isOnlyOneMsg = true;
            }

            // add message to log
            addLogMsg(message, colorType, isOnlyOneMsg);
            isOnlyOneMsg = false;
        });
    }
};

const clearOnlyLog = function () {
    $(messageContents + ' ' + '.only').remove();
};

/*=========================================================
　　　　　Login and Authentication Functions
=======================================================*/
const inputUsername = '.username_input',
    inputPassword = '.password_input',
    loginBtn = '.btn_login',
    rememberMeCheck = '.remember_me',
    credsForgot = '.btn_forgot';

let maintenanceData = {},
    loginPollingTimerId = '',
    username = '',
    password = '',
    isChecked = false;

const beginAuthProcess = function () {
    const username = $(inputUsername).val();
    const password = $(inputPassword).val();

    $(charSelBox).is(':visible') && backToBeforeLogin();

    '' === username || '' === password
        ? // if credentials are not entered, return error
          (playSound('IDR_WAV_OK'), onAuthError(msgLogTextOutput('noUsernamePass'), 'r'))
        : // if credentials are entered, proceed to auth process
          (playSound('IDR_WAV_PRE_LOGIN'), showAuthenticating(), requestAuthentication());
};

const requestAuthentication = function () {
    const loginSuccess = loginRain($(inputUsername).val(), $(inputPassword).val(), $(inputPassword).val());

    loginSuccess
        ? // if loginSuccess is true, login polling will be run
          (loginPollingTimerId = setInterval(startLoginPolling, 1000))
        : //if false, error handling will be run with onAuthError
          onAuthError(msgLogTextOutput('SIGN_EAPP'), 'r');
};

const startLoginPolling = function () {
    const authResult = getAuthResult();

    // check the auth result and perform action accordingly.
    switch (authResult) {
        case 'AUTH_NULL':
        case 'AUTH_PROGRESS':
        case 'DELETE_PROGRESS':
        case 'DELETE_SUCCESS':
        case 'DELETE_ERROR_NET':
        case 'DELETE_ERROR_IVL':
        case 'DELETE_ERROR_MNC':
            // do nothing
            break;

        // if the auth is successful, stop login polling, hide the auth progress display
        case 'AUTH_SUCCESS':
            stopLoginPolling();

            const serverName = $(serverSelBtn)
                .text()
                .replace(/[\s()]/g, '');

            connectRainWeb()
                .done(function (result) {
                    maintenanceData = getDataFromRainWeb(result, 'launcher_system');
                    $('.rain_web_offline').css({
                        visibility: 'hidden',
                    });
                })
                .fail(function () {
                    maintenanceData = { RainJP: false, RainUS: false, RainEU: false, RainLocalhost: false };
                    $('.rain_web_offline').css({
                        visibility: 'visible',
                    });
                })
                .always(function () {
                    afterLoginSuccess(serverName);
                });
            break;

        // if there is a network error during auth, stop login polling and output error msg
        case 'AUTH_ERROR_NET':
            stopLoginPolling(), onAuthError(msgLogTextOutput('SIGN_EFAILED'), 'r');
            break;

        // if there is an account error or password error during auth, stop the login polling
        case 'AUTH_ERROR_ACC':
        case 'AUTH_ERROR_PWD':
            stopLoginPolling();

            // check the sign result and perform action accordingly.
            const signResult = getSignResult();

            switch (signResult) {
                // output the corresponding error msg
                case 'SIGN_EFAILED':
                case 'SIGN_EILLEGAL':
                case 'SIGN_EABORT':
                case 'SIGN_ERESPONSE':
                case 'SIGN_EDATABASE':
                case 'SIGN_EPASS':
                    onAuthError(msgLogTextOutput(signResult), 'r');
                    break;

                // if it doesn't match any of the above errors, output other error msg
                default:
                    onAuthError(msgLogTextOutput('SIGN_EOTHER'));
            }
            break;

        // if there is an unknown error, stop the login polling and output unknown error msg
        default:
            stopLoginPolling(), onAuthError(msgLogTextOutput('SIGN_EUNK'));
    }
};

const stopLoginPolling = function () {
    loginPollingTimerId && clearInterval(loginPollingTimerId);
};

const afterLoginSuccess = function (serverName) {
    hideAuthenticating();

    maintenanceData[serverName]
        ? (showMaintenanceDialog(),
          $('.launcher_login_panel').hide(),
          $('.btn_logout').show(),
          $('.launcher_update_process').hide())
        : showCharSelector();

    $(rememberMeCheck).is(':checked')
        ? // if checked, save username and password in the local storage
          (localStorage.setItem('Username', $(inputUsername).val()),
          localStorage.setItem('Password', $(inputPassword).val()),
          localStorage.setItem('IsChecked', 'true'))
        : // if not, delete them
          (localStorage.removeItem('Username'),
          localStorage.removeItem('Password'),
          localStorage.removeItem('IsChecked'));
    // set username and server name label
    const idSrvNameLabel = $(inputUsername).val() + '@' + $(serverSelBtn).text();
    $('.name_srv_label').text(idSrvNameLabel);
};

const showAuthenticating = function () {
    // diabled login button
    disableElement(loginBtn, 1);

    // show auth progress display
    $('.authenticating').fadeIn(200);
};

const hideAuthenticating = function () {
    // enabled login button
    enableElement(loginBtn, 1);

    // hide auth progress display
    $('.authenticating').fadeOut(200);
};

const onAuthError = function (message, colorType) {
    addLogMsg(message, (colorType = colorType || 'y'), true), hideAuthenticating();
};

const backToBeforeLogin = function () {
    // hide update display
    $('.launcher_update_process').hide();

    // hide character selection
    $(charSelBox).hide();

    // show login main panel
    $('.launcher_login_panel').show();

    // reset server name label
    $('.name_srv_label').text('');

    // hide logout button
    $('.btn_logout').hide();

    // hide maintenance display
    $('.maintenance').hide();
};

const startUpLauncher = function () {
    // initialize server selector list
    initSrvSelList();

    // enable scroll bar on server selector box
    new scrollBarHandler('.srv_sel_box');

    // login button click event
    $(loginBtn).click(function () {
        serverNotSelected
            ? (playSound('IDR_WAV_OK'), onAuthError(msgLogTextOutput('noSrvSelected'), 'r'))
            : beginAuthProcess();
    });

    // set username and focus event
    username = localStorage.getItem('Username');
    $(inputUsername).val(username);
    $(inputUsername).focus(function () {
        playSound('IDR_WAV_OK');
    });

    // set password and focus event
    password = localStorage.getItem('Password');
    $(inputPassword).val(password);
    $(inputPassword).focus(function () {
        playSound('IDR_WAV_OK');
    });

    // set check state for rememberMeCheck
    isChecked = localStorage.getItem('IsChecked') === 'true';
    isChecked === true ? $(rememberMeCheck).prop('checked', true) : $(rememberMeCheck).prop('checked', false);

    // set launcher display to initial state
    backToBeforeLogin();
};

/*=========================================================
　　　　　Character Selection Functions
=======================================================*/
const charSelBox = '.character_selection',
    charSelUnitBox = charSelBox + ' .swiper-wrapper',
    charSelUnit = charSelBox + ' .unit',
    charAddButton = charSelBox + ' .char_add',
    charDelButton = charSelBox + ' .char_del';

let delCharName = '',
    delCharUid = '';

const convUnixToDate = function (date) {
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

const getCurrentCharData = function () {
    return $('.swiper-slide-active');
};

const createCharUnit = function (index, name, uid, hr, gr, weapon, gender, lastLogin) {
    // convert weapon name for style usage
    let weaponStyle = weapon.replace(/\s+/g, '').replace(/&/g, 'And');
    weaponStyle = weaponStyle.toLowerCase().charAt(0) + weaponStyle.slice(1);

    // generate a new div element with the given attributes
    const charUnit = $(
        '<div class="unit swiper-slide" uid="' + uid + '" name="' + name + '" hr="' + hr + '" to="0"></div>'
    );

    // add a number element, and a name element to the div
    charUnit.append($('<div class="num n' + index + '"></div>'));
    charUnit.append($('<p class="name">' + convEntities(name) + '</p>'));

    hr === 0
        ? // if the character is new (HR is 0), add a new class and a new element to the div
          (charUnit.addClass('new'),
          charUnit.append(
              $(
                  '<p class="new">' +
                      'You can create a new character. <br>Press "Start Game" to create your character.' +
                      '</p>'
              )
          ))
        : // if not, add an icon element, a weapon element, and a data element to the div
          (charUnit.addClass(weaponStyle),
          charUnit.append($('<div class="icon' + (weaponStyle ? ' ' + weaponStyle : '') + '"></div>')),
          charUnit.append($('<p class="wp">' + 'Weapon' + '<br>' + weapon + '</p>')),
          charUnit.append(
              $(
                  '<p class="data">HR' +
                      hr +
                      (gr ? '　GR' + gr : '') +
                      '　' +
                      (gender === 'M' ? '♂' : '♀') +
                      '<br>ID:' +
                      uid +
                      '<br>' +
                      'Last Login' +
                      ':' +
                      convUnixToDate(lastLogin) +
                      '</p>'
              )
          ));

    // add a click event to start the game if the div has the crr class
    charUnit.click(function () {
        $(this).hasClass('swiper-slide-active') && prepareStartGame();
    });

    // return the div
    return charUnit;
};

const showCharSelector = function () {
    // delete logs with class name "only"
    clearOnlyLog();

    // hide launcher_login_panel, launcher_update_process, and character selection box
    $('.launcher_login_panel').hide();
    $('.launcher_update_process').hide();
    $(charSelBox).show();

    // show the logout button
    $('.btn_logout').show();

    // clear the character unit box to init state
    $(charSelUnitBox).empty();

    // get character information and convert it
    const characterInfo = $('<div>').html(
        getAllCharData()
            .replace(/'/g, '"')
            .replace(/&apos;/g, "'")
    );

    // create a new character unit and append it to the character unit box
    characterInfo.find('Character').each(function (index, element) {
        $(charSelUnitBox).append(
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

    // if there is no character, disable delete and start game button
    if ($(charSelUnitBox).find('.unit').length === 0) {
        disableElement(charDelButton, 1), disableElement('.btn_start', 1);
    } else {
        // if there is one character and a new hunter, disable delete button, and enable start game button
        if ($(charSelUnitBox).find('.unit').length === 1 && $(charSelUnit).find('.new').length === 1) {
            disableElement(charDelButton, 1), enableElement('.btn_start', 1);
            // normally, all buttons are enabled
        } else {
            enableElement(charDelButton, 1), enableElement('.btn_start', 1);
        }
    }
};

const charDelPolling = function () {
    const authResult = getAuthResult();

    // check the authentication result and perform action accordingly.
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
                ? showDelNormCharDoneDialog(delCharName, delCharUid)
                : showDelLastCharDoneDialog(delCharName, delCharUid);
            break;

        case 'DEL_ERROR_NET':
        case 'DEL_ERROR_IVL':
        case 'DEL_ERROR_MNC':
            // show the fail dialog
            showFailDelCharDialog($(charSelUnit).length);
            break;
    }
};

const charDelReset = function () {
    ((delCharName = ''), (delCharUid = '')), hideDialog();
};

const charDelete = function () {
    deleteCharacter(delCharUid),
        setTimeout(function () {
            charDelPolling();
        }, 1000);
};

const checkDelID = function (name, uid) {
    uid === $('.del_uid').val() ? showWaitDelCharDialog(name, uid) : showWaitDelCharUidErrDialog(name, uid);
};

const prepareStartGame = function () {
    // play a sound
    playSound('IDR_WAV_OK');

    // get the current character, and set its uid and name to variables respectively
    const currentCharData = getCurrentCharData();
    const currentCharUid = currentCharData.attr('uid');
    const currentCharName = currentCharData.attr('name');

    // show a dialog box with the character's name and uid
    showStartGameDialog(currentCharName, currentCharUid);
};

const startTheGame = function (uid) {
    // select the specified character
    selectCharacter(uid, uid);

    // play a login sound
    playSound('IDR_WAV_LOGIN');

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
const updateAnim = '.launcher_update_process .anim',
    fileProgressBar = '.bar_area .file_progress',
    totalProgressBar = '.bar_area .total_progress',
    progressStateMessage = '.update_msg .progress_state',
    nextActionMessage = '.update_msg .next_action',
    delayTime = 3000,
    progressBarWidth = 302,
    progressBarPercent = 0.01 * progressBarWidth;

let updateData = {},
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

const prepareBeginUpdate = function (uid) {
    // initial settings on update display
    $(fileProgressBar).width(0);
    $(totalProgressBar).width(0);

    $('.connecting_overlay').fadeIn(200);

    connectRainWeb('system')
        .done(function (result) {
            updateData = getDataFromRainWeb(result, 'launcher_system');
        })
        .fail(function () {
            updateData = { update: false };
        })
        .always(function () {
            const update = updateData['update'] ? window.external.startUpdate() : false;
            afterCheckUpdateMode(uid, update);
        });
};

const afterCheckUpdateMode = function (uid, update) {
    $('.connecting_overlay').fadeOut(200);

    update
        ? // if update is needed, start update process
          ($('.character_selection').hide(),
          $('.name_srv_label').text(''),
          $('.btn_logout').hide(),
          $('.launcher_update_process').show(),
          beginUpdateProcess(uid),
          setTimeout(function () {
              updateProcessPct();
          }, 50))
        : // if not needed, directly proceed to start game
          setTimeout(function () {
              startTheGame(uid);
          }, 420);
};

const beginUpdateProcess = function (uid) {
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
            beginUpdateProcess(uid);
        } else {
            $(progressStateMessage).text('Update Completed!');
            $(nextActionMessage).text('Start the game.');
            if (animSequence.loop.length <= normAnimSeqIndex) {
                finAnimSeqIndex = 0;
                finishUpdateProcess(uid);
            } else {
                beginUpdateProcess(uid);
            }
        }
    }, currentFrame.delay);
};

const finishUpdateProcess = function (uid) {
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
                playSound('IDR_NIKU');
            }
            finishUpdateProcess(uid);
        } else {
            // initialize after animation is completed
            clearAnimSq();
            setTimeout(function () {
                startTheGame(uid);
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
                    $(progressStateMessage).text('Restart the Launcher');
                    $(nextActionMessage).text('Please log in to the server again.');
                    setTimeout(exitLauncher, delayTime);
                    break;

                // if an error occurs, restart the launcher
                case 'ERR':
                    $(progressStateMessage).text('Error Occurred');
                    $(nextActionMessage).html('Quit the launcher.');
                    setTimeout(exitLauncher, delayTime);
                    break;
            }
            break;

        // if update failed, restart the launcher
        case 'UM_UPDATE_NG':
            $(progressStateMessage).text('Error Occurred');
            $(nextActionMessage).html('Quit the launcher.');
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
                        $(progressStateMessage).text('Restart the Launcher');
                        $(nextActionMessage).text('Please log in to the server again.');
                        setTimeout(exitLauncher, delayTime);
                        break;
                }
                break;

            // if update failed, restart the launcher
            case 'UM_UPDATE_NG':
                $(progressStateMessage).text('Error Occurred');
                $(nextActionMessage).html('Quit the launcher.');
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
          ($(fileProgressBar).width(Math.ceil(getFilePctOnUpdate() * progressBarPercent)),
          $('.file_pct').text(getFilePctOnUpdate()),
          switchUpdateAfterState());
};

const clearAnimSq = function () {
    animTimerId && clearTimeout(animTimerId);
};

/*=========================================================
　　　　　Information List Function
=======================================================*/
const infoList = '.info_list',
    infoListContents = '.info_list_contents';

let importantInfoData = {},
    defectsAndTroublesInfoData = {},
    managementAndServiceInfoData = {},
    inGameEventsInfoData = {},
    updatesAndMaintenanceInfoData = {};

const beginLoadInfo = function () {
    $('.info_getting').show();
    $('.info_getting_loader').show();

    connectRainWeb()
        .done(function (result) {
            importantInfoData = getDataFromRainWeb(result, 'important');
            defectsAndTroublesInfoData = getDataFromRainWeb(result, 'defects_and_troubles');
            managementAndServiceInfoData = getDataFromRainWeb(result, 'management_and_service');
            inGameEventsInfoData = getDataFromRainWeb(result, 'ingame_events');
            updatesAndMaintenanceInfoData = getDataFromRainWeb(result, 'updates_and_maintenance');

            const infoData = {
                important: { name: normTextOutput('important'), data: importantInfoData },
                defects: { name: normTextOutput('defects'), data: defectsAndTroublesInfoData },
                management: { name: normTextOutput('management'), data: managementAndServiceInfoData },
                event: { name: normTextOutput('event'), data: inGameEventsInfoData },
                update: { name: normTextOutput('update'), data: updatesAndMaintenanceInfoData },
            };

            let infoUlElm;
            let infoLiElm;
            Object.keys(infoData).forEach(function (infoType) {
                infoUlElm = $('<li>', {
                    class: 'info_list_item ' + infoType,
                    html:
                        '<div class="info_title">' +
                        infoData[infoType].name +
                        '</div><ul class="info_list_contents"></ul>',
                });
                $(infoList).append(infoUlElm);
                infoData[infoType].data.length === 0 &&
                    $('.' + infoType + ' .info_list_contents').append(normTextOutput('noInfoFound'));

                Object.keys(infoData[infoType].data).forEach(function (dataIndex) {
                    infoLiElm = $(
                        '<li class="info_list_contents_item"><span class="date">' +
                            convUnixToDate(infoData[infoType].data[dataIndex].created_at) +
                            '</span><p class="info_list_contents_text"><a href="' +
                            infoData[infoType].data[dataIndex].url +
                            '">' +
                            infoData[infoType].data[dataIndex].title +
                            '</a></p></li>'
                    );
                    $('.' + infoType + ' .info_list_contents').append(infoLiElm);
                });
            });
            $('.info_getting').hide();
            $('.info_getting_loader').hide();
            overrideAnker(infoList);
            new scrollBarHandler(infoList);
        })
        .fail(function () {
            $('.info_getting').hide();
            $('.info_getting_loader').hide();
            $('.failed_get_info').show();
        });
};

/*=========================================================
　　　　　Dialog Functions
=======================================================*/
const dialogTexts = '.dialog_text_contents',
    dialogButtons = '.dialog_btnBox',
    dialogEachBtn = '.md_btn',
    dialogStandbyBtn = '.md_btn.standby';

const showDialog = function (text, options, standbyTime) {
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
    // hide dialog body
    $('.launcher_dialog').hide();

    // reset dialog texts
    $(dialogTexts).empty();

    // reset dialog buttons
    $(dialogButtons).empty();
};

const showMaintenanceDialog = function () {
    // show maintenance display
    $('.maintenance').show();

    // append maintenance server name
    $('.maint_server_name').text($(serverSelBtn).text());

    showDialog(dialogTextOutput('serverMaint'), [{ label: 'Close', cmd: 'hideDialog();' }]);
};

const showAddCharDialog = function () {
    const createCharURL = 'https://development.rain-server.workers.dev/en';

    showDialog(dialogTextOutput('createChar'), [
        {
            label: 'Add Now',
            cmd:
                'loginRain("' +
                $(inputUsername).val() +
                '+' +
                '", "' +
                $(inputPassword).val() +
                '","' +
                $(inputPassword).val() +
                '"); openBrowser("' +
                createCharURL +
                '"); showWaitCharAddDialog();',
        },
        { label: 'Not Add', cmd: 'hideDialog();' },
    ]);
};

const showWaitCharAddDialog = function () {
    showDialog(dialogTextOutput('createCharWait'), [{ label: 'Refresh', cmd: 'beginAuthProcess(); hideDialog();' }]);
};

const showDelCharDialog = function (name, uid) {
    showDialog(
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
};

const showDelCharDialog2 = function (name, uid) {
    if (1 < $(charSelUnit).length) {
        // if user still has more than one character, skip this function
        showDelCharDialog3(name, uid);
    } else {
        showDialog(
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
};

const showDelCharDialog3 = function (name, uid) {
    showDialog(
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
};

const showWaitDelCharUidErrDialog = function (name, uid) {
    showDialog(
        '<p>Could not delete character' +
            ' "' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>.</p>' +
            dialogTextOutput('delCharErrMatch'),
        [{ label: 'Close', cmd: 'charDelReset();' }]
    );
};

const showWaitDelCharDialog = function (name, uid) {
    showDialog(
        '<p>"' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>' +
            'is being deleted.</p><p>Please wait a moment.</p>'
    ),
        charDelete();
};

const showFailDelCharDialog = function (numOwnedChars) {
    showDialog(dialogTextOutput(1 < numOwnedChars ? 'delCharErrUnk' : 'delCharErrNeedDays'), [
        { label: 'Close', cmd: 'charDelReset();' },
    ]);
};

const showDelNormCharDoneDialog = function (name, uid) {
    showDialog(
        '<p>Character' + ' "' + name + '"<span class="uid">（ID: ' + uid + '）</span>' + 'has been deleted.</p>',
        [{ label: 'Close', cmd: 'beginAuthProcess(); charDelReset();' }]
    );
};

const showDelLastCharDoneDialog = function (name, uid) {
    showDialog(
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
};

const showStartGameDialog = function (name, uid) {
    showDialog(
        dialogTextOutput('startGame') +
            '<p style="font-size: 2.1rem;">"' +
            name +
            '"<span class="uid">（ID: ' +
            uid +
            '）</span>',
        [
            {
                label: 'Yes',
                cmd: 'prepareBeginUpdate("' + uid + '"); hideDialog();',
                //noSound: true,
            },
            {
                label: 'No',
                cmd: 'hideDialog();',
            },
        ]
    );
};

/*=========================================================
　　　　　IIFE on the Launcher
=======================================================*/
$(function () {
    /* Click or Mouseover Event
====================================================*/
    // play a sound when hovering the element with sound_on class
    $('.sound_on').mouseover(function () {
        playSound('IDR_WAV_SEL');
    });

    // play a sound when clicking the element with sound_on class except for login btn
    $('.sound_on').click(function (e) {
        e.target !== $(loginBtn).get(0) && playSound('IDR_WAV_OK');
    });

    // start the game when clicking button
    $(charSelBox + ' .btn_start').click(function () {
        prepareStartGame();
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

    /* Launcher Initialization Functions
====================================================*/
    // initial authentication, including server and id or password setup
    startUpLauncher();

    // initial display of msg log
    setTimeout(function () {
        getExtractedLog();
    }, 100);

    // set information section
    beginLoadInfo();

    // load moving function
    launcherMovingHandler();

    overrideAnker('.wrapper');

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
    enableDrag(false);

    // prevent user from selecting all texts in the launcher
    $(document).on('selectstart', function (e) {
        !$(e.target).is('input') && e.preventDefault();
    });
    $(document).on('mousedown', function (e) {
        !$(e.target).is('input') && e.preventDefault();
    });

    connectRainWeb().done(function (result) {
        console.log(result);
    });
});

/*=========================================================
　　　　　Character Selection Swiper
=======================================================*/
let swiper;
$(document).ready(function () {
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
});
