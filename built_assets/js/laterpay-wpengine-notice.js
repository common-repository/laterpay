!function(a){a(function(){var e=jQuery("#wpengn_done_btn"),n=jQuery("#lp_wpengine_notice");e.on("click",function(){var e;n.removeClass("notice-error").addClass("notice-info"),a("<img />").attr("id","wpengine-loader").attr("src","/wp-admin/images/loading.gif").appendTo(n),n.append("  "+lp_i18n.SaveWpNoticeData),e={action:"laterpay_save_wpengine_status",security:wpengine_cookie_done_nonce,status:"true"},a.post(ajaxurl,e,function(e){"string"===a.type(e)&&(e=JSON.parse(e)),!0===e.status?(n.removeClass("notice-info").addClass("notice-success"),n.html("").append(lp_i18n.SavedWpNoticeData)):(n.removeClass("notice-info").addClass("notice-error"),n.html("").append(lp_i18n.UnSavedWpNoticeData)),n.delay(1e3).fadeOut()})})})}(jQuery);