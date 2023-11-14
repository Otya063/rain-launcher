const normTextData = {
    ja: {
        title: 'モンスターハンター フロンティア オンライン ランチャー',
        movableOlay: 'ランチャーウィンドウ移動可能<br>（マウス左ボタンをクリック＆ホールド）',
        connectingOlay: '接続中...',
        gameStartOlay: 'ゲームを開始します',
        launcherTitle: 'モンスターハンター<br />フロンティア オンライン<br />レインランチャー',
        logoutBtn: 'ログアウト',
        labelUsername: 'ユーザー名',
        labelPassword: 'パスワード',
        labelSrvSel: 'サーバー選択',
        serverNotSelected: '接続先サーバーを選択',
        loginBtnText: 'ログイン',
        rememberMeBtn: '認証情報を記憶する',
        forgetCredsBtn: 'ユーザー名/パスワードを忘れたら',
        preferencesBtn: '環境設定',
        authText: '認証中...',
        charAddBtnText: 'キャラクターを追加する',
        charDelBtnText: 'キャラクターを削除する',
        startGameBtnText: 'ゲームスタート',
        debugMode: '<p class="debug_mode">注意：デバッグモードで実行中。</p>',
        readyHunt: '狩人申請可能',
        userIdLabel: 'ユーザーID：',
        charIdLabel: 'キャラクターID：',
        lastOnlineLabel: '最終ログイン：',
        genderLabelMale: '男性',
        genderLabelFemale: '女性',
        newMsg1: '<p class="new_msg1">キャラクターを新規作成可能です。</p>',
        newMsg2: '<p class="new_msg2">「ゲームスタート」ボタンを押して、キャラクターを作成しましょう。</p>',
        maintenanceText:
            '<p>現在、メンテナンス実施中のため、<span class="maint_server_name"></span>はご利用いただけません。</p><p>メンテナンス終了まで、お待ちくださいますようお願いいたします。</p>',
        gettingInfo: '<p class="info_getting">インフォメーションデータ取得中...</p>',
        failedGetBnr: '<p class="failed_get_bnr">バナーデータ取得に失敗</p>',
        failedGetInfo: '<p class="failed_get_info">インフォメーションデータ取得に失敗</p>',
        important: '重要なお知らせ',
        defects: '不具合・トラブル情報',
        management: '運営・サービス情報',
        event: 'ゲーム内イベント情報',
        update: 'アップデート・メンテナンス情報',
        noInfoFound: '<p class="no_info_found">お知らせはありません。</p>',
        disclaimer: '※レインサーバーは株式会社カプコンおよびその子会社とは一切関係ありません。',
    },

    en: {
        title: 'Monster Hunter Frontier Online Launcher',
        movableOlay: 'Launcher Window Movable<br>(By Grabbing)',
        connectingOlay: 'Connecting...',
        gameStartOlay: 'Start the Game',
        launcherTitle: 'Monster Hunter<br />　Frontier Online<br />　　Rain Launcher',
        logoutBtn: 'Log Out',
        labelUsername: 'Username',
        labelPassword: 'Password',
        labelSrvSel: 'Server Selection',
        serverNotSelected: 'Select Your Server',
        loginBtnText: 'LOG IN',
        rememberMeBtn: 'Remember Me',
        forgetCredsBtn: 'Forgot your credentials?',
        preferencesBtn: 'Preferences',
        authText: 'Authenticating...',
        charAddBtnText: 'Add New Character',
        charDelBtnText: 'Delete Character',
        startGameBtnText: 'START GAME',
        debugMode: '<p class="debug_mode">Note: Running in debug mode.</p>',
        readyHunt: 'Ready to Hunt',
        userIdLabel: 'User ID: ',
        charIdLabel: 'Character ID: ',
        lastOnlineLabel: 'Last Online: ',
        genderLabelMale: 'Male',
        genderLabelFemale: 'Female',
        newMsg1: '<p class="new_msg1">You can create a new character.</p>',
        newMsg2: '<p class="new_msg2">Press "Start Game" to create your character.</p>',
        maintenanceText:
            '<p><span class="maint_server_name"></span> is temporarily down due to maintenance.</p><p>Please wait for a while until the maintenance is completed.</p>',
        gettingInfo: '<p class="info_getting">Getting Information Data...</p>',
        failedGetBnr: '<p class="failed_get_bnr">Failed to Get Banner Data</p>',
        failedGetInfo: '<p class="failed_get_info">Failed to Get Information Data</p>',
        important: 'Important Info',
        defects: 'Defects and Troubles Info',
        management: 'Management and Service Info',
        event: 'In-Game Events Info',
        update: 'Updates and Maintenance Info',
        noInfoFound: '<p class="no_info_found">No Information Found</p>',
        disclaimer: '* Rain Server is not affiliated with Capcom Co., Ltd. or any of its subsidiaries.',
    },
};

const asideMenuData = {
    ja: {
        member: { name: 'メンバーサイト', url: '', iconName: 'home' },
        manual: { name: 'マニュアル', url: '', iconName: 'book_3' },
        //inquiry: { name: 'お問い合わせ', url: '', iconName: 'forum' },
        mypage: { name: 'マイページ', url: '', iconName: 'badge' },
        discord: { name: 'ディスコード', url: 'https://discord.gg/TcpkpUpeGw', iconName: 'diversity_1' },
    },

    en: {
        member: { name: 'Member Site', url: '', iconName: 'home' },
        manual: { name: 'Manual', url: '', iconName: 'book_3' },
        //inquiry: { name: 'Inquiry', url: '', iconName: 'forum' },
        mypage: { name: 'My Page', url: '', iconName: 'badge' },
        discord: { name: 'Discord', url: 'https://discord.gg/TcpkpUpeGw', iconName: 'diversity_1' },
    },
};

const updateTextData = {
    ja: {
        progressState: [
            'アップデート中...',
            'アップデートが完了しました！',
            'ランチャーを再起動します',
            'エラーが発生しました',
        ],
        nextActions: [
            'しばらくお待ちください。',
            '間もなくゲームを開始します。',
            '再度サーバーへログインしてください。',
            'ランチャーを終了します。',
        ],
    },

    en: {
        progressState: ['Updating...', 'Update Completed!', 'Restart the Launcher', 'Error Occurred'],
        nextActions: [
            'Please wait a moment.',
            'The game will start soon.',
            'Please log in to the server again.',
            'Quit the launcher.',
        ],
    },
};

const msgLogTextData = {
    ja: {
        gettingMsg: 'メッセージを取得中...',
        failedGetMsg: 'メッセージの取得に失敗しました。',
        initMsg: 'ユーザー名、パスワードを入力した後、<br>サーバーを選択して「ログイン」ボタンを押してください。',
        authSuccess: '認証正常終了。<br>まもなくキャラクター選択画面が表示されます。',
        webAccessErr:
            'レイン公式サイトへのアクセスに失敗しました。<br>ご自身のインターネット接続状況に問題がない場合は、直ちにレイン管理者までご報告ください。',
        noSrvSelected: '接続先サーバーが選択されていません。選択リストより、サーバーを選択してください。',
        noUsernamePass: '初めに、ユーザー名とパスワードを入力してください。',
        noExistingUser:
            '入力されたユーザー名のアカウントが存在しません。ユーザー名が正しいかもう一度確認してください。<br>まだ会員登録がお済みでない方は、初めに新規会員登録を行ってください。',
        noLinkedAcc:
            'レインディスコードとの連携が完了していないゲームアカウントです。<br>アカウント連携が完了してから、再度お試しください。',
        permSuspendedAcc: 'このアカウントは永久凍結されています。<br>この措置が撤回されることはありません。',
        suspendedAcc:
            'このアカウントは一時的に凍結されています。<br>措置の解除後、アカウントへのアクセスが許可されます。',
        SIGN_EFAILED: '認証サーバーとの通信に失敗しました。',
        SIGN_EILLEGAL: '不正な入力により認証が中止されました。',
        SIGN_EALERT: '認証サーバーの処理にエラーが発生しました。',
        SIGN_EABORT: '認証サーバー内部処理が異常終了しました。',
        SIGN_ERESPONSE: '認証レスポンスの異常により処理が終了しました。',
        SIGN_EDATABASE: 'データベースへのアクセスに失敗しました。',
        SIGN_EOTHER: 'IDの認証に失敗しました。',
        SIGN_EPASS: 'パスワードが正しくありません。',
        SIGN_EAPP: 'アプリ内の想定していないエラーで認証に失敗しました。',
        SIGN_EUNK: '不明なエラーが発生しました。',
    },

    en: {
        gettingMsg: 'Getting messages...',
        failedGetMsg: 'Failed to get messages.',
        initMsg: 'After entering your username and password,<br>please select a server and press the "Log In" button.',
        authSuccess: 'Authenticated successfully.<br>The character selection screen will appear soon.',
        webAccessErr:
            'Failed to access to the Rain official website.<br>Please report to Rain Admins immediately if there is no problem with your Internet connection.',
        noSrvSelected: 'The accessed server is not selected. Please select a server from the selection list.',
        noUsernamePass: 'First, please enter your username and password.',
        noExistingUser:
            'The account with the entered username does not exist. Please check again that the username you entered is correct.<br>If you are not a registered member, please register as a new member first.',
        noLinkedAcc:
            'The game account has not been linked to Rain Discord.<br>Please try again after the account linking is completed.',
        permSuspendedAcc: "This account has been permanently suspended.<br>This action won't be reversed.",
        suspendedAcc:
            'This account has been temporarily suspended.<br>Access to your account will be allowed after the account to be unsuspended.',
        SIGN_EFAILED: 'Failed to connect to authentication server.',
        SIGN_EILLEGAL: 'Authentication aborted due to invalid input.',
        SIGN_EALERT: 'An error occurred in processing the authentication server.',
        SIGN_EABORT: 'Internal process at the authentication server has crashed.',
        SIGN_ERESPONSE: 'Process terminated due to abnormal authentication response.',
        SIGN_EDATABASE: 'Failed to access database.',
        SIGN_EOTHER: 'ID authentication failed.',
        SIGN_EPASS: 'Password is incorrect.',
        SIGN_EAPP: 'Authentication failed due to an unexpected error in the application.',
        SIGN_EUNK: 'Unknown error occurred.',
    },
};

const dialogTextData = {
    ja: {
        charIdPart: '」<span class="cid">[キャラクターID：',

        // dialog labels
        yesLabel: 'はい',
        noLabel: 'いいえ',
        closeLabel: '閉じる',
        addLabel: '追加する',
        restartLabel: '再起動する',
        delCharLabel: '削除する',

        // start the game
        startGame: '<p class="caution">以下のキャラクターでゲームを開始してよろしいですか？</p><p>「',

        // add Character
        cantAddChar:
            '<p>これ以上キャラクターを追加することはできません。</p><p class="caution">キャラクターの保有可能数は、３体が上限です。</p>',
        addChar: '<p>新規キャラクターをアカウントへ追加します。<br>下記の「追加する」を押してください。</p>',
        addCharWait: '<p>キャラクターを追加しています。</p><p>しばらくお待ちください。</p>',
        addCharDone:
            '<p>新規キャラクターの追加が完了しました。<br>下記の「再起動する」を押して、ランチャーを再起動してください。</p>',
        addCharErrNorm:
            '<p class="warning">キャラクターの追加に失敗しました。</p><p>しばらく時間をおいてから、再度お試しください。</p>',

        // delete Character
        cantDeleteChar1: '<p>新規キャラクターは削除できません。</p>',
        cantDeleteChar2:
            '<p>最後のキャラクターは削除できません。</p><p class="caution">アカウント内には、最低１体のキャラクターが必要です。</p>',
        delCharPrefix: '本当にキャラクター「',
        delCharConfirm: 'を削除しますか？</p><p class="warning">一度削除したキャラクターデータは復元できません。</p>',
        delCharIdCheck: '<p>削除するキャラクターのIDを入力して、下記「削除する」を押してください。</p>',
        delCharIdInputElm:
            "<input class='del_cid' type='text' name='del_cid' placeholder='キャラクターIDを入力してください。' autocomplete='off' autocapitalize='off' aria-label='ID' aria-invalid='false'>",
        delCharWait: 'を削除しています。</p><p>しばらくお待ちください。</p>',
        delCharDone: 'の削除が完了しました。</p><p>下記の「再起動」を押して、ランチャーを再起動してください。</p>',
        delCharErrPrefix: '<p class="warning">キャラクター「',
        delCharErrNorm: 'の削除に失敗しました。</p><p>しばらく時間をおいてから、再度お試しください。</p>',
        delCharErrMatch:
            'の削除に失敗しました。</p><p>入力されたIDと削除するキャラクターのIDが一致しませんでした。</p>',

        // others
        serverMaint:
            '<p class="caution">サーバーメンテナンスのためログインできません。</p><p>メンテナンス終了まで今しばらくお待ちください。</p>',
        webInaccessible:
            '<p>レイン公式サイトにアクセスできなかったため、要求された操作を完了できませんでした。</p><p class="caution">これが未確認の問題である場合は、直ちに管理者までご報告ください。</p>',
    },

    en: {
        charIdPart: '"<span class="cid"> [Character ID: ',

        // dialog labels
        yesLabel: 'Yes',
        noLabel: 'No',
        closeLabel: 'Close',
        addLabel: 'Add',
        restartLabel: 'Restart',
        delCharLabel: 'Delete',

        // start the game
        startGame: '<p class="caution">Are you sure to start the game with the following character?</p><p>"',

        // add Character
        cantAddChar:
            '<p>No more characters can be added.</p><p class="caution">The maximum number of characters which you can own is 3.</p>',
        addChar: '<p>Add a new character to your account.<br>Click "Add" below.</p>',
        addCharWait: '<p>A new character is being added.</p><p>Please wait for a while.</p>',
        addCharDone: '<p>A new character has been added.<br>Click "Restart" below to restart the launcher.</p>',
        addCharErrNorm:
            '<p class="warning">Failed to add a character.</p><p>Please wait for a while and try again.</p>',

        // delete Character
        cantDeleteChar1: "<p>A new character can't be deleted.</p>",
        cantDeleteChar2:
            '<p>The last character can\'t be deleted.</p><p class="caution">There must be at least 1 character in your account.</p>',
        delCharPrefix: 'Do you really want to delete character "',
        delCharConfirm: '?</p><p class="warning">Once deleted, your character data can\'t be restored.</p>',
        delCharIdCheck: '<p>Enter the ID of the character you want to delete and click the "Delete" below.</p>',
        delCharIdInputElm:
            "<input class='del_cid' type='text' name='del_cid' placeholder='Enter character ID here.' autocomplete='off' autocapitalize='off' aria-label='ID' aria-invalid='false'>",
        delCharWait: 'is being deleted.</p><p>Please wait for a while.</p>',
        delCharDone: 'has been deleted.</p><p>Click "Restart" below to restart the launcher.</p>',
        delCharErrPrefix: '<p class="warning">Failed to delete the character "',
        delCharErrNorm: '.</p><p>Please wait for a while and try again.</p>',
        delCharErrMatch: ".</p><p>The ID entered didn't match the ID of the character to be deleted.</p>",

        // others
        serverMaint:
            '<p class="caution">Unable to log in due to server maintenance.</p><p>Please wait for a while until the end of maintenance.</p>',
        webInaccessible:
            '<p>The requested operation couldn\'t be completed because the Rain official website is inaccessible.</p><p class="caution">If this is an unconfirmed problem, please report it to the administrators immediately.</p>',
    },
};

/*=========================================================
　　　　　Misc Functions
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
    const lang = getQueryParams('l');

    return normTextData[lang][textType];
};

const updateTextOutput = function (textType, index) {
    const lang = getQueryParams('l');

    return updateTextData[lang][textType][index];
};

const msgLogTextOutput = function (textType) {
    const lang = getQueryParams('l');

    return msgLogTextData[lang][textType];
};

const dialogTextOutput = function (textType) {
    const lang = getQueryParams('l');

    return dialogTextData[lang][textType];
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
        return "<?xml version='1.0' encoding='UTF-8'><server_groups><group idx='1' nam='Rain1'/><group idx='2' nam='Rain2'/><group idx='3' nam='Rain3'/></server_groups>";
    }
};

const minimizeWindow = function () {
    try {
        soundMode && playSound('IDR_WAV_OK');
        window.external.minimizeWindow();
    } catch (err) {}
};

const closeWindow = function () {
    try {
        soundMode && playSound('IDR_WAV_OK');
        window.external.closeWindow();
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

const checkDebugMode = function () {
    disableElement(loginBtn, 1);

    ReqDataFromRainWeb(1, 'getLauncherSystem')
        .done(function (result) {
            if (!result['success']) {
                console.error('Successfully accessed RainWeb, but failed to get data.');
                debugMode = false;
            } else {
                console.log('Successfully accessed RainWeb and get data.');
                debugMode = result['data'].debug;
                debugMode && $('.launcher_footer').append(normTextOutput('debugMode'));
            }
        })
        .fail(function () {
            console.error('Failed to access RainWeb and get data.');
            if (window.location.origin.indexOf('192.168') !== -1) {
                // localhost env (for test)
                debugMode = true;
                $('.launcher_footer').append(normTextOutput('debugMode'));
            } else {
                // non-localhost env
                debugMode = false;
            }
        })
        .always(function () {
            enableElement(loginBtn, 1);
        });
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
    return window.external.getTotalPctOnUpdate();
};

const getFilePctOnUpdate = function () {
    return window.external.getFilePctOnUpdate();
};

const getUpdateStatus = function () {
    return String(window.external.getUpdateStatus());
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
    $('.remember_me').text(normTextOutput('rememberMeBtn'));
    $('.forgot_creds').text(normTextOutput('forgetCredsBtn'));
    $('.btn_preferences').text(normTextOutput('preferencesBtn'));
    $('.authenticating_text').text(normTextOutput('authText'));
    $(charAddButton).attr('data-btn', normTextOutput('charAddBtnText'));
    $(charDelButton).attr('data-btn', normTextOutput('charDelBtnText'));
    $('.btn_start').attr('data-btn', normTextOutput('startGameBtnText'));
    $('.maint_text').html(normTextOutput('maintenanceText'));
    $('.disclaimer').text(normTextOutput('disclaimer'));
};

const ReqDataFromRainWeb = function (data1, data2, data3, data4) {
    const data = JSON.stringify({ 1: data1, 2: data2, 3: data3, 4: data4 });
    return $.ajax({
        url: 'http://localhost:5173/admin',
        type: 'POST',
        data: data,
        contentType: 'application/json',
        dataType: 'json',
    });
};

const toggleSound = function () {
    if (soundMode) {
        localStorage.setItem('SoundMode', 'false');

        $(
            '.minimize, .close, .checkbox, .forgot_creds, .btn_preferences, .scroll, .menu_contents_anchor, ' +
                serverSelBtn +
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
        $('.username_input').removeAttr('onkeydown');
        $('.password_input').removeAttr('onkeydown');

        $('.sound_handle').html('<span class="material-symbols-outlined">volume_off</span>');
        soundMode = false;
    } else {
        localStorage.setItem('SoundMode', 'true');

        $(
            '.minimize, .close, .checkbox, .forgot_creds, .btn_preferences, .scroll, .menu_contents_anchor, ' +
                serverSelBtn +
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
        $('.username_input').attr('onkeydown', "playSound('IDR_WAV_SEL')");
        $('.password_input').attr('onkeydown', "playSound('IDR_WAV_SEL')");

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
        eyeBtn.textContent = 'visibility';
    } else {
        // show password
        passInput.type = 'text';
        eyeBtn.textContent = 'visibility_off';
    }
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
            $(serverListBox).append($('<li class="srv sound_on" idx="' + index + '">' + name + '</li>'));
        });

    // if the last selected index is out of range, set true to serverNotSelected for initializing
    (lastSelectedSrvIndex < 0 || lastSelectedSrvIndex > $(srvListEachItem).length) && (serverNotSelected = true);

    // if user have previously selected a server, set auth server and assign class to the target server
    serverNotSelected
        ? $(serverSelBtn).text(normTextOutput('serverNotSelected'))
        : (switchAuthSrv($(srvListEachItem)[lastSelectedSrvIndex]),
          $('.srv').eq(lastSelectedSrvIndex).addClass('selected_srv'));

    // hide the server selection list
    $(serverListBox).hide();

    // add the server selection button to the focus elements and bind the mousedown event to it
    $(serverSelBtn).mousedown(function () {
        serverListOpen ? hideSrvSelList() : showSrvSelList();
    });

    // the mousedown event to each server element to select it as the active server, and hide the server selection list
    $(srvListEachItem).mousedown(function () {
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
        $(serverSelGroup).addClass('opened_svr_list'),
        (serverListOpen = true);
};

const hideSrvSelList = function () {
    // disable the button
    $(serverSelBtn).prop('disabled', true);

    $(serverListBox).slideUp(300, function () {
        // re-enable the button after the animation is complete
        $(serverSelBtn).prop('disabled', false);
    }),
        $(serverSelGroup).removeClass('opened_svr_list'),
        (serverListOpen = false);
};

/*=========================================================
　　　　　Message Log Functions
=======================================================*/
const messageContents = '.msg_contents';

const initializeMsg = function () {
    addLogMsg(msgLogTextOutput('gettingMsg'));

    ReqDataFromRainWeb(1, 'getLauncherSystem')
        .done(function (result) {
            $(messageContents).text('');
            const version = result['data'].launcher_ver;
            addLogMsg('Launcher Version: ' + version, 'g');
            addLogMsg(msgLogTextOutput('initMsg'));
        })
        .fail(function () {
            $(messageContents).text('');
            addLogMsg(msgLogTextOutput('failedGetMsg'), 'r');
        });
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
const inputUsername = '.username_input',
    inputPassword = '.password_input',
    loginBtn = '.btn_login',
    logoutBtn = '.btn_logout',
    rememberMeCheck = '.remember_me_check',
    credsForgot = '.btn_forgot';

let maintenanceData = {},
    soundMode,
    debugMode,
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
          (soundMode && playSound('IDR_WAV_OK'), onAuthError(msgLogTextOutput('noUsernamePass')))
        : // if credentials are entered, proceed to auth process
          (soundMode && playSound('IDR_WAV_PRE_LOGIN'), showAuthenticating(), requestAuthentication(username));
};

const requestAuthentication = function (username) {
    // in debugMode, all processes are skipped

    // first, check if the user has been banned
    ReqDataFromRainWeb(1, 'getSuspendedUserByUIdAndName', username)
        .done(function (result) {
            if (!result['success']) {
                console.error('Successfully accessed RainWeb, but failed to get data.');
                onAuthError(msgLogTextOutput('SIGN_EILLEGAL'), 'r');
            } else {
                console.log('Successfully accessed RainWeb and get data.');
                const isUserSuspended = result['data'] !== null;

                if (debugMode) {
                    const loginSuccess = loginRain(
                        $(inputUsername).val(),
                        $(inputPassword).val(),
                        $(inputPassword).val()
                    );

                    loginSuccess
                        ? // if loginSuccess is true, login polling will be run
                          (loginPollingTimerId = setInterval(startLoginPolling, 1000))
                        : //if false, error handling will be run with onAuthError
                          onAuthError(msgLogTextOutput('SIGN_EAPP'), 'r');
                } else {
                    if (isUserSuspended) {
                        if (result['data'].permanent) {
                            onAuthError(msgLogTextOutput('permSuspendedAcc'), 'r');
                        } else {
                            onAuthError(msgLogTextOutput('suspendedAcc'), 'r');
                        }
                    } else if (result === 'Invalid Input') {
                        // if there is an invalid operation for some reason
                        onAuthError(msgLogTextOutput('SIGN_EILLEGAL'), 'r');
                    } else {
                        // second, check if the user exists
                        ReqDataFromRainWeb(1, 'getExtgUserByUserName', username).done(function (result) {
                            const isExistingUser = result['data'] !== null;

                            if (isExistingUser) {
                                // if the user exists, go to the process for checking if the account is linked with rain discord
                                const uid = result['data'].id;
                                loginUserId = uid;

                                // last, check if discord is linked to the user account
                                ReqDataFromRainWeb(1, 'getLinkedAccByUId', uid).done(function (result) {
                                    const isLinkedAcc = result['data'] !== null;

                                    if (isLinkedAcc) {
                                        // if the account is linked with rain discord, go to the login process
                                        const loginSuccess = loginRain(
                                            $(inputUsername).val(),
                                            $(inputPassword).val(),
                                            $(inputPassword).val()
                                        );

                                        loginSuccess
                                            ? // if loginSuccess is true, login polling will be run
                                              (loginPollingTimerId = setInterval(startLoginPolling, 1000))
                                            : //if false, error handling will be run with onAuthError
                                              onAuthError(msgLogTextOutput('SIGN_EAPP'), 'r');
                                    } else if (result === 'Invalid Input') {
                                        // if there is an invalid operation for some reason
                                        onAuthError(msgLogTextOutput('SIGN_EILLEGAL'), 'r');
                                    } else {
                                        // user doesn't exist
                                        onAuthError(msgLogTextOutput('noLinkedAcc'));
                                    }
                                });
                            } else if (result === 'Invalid Input') {
                                // if there is an invalid operation for some reason
                                onAuthError(msgLogTextOutput('SIGN_EILLEGAL'), 'r');
                            } else {
                                // user doesn't exist
                                onAuthError(msgLogTextOutput('noExistingUser'));
                            }
                        });
                    }
                }
            }
        })
        .fail(function () {
            console.error('Failed to access RainWeb and get data.');
            if (window.location.origin.indexOf('192.168') !== -1) {
                // localhost env (for test)
                const loginSuccess = loginRain($(inputUsername).val(), $(inputPassword).val(), $(inputPassword).val());

                loginSuccess
                    ? // if loginSuccess is true, login polling will be run
                      (loginPollingTimerId = setInterval(startLoginPolling, 1000))
                    : //if false, error handling will be run with onAuthError
                      onAuthError(msgLogTextOutput('SIGN_EAPP'), 'r');
            } else {
                // non-localhost env
                onAuthError(msgLogTextOutput('webAccessErr'), 'r');
            }
        });
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
            addLogMsg(msgLogTextOutput('authSuccess'), 'g', true);
            stopLoginPolling();

            const serverName = $(serverSelBtn)
                .text()
                .replace(/[\s()]/g, '');

            ReqDataFromRainWeb(1, 'getLauncherSystem')
                .done(function (result) {
                    if (!result['success']) {
                        maintenanceData = { RainJP: false, RainUS: false, RainEU: false, RainLocalhost: false };
                        console.error('Successfully accessed RainWeb, but failed to get data.');
                    } else {
                        maintenanceData = result['data'];
                        console.log('Successfully accessed RainWeb and get data.');
                    }
                })
                .fail(function () {
                    maintenanceData = { RainJP: false, RainUS: false, RainEU: false, RainLocalhost: false };
                    console.error('Failed to access RainWeb and get data.');
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
                case 'SIGN_EALERT':
                case 'SIGN_EABORT':
                case 'SIGN_ERESPONSE':
                case 'SIGN_EDATABASE':
                    onAuthError(msgLogTextOutput(signResult), 'r');
                    break;

                case 'SIGN_EPASS':
                    onAuthError(msgLogTextOutput(signResult));
                    break;

                // if it doesn't match any of the above errors, output other error msg
                default:
                    onAuthError(msgLogTextOutput('SIGN_EOTHER'), 'r');
            }
            break;

        // if there is an unknown error, stop the login polling and output unknown error msg
        default:
            stopLoginPolling(), onAuthError(msgLogTextOutput('SIGN_EUNK'), 'r');
    }
};

const stopLoginPolling = function () {
    loginPollingTimerId && clearInterval(loginPollingTimerId);
};

const afterLoginSuccess = function (serverName) {
    maintenanceData[serverName]
        ? (showMaintenanceDialog(),
          hideAuthenticating(),
          $('.launcher_login_panel').hide(),
          $(logoutBtn).show(),
          $('.name_srv_label').text($(inputUsername).val() + '@' + $(serverSelBtn).text()),
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
    // refresh logs
    clearOnlyLog();

    // hide update display
    $('.launcher_update_process').hide();

    // hide character selection
    $(charSelBox).hide();

    // show login main panel
    $('.launcher_login_panel').show();

    // reset server name label
    $('.name_srv_label').text('');

    // hide logout button
    $(logoutBtn).hide();

    // hide maintenance display
    $('.maintenance').hide();

    // reset user id label
    $('.uid_label').text('');

    // reset variable
    loginUserId = '';
};

const startUpLauncher = function () {
    // initialize normal text
    initNormTextData();

    // initialize aside menu
    initAsideMenu();

    // initialize server selector list
    initSrvSelList();

    // initial display of msg log
    initializeMsg();

    // get banner data
    beginLoadBnr();

    // get information data
    beginLoadInfo();

    // enable scroll bar on server selector box
    new scrollBarHandler('.srv_sel_box');

    const lang = getQueryParams('l');
    $('.game_logo').attr('src', '/assets/img/logo/' + lang + '.png');

    // login button click event
    $(loginBtn).click(function () {
        serverNotSelected
            ? (soundMode && playSound('IDR_WAV_OK'), onAuthError(msgLogTextOutput('noSrvSelected')))
            : beginAuthProcess();
    });

    // set username and focus event
    username = localStorage.getItem('Username');
    $(inputUsername).val(username);
    $(inputUsername).focus(function () {
        soundMode && playSound('IDR_WAV_OK');
    });

    // set password and focus event
    password = localStorage.getItem('Password');
    $(inputPassword).val(password);
    $(inputPassword).focus(function () {
        soundMode && playSound('IDR_WAV_OK');
    });

    // set soundMode and remove sound_on class if false
    soundMode =
        localStorage.getItem('SoundMode') === 'true' || localStorage.getItem('SoundMode') === null ? true : false;
    !soundMode &&
        ($(
            '.minimize, .close, .checkbox, .forgot_creds, .btn_preferences, .scroll, .menu_contents_anchor, ' +
                serverSelBtn +
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
        ).removeClass('sound_on'),
        $('.username_input').removeAttr('onkeydown'),
        $('.password_input').removeAttr('onkeydown'),
        $('.sound_handle').html('<span class="material-symbols-outlined">volume_off</span>'));

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

let loginUserId = '',
    hunterIds = [];

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

const convHrpToHr = function (hrp) {
    switch (hrp) {
        case 999:
            return 7;

        case 998:
            return 6;

        case 299:
            return 5;

        case 99:
            return 4;

        case 50:
            return 3;

        case 30:
            return 2;

        case 1:
            return 1;

        default:
            return 0;
    }
};

const convWpnNameToEng = function (wpnJaName) {
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

const showCharSelector = function () {
    const lang = getQueryParams('l');

    // clear the character unit box to init state
    $(charSelUnitBox).empty();

    const uid = loginUserId > 0 ? loginUserId : 'No Data';

    if (debugMode) {
        // get characters via non-website mehtod and convert it
        const characterInfo = $('<div>').html(
            getAllCharData()
                .replace(/'/g, '"')
                .replace(/&apos;/g, "'")
        );

        // create a new character unit and append it to the character unit box
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
                    parseInt($(element).attr('lastLogin'), 10)
                )
            );
        });

        // hide authenticating screen, launcher_login_panel, launcher_update_process, and character selection box
        hideAuthenticating();
        $('.launcher_login_panel').hide();
        $('.launcher_update_process').hide();
        $(charSelBox).show();

        // show logout container
        $('.uid_label').text(normTextOutput('userIdLabel') + uid);
        $(logoutBtn).show();
        $('.name_srv_label').text($(inputUsername).val() + '@' + $(serverSelBtn).text());

        // delete logs with class name "only"
        clearOnlyLog();

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
    } else {
        ReqDataFromRainWeb(1, 'getCharactersByUId', uid ? uid : 0, lang)
            .done(function (result) {
                if (!result['success']) {
                    console.error('Successfully accessed RainWeb, but failed to get data.');

                    $(charSelUnitBox).append(
                        createCharUnit(
                            'Failed to Get Character Data',
                            'Unknown',
                            'Unknown',
                            'Unknown',
                            1,
                            'Unknown',
                            'Unknown',
                            'Unknown',
                            false,
                            'Unknown'
                        )
                    );
                } else {
                    console.log('Successfully accessed RainWeb and get data.');

                    const characterInfo = $('<div>').html(
                        getAllCharData()
                            .replace(/'/g, '"')
                            .replace(/&apos;/g, "'")
                    );
                    characterInfo.find('Character').each(function (_, element) {
                        hunterIds.push($(element).attr('hid'));
                    });
                    const res = result['data'].sort(function (a, b) {
                        return a.id - b.id;
                    });

                    // add hunter id to characters data from rainweb
                    res.forEach(function (character, index) {
                        if (hunterIds[index] !== undefined) {
                            character.hunterId = hunterIds[index];
                        }
                    });

                    if (res.length !== 0) {
                        objectEntries(res).map(function (entry) {
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
                                        convHrpToHr(character.hrp),
                                        character.gr,
                                        character.weapon_type_name,
                                        character.weapon_id_name,
                                        character.is_female,
                                        character.last_login
                                    )
                                );
                            }
                        });
                    } else {
                        $(charSelUnitBox).append(
                            createCharUnit(
                                'Failed to Get Character Data',
                                'Unknown',
                                'Unknown',
                                'Unknown',
                                1,
                                'Unknown',
                                'Unknown',
                                'Unknown',
                                false,
                                'Unknown'
                            )
                        );
                    }
                }
            })
            .fail(function () {
                console.error('Failed to access RainWeb and get data.');

                if (window.location.origin.indexOf('192.168') !== -1) {
                    // get characters via non-website mehtod and convert it
                    const characterInfo = $('<div>').html(
                        getAllCharData()
                            .replace(/'/g, '"')
                            .replace(/&apos;/g, "'")
                    );

                    // create a new character unit and append it to the character unit box
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
                                parseInt($(element).attr('lastLogin'), 10)
                            )
                        );
                    });
                } else {
                    $(charSelUnitBox).append(
                        createCharUnit(
                            'Failed to Get Character Data',
                            'Unknown',
                            'Unknown',
                            'Unknown',
                            1,
                            'Unknown',
                            'Unknown',
                            'Unknown',
                            false,
                            'Unknown'
                        )
                    );
                }
            })
            .always(function () {
                // hide authenticating screen, launcher_login_panel, launcher_update_process, and character selection box
                hideAuthenticating();
                $('.launcher_login_panel').hide();
                $('.launcher_update_process').hide();
                $(charSelBox).show();

                // show logout container
                $('.uid_label').text(normTextOutput('userIdLabel') + uid);
                $(logoutBtn).show();
                $('.name_srv_label').text($(inputUsername).val() + '@' + $(serverSelBtn).text());

                // delete logs with class name "only"
                clearOnlyLog();

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
            });
    }
};

const createCharUnit = function (
    name,
    hunterId,
    userId,
    characterId,
    hr,
    gr,
    weaponType,
    weaponName,
    gender,
    lastLogin
) {
    const charName = convEntities(name) === '' ? normTextOutput('readyHunt') : convEntities(name);
    const isFemale = typeof gender === 'string' ? gender !== 'M' : gender;

    let wpnClass = String(weaponType);
    // convert weapon name for style usage
    wpnClass = wpnClass.replace(/\s+/g, '').replace(/&/g, 'And');
    wpnClass = wpnClass.toLowerCase().charAt(0) + wpnClass.slice(1);

    // weapon name conversion
    const lang = getQueryParams('l');
    lang === 'ja' && (wpnClass = convWpnNameToEng(weaponType));

    // generate a new div element with the given attributes
    const charUnit = $(
        '<div class="unit swiper-slide" hid="' +
            hunterId +
            '" uid="' +
            userId +
            '" cid="' +
            characterId +
            '" name="' +
            charName +
            '" to="0"></div>'
    );

    // character name
    charUnit.append($('<p class="name">' + charName + '</p>'));

    hr === 0
        ? // if the character is new (HR is 0), add a new class and a new element to the div
          (charUnit.addClass('new'), charUnit.append($(normTextOutput('newMsg1') + normTextOutput('newMsg2'))))
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

const addCharacter = function (uid) {
    ReqDataFromRainWeb(2, 'addCharacter', uid)
        .done(function (result) {
            switch (result['status']) {
                case 'Added_Character':
                    showAddCharDoneDialog();
                    break;

                case 'Unexpected_Error':
                    showFailAddCharErrNormDialog();
                    break;

                case 'Invalid_Input':
                    showInvalidInputDialog();
                    break;

                default:
                    showFailAddCharErrNormDialog();
                    alert(result['status']);
            }
        })
        .fail(function () {
            showWebInaccessibleDialog();
        });
};

const deleteCharacter = function (name, cid) {
    ReqDataFromRainWeb(2, 'deleteCharacter', cid)
        .done(function (result) {
            switch (result['status']) {
                case 'Deleted_Character':
                    showDelCharDoneDialog(name, cid);
                    break;

                case 'Unexpected_Error':
                    showFailDelCharErrNormDialog(name, cid);
                    break;

                case 'Invalid_Input':
                    showInvalidInputDialog();
                    break;

                default:
                    showFailDelCharErrNormDialog(name, cid);
                    alert(result['status']);
            }
        })
        .fail(function () {
            showWebInaccessibleDialog();
        });
};

const checkDelID = function (name, cid) {
    cid === $('.del_cid').val() ? showWaitDelCharDialog(name, cid) : showFailDelCharErrMatchDialog(name, cid);
};

const prepareStartGame = function () {
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

const startTheGame = function (hid) {
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
const updateAnim = '.launcher_update_process .anim',
    fileProgressBar = '.bar_area .file_progress',
    totalProgressBar = '.bar_area .total_progress',
    progressStateMessage = '.update_msg .progress_state',
    nextActionMessage = '.update_msg .next_action',
    delayTime = 3000,
    progressBarWidth = 302,
    progressBarPercent = 0.01 * progressBarWidth;

let updateEnabled,
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

const prepareBeginUpdate = function (hid) {
    // initial settings on update display
    disableElement(logoutBtn, 1);
    $(fileProgressBar).width(0);
    $(totalProgressBar).width(0);

    $('.connecting_overlay').fadeIn(200);

    ReqDataFromRainWeb(1, 'getLauncherSystem')
        .done(function (result) {
            if (!result['success']) {
                updateEnabled = false;
                console.error('Successfully accessed RainWeb, but failed to get data.');
            } else {
                updateEnabled = result['data'].update;
                console.log('Successfully accessed RainWeb and get data.');
            }
        })
        .fail(function () {
            updateEnabled = false;
            console.error('Failed to access RainWeb and get data.');
        })
        .always(function () {
            const update = updateEnabled ? window.external.startUpdate() : false;
            afterCheckUpdateMode(hid, update);
        });
};

const afterCheckUpdateMode = function (hid, update) {
    update
        ? // if update is needed, start update process
          ($('.character_selection').hide(),
          $('.connecting_overlay').hide(),
          $('.name_srv_label').text(''),
          $(logoutBtn).hide(),
          $('.uid_label').hide(),
          $(progressStateMessage).text(updateTextOutput('progressState', 0)),
          $(nextActionMessage).text(updateTextOutput('nextActions', 0)),
          $('.launcher_update_process').show(),
          beginUpdateProcess(hid),
          setTimeout(function () {
              updateProcessPct();
          }, 50))
        : // if not needed, directly proceed to start game
          setTimeout(function () {
              $('.connecting_overlay').hide(), startTheGame(hid);
          }, 420);
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
                startTheGame(hid);
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
          ($(fileProgressBar).width(Math.ceil(getFilePctOnUpdate() * progressBarPercent)),
          $('.file_pct').text(getFilePctOnUpdate()),
          switchUpdateAfterState());
};

const clearAnimSq = function () {
    animTimerId && clearTimeout(animTimerId);
};

/*=========================================================
　　　　　Banner and Information List Function
=======================================================*/
const infoList = '.info_list',
    infoListContents = '.info_list_contents',
    asideMenu = '.launcher_menu',
    launcherBanner = '.launcher_bnr';

let importantInfoData = {},
    defectsAndTroublesInfoData = {},
    managementAndServiceInfoData = {},
    inGameEventsInfoData = {},
    updatesAndMaintenanceInfoData = {};

const beginLoadInfo = function () {
    $(infoList).append(normTextOutput('gettingInfo'));
    $(infoList).append('<div class="info_getting_loader"></div>');

    $('.info_getting_loader').show();

    ReqDataFromRainWeb(1, 'getInformation', 'all')
        .done(function (result) {
            if (!result['success']) {
                $('.info_getting').hide();
                $('.info_getting_loader').hide();
                $(infoList).append(normTextOutput('failedGetInfo'));
                console.error('Successfully accessed RainWeb, but failed to get data.');
            } else {
                delete result['success'];

                const infoData = {
                    important: { name: normTextOutput('important'), data: result['data1'] },
                    defects: { name: normTextOutput('defects'), data: result['data2'] },
                    management: { name: normTextOutput('management'), data: result['data3'] },
                    event: { name: normTextOutput('event'), data: result['data4'] },
                    update: { name: normTextOutput('update'), data: result['data5'] },
                };

                let infoUlElm;
                let infoLiElm;
                Object.keys(infoData).forEach(function (infoType) {
                    infoUlElm = $('<ul>', {
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

                // after getting info, hide loading stuff
                $('.info_getting').remove();
                $('.info_getting_loader').remove();

                // replace href attr to openBrowser
                overrideAnker(infoList);

                // enable scrolling
                new scrollBarHandler(infoList);
                console.log('Successfully accessed RainWeb and get data.');
            }
        })
        .fail(function () {
            $('.info_getting').remove();
            $('.info_getting_loader').remove();
            $(infoList).append(normTextOutput('failedGetInfo'));
            console.error('Failed to access RainWeb and get data.');
        });
};

const initAsideMenu = function () {
    const lang = getQueryParams('l');
    const menuData = asideMenuData[lang];

    Object.keys(menuData).forEach(function (className) {
        const menuItem = menuData[className];
        const anchor = $('<a>', {
            class: 'menu_contents_anchor sound_on ' + className,
            href: menuItem.url || '#',
            style: menuItem.url ? '' : 'cursor: not-allowed',
        });
        const iconSpan = $('<span>', {
            class: 'material-symbols-outlined',
            text: menuItem.iconName,
        });

        anchor.append(iconSpan).append(menuItem.name);
        $(asideMenu).append(anchor);
    });
};

const beginLoadBnr = function () {
    const lang = getQueryParams('l');
    $(launcherBanner).append('<div class="bnr_getting_loader"></div>');

    ReqDataFromRainWeb(1, 'getBannerData')
        .done(function (result) {
            if (!result['success']) {
                $('.bnr_getting_loader').hide();
                $(launcherBanner).append(normTextOutput('failedGetBnr'));
                console.error('Successfully accessed RainWeb, but failed to get data.');
            } else {
                delete result['success'];

                let bnrLiElm;
                result['data'].forEach(function (bnr) {
                    const siteURL = !bnr.bnr_url ? '#' : bnr.bnr_url;
                    const imgSource = lang === 'ja' ? bnr.ja_img_src : bnr.en_img_src;
                    const bnrStyle = !bnr.bnr_url ? 'cursor: not-allowed' : 'cursor: pointer';

                    bnrLiElm = $('<li>', {
                        class: 'bnr',
                        html:
                            '<a href="' +
                            siteURL +
                            '"><img src="' +
                            imgSource +
                            '" style="' +
                            bnrStyle +
                            '" alt="' +
                            bnr.bnr_name +
                            '" /></a>',
                    });
                    $(launcherBanner).append(bnrLiElm);
                });
            }

            // after getting info, hide loading stuff
            $('.bnr_getting_loader').remove();

            // replace href attr to openBrowser
            overrideAnker(launcherBanner);

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
        })
        .fail(function () {
            $('.bnr_getting_loader').remove();
            $(launcherBanner).append(normTextOutput('failedGetBnr'));
            console.error('Failed to access RainWeb and get data.');
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
            const sound = option.noSound === true ? '' : 'soundMode && playSound("IDR_WAV_OK");';

            // add click and hover event to button
            button.attr({
                onclick: sound + ' ' + option.cmd,
                onMouseOver: "soundMode && playSound('IDR_WAV_SEL')",
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

// error
const showInvalidInputDialog = function () {
    showDialog('<p class="warning">Invalid Input.</p>', [
        { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
    ]);
};

const showWebInaccessibleDialog = function () {
    showDialog(dialogTextOutput('webInaccessible'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

const showMaintenanceDialog = function () {
    // show maintenance display
    $('.maintenance').show();

    // append maintenance server name
    $('.maint_server_name').text($(serverSelBtn).text());

    showDialog(dialogTextOutput('serverMaint'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

// add character
const showCantAddCharDialog = function () {
    showDialog(dialogTextOutput('cantAddChar'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

const showAddCharDialog = function (uid) {
    const createCharURL = '#';

    showDialog(dialogTextOutput('addChar'), [
        {
            label: dialogTextOutput('addLabel'),
            cmd: ' openBrowser("' + createCharURL + '"); showWaitAddCharDialog("' + uid + '");',
        },
        { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
    ]);
};

const showWaitAddCharDialog = function (uid) {
    showDialog(dialogTextOutput('addCharWait')), addCharacter(uid);
};

const showAddCharDoneDialog = function () {
    showDialog(dialogTextOutput('addCharDone'), [{ label: dialogTextOutput('restartLabel'), cmd: 'restartGame();' }]);
};

const showFailAddCharErrNormDialog = function () {
    showDialog(dialogTextOutput('addCharErrNorm'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

// delete character
const showCantDelCharDialog1 = function () {
    showDialog(dialogTextOutput('cantDeleteChar1'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

const showCantDelCharDialog2 = function () {
    showDialog(dialogTextOutput('cantDeleteChar2'), [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]);
};

const showDelCharDialog1 = function (name, cid) {
    showDialog(
        '<p>' +
            dialogTextOutput('delCharPrefix') +
            name +
            dialogTextOutput('charIdPart') +
            cid +
            '] </span>' +
            dialogTextOutput('delCharConfirm'),
        [
            {
                label: dialogTextOutput('delCharLabel'),
                cmd: 'showDelCharDialog2("' + name + '", "' + cid + '");',
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
                cmd: 'checkDelID("' + name + '", "' + cid + '");',
                isStandby: true,
            },
            { label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' },
        ],
        1000
    );
};

const showWaitDelCharDialog = function (name, cid) {
    const lang = getQueryParams('l');

    showDialog(
        '<p>' +
            (lang === 'ja' ? '「' : '"') +
            name +
            dialogTextOutput('charIdPart') +
            cid +
            '] </span>' +
            dialogTextOutput('delCharWait')
    ),
        deleteCharacter(name, cid);
};

const showDelCharDoneDialog = function (name, cid) {
    const lang = getQueryParams('l');

    showDialog(
        '<p>' +
            (lang === 'ja' ? '「' : '"') +
            name +
            dialogTextOutput('charIdPart') +
            cid +
            '] </span>' +
            dialogTextOutput('delCharDone'),
        [{ label: dialogTextOutput('restartLabel'), cmd: 'restartGame();' }]
    );
};

const showFailDelCharErrNormDialog = function (name, cid) {
    showDialog(
        dialogTextOutput('delCharErrPrefix') +
            name +
            dialogTextOutput('charIdPart') +
            cid +
            '] </span>' +
            dialogTextOutput('delCharErrNorm'),
        [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]
    );
};

const showFailDelCharErrMatchDialog = function (name, cid) {
    showDialog(
        dialogTextOutput('delCharErrPrefix') +
            name +
            dialogTextOutput('charIdPart') +
            cid +
            '] </span>' +
            dialogTextOutput('delCharErrMatch'),
        [{ label: dialogTextOutput('closeLabel'), cmd: 'hideDialog();' }]
    );
};

// start game
const showStartGameDialog = function (name, hid, cid) {
    showDialog(dialogTextOutput('startGame') + name + dialogTextOutput('charIdPart') + cid + '] </span>', [
        {
            label: dialogTextOutput('yesLabel'),
            cmd: 'prepareBeginUpdate("' + hid + '"); hideDialog();',
        },
        {
            label: dialogTextOutput('noLabel'),
            cmd: 'hideDialog();',
        },
    ]);
};

/*=========================================================
　　　　　IIFE on the Launcher
=======================================================*/
$(function () {
    checkDebugMode();

    // init language
    const lang = getQueryParams('l');
    document.documentElement.setAttribute('lang', lang ? lang : 'en');

    /* Launcher Initialization Functions
====================================================*/
    // initial authentication, including server and id or password setup
    startUpLauncher();

    // load moving function
    launcherMovingHandler();

    // convert href on anchor tag to openBrowser function
    overrideAnker('.wrapper');

    // by default, launcher window can't be moved
    enableDrag(false);

    // prevent user from selecting all texts in the launcher
    $(document).on('selectstart', function (e) {
        !$(e.target).is('input') && e.preventDefault();
    });
    $(document).on('mousedown', function (e) {
        !$(e.target).is('input') && e.preventDefault();
    });

    /* Click or Mouseover Event
====================================================*/
    // play a sound when hovering the element with sound_on class
    $(document).on('mouseover', '.sound_on', function () {
        playSound('IDR_WAV_SEL');
    });

    // play a sound when clicking the element with sound_on class except for login btn
    $(document).on('mousedown', '.sound_on', function (e) {
        e.target !== $(loginBtn).get(0) && playSound('IDR_WAV_OK');
    });

    // add a character
    $(charAddButton).click(function () {
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
    });

    // delete a character
    $(charDelButton).click(function () {
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
