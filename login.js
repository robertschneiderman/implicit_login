// Frame Injection
$(function () {
    if (top.frames.length != 0) {
        top.location.replace(self.location.href);
    }
});

// Browser Support Messages
$(function () {
    // JavaScript
    $('#MessageJavaScriptDisabled').hide();

    // Cookies
    $.cookie('logings-login-cookies', 'true');
    if ($.cookie('logings-login-cookies') == null) {
        $('#MessageCookiesDisabled').removeClass("hidden");
    }
    else {
        $.cookie('logings-login-cookies', null, { expires: -1 });
    }

    // Windows XP End of Support and Internet Explorer Upgrade
    if (navigator.userAgent.match(/Windows NT 5.1/i) != null || navigator.userAgent.match(/Windows NT 5.2/i) != null) {
        $('#MessageWindowsXP').removeClass("hidden");
    }
    else {
        $('#MessageInternetExplorer').removeClass("hidden");
    }
});

// Form Focus
$(function () {
    $('#login').focus();
});

// Region
$(function() {
    $('#region').change(function() {
        if ($(this).val().toLowerCase() === 'americas-login.gs.com') {
            $.cookie('logings-login-region', null, { expires: -1, path: '/', domain: '.gs.com', secure: true });
            $.cookie('logings-login-region', null, { expires: -1, path: '/', domain: '.login.gs', secure: true });
        } else {
            $.cookie('logings-login-region', $(this).val(), { expires: 365, path: '/', domain: '.gs.com', secure: true });
            $.cookie('logings-login-region', $(this).val(), { expires: 365, path: '/', domain: '.login.gs', secure: true });
        }

        if ($.inArray($(this).val().toLowerCase(), ['americas-login.gs.com', 'emea-login.gs.com', 'swiss-login.gs.com']) >= 0) {
            var hostParts = top.location.host.toLowerCase().match(/([A-Za-z]+)([1-2])-login.gs.com/i);
            if (hostParts != null && $(this).val().toLowerCase() === hostParts[1] + '-login.gs.com') {
                $('form').attr('action', 'https://' + $(this).val().replace('-', hostParts[2] + '-') + '/cgi/login');
            } else {
                $('form').attr('action', 'https://' + $(this).val().replace('-', Math.floor((Math.random() * 2) + 1) + '-') + '/cgi/login');
            }
        } else {
            $('form').attr('action', 'https://' + $(this).val() + '/cgi/login');
        }
    });
});

$(function () {
    if ($.cookie('logings-login-region') != null && $.inArray($.cookie('logings-login-region').toLowerCase(), ['aej-login.gs.com', 'japan-login.gs.com']) >= 0) {
        $.cookie('logings-login-region', 'apac1-login.gs.com', { expires: 365, path: '/', domain: '.gs.com', secure: true });
        $.cookie('logings-login-region', 'apac1-login.gs.com', { expires: 365, path: '/', domain: '.login.gs', secure: true });
    }

    if ($.inArray(top.location.host.toLowerCase(), ['login.gs', 'login.gs.com']) >= 0 && $.cookie('logings-login-region') != null) {
        $('#region').val($.cookie('logings-login-region'));
    }
    else if ($.inArray(top.location.host.toLowerCase(), ['americas1-login.gs.com', 'americas2-login.gs.com', 'emea1-login.gs.com', 'emea2-login.gs.com', 'swiss1-login.gs.com', 'swiss2-login.gs.com']) >= 0) {
        $('#region').val(top.location.host.toLowerCase().replace(/([A-Za-z]+)([1-2])-login.gs.com/i, '$1-login.gs.com'));
    }
    else {
        $('#region').val(top.location.host.toLowerCase());
    }

    if ($('#region').val() == null) {
        $('#region').val('americas-login.gs.com');
    }

    $('#region').change();
});

// Form Submit
$(function() {
    $('form').submit(function() {
        if ($('#login').val().length == 0 || $('#passwd').val().length < 6) {
            return false;
        }
	$('#login').val($.trim($('#login').val()));
        $.cookie('logings-login-username', $('#login').val().trim(), { path: '/', domain: '.gs.com', secure: true });
        $.cookie('logings-login-username', $('#login').val().trim(), { path: '/', domain: '.login.gs', secure: true });
        return true;
    });
});

// Auth Failed Message
$(function () {
    if ($.cookie('NSC_VPNERR') == '4001') {
        $('#login').val($.cookie('logings-login-username'));
        $.cookie('NSC_VPNERR', null, { expires: -1, path: '/' });
        $.cookie('logings-login-username', null, { expires: -1, path: '/', domain: '.gs.com', secure: true });
        $.cookie('logings-login-username', null, { expires: -1, path: '/', domain: '.login.gs', secure: true });
        $('#MessageAuthFailed').removeClass("hidden");
        $('#passwd').focus();
    }
});